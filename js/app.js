/* ==========================================================================
   app.js — motor de prerrequisitos, planificador y UI
   ========================================================================== */
'use strict';

const CARRERA_APP = typeof CARRERA === 'object' ? CARRERA : {};
const CLAVE_LS = CARRERA_APP.claveLS || 'mallaQuimicaUNAL.v1';
const NOMBRE_CARRERA = CARRERA_APP.nombre || 'Química';
const ROMANOS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

/* ------------------------------------------------------------------ estado */
const porDefecto = () => ({
  estado: {},        // id -> 'aprobada' | 'cursando'
  ranuras: {},       // id -> { cod, nombre, cr }
  config: { maxCr: 18, verBloqueadas: true, tema: 'auto', edicion: false },
  mods: {            // modificaciones de la malla hechas por quien usa la app
    editados: {},    // id -> campos sobrescritos
    nuevos: [],      // asignaturas añadidas
    eliminados: [],  // ids retirados del plan
    orden: null,     // orden explícito de ids (null = orden original)
  },
  horario: {         // pestaña Horario (oferta del SIA)
    extras: [],      // códigos añadidos a mano, además de lo marcado como "cursando"
    grupos: {},      // "código|actividad" -> código del grupo elegido
  },
});

let S = cargar();

function cargar() {
  try {
    const raw = localStorage.getItem(CLAVE_LS);
    if (!raw) return porDefecto();
    const g = JSON.parse(raw), d = porDefecto();
    return Object.assign(d, g, { config: Object.assign(d.config, g.config), mods: Object.assign(d.mods, g.mods),
      horario: Object.assign(d.horario, g.horario) });
  } catch { return porDefecto(); }
}
function guardar() {
  try { localStorage.setItem(CLAVE_LS, JSON.stringify(S)); } catch {}
}

/* ------------------------------------------------------- plan editable ---- */
/* PLAN es PLAN_BASE con las modificaciones aplicadas encima. Se reconstruye
   cada vez que se edita algo; los datos originales nunca se tocan.           */
let PLAN = [], PLAN_POR_ID = {};

function construirPlan() {
  const m = S.mods;
  const fuera = new Set(m.eliminados || []);
  const arr = [...PLAN_BASE, ...(m.nuevos || [])]
    .filter(a => !fuera.has(a.id))
    .map(a => {
      const e = (m.editados || {})[a.id];
      const c = e ? Object.assign({}, a, e) : Object.assign({}, a);
      // Copias propias de los arreglos, y sin referencias a asignaturas borradas.
      c.pre = (c.pre || []).filter(p => !fuera.has(p));
      c.co = (c.co || []).filter(p => !fuera.has(p));
      c.preSug = (c.preSug || []).filter(p => !fuera.has(p));
      return c;
    });

  // Orden explícito (arrastrar y soltar); las nuevas van al final de su semestre.
  if (m.orden && m.orden.length) {
    const pos = new Map(m.orden.map((id, i) => [id, i]));
    arr.sort((x, y) => (pos.has(x.id) ? pos.get(x.id) : 1e6) - (pos.has(y.id) ? pos.get(y.id) : 1e6));
  }

  PLAN = arr;
  PLAN_POR_ID = Object.fromEntries(arr.map(a => [a.id, a]));
  for (const k in _profCache) delete _profCache[k];   // el grafo cambió
  return PLAN;
}

/** Guarda el orden actual como lista explícita de ids (base para arrastrar). */
function ordenActual() { return PLAN.map(a => a.id); }

const mallaModificada = () =>
  Object.keys(S.mods.editados || {}).length > 0 ||
  (S.mods.nuevos || []).length > 0 ||
  (S.mods.eliminados || []).length > 0 ||
  !!(S.mods.orden && S.mods.orden.length);

const est = id => S.estado[id] || 'pendiente';
const aprobada = id => est(id) === 'aprobada';
const creditos = a => (S.ranuras[a.id] && S.ranuras[a.id].cr) || a.cr;

/* ------------------------------------------- disponibilidad / prerrequisitos */

/** Conjunto de ids aprobados. */
function setAprobadas() {
  return new Set(PLAN.filter(a => aprobada(a.id)).map(a => a.id));
}

/**
 * ¿Se cumple el prerrequisito especial de una asignatura?
 * Solo Trabajo de Grado lo tiene de forma evaluable.
 */
function cumplePreEspecial(a, hechas) {
  if (a.comp !== 'TG') return true;
  return PLAN.every(x =>
    x.comp === 'TG' ||
    !['FO', 'FP', 'DO'].includes(x.comp) ||
    hechas.has(x.id));
}

/**
 * Evalúa una asignatura frente a un conjunto de asignaturas ya cursadas
 * y (opcionalmente) un conjunto que se cursaría en el mismo semestre.
 * Devuelve { ok, preFaltantes, coFaltantes, esp }
 */
function evaluar(a, hechas, mismoSem = new Set()) {
  const preFaltantes = (a.pre || []).filter(p => !hechas.has(p));
  const coFaltantes = (a.co || []).filter(c => !hechas.has(c) && !mismoSem.has(c));
  const esp = cumplePreEspecial(a, hechas);
  return { ok: preFaltantes.length === 0 && coFaltantes.length === 0 && esp, preFaltantes, coFaltantes, esp };
}

/**
 * Estado visual de cada asignatura del plan, dado lo aprobado hoy.
 * Un correquisito se considera satisfecho si está aprobado o si puede
 * inscribirse en el mismo semestre (es decir, si él mismo está disponible).
 */
function calcularDisponibilidad() {
  const hechas = setAprobadas();
  const res = {};

  // Primera pasada: prerrequisitos duros.
  const prePasa = {};
  for (const a of PLAN) {
    prePasa[a.id] = (a.pre || []).every(p => hechas.has(p)) && cumplePreEspecial(a, hechas);
  }
  // Segunda pasada: correquisitos — satisfechos si están aprobados o si ellos
  // mismos pasan sus prerrequisitos (podrían inscribirse simultáneamente).
  for (const a of PLAN) {
    const coOk = (a.co || []).every(c => hechas.has(c) || prePasa[c]);
    const e = est(a.id);
    if (e === 'aprobada') res[a.id] = 'aprobada';
    else if (e === 'cursando') res[a.id] = 'cursando';
    else res[a.id] = (prePasa[a.id] && coOk) ? 'disponible' : 'bloqueada';
  }
  return res;
}

/** Asignaturas que quedan desbloqueadas al aprobar `id`. */
function desbloquea(id) {
  return PLAN.filter(a => (a.pre || []).includes(id) || (a.co || []).includes(id));
}

/** Profundidad crítica: longitud del camino más largo que arranca en esta asignatura. */
const _profCache = {};
function profundidad(id, visitando = new Set()) {
  if (_profCache[id] !== undefined) return _profCache[id];
  if (visitando.has(id)) return 0;
  visitando.add(id);
  let max = 0;
  for (const s of desbloquea(id)) {
    if (s.id === id) continue;
    max = Math.max(max, 1 + profundidad(s.id, visitando));
  }
  visitando.delete(id);
  _profCache[id] = max;
  return max;
}

/* ------------------------------------------------------------- planificador */

/**
 * Cierre de correquisitos: devuelve el conjunto mínimo de asignaturas que hay
 * que inscribir junto con `a` (o null si es imposible en este semestre).
 */
function cierreCoreq(a, hechas, enSem, disponiblesIds) {
  const grupo = new Map([[a.id, a]]);
  const cola = [a];
  while (cola.length) {
    const c = cola.pop();
    for (const coId of (c.co || [])) {
      if (hechas.has(coId) || enSem.has(coId) || grupo.has(coId)) continue;
      if (!disponiblesIds.has(coId)) return null;          // el correquisito no se puede tomar aún
      const co = PLAN_POR_ID[coId];
      grupo.set(coId, co);
      cola.push(co);
    }
  }
  // Todos los miembros deben tener sus prerrequisitos duros cumplidos.
  for (const m of grupo.values()) {
    if (!(m.pre || []).every(p => hechas.has(p))) return null;
    if (!cumplePreEspecial(m, hechas)) return null;
  }
  return [...grupo.values()];
}

/**
 * Nivel alcanzado: el mayor L tal que todas las asignaturas con código propio
 * (no ranuras) de los semestres 1..L ya están cursadas. Sirve para no
 * programar una optativa disciplinar de 8º semestre en el primer semestre solo
 * porque no tiene prerrequisitos formales.
 */
function nivelAlcanzado(hechas) {
  let L = 0;
  for (let s = 1; s <= 10; s++) {
    if (PLAN.filter(a => a.sem === s && !a.ranura).every(a => hechas.has(a.id))) L = s;
    else break;
  }
  return L;
}

/**
 * Genera el plan de los semestres restantes.
 * @param {number} maxCr  tope de créditos por semestre
 * @param {'critico'|'malla'} modo  criterio de prioridad
 * @param {boolean} respetarNivel  no adelantar optativas por encima de su nivel
 * @returns {{semestres: Array<{asigs:Array, cr:number}>, bloqueadas: Array}}
 */
function planificar(maxCr, modo, respetarNivel = true) {
  const hechas = setAprobadas();
  // Lo que está "cursando" se trata como el semestre 0 (en curso) y se da por hecho.
  const cursando = PLAN.filter(a => est(a.id) === 'cursando');
  cursando.forEach(a => hechas.add(a.id));

  let restantes = PLAN.filter(a => !hechas.has(a.id));
  const semestres = [];
  let guardaTope = 0;

  while (restantes.length && guardaTope++ < 25) {
    // Prerrequisitos duros cumplidos hoy → candidatos elegibles
    const dispIds = new Set(
      restantes.filter(a => (a.pre || []).every(p => hechas.has(p)) && cumplePreEspecial(a, hechas))
               .map(a => a.id));

    const orden = [...restantes].sort((x, y) => {
      if (modo === 'malla' && x.sem !== y.sem) return x.sem - y.sem;
      const d = profundidad(y.id) - profundidad(x.id);
      if (d) return d;
      if (x.sem !== y.sem) return x.sem - y.sem;
      return creditos(y) - creditos(x);
    });

    const enSem = new Set();
    const asigs = [];
    let cr = 0;
    const nivel = nivelAlcanzado(hechas);

    for (const a of orden) {
      if (enSem.has(a.id) || !dispIds.has(a.id)) continue;
      // Las optativas de fundamentación y disciplinares no se adelantan por
      // encima del nivel realmente alcanzado (las electivas de libre elección sí).
      if (respetarNivel && a.ranura && (a.comp === 'DP' || a.comp === 'FP') && a.sem > nivel + 1) continue;
      const grupo = cierreCoreq(a, hechas, enSem, dispIds);
      if (!grupo) continue;
      const crGrupo = grupo.reduce((s, g) => s + creditos(g), 0);
      if (cr + crGrupo > maxCr) continue;
      grupo.forEach(g => { enSem.add(g.id); asigs.push(g); });
      cr += crGrupo;
    }

    if (!asigs.length) break;   // bloqueo: nada más se puede inscribir
    semestres.push({ asigs, cr });
    asigs.forEach(a => hechas.add(a.id));
    restantes = restantes.filter(a => !hechas.has(a.id));
  }

  return { semestres, bloqueadas: restantes, cursando };
}

/* ------------------------------------------------------------------ métricas */
function metricas() {
  const r = { total: { hecho: 0, cursando: 0, meta: TOTAL_CREDITOS }, comp: {} };
  for (const k of Object.keys(COMPONENTES)) r.comp[k] = { hecho: 0, cursando: 0, meta: COMPONENTES[k].creditos, plan: 0 };
  for (const a of PLAN) {
    const c = creditos(a), e = est(a.id);
    // Los componentes con noCuenta (nivelación) no suman al total del plan.
    const cuenta = !(COMPONENTES[a.comp] && COMPONENTES[a.comp].noCuenta);
    r.comp[a.comp].plan += c;
    if (e === 'aprobada') { r.comp[a.comp].hecho += c; if (cuenta) r.total.hecho += c; }
    else if (e === 'cursando') { r.comp[a.comp].cursando += c; if (cuenta) r.total.cursando += c; }
  }
  r.total.plan = PLAN.filter(a => !(COMPONENTES[a.comp] && COMPONENTES[a.comp].noCuenta)).reduce((s, a) => s + creditos(a), 0);
  return r;
}

/* ========================================================================== */
/*  UI                                                                        */
/* ========================================================================== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

let filtroTexto = '';
let soloDisponibles = false;
let resaltado = null;   // id cuya cadena de dependencias se resalta

/* ------------------------------------------------------------------- malla */
function pintarMalla() {
  const disp = calcularDisponibilidad();
  const cont = $('#malla');
  const rel = resaltado ? cadenaRelacionada(resaltado) : null;
  let html = '';

  const ed = S.config.edicion;
  const nSem = Math.max(10, ...PLAN.map(a => a.sem));

  for (let s = 1; s <= nSem; s++) {
    const asigs = PLAN.filter(a => a.sem === s);
    const crSem = asigs.reduce((t, a) => t + creditos(a), 0);
    const crHechos = asigs.filter(a => aprobada(a.id)).reduce((t, a) => t + creditos(a), 0);
    html += `<section class="col-sem${ed ? ' editable' : ''}" data-sem="${s}">
      <h2>Semestre ${ROMANOS[s] || s}<span class="cr">${crHechos}/${crSem} cr</span></h2>`;
    for (const a of asigs) {
      const e = disp[a.id];
      if (soloDisponibles && e !== 'disponible') continue;
      if (filtroTexto && !coincide(a, filtroTexto)) continue;
      html += tarjeta(a, e, rel, ed);
    }
    if (ed) html += `<button class="soltar" data-nueva="${s}">+ asignatura</button>`;
    html += `</section>`;
  }
  // Columna extra para mover algo a un semestre nuevo.
  if (ed) html += `<section class="col-sem editable nueva-col" data-sem="${nSem + 1}">
      <h2>Semestre ${ROMANOS[nSem + 1] || nSem + 1}<span class="cr">nuevo</span></h2>
      <button class="soltar" data-nueva="${nSem + 1}">+ asignatura</button></section>`;
  cont.innerHTML = html;
  if (ed) activarArrastre();
}

function coincide(a, q) {
  q = q.toLowerCase();
  const asig = S.ranuras[a.id];
  return (a.nombre + ' ' + (a.cod || '') + ' ' + (asig ? asig.nombre + ' ' + asig.cod : '')).toLowerCase().includes(q);
}

function cadenaRelacionada(id) {
  const set = new Set([id]);
  // hacia atrás
  const atras = [id];
  while (atras.length) {
    const c = PLAN_POR_ID[atras.pop()];
    if (!c) continue;
    for (const p of [...(c.pre || []), ...(c.co || [])]) if (!set.has(p)) { set.add(p); atras.push(p); }
  }
  // hacia adelante
  const adel = [id];
  while (adel.length) {
    const cur = adel.pop();
    for (const s of desbloquea(cur)) if (!set.has(s.id)) { set.add(s.id); adel.push(s.id); }
  }
  return set;
}

function tarjeta(a, e, rel, ed) {
  const etq = { aprobada: 'Aprobada', cursando: 'Cursando', disponible: 'Disponible', bloqueada: '' }[e];
  const asig = S.ranuras[a.id];
  const clases = ['card', e];
  if (rel) clases.push(rel.has(a.id) ? 'resaltada' : 'atenuada');
  if (ed) clases.push('arrastrable');
  if (a.sem !== semOriginal(a.id)) clases.push('movida');
  const cnt = desbloquea(a.id).length;
  return `<article class="${clases.join(' ')}" data-id="${esc(a.id)}" tabindex="0" role="button"
      ${ed ? 'draggable="true"' : ''}>
    ${ed ? '<span class="asa" aria-hidden="true">⠿</span>' : ''}
    ${ed ? `<span class="mover">
      <button type="button" data-mover="${esc(a.id)}:-1" aria-label="Mover al semestre anterior"
        title="Mover al semestre anterior" ${a.sem <= 1 ? 'disabled' : ''}>‹</button>
      <button type="button" data-mover="${esc(a.id)}:1" aria-label="Mover al semestre siguiente"
        title="Mover al semestre siguiente">›</button></span>` : ''}
    ${etq ? `<span class="etq">${etq}</span>` : ''}
    <div class="nom">${esc(a.nombre)}</div>
    <div class="meta">
      <span>${creditos(a)} cr</span>
      ${a.cod ? `<span>${esc(a.cod)}</span>` : '<span>optativa</span>'}
      ${cnt ? `<span title="Asignaturas que dependen de ésta">↳ ${cnt}</span>` : ''}
      ${a.nota ? '<span title="Hay una nota / inconsistencia documentada">⚠</span>' : ''}
    </div>
    ${asig ? `<div class="asignada">→ <b>${esc(asig.nombre)}</b> ${asig.cod ? '· ' + esc(asig.cod) : ''}</div>`
           : (a.ranura ? `<div class="asignada">Sin asignar</div>` : '')}
  </article>`;
}

/* ------------------------------------------------------- Los Estudiantes -- */
/* losestudiantes.com no envía cabeceras CORS, así que la app no puede pedirle
   datos desde el navegador. Lo que sí se puede es enlazar a la página de cada
   materia, donde están sus profesores y las reseñas. El índice código → URL lo
   genera herramientas/verificar-losestudiantes.js.                            */
const LE = typeof LOSESTUDIANTES === 'object' ? LOSESTUDIANTES : {};

function enlaceLE(cod, texto) {
  const e = cod && LE[cod];
  if (!e) return '';
  return `<a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer" class="le-link">
    ${esc(texto || 'Ver profesores y reseñas')} <span aria-hidden="true">↗</span></a>`;
}

/* ------------------------------------------------------------------- SIA -- */
/* Ficha oficial del catálogo público de asignaturas. Se genera con
   herramientas/sia.js y aporta lo que los PDF no traen: créditos reales de las
   optativas, descripción y temario.                                          */
const FICHAS = typeof SIA === 'object' ? SIA : {};
const fichaSIA = (cod, nombre) => FICHAS[cod + '|' + nombre] || null;

/** Ficha del SIA correspondiente a una asignatura del plan (o a su optativa). */
function fichaDe(a) {
  const asig = S.ranuras[a.id];
  if (asig && asig.cod) return fichaSIA(asig.cod, asig.nombre);
  return a.cod ? fichaSIA(a.cod, a.nombre) : null;
}

/* Oferta del semestre (grupos, horarios, cupos), del Catálogo de asignaturas
   del SIA. Se genera con herramientas/catalogo-sia.js.                      */
const OFERTA_MAP = typeof OFERTA === 'object' ? OFERTA : {};
const OFERTA_SEM = typeof OFERTA_PERIODO === 'string' ? OFERTA_PERIODO : '';
const codBase = c => String(c || '').split('-')[0].trim();
const ofertaDe = cod => OFERTA_MAP[codBase(cod)] || null;
/** Código con el que una asignatura del plan aparece en el SIA (el suyo o el de su optativa). */
const codDe = a => a.cod || (S.ranuras[a.id] && S.ranuras[a.id].cod) || '';
const gruposDe = o => o.actividades.reduce((n, x) => n + x.grupos.length, 0);
const horaTexto = s => `${s.diaTexto.slice(0, 1) + s.diaTexto.slice(1, 3).toLowerCase()} ${s.inicio}–${s.fin}`;

/** Bloque «Oferta del semestre» de la ficha de una asignatura. */
function panelOferta(cod) {
  const o = ofertaDe(cod);
  if (!o) return '';
  const n = gruposDe(o);
  const cuerpo = !n
    ? `<div style="font-size:12.5px;color:var(--texto-2)">Sin grupos programados${o.sinProgramar ? ' (el SIA la marca como «asignatura sin programar»)' : ''}.</div>`
    : o.actividades.map(act => `
        ${o.actividades.length > 1 ? `<div style="font-size:12px;color:var(--texto-2);margin:6px 0 2px">${esc(act.nombre)}</div>` : ''}
        ${act.grupos.map(g => `<div class="g"><b>${esc(g.grupo)}</b>${g.profesores.length ? ` — ${esc(g.profesores.join(', '))}` : ''}
          <span class="meta"> · ${g.cupos} cupo${g.cupos === 1 ? '' : 's'}${g.jornada && g.jornada !== 'DIURNO' ? ' · ' + esc(g.jornada.toLowerCase()) : ''}</span>
          <div class="meta">${g.sesiones.length ? g.sesiones.map(x => esc(horaTexto(x)) + (x.salon ? ' · ' + esc(x.salon) : '')).join(' · ') : 'Horario no informado'}</div></div>`).join('')}`).join('');
  return `<div class="campo"><label>Oferta ${esc(OFERTA_SEM)} en el SIA${n ? ` · ${n} grupo${n === 1 ? '' : 's'}` : ''}</label>
    <div class="ficha-oferta">${cuerpo}</div>
    <div style="font-size:11.5px;color:var(--texto-2);margin-top:4px">Consultado el ${esc(typeof OFERTA_CONSULTADO === 'string' ? OFERTA_CONSULTADO : '')}. <a href="#" data-ir="vHorario">Armar horario →</a></div>
  </div>`;
}

const LE_URL_PROF = typeof LE_BASE_PROFESOR === 'string'
  ? LE_BASE_PROFESOR : 'https://losestudiantes.com/universidad-nacional/professors/';

/** Color de la nota: verde si va bien, ámbar regular, rojo si va mal. */
function tonoNota(n) {
  if (n == null) return 'var(--texto-2)';
  return n >= 4 ? 'var(--ok)' : n >= 3 ? 'var(--curso)' : '#c0392b';
}

/**
 * Panel de profesores de una materia. Los datos se cachean con
 * herramientas/sincronizar-profesores.js; aquí solo se pintan.
 */
function panelProfesores(cod) {
  const e = cod && LE[cod];
  if (!e) return '';
  const profes = e.profesores || [];
  if (!profes.length) {
    return `<div class="campo"><label>Profesores</label>
      <div style="font-size:12.5px;color:var(--texto-2);margin-bottom:8px">
        Todavía no hay profesores registrados para esta materia.</div>
      ${enlaceLE(cod, 'Abrir en Los Estudiantes')}</div>`;
  }
  const conNota = profes.filter(p => p.resenas > 0);
  const sinNota = profes.length - conNota.length;

  const conResena = conNota.filter(p => p.resena && p.resena.texto).length;

  /* Cada profesor es una fila; si tiene reseña pública, la fila se despliega. */
  const fila = p => {
    const r = p.resena;
    const perfil = esc(LE_URL_PROF + encodeURIComponent(p.slug));
    const cabeza = `<td class="num" style="color:${tonoNota(p.calificacion)};font-weight:700">${p.calificacion != null ? p.calificacion.toFixed(1) : '—'}</td>
      <td class="num" style="color:${tonoNota(p.notaPromedio)}">${p.notaPromedio != null ? p.notaPromedio.toFixed(1) : '—'}</td>
      <td class="num">${p.resenas}</td>`;
    if (!r || !r.texto) {
      return `<tr><td><a href="${perfil}" target="_blank" rel="noopener noreferrer">${esc(p.nombre)}</a></td>${cabeza}</tr>`;
    }
    const ocultas = p.resenasOcultas || 0;
    return `<tr class="con-resena"><td colspan="4" style="padding:0">
      <details class="resena">
        <summary>
          <table class="profes" style="margin:0"><tbody><tr>
            <td>${esc(p.nombre)}</td>${cabeza}
          </tr></tbody></table>
        </summary>
        <blockquote>
          <p>${esc(r.texto)}</p>
          ${r.pros ? `<p class="pros"><b>A favor:</b> ${esc(r.pros)}</p>` : ''}
          ${r.contras ? `<p class="contras"><b>En contra:</b> ${esc(r.contras)}</p>` : ''}
          <p class="meta-resena">
            ${r.periodo ? esc(r.periodo) : 'sin periodo'}
            ${r.calificacion != null ? ` · le puso ${r.calificacion}` : ''}
            ${r.dificultad != null ? ` · dificultad ${r.dificultad}/5` : ''}
            ${ocultas ? ` · <a href="${perfil}" target="_blank" rel="noopener noreferrer">${ocultas} reseña(s) más, con sesión iniciada ↗</a>`
                      : ` · <a href="${perfil}" target="_blank" rel="noopener noreferrer">ver ficha ↗</a>`}
          </p>
        </blockquote>
      </details></td></tr>`;
  };

  return `<div class="campo"><label>Profesores <span style="font-weight:500;text-transform:none;letter-spacing:0">· ${profes.length} en Los Estudiantes</span></label>
    <table class="profes">
      <thead><tr><th>Profesor</th><th title="Calificación promedio que le dan quienes reseñan, sobre 5">Calif.</th><th title="Nota promedio que reportan quienes reseñan, sobre 5">Nota</th><th>Reseñas</th></tr></thead>
      <tbody>${conNota.map(fila).join('')}</tbody>
    </table>
    ${conResena ? `<div style="font-size:12px;color:var(--texto-2);margin-top:6px">
      Toca un profesor con ▸ para leer su reseña.</div>` : ''}
    ${sinNota ? `<div style="font-size:12px;color:var(--texto-2);margin-top:6px">
      Y ${sinNota} más sin reseñas todavía.</div>` : ''}
    <div style="margin-top:8px">${enlaceLE(cod, 'Ver la materia en Los Estudiantes ↗')}</div>
    <div style="font-size:11.5px;color:var(--texto-2);margin-top:6px">
      Datos de losestudiantes.com${typeof LE_PROFESORES_ACTUALIZADO === 'string' ? `, ${LE_PROFESORES_ACTUALIZADO}` : ''}.
      Solo se muestra la reseña pública; el resto pide sesión iniciada allá.</div>
  </div>`;
}

/** Semestre que la asignatura tiene en la malla original (para marcar movidas). */
function semOriginal(id) {
  const b = PLAN_BASE.find(a => a.id === id);
  return b ? b.sem : null;
}

/* ------------------------------------------------------- arrastrar y soltar */
let arrastrando = null;

function activarArrastre() {
  $$('#malla .card.arrastrable').forEach(c => {
    c.addEventListener('dragstart', e => {
      arrastrando = c.dataset.id;
      c.classList.add('fantasma');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', c.dataset.id);
    });
    c.addEventListener('dragend', () => {
      arrastrando = null;
      $$('.card.fantasma').forEach(x => x.classList.remove('fantasma'));
      $$('.col-sem.sobre').forEach(x => x.classList.remove('sobre'));
      $$('.card.marca').forEach(x => x.classList.remove('marca'));
    });
  });

  $$('#malla .col-sem').forEach(col => {
    col.addEventListener('dragover', e => {
      if (!arrastrando) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      col.classList.add('sobre');
      $$('.card.marca').forEach(x => x.classList.remove('marca'));
      const destino = tarjetaBajoCursor(col, e.clientY);
      if (destino) destino.classList.add('marca');
    });
    col.addEventListener('dragleave', e => {
      if (!col.contains(e.relatedTarget)) col.classList.remove('sobre');
    });
    col.addEventListener('drop', e => {
      e.preventDefault();
      if (!arrastrando) return;
      const destino = tarjetaBajoCursor(col, e.clientY);
      moverAsignatura(arrastrando, +col.dataset.sem, destino ? destino.dataset.id : null);
    });
  });
}

/** Primera tarjeta de la columna cuyo centro queda por debajo del cursor. */
function tarjetaBajoCursor(col, y) {
  return [...col.querySelectorAll('.card:not(.fantasma)')]
    .find(c => { const r = c.getBoundingClientRect(); return y < r.top + r.height / 2; }) || null;
}

/**
 * Mueve una asignatura a otro semestre y/o a otra posición.
 * @param {string} id        asignatura arrastrada
 * @param {number} sem       semestre destino
 * @param {string|null} antesDe  id de la tarjeta ante la cual insertarla
 */
function moverAsignatura(id, sem, antesDe) {
  if (id === antesDe) return;
  const a = PLAN_POR_ID[id];
  if (!a) return;

  if (a.sem !== sem) editarAsignatura(id, { sem }, false);

  const orden = (S.mods.orden && S.mods.orden.length ? [...S.mods.orden] : ordenActual())
    .filter(x => x !== id);
  const i = antesDe ? orden.indexOf(antesDe) : -1;
  if (i >= 0) orden.splice(i, 0, id); else orden.push(id);
  S.mods.orden = orden;

  guardar(); construirPlan(); refrescar();
  avisar(`«${a.nombre}» movida al semestre ${ROMANOS[sem] || sem}.`);
}

/** Aplica cambios de campos a una asignatura (los guarda como modificación). */
function editarAsignatura(id, campos, redibujar = true) {
  S.mods.editados[id] = Object.assign({}, S.mods.editados[id], campos);
  // Si el cambio deja la asignatura igual a la original, se descarta la modificación.
  const base = PLAN_BASE.find(a => a.id === id);
  if (base) {
    const e = S.mods.editados[id];
    const igual = Object.keys(e).every(k => JSON.stringify(e[k]) === JSON.stringify(base[k]));
    if (igual) delete S.mods.editados[id];
  }
  if (redibujar) { guardar(); construirPlan(); refrescar(); }
}

/** Mensaje breve en la esquina inferior. */
let tempAviso;
function avisar(txt) {
  let n = $('#toast');
  if (!n) { n = document.createElement('div'); n.id = 'toast'; document.body.appendChild(n); }
  n.textContent = txt;
  n.classList.add('visible');
  clearTimeout(tempAviso);
  tempAviso = setTimeout(() => n.classList.remove('visible'), 2600);
}

/* ----------------------------------------------------------------- detalle */
function abrirDetalle(id) {
  const a = PLAN_POR_ID[id];
  if (!a) return;
  const hechas = setAprobadas();
  const ev = evaluar(a, hechas);
  const disp = calcularDisponibilidad()[id];
  const asig = S.ranuras[id] || {};

  const nom = x => PLAN_POR_ID[x] ? PLAN_POR_ID[x].nombre : x;
  const req = (lista, tipo) => lista.map(p =>
    `<div class="r ${hechas.has(p) ? 'si' : 'no'}"><span class="ic">${hechas.has(p) ? '✔' : '✖'}</span>
     <span>${esc(nom(p))} <small>(${esc(p)}${tipo ? ' · ' + tipo : ''})</small></span></div>`).join('');

  const sig = desbloquea(id);

  let opciones = '';
  if (a.ranura) {
    const grupos = a.ranura.includes('disciplinar') ? GRUPOS_DISCIPLINARES
                 : a.ranura.includes('libre') ? null : a.ranura;
    if (grupos) {
      const items = CATALOGO.filter(c => grupos.includes(c.grupo));
      const elegida = items.find(c => c.cod === asig.cod && c.nombre === asig.nombre);
      opciones = `<div class="campo"><label>Asignar optativa del catálogo</label>
        <select id="selRanura">
          <option value="">— sin asignar —</option>
          ${(() => {
            const op = c => `<option value="${esc(c.cod)}|${esc(c.nombre)}" ${asig.cod === c.cod && asig.nombre === c.nombre ? 'selected' : ''}>${esc(c.nombre)} (${esc(c.cod)})${c.codErrado ? ' ⚠' : ''}</option>`;
            // Si el cupo admite varios grupos del catálogo, se agrupan para no perderse en la lista.
            const gruposPresentes = grupos.filter(g => items.some(c => c.grupo === g));
            return gruposPresentes.length > 1
              ? gruposPresentes.map(g => `<optgroup label="${esc(GRUPOS_CATALOGO[g] || g)}">${items.filter(c => c.grupo === g).map(op).join('')}</optgroup>`).join('')
              : items.map(op).join('');
          })()}
        </select>
        ${elegida && elegida.codErrado ? `<div class="nota-box" style="margin-top:8px"><b>⚠ El código de esta optativa está mal en el PDF</b>
          ${esc(elegida.nota || `El código ${elegida.cod} pertenece a otra asignatura.`)}</div>` : ''}
        ${elegida && elegida.confirmado ? `<div style="font-size:12px;color:var(--ok);margin-top:6px">✓ Código verificado contra losestudiantes.com.</div>` : ''}</div>`;
    } else {
      /* Un cupo de libre elección lo puede llenar casi cualquier asignatura:
         las del Departamento de Electivas, pero también optativas que curses de
         más, o cualquier otra cosa que escribas a mano. */
      const grupo = (titulo, lista) => lista.length
        ? `<optgroup label="${esc(titulo)}">${lista.map(x =>
            `<option value="${esc(x.cod)}|${esc(x.nombre)}" ${asig.cod === x.cod && asig.nombre === x.nombre ? 'selected' : ''}>${esc(x.nombre)}${x.cr != null ? ` — ${x.cr} cr` : ''}</option>`).join('')}</optgroup>`
        : '';
      const ele = LISTA_ELECTIVAS.filter(e => e.vigente !== false)
        .map(e => ({ cod: e.cod, nombre: e.nombre, cr: e.creditos }));
      const opt = CATALOGO.filter(c => !c.codErrado).map(c => {
        const f = fichaSIA(c.cod, c.nombre);
        return { cod: c.cod, nombre: c.nombre, cr: f ? f.creditos : null, grupo: c.grupo };
      });
      opciones = `<div class="campo"><label>Electiva de libre elección</label>
        <select id="selRanura">
          <option value="">— sin asignar —</option>
          ${grupo('Departamento de Electivas', ele)}
          ${grupo('Optativas de fundamentación', opt.filter(o => o.grupo === 'fundamentacion'))}
          ${grupo('Optativas disciplinares', opt.filter(o => o.grupo !== 'fundamentacion'))}
        </select>
        <div style="font-size:12px;color:var(--texto-2);margin-top:6px">
          Los créditos de libre elección también se pueden llenar con optativas que curses de más,
          o con cualquier otra asignatura de la Universidad.
        </div>
      </div>
      <div class="campo"><label>…o escríbela a mano</label>
        <input type="text" id="txtRanuraNom" placeholder="Nombre de la asignatura" value="${esc(asig.nombre || '')}">
        <input type="text" id="txtRanuraCod" placeholder="Código (opcional)" value="${esc(asig.cod || '')}" style="margin-top:6px">
      </div>`;
    }
    opciones += `<div class="campo"><label>Créditos</label>
      <input type="number" id="numCr" min="1" max="12" value="${creditos(a)}"></div>`;
  }

  $('#detalle').innerHTML = `
    <div class="cab">
      <button type="button" class="cerrar-x" data-cerrar aria-label="Cerrar">✕</button>
      <h2>${esc(a.nombre)}</h2>
      <div class="sub">${a.cod ? esc(a.cod) + ' · ' : ''}${creditos(a)} créditos · Semestre ${ROMANOS[a.sem]} ·
        ${esc(COMPONENTES[a.comp].nombre)}${a.area ? ' · ' + esc(AREAS[a.area]) : ''}
        ${a.semPDF ? `<div style="margin-top:3px">Reubicada: la malla impresa la pone en el semestre ${ROMANOS[a.semPDF]}.</div>` : ''}</div>
    </div>
    <div class="cuerpo">
      <div class="campo"><label>Estado</label>
        <div class="segmentado" id="segEstado">
          <button data-v="pendiente" aria-pressed="${est(id) === 'pendiente'}">Pendiente</button>
          <button data-v="cursando"  aria-pressed="${est(id) === 'cursando'}">Cursando</button>
          <button data-v="aprobada"  aria-pressed="${est(id) === 'aprobada'}">Aprobada</button>
        </div>
      </div>
      ${opciones}
      ${(a.pre || []).length || (a.co || []).length || a.preEsp ? `
        <div class="campo"><label>Requisitos</label><div class="req-lista">
          ${req(a.pre || [], 'prerrequisito')}
          ${(a.co || []).map(c => `<div class="r ${hechas.has(c) ? 'si' : ''}"><span class="ic">${hechas.has(c) ? '✔' : '⇄'}</span>
             <span>${esc(nom(c))} <small>(${esc(c)} · correquisito — puede cursarse simultáneamente)</small></span></div>`).join('')}
          ${a.preEsp ? `<div class="r ${ev.esp ? 'si' : 'no'}"><span class="ic">${ev.esp ? '✔' : '✖'}</span><span>${esc(a.preEsp)}</span></div>` : ''}
        </div></div>` : '<div class="campo"><label>Requisitos</label><div class="req-lista"><div class="r">Ninguno.</div></div></div>'}
      ${(a.preSug || []).length ? `<div class="campo"><label>Prerrequisito sugerido (malla de apoyo)</label>
        <div class="req-lista">${(a.preSug).map(p => `<div class="r"><span class="ic">↦</span><span>${esc(nom(p))} <small>(${esc(p)})</small></span></div>`).join('')}</div></div>` : ''}
      ${sig.length ? `<div class="campo"><label>Habilita (${sig.length})</label>
        <div class="req-lista">${sig.map(x => `<div class="r"><span class="ic">→</span><span>${esc(x.nombre)}</span></div>`).join('')}</div></div>` : ''}
      ${(() => {
        const cod = a.cod || (S.ranuras[id] && S.ranuras[id].cod);
        if (!cod) return '';
        if (!LE[cod]) return `<div class="campo"><label>Profesores</label>
          <div style="font-size:12.5px;color:var(--texto-2)">Esta asignatura no está registrada en losestudiantes.com con el código ${esc(cod)}.</div></div>`;
        return panelProfesores(cod);
      })()}
      ${(() => {
        const f = fichaDe(a);
        if (!f) return '';
        const cr = f.creditos != null && f.creditos !== creditos(a)
          ? `<div style="font-size:12px;color:var(--curso);margin-bottom:6px">
               El SIA registra ${f.creditos} créditos; la malla reserva ${creditos(a)} para este cupo.</div>` : '';
        return `<div class="campo"><label>Ficha oficial del SIA</label>
          <div style="font-size:12px;color:var(--texto-2);margin-bottom:6px">
            ${esc(f.unidad || '')}${f.creditos != null ? ` · ${f.creditos} créditos` : ''}${f.horas != null ? ` · ${f.horas} h presenciales` : ''}${f.validable ? ' · validable' : ''}${f.libreEleccion ? ' · cuenta como libre elección' : ''}
          </div>
          ${cr}
          ${f.descripcion ? `<details class="ficha"><summary>Descripción</summary><p>${esc(f.descripcion)}</p></details>` : ''}
          ${f.contenido ? `<details class="ficha"><summary>Contenido del curso</summary><p>${esc(f.contenido)}</p></details>` : ''}
        </div>`;
      })()}
      ${panelOferta(codDe(a))}
      ${a.nota ? `<div class="nota-box"><b>⚠ Nota sobre este dato</b>${esc(a.nota)}</div>` : ''}
      ${disp === 'bloqueada' ? `<div class="aviso malo">No puedes inscribirla todavía: faltan ${ev.preFaltantes.map(nom).map(esc).join(', ') || 'requisitos'}.</div>` : ''}
    </div>
    <div class="pie">
      <button class="btn" id="btnEditar">Editar asignatura</button>
      <button class="btn" id="btnResaltar">Resaltar cadena</button>
      <button class="btn primario" id="btnCerrar" data-cerrar>Listo</button>
    </div>`;

  const dlg = $('#detalle');
  dlg.showModal();

  $('#segEstado').addEventListener('click', ev2 => {
    const b = ev2.target.closest('button'); if (!b) return;
    const v = b.dataset.v;
    if (v === 'pendiente') delete S.estado[id]; else S.estado[id] = v;
    $$('#segEstado button').forEach(x => x.setAttribute('aria-pressed', x.dataset.v === v));
    guardar(); refrescar();
  });
  const sel = $('#selRanura');
  const tn = $('#txtRanuraNom'), tc = $('#txtRanuraCod'), nc0 = $('#numCr');

  if (sel) sel.addEventListener('change', () => {
    if (!sel.value) delete S.ranuras[id];
    else {
      const [cod, ...n] = sel.value.split('|');
      const nombre = n.join('|');
      S.ranuras[id] = Object.assign({}, S.ranuras[id], { cod, nombre });
      // Créditos reales del SIA, si se conocen.
      const e = LISTA_ELECTIVAS.find(x => x.cod === cod && x.nombre === nombre);
      const f = fichaSIA(cod, nombre);
      const cr = (e && e.creditos != null) ? e.creditos : (f && f.creditos != null ? f.creditos : null);
      if (cr != null) { S.ranuras[id].cr = cr; if (nc0) nc0.value = cr; }
      // Los campos manuales reflejan lo elegido, para que no se contradigan.
      if (tn) { tn.value = nombre; tc.value = cod; }
    }
    guardar(); refrescar();
  });

  const guardaLibre = () => {
    if (sel) sel.value = '';   // escribir a mano manda sobre el desplegable
    if (!tn.value.trim()) delete S.ranuras[id];
    else S.ranuras[id] = Object.assign({}, S.ranuras[id], { nombre: tn.value.trim(), cod: tc.value.trim() });
    guardar(); refrescar();
  };
  if (tn) { tn.addEventListener('input', guardaLibre); tc.addEventListener('input', guardaLibre); }
  const nc = $('#numCr');
  if (nc) nc.addEventListener('change', () => {
    const v = Math.max(1, Math.min(12, +nc.value || a.cr));
    S.ranuras[id] = Object.assign({}, S.ranuras[id], { cr: v });
    guardar(); refrescar();
  });
  $('#btnCerrar').addEventListener('click', () => dlg.close());
  $('#btnEditar').addEventListener('click', () => { dlg.close(); abrirEditor(id); });
  $('#btnResaltar').addEventListener('click', () => {
    resaltado = resaltado === id ? null : id;
    dlg.close(); irA('vMalla'); refrescar();
  });
}

/* ------------------------------------------------------------------ editor */
/**
 * Formulario para modificar una asignatura del plan. Los cambios se guardan
 * como diferencias sobre PLAN_BASE, así que siempre se pueden deshacer.
 * @param {string|null} id  null para crear una asignatura nueva
 * @param {number} semNueva semestre inicial al crear
 */
function abrirEditor(id, semNueva = 1) {
  const nueva = !id;
  const a = nueva
    ? { id: 'NUEVA_' + Date.now().toString(36), cod: '', nombre: '', cr: 3, sem: semNueva, comp: 'LE', area: null, pre: [], co: [] }
    : PLAN_POR_ID[id];
  if (!a) return;

  const otras = PLAN.filter(x => x.id !== a.id).sort((x, y) => x.sem - y.sem || x.nombre.localeCompare(y.nombre));
  const opts = (sel) => otras.map(x =>
    `<option value="${esc(x.id)}" ${sel.includes(x.id) ? 'selected' : ''}>${ROMANOS[x.sem] || x.sem} · ${esc(x.nombre)}</option>`).join('');
  const nSem = Math.max(10, ...PLAN.map(x => x.sem));

  $('#detalle').innerHTML = `
    <div class="cab">
      <button type="button" class="cerrar-x" data-cerrar aria-label="Cerrar">✕</button>
      <h2>${nueva ? 'Nueva asignatura' : 'Editar: ' + esc(a.nombre)}</h2>
      <div class="sub">Los cambios se guardan sobre la malla original y puedes revertirlos cuando quieras.</div>
    </div>
    <div class="cuerpo">
      <div class="campo"><label>Nombre</label><input type="text" id="edNombre" value="${esc(a.nombre)}"></div>
      <div style="display:flex;gap:10px">
        <div class="campo" style="flex:2"><label>Código SIA</label><input type="text" id="edCod" value="${esc(a.cod || '')}" placeholder="sin código"></div>
        <div class="campo" style="flex:1"><label>Créditos</label><input type="number" id="edCr" min="0" max="20" value="${a.cr}"></div>
        <div class="campo" style="flex:1"><label>Semestre</label>
          <select id="edSem">${Array.from({ length: nSem + 1 }, (_, i) => i + 1)
            .map(s => `<option value="${s}" ${s === a.sem ? 'selected' : ''}>${ROMANOS[s] || s}</option>`).join('')}</select></div>
      </div>
      <div style="display:flex;gap:10px">
        <div class="campo" style="flex:1"><label>Componente</label>
          <select id="edComp">${Object.values(COMPONENTES)
            .map(c => `<option value="${c.id}" ${c.id === a.comp ? 'selected' : ''}>${esc(c.nombre)}</option>`).join('')}</select></div>
        <div class="campo" style="flex:1"><label>Área</label>
          <select id="edArea"><option value="">—</option>${Object.entries(AREAS)
            .map(([k, v]) => `<option value="${k}" ${k === a.area ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select></div>
      </div>
      <div class="campo"><label>Prerrequisitos — deben estar aprobados antes</label>
        <select id="edPre" multiple size="6">${opts(a.pre || [])}</select></div>
      <div class="campo"><label>Correquisitos — pueden cursarse en el mismo semestre</label>
        <select id="edCo" multiple size="6">${opts(a.co || [])}</select></div>
      <div class="campo"><label>Nota personal</label>
        <input type="text" id="edNota" value="${esc(a.nota || '')}" placeholder="opcional"></div>
      <div id="edError" class="aviso malo" hidden></div>
    </div>
    <div class="pie">
      ${!nueva ? `<button class="btn peligro" id="edBorrar">Eliminar</button>` : ''}
      ${!nueva && S.mods.editados[a.id] ? `<button class="btn" id="edRestaurar">Restaurar original</button>` : ''}
      <div style="flex:1"></div>
      <button class="btn" id="edCancelar" data-cerrar>Cancelar</button>
      <button class="btn primario" id="edGuardar">Guardar</button>
    </div>`;

  const dlg = $('#detalle');
  dlg.showModal();
  const sels = s => [...$(s).selectedOptions].map(o => o.value);

  $('#edGuardar').addEventListener('click', () => {
    const nombre = $('#edNombre').value.trim();
    if (!nombre) return mostrarError('Ponle un nombre a la asignatura.');
    const pre = sels('#edPre'), co = sels('#edCo');
    if (pre.some(p => co.includes(p)))
      return mostrarError('Una misma asignatura no puede ser prerrequisito y correquisito a la vez.');

    const campos = {
      nombre, cod: $('#edCod').value.trim() || null,
      cr: Math.max(0, +$('#edCr').value || 0), sem: +$('#edSem').value,
      comp: $('#edComp').value, area: $('#edArea').value || null,
      pre, co, nota: $('#edNota').value.trim() || undefined,
    };

    if (nueva) {
      S.mods.nuevos.push(Object.assign({}, a, campos));
      if (S.mods.orden && S.mods.orden.length) S.mods.orden.push(a.id);
      guardar(); construirPlan();
      if (cicloDetectado()) { deshacerUltimoNuevo(a.id); return mostrarError('Eso crearía un ciclo de requisitos.'); }
      refrescar(); dlg.close(); avisar(`«${nombre}» añadida al semestre ${ROMANOS[campos.sem] || campos.sem}.`);
      return;
    }

    const previo = S.mods.editados[a.id];
    editarAsignatura(a.id, campos, false);
    construirPlan();
    if (cicloDetectado()) {
      if (previo) S.mods.editados[a.id] = previo; else delete S.mods.editados[a.id];
      construirPlan();
      return mostrarError('Eso crearía un ciclo de requisitos (A depende de B y B de A).');
    }
    guardar(); refrescar(); dlg.close(); avisar(`«${nombre}» actualizada.`);
  });

  $('#edCancelar').addEventListener('click', () => dlg.close());

  const br = $('#edBorrar');
  if (br) br.addEventListener('click', () => {
    const dep = desbloquea(a.id);
    const msg = dep.length
      ? `«${a.nombre}» es requisito de ${dep.length} asignatura(s): ${dep.map(d => d.nombre).join(', ')}.\n\nSe eliminará y esas referencias desaparecerán. ¿Continuar?`
      : `¿Eliminar «${a.nombre}» del plan?`;
    if (!confirm(msg)) return;
    if (PLAN_BASE.some(x => x.id === a.id)) S.mods.eliminados.push(a.id);
    S.mods.nuevos = S.mods.nuevos.filter(x => x.id !== a.id);
    delete S.mods.editados[a.id];
    delete S.estado[a.id]; delete S.ranuras[a.id];
    if (S.mods.orden) S.mods.orden = S.mods.orden.filter(x => x !== a.id);
    guardar(); construirPlan(); refrescar(); dlg.close();
    avisar(`«${a.nombre}» eliminada del plan.`);
  });

  const rs = $('#edRestaurar');
  if (rs) rs.addEventListener('click', () => {
    delete S.mods.editados[a.id];
    guardar(); construirPlan(); refrescar(); dlg.close();
    avisar(`«${a.nombre}» vuelve a sus datos originales.`);
  });

  function mostrarError(t) { const e = $('#edError'); e.textContent = t; e.hidden = false; }
}

function deshacerUltimoNuevo(id) {
  S.mods.nuevos = S.mods.nuevos.filter(x => x.id !== id);
  if (S.mods.orden) S.mods.orden = S.mods.orden.filter(x => x !== id);
  construirPlan();
}

/**
 * ¿El grafo de prerrequisitos quedó con un ciclo?
 * Solo se recorren las aristas `pre`: los correquisitos son mutuos por
 * naturaleza (Electroquímica Analítica ⇄ su laboratorio) y no son un error.
 */
function cicloDetectado() {
  const gris = new Set(), negro = new Set();
  const visita = id => {
    if (negro.has(id)) return false;
    if (gris.has(id)) return true;
    gris.add(id);
    for (const p of (PLAN_POR_ID[id].pre || [])) if (PLAN_POR_ID[p] && visita(p)) return true;
    gris.delete(id); negro.add(id);
    return false;
  };
  return PLAN.some(a => visita(a.id));
}

/* ---------------------------------------------------------------- resumen */
function pintarResumen() {
  const m = metricas();
  const pct = x => x.meta ? Math.min(100, Math.round(x.hecho / x.meta * 100)) : 0;
  const disp = calcularDisponibilidad();
  const nDisp = PLAN.filter(a => disp[a.id] === 'disponible').length;
  const crDisp = PLAN.filter(a => disp[a.id] === 'disponible').reduce((s, a) => s + creditos(a), 0);
  const falta = Math.max(0, m.total.meta - m.total.hecho);

  const plan = planificar(S.config.maxCr, 'critico');
  const semRestantes = plan.semestres.length;

  $('#resumenKpis').innerHTML = `
    <div class="panel">
      <h3>Avance total</h3>
      <div class="kpi"><span class="n">${m.total.hecho}</span><span class="u">/ ${m.total.meta} créditos · ${Math.round(m.total.hecho / m.total.meta * 100)}%</span></div>
      <div class="barra">
        <i style="width:${m.total.hecho / m.total.meta * 100}%;background:var(--ok)"></i>
        <i style="width:${m.total.cursando / m.total.meta * 100}%;background:var(--curso)"></i>
      </div>
      <div style="font-size:12.5px;color:var(--texto-2);margin-top:8px">
        Te faltan <b>${falta}</b> créditos${m.total.cursando ? ` · ${m.total.cursando} en curso` : ''}.
      </div>
    </div>
    <div class="panel">
      <h3>Puedes inscribir ya</h3>
      <div class="kpi"><span class="n">${nDisp}</span><span class="u">asignaturas · ${crDisp} créditos</span></div>
      <div style="font-size:12.5px;color:var(--texto-2);margin-top:8px">
        Con tope de ${S.config.maxCr} cr/semestre.
        <a href="#" data-ir="vPlan">Ver plan sugerido →</a>
      </div>
    </div>
    <div class="panel">
      <h3>Semestres restantes</h3>
      <div class="kpi"><span class="n">${semRestantes}</span><span class="u">al ritmo de ${S.config.maxCr} cr</span></div>
      <div style="font-size:12.5px;color:var(--texto-2);margin-top:8px">
        ${plan.bloqueadas.length ? `<span style="color:#c0392b">⚠ ${plan.bloqueadas.length} asignatura(s) sin ruta viable.</span>`
                                 : 'Todas las asignaturas tienen ruta viable.'}
      </div>
    </div>
    <div class="panel">
      <h3>Ruta crítica</h3>
      ${(() => {
        const pend = PLAN.filter(a => !aprobada(a.id)).sort((x, y) => profundidad(y.id) - profundidad(x.id)).slice(0, 4);
        return pend.length ? `<div style="font-size:13px;display:flex;flex-direction:column;gap:5px">
          ${pend.map(a => `<div style="display:flex;justify-content:space-between;gap:8px">
            <span>${esc(a.nombre)}</span><b style="color:var(--texto-2);font-size:12px">${profundidad(a.id)} niveles</b></div>`).join('')}
        </div><div style="font-size:12px;color:var(--texto-2);margin-top:8px">Atrásate en éstas y se corre toda la carrera.</div>`
        : '<div class="vacio">¡Plan completo!</div>';
      })()}
    </div>`;

  $('#resumenComponentes').innerHTML = `
    <h3>Créditos por componente <span class="hint">— exigidos por el plan de estudios</span></h3>
    <div class="lista-comp">
      ${Object.values(COMPONENTES).map(c => {
        const d = m.comp[c.id];
        return `<div class="fila">
          <div class="l"><span><i class="punto" style="background:${c.color}"></i>${esc(c.nombre)}</span>
            <b>${d.hecho}${d.cursando ? ` (+${d.cursando})` : ''} / ${d.meta}</b></div>
          <div class="barra">
            <i style="width:${Math.min(100, d.hecho / d.meta * 100)}%;background:${c.color}"></i>
            <i style="width:${Math.min(100 - d.hecho / d.meta * 100, d.cursando / d.meta * 100)}%;background:${c.color};opacity:.4"></i>
          </div></div>`;
      }).join('')}
    </div>`;

  // Optativas sin asignar
  const sinAsignar = PLAN.filter(a => a.ranura && !S.ranuras[a.id]);
  $('#resumenRanuras').innerHTML = `
    <h3>Cupos optativos y electivos <span class="hint">— ${PLAN.filter(a => a.ranura).length - sinAsignar.length}/${PLAN.filter(a => a.ranura).length} asignados</span></h3>
    ${sinAsignar.length ? `<div class="tabla-scroll"><table class="tabla"><tbody>
      ${sinAsignar.map(a => `<tr><td><a href="#" data-abrir="${esc(a.id)}">${esc(a.nombre)}</a></td>
        <td style="color:var(--texto-2)">Sem. ${ROMANOS[a.sem]}</td><td class="num">${creditos(a)} cr</td></tr>`).join('')}
    </tbody></table></div>` : '<div class="vacio">Todos los cupos tienen asignatura elegida.</div>'}`;
}

/* -------------------------------------------------------------- planificador */
function pintarPlan() {
  const modo = $('#selModo').value;
  const maxCr = +$('#numMax').value || 18;
  const respetarNivel = $('#chkNivel').checked;
  S.config.maxCr = maxCr; guardar();
  const { semestres, bloqueadas, cursando } = planificar(maxCr, modo, respetarNivel);
  const cont = $('#planCont');

  if (!semestres.length && !cursando.length) {
    cont.innerHTML = '<div class="vacio">No queda nada por planificar. 🎉</div>';
    return;
  }

  const filaAsig = a => {
    const asig = S.ranuras[a.id];
    return `<tr><td><a href="#" data-abrir="${esc(a.id)}">${esc(a.nombre)}</a>
        ${asig ? `<div style="font-size:11.5px;color:var(--texto-2)">→ ${esc(asig.nombre)}</div>`
               : (a.ranura ? '<div style="font-size:11.5px;color:#c0392b">sin optativa elegida</div>' : '')}</td>
      <td style="color:var(--texto-2);font-size:12px">${a.cod ? esc(a.cod) : '—'}</td>
      <td><span class="chip" style="background:${COMPONENTES[a.comp].color}">${esc(COMPONENTES[a.comp].corto)}</span></td>
      <td class="num">${creditos(a)}</td></tr>`;
  };

  let html = '';
  if (cursando.length) {
    html += `<div class="plan-sem"><header><span>En curso ahora</span>
      <span class="cr">${cursando.reduce((s, a) => s + creditos(a), 0)} créditos</span></header>
      <div class="panel"><div class="tabla-scroll"><table class="tabla"><tbody>${cursando.map(filaAsig).join('')}</tbody></table></div></div></div>`;
  }

  let acum = metricas().total.hecho + metricas().total.cursando;
  semestres.forEach((s, i) => {
    acum += s.cr;
    html += `<div class="plan-sem">
      <header><span>Semestre ${i + 1} desde ahora</span>
        <span class="cr">${s.cr} cr · acumulado ${acum}/${TOTAL_CREDITOS}</span></header>
      <div class="panel"><div class="tabla-scroll"><table class="tabla">
        <thead><tr><th>Asignatura</th><th>Código</th><th>Componente</th><th class="num">Cr</th></tr></thead>
        <tbody>${s.asigs.map(filaAsig).join('')}</tbody>
      </table></div></div></div>`;
  });

  if (bloqueadas.length) {
    html += `<div class="aviso malo"><b>Sin ruta viable:</b> ${bloqueadas.map(a => esc(a.nombre)).join(', ')}.
      Suele deberse a un ciclo de correquisitos o a un tope de créditos demasiado bajo — sube el tope o revisa los requisitos.</div>`;
  }
  cont.innerHTML = html;
}

/* ---------------------------------------------------------------- catálogo */
function pintarCatalogo() {
  const q = $('#buscaCat').value.trim().toLowerCase();
  const g = $('#selGrupo').value;
  const usados = new Map();
  for (const [slot, v] of Object.entries(S.ranuras)) if (v.cod) usados.set(v.cod + '|' + v.nombre, slot);

  let html = '';
  for (const [gid, gnom] of Object.entries(GRUPOS_CATALOGO)) {
    if (g && g !== gid) continue;
    let items = CATALOGO.filter(c => c.grupo === gid);
    if (q) items = items.filter(c => {
      // Se busca también dentro de la descripción y el temario del SIA: así
      // «catálisis» o «nanotubos» encuentran cursos aunque no salgan en el nombre.
      const f = fichaSIA(c.cod, c.nombre);
      const texto = [c.nombre, c.cod, c.linea, f && f.unidad, f && f.descripcion, f && f.contenido]
        .filter(Boolean).join(' ').toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '');
      return texto.includes(q.normalize('NFD').replace(/[̀-ͯ]/g, ''));
    });
    if (!items.length) continue;
    html += `<div class="grupo-cat"><h3>${esc(gnom)} <span style="text-transform:none;font-weight:500">· ${items.length}</span></h3>`;
    const lineas = [...new Set(items.map(i => i.linea))];
    for (const ln of lineas) {
      if (lineas.length > 1) html += `<div class="linea-cat">${esc(ln)}</div>`;
      html += `<div class="cat-grid">${items.filter(i => i.linea === ln).map(c => {
        const slot = usados.get(c.cod + '|' + c.nombre);
        const f = fichaSIA(c.cod, c.nombre);
        const prof = (LE[c.cod] && LE[c.cod].profesores || []).filter(p => p.calificacion != null && p.resenas > 0);
        const mejor = prof.length ? prof.reduce((a, b) => (b.calificacion > a.calificacion ? b : a)) : null;
        return `<div class="cat-item ${slot ? 'usada' : ''} ${c.codErrado ? 'cod-malo' : ''}">
          <div class="cat-nom">${esc(c.nombre)}
            ${c.codErrado ? '<span class="warn" title="El código de esta asignatura está mal impreso en el PDF">⚠</span>' : ''}
            ${c.confirmado ? '<span class="bien" title="Código verificado contra losestudiantes.com">✓</span>' : ''}</div>
          <div class="c">${esc(c.cod)}${f && f.creditos != null ? ` · <b>${f.creditos} créditos</b>` : ''}${f && f.horas != null ? ` · ${f.horas} h` : ''}${slot ? ` · asignada a ${esc(PLAN_POR_ID[slot].nombre)}` : ''}</div>
          ${f && f.unidad ? `<div class="c">${esc(f.unidad)}</div>` : ''}
          ${mejor ? `<div class="c">Mejor calificado: <b>${esc(mejor.nombre)}</b> ${mejor.calificacion.toFixed(1)}/5 · ${prof.length} profesor(es) con reseñas</div>` : ''}
          ${c.nota ? `<div class="c" style="margin-top:3px">ℹ ${esc(c.nota)}</div>` : ''}
          ${f && f.descripcion ? `<details class="ficha" style="margin-top:6px"><summary>De qué se trata</summary>
            <p>${esc(f.descripcion)}</p></details>` : ''}
          ${f && f.contenido ? `<details class="ficha"><summary>Contenido del curso</summary>
            <p>${esc(f.contenido)}</p></details>` : ''}
          ${!f ? `<div class="c" style="margin-top:4px;opacity:.75">Sin ficha en el catálogo público del SIA.</div>` : ''}
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">
            ${LE[c.cod] && !c.codErrado ? enlaceLE(c.cod, 'Profesores y reseñas') : ''}
            ${!c.codErrado && !slot ? `<button class="btn" data-opt-como-ele="${esc(c.cod)}|${esc(c.nombre)}"
                title="Los 32 créditos de libre elección también admiten optativas">Usar como electiva</button>` : ''}
          </div>
        </div>`;
      }).join('')}</div>`;
    }
    html += `</div>`;
  }
  $('#catCont').innerHTML = html || '<div class="vacio">Sin resultados.</div>';
}

/* --------------------------------------------------------------- electivas */
/* Las de LIBRE ELECCIÓN, distintas de las optativas: llenan los 32 créditos
   que pueden cursarse con casi cualquier asignatura de la Universidad.        */
const LISTA_ELECTIVAS = typeof ELECTIVAS === 'object' ? ELECTIVAS : [];

const sinTildes = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function pintarElectivas() {
  const q = sinTildes($('#buscaEle').value.trim());
  const orden = $('#ordEle').value;
  const soloDesc = $('#chkEleDesc').checked;

  let items = LISTA_ELECTIVAS.slice();
  if ($('#chkEleVig').checked) items = items.filter(e => e.vigente !== false);
  if (soloDesc) items = items.filter(e => e.descripcion);
  if (q) items = items.filter(e =>
    sinTildes([e.nombre, e.cod, e.unidad, e.descripcion, e.contenido].filter(Boolean).join(' ')).includes(q));

  items.sort((a, b) =>
    orden === 'creditos' ? (b.creditos || 0) - (a.creditos || 0) || a.nombre.localeCompare(b.nombre, 'es')
    : orden === 'unidad' ? (a.unidad || 'zz').localeCompare(b.unidad || 'zz', 'es') || a.nombre.localeCompare(b.nombre, 'es')
    : a.nombre.localeCompare(b.nombre, 'es'));

  // Qué cupos de electiva siguen libres, para poder asignar desde aquí.
  const cupos = PLAN.filter(a => a.comp === 'LE');
  const libres = cupos.filter(a => !S.ranuras[a.id]);
  const usadas = new Map();
  for (const [slot, v] of Object.entries(S.ranuras)) if (v.cod) usadas.set(v.cod, slot);

  const nVig = LISTA_ELECTIVAS.filter(e => e.vigente !== false).length;
  const nCad = LISTA_ELECTIVAS.length - nVig;
  const fuenteEle = typeof ELECTIVAS_FUENTE === 'string' ? ELECTIVAS_FUENTE : 'electivas del Departamento de Electivas, contrastadas una a una con el SIA';
  $('#ayudaEle').innerHTML = `${LISTA_ELECTIVAS.length} ${fuenteEle}${nCad ? `: <b>${nVig} vigentes</b> y ${nCad} caducada(s)` : ''}.
    Mostrando <b>${items.length}</b>. Tienes <b>${libres.length} de ${cupos.length}</b> cupos de
    electiva sin asignar (${cupos.reduce((s, a) => s + creditos(a), 0)} créditos en total).
    ★ = el SIA la asocia al plan de ${esc(NOMBRE_CARRERA)}.`;

  $('#eleCont').innerHTML = items.length ? `<div class="cat-grid">${items.map(e => {
    const slot = usadas.get(e.cod);
    return `<div class="cat-item ${slot ? 'usada' : ''}">
      <div class="cat-nom">${esc(e.nombre)}
        ${e.enPlan || e.enPlanQuimica ? `<span class="bien" title="El SIA la asocia al plan de ${esc(NOMBRE_CARRERA)}">★</span>` : ''}
        ${e.vigente === false ? '<span class="warn" title="El SIA la marca como no vigente">✗</span>' : ''}</div>
      <div class="c">${esc(e.cod)}${e.creditos != null ? ` · <b>${e.creditos} créditos</b>` : ''}${e.horas != null ? ` · ${e.horas} h` : ''}${e.validable ? ' · validable' : ''}</div>
      ${e.unidad ? `<div class="c">${esc(e.unidad)}</div>` : ''}
      ${e.vigente === false ? '<div class="c" style="color:#c0392b"><b>Ya no está vigente</b> — no se puede inscribir.</div>' : ''}
      ${e.sinFicha ? '<div class="c" style="opacity:.8">Sin ficha en el catálogo público; verifícala en el SIA.</div>'
        : (e.esLibreEleccion === false ? '<div class="c" style="opacity:.8">El SIA no la marca como libre elección; confirma que te cuente.</div>' : '')}
      ${slot ? `<div class="c">✓ asignada a ${esc(PLAN_POR_ID[slot].nombre)} (sem. ${ROMANOS[PLAN_POR_ID[slot].sem]})</div>` : ''}
      ${e.descripcion ? `<details class="ficha" style="margin-top:6px"><summary>De qué se trata</summary>
        <p>${esc(e.descripcion)}</p></details>` : '<div class="c" style="opacity:.75;margin-top:4px">Sin descripción en el SIA.</div>'}
      ${e.contenido ? `<details class="ficha"><summary>Contenido del curso</summary><p>${esc(e.contenido)}</p></details>` : ''}
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">
        ${enlaceLE(e.cod, 'Profesores y reseñas')}
        ${slot ? `<button class="btn" data-quitar-ele="${esc(slot)}">Quitar del cupo</button>`
               : (libres.length && e.vigente !== false ? `<button class="btn" data-poner-ele="${esc(e.cod)}">Poner en un cupo</button>` : '')}
      </div>
    </div>`;
  }).join('')}</div>` : '<div class="vacio">Sin resultados.</div>';
}

/**
 * Pone una asignatura en el primer cupo de LIBRE ELECCIÓN que quede vacío.
 * Vale para las del Departamento de Electivas y también para optativas: los 32
 * créditos de libre elección admiten casi cualquier asignatura, incluidas
 * optativas que se cursen de más.
 */
function asignarALibreEleccion(cod, nombre, creditos) {
  const cupo = PLAN.find(a => a.comp === 'LE' && !S.ranuras[a.id]);
  if (!cupo) return avisar('No te quedan cupos de electiva libres.');
  S.ranuras[cupo.id] = { cod, nombre };
  const f = fichaSIA(cod, nombre);
  const cr = creditos != null ? creditos : (f && f.creditos != null ? f.creditos : null);
  if (cr != null) S.ranuras[cupo.id].cr = cr;
  guardar(); refrescar();
  if (!$('#vElectivas').hidden) pintarElectivas();
  if (!$('#vCatalogo').hidden) pintarCatalogo();
  avisar(`«${nombre}» ocupa el cupo de electiva del semestre ${ROMANOS[cupo.sem] || cupo.sem}.`);
}

/** Atajo para las del Departamento de Electivas. */
function asignarElectiva(cod) {
  const e = LISTA_ELECTIVAS.find(x => x.cod === cod);
  if (e) asignarALibreEleccion(e.cod, e.nombre, e.creditos);
}

/* ----------------------------------------------------------------- horario */
const DIAS_CORTOS = ['', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const HORA_INI = 6, HORA_FIN = 22;
const PALETA_HOR = ['#2563c4', '#2f8f5b', '#b8860b', '#8e44ad', '#c0392b', '#16a085', '#d35400', '#7f8c8d', '#c2185b', '#455a64'];
const minutos = h => { const [a, b] = String(h).split(':').map(Number); return a * 60 + (b || 0); };

/** Asignaturas que entran en el horario: las "cursando" con oferta + las añadidas a mano. */
function asignaturasHorario() {
  const vistas = new Set(), out = [];
  const meter = (cod, origen, asig) => {
    const o = ofertaDe(cod); const c = codBase(cod);
    if (!o || vistas.has(c)) return;
    vistas.add(c);
    out.push({ cod: c, oferta: o, origen, asig });
  };
  PLAN.filter(a => est(a.id) === 'cursando').forEach(a => meter(codDe(a), 'cursando', a));
  (S.horario.extras || []).forEach(c => meter(c, 'extra', PLAN.find(a => codBase(codDe(a)) === codBase(c)) || null));
  return out;
}

/** Grupo elegido para una actividad (o el único, si solo hay uno). */
function grupoElegido(cod, act) {
  const clave = cod + '|' + act.nombre;
  const g = act.grupos.find(x => x.codigoGrupo === S.horario.grupos[clave]);
  if (g) return g;
  return act.grupos.length === 1 ? act.grupos[0] : null;
}

/** Sesiones de todo lo elegido, con sus cruces marcados. */
function sesionesHorario(items) {
  const ses = [];
  items.forEach((it, i) => {
    const color = it.asig && COMPONENTES[it.asig.comp] ? COMPONENTES[it.asig.comp].color : PALETA_HOR[i % PALETA_HOR.length];
    it.oferta.actividades.forEach(act => {
      const g = grupoElegido(it.cod, act);
      if (!g) return;
      g.sesiones.forEach(x => {
        if (!x.dia || !x.inicio || !x.fin) return;
        ses.push({ cod: it.cod, nombre: it.oferta.nombre, act: act.nombre, grupo: g.grupo, dia: x.dia, ini: minutos(x.inicio), fin: minutos(x.fin), salon: x.salon, color, choque: false });
      });
    });
  });
  for (let a = 0; a < ses.length; a++) for (let b = a + 1; b < ses.length; b++) {
    const p = ses[a], q = ses[b];
    if (p.dia === q.dia && p.ini < q.fin && q.ini < p.fin && !(p.cod === q.cod && p.act === q.act)) p.choque = q.choque = true;
  }
  return ses;
}

function pintarHorario() {
  const cont = $('#horCont');
  $('#horPeriodo').textContent = OFERTA_SEM ? `Periodo ${OFERTA_SEM} · consultado el ${typeof OFERTA_CONSULTADO === 'string' ? OFERTA_CONSULTADO : '?'}` : '';
  if (!Object.keys(OFERTA_MAP).length) {
    cont.innerHTML = '<div class="hor-vacio">No hay oferta cargada. Genera <code>js/oferta.js</code> con <code>node herramientas/catalogo-sia.js sincronizar</code>.</div>';
    return;
  }
  const items = asignaturasHorario();
  if (!items.length) {
    cont.innerHTML = '<div class="hor-vacio">Marca asignaturas como <b>Cursando</b> en la malla o añádelas con el buscador de arriba.</div>';
    return;
  }
  const ses = sesionesHorario(items);
  const nChoques = ses.filter(x => x.choque).length;
  const cr = items.reduce((n, it) => n + (it.oferta.creditos || 0), 0);
  const sinGrupo = items.filter(it => it.oferta.actividades.some(act => act.grupos.length && !grupoElegido(it.cod, act)));

  const lista = items.map((it, i) => {
    const color = it.asig && COMPONENTES[it.asig.comp] ? COMPONENTES[it.asig.comp].color : PALETA_HOR[i % PALETA_HOR.length];
    const acts = it.oferta.actividades.length ? it.oferta.actividades.map(act => {
      const g = grupoElegido(it.cod, act);
      const clave = it.cod + '|' + act.nombre;
      const info = g ? `<div class="hor-grupo-info">${g.profesores.length ? esc(g.profesores.join(', ')) + ' · ' : ''}
          <span class="${g.cupos ? '' : 'cupo0'}">${g.cupos} cupo${g.cupos === 1 ? '' : 's'}</span>
          ${g.sesiones.length ? ' · ' + g.sesiones.map(x => esc(horaTexto(x)) + (x.salon ? ' ' + esc(x.salon) : '')).join(' · ') : ' · horario no informado'}</div>` : '';
      return `<div class="hor-act">${it.oferta.actividades.length > 1 ? `<span>${esc(act.nombre)}</span>` : ''}
        ${act.grupos.length ? `<select data-grupo="${esc(clave)}">
          ${act.grupos.length > 1 ? `<option value="">— elegir grupo (${act.grupos.length}) —</option>` : ''}
          ${act.grupos.map(x => `<option value="${esc(x.codigoGrupo)}" ${g && g.codigoGrupo === x.codigoGrupo ? 'selected' : ''}>${esc(x.grupo)}${x.profesores.length ? ' · ' + esc(x.profesores[0]) + (x.profesores.length > 1 ? ' +' + (x.profesores.length - 1) : '') : ''}${x.sesiones.length ? ' · ' + x.sesiones.map(y => esc(DIAS_CORTOS[y.dia] || y.diaTexto) + ' ' + esc(y.inicio)).join(', ') : ''} · ${x.cupos} cupos</option>`).join('')}
        </select>` : '<span style="color:var(--texto-2)">Sin grupos programados</span>'}${info}</div>`;
    }).join('') : '<div class="hor-act" style="color:var(--texto-2)">Sin grupos programados este semestre.</div>';
    return `<div class="hor-item" style="border-left-color:${color}">
      <header><div><b>${esc(it.oferta.nombre)}</b> <span class="meta">${esc(it.cod)} · ${it.oferta.creditos} cr · ${esc(it.oferta.tipologia)}${it.origen === 'cursando' ? ' · marcada como cursando' : ''}</span></div>
        <div>${it.asig ? `<a href="#" data-abrir="${esc(it.asig.id)}" style="font-size:12px">ficha</a> ` : ''}${it.origen === 'extra' ? `<button class="quitar" data-quitar-hor="${esc(it.cod)}" title="Quitar del horario">×</button>` : ''}</div></header>
      ${acts}</div>`;
  }).join('');

  const horas = []; for (let h = HORA_INI; h < HORA_FIN; h++) horas.push(`<div>${h}:00</div>`);
  const dias = [1, 2, 3, 4, 5, 6].map(d => {
    const bloques = ses.filter(x => x.dia === d).map(x => {
      const top = (x.ini - HORA_INI * 60) / 60, alto = (x.fin - x.ini) / 60;
      return `<div class="hor-bloque ${x.choque ? 'choque' : ''}" style="top:calc(${top} * var(--hora-alto));height:calc(${alto} * var(--hora-alto) - 2px);background:${x.color}" title="${esc(x.nombre)} · ${esc(x.grupo)}${x.salon ? ' · ' + esc(x.salon) : ''}">
        <b>${esc(x.nombre)}</b><small>${esc(x.grupo)}${x.salon ? ' · ' + esc(x.salon) : ''}</small></div>`;
    }).join('');
    return `<div class="dia" style="height:calc(${HORA_FIN - HORA_INI} * var(--hora-alto))">${bloques}</div>`;
  }).join('');

  cont.innerHTML = `
    <div class="hor-resumen">
      <span><b>${items.length}</b> asignatura${items.length === 1 ? '' : 's'}</span>
      <span><b>${cr}</b> créditos</span>
      <span><b>${ses.length}</b> franja${ses.length === 1 ? '' : 's'} semanales</span>
      ${sinGrupo.length ? `<span>Falta elegir grupo en: ${sinGrupo.map(it => esc(it.oferta.nombre)).join(', ')}</span>` : ''}
      ${nChoques ? `<span class="hor-choque">⚠ ${nChoques} franja${nChoques === 1 ? '' : 's'} con cruce</span>` : ''}
    </div>
    <div class="hor-lista">${lista}</div>
    ${ses.length ? `<div class="hor-semana">
      <div class="cab"></div>${[1, 2, 3, 4, 5, 6].map(d => `<div class="cab">${DIAS_CORTOS[d]}</div>`).join('')}
      <div class="horas">${horas.join('')}</div>${dias}
    </div>` : ''}`;
}

/** Sugerencias del buscador de la pestaña Horario. */
function sugerirHorario() {
  const q = sinTildes($('#buscaHor').value.trim());
  const caja = $('#horSugerencias');
  if (q.length < 2) { caja.hidden = true; caja.innerHTML = ''; return; }
  const ya = new Set(asignaturasHorario().map(it => it.cod));
  const res = Object.values(OFERTA_MAP)
    .filter(o => !ya.has(o.cod) && sinTildes(o.nombre + ' ' + o.cod).includes(q))
    .sort((a, b) => (gruposDe(b) ? 1 : 0) - (gruposDe(a) ? 1 : 0) || a.nombre.localeCompare(b.nombre, 'es'))
    .slice(0, 12);
  caja.innerHTML = res.length
    ? res.map(o => `<button data-anadir-hor="${esc(o.cod)}">${esc(o.nombre)}<span class="cod">${esc(o.cod)} · ${o.creditos} cr · ${gruposDe(o) ? gruposDe(o) + ' grupo(s)' : 'sin grupos'}</span></button>`).join('')
    : '<button disabled>Nada en la oferta con ese texto.</button>';
  caja.hidden = false;
}

/* ------------------------------------------------------------------- notas */
function pintarNotas() {
  $('#notasCont').innerHTML = INCONSISTENCIAS.map(n =>
    `<details class="acordeon"><summary>${esc(n.asig)}</summary><div>${esc(n.detalle)}</div></details>`).join('');
}

/* ------------------------------------------------------------------ router */
function irA(id) {
  $$('.vista').forEach(v => v.hidden = v.id !== id);
  $$('nav.tabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.vista === id));
  if (id === 'vPlan') pintarPlan();
  if (id === 'vCatalogo') pintarCatalogo();
  if (id === 'vElectivas') pintarElectivas();
  if (id === 'vHorario') pintarHorario();
}

function refrescar() {
  pintarMalla();
  pintarResumen();
  if (!$('#vPlan').hidden) pintarPlan();
  if (!$('#vCatalogo').hidden) pintarCatalogo();
  if (!$('#vElectivas').hidden) pintarElectivas();
  if (!$('#vHorario').hidden) pintarHorario();
  const m = metricas();
  $('#progGlobal').style.width = Math.min(100, m.total.hecho / m.total.meta * 100) + '%';

  const n = Object.keys(S.mods.editados).length + S.mods.nuevos.length + S.mods.eliminados.length;
  $('#contadorMods').textContent = n ? ` ${n} asignatura(s) con cambios.` : '';
  $('#btnLimpiarResalte').hidden = !resaltado;
}

/* -------------------------------------------------------------------- init */
function init() {
  construirPlan();
  pintarNotas();
  // Grupos del catálogo de optativas: vienen de datos.js, no del HTML.
  const selG = $('#selGrupo');
  if (selG && selG.options.length <= 1) {
    for (const [gid, gnom] of Object.entries(GRUPOS_CATALOGO)) {
      const o = document.createElement('option'); o.value = gid; o.textContent = gnom; selG.appendChild(o);
    }
  }
  $('#numMax').value = S.config.maxCr;

  $$('nav.tabs button').forEach(b => b.addEventListener('click', () => irA(b.dataset.vista)));

  /* Cerrar la ficha por varias vías independientes, para que siempre haya
     salida aunque el navegador coloque mal el pie del diálogo: la ✕ de arriba,
     cualquier botón marcado con data-cerrar, tocar fuera del recuadro, y Esc
     (este último lo da el navegador). El listener va en el diálogo, no en cada
     botón, así sigue funcionando aunque el contenido se vuelva a dibujar. */
  const dlg = $('#detalle');
  dlg.addEventListener('click', e => {
    if (e.target.closest('[data-cerrar]')) { dlg.close(); return; }
    // Al tocar el fondo oscuro el destino del clic es el propio <dialog>.
    if (e.target === dlg) dlg.close();
  });

  document.addEventListener('click', e => {
    // Botones ‹ › de la tarjeta: mover de semestre sin arrastrar (necesario en
    // pantallas táctiles, donde arrastrar y soltar no funciona).
    const mv = e.target.closest('[data-mover]');
    if (mv) {
      e.stopPropagation();
      const [id, paso] = mv.dataset.mover.split(':');
      const a = PLAN_POR_ID[id];
      if (a) moverAsignatura(id, Math.max(1, a.sem + (+paso)), null);
      return;
    }
    const card = e.target.closest('.card');
    if (card) { abrirDetalle(card.dataset.id); return; }
    const ab = e.target.closest('[data-abrir]');
    if (ab) { e.preventDefault(); abrirDetalle(ab.dataset.abrir); return; }
    const poner = e.target.closest('[data-poner-ele]');
    if (poner) { asignarElectiva(poner.dataset.ponerEle); return; }
    const optEle = e.target.closest('[data-opt-como-ele]');
    if (optEle) {
      const [cod, ...n] = optEle.dataset.optComoEle.split('|');
      asignarALibreEleccion(cod, n.join('|'));
      return;
    }
    const quitar = e.target.closest('[data-quitar-ele]');
    if (quitar) {
      const slot = quitar.dataset.quitarEle;
      delete S.ranuras[slot];
      guardar(); refrescar(); pintarElectivas();
      avisar('Cupo de electiva liberado.');
      return;
    }
    const ir = e.target.closest('[data-ir]');
    if (ir) { e.preventDefault(); if ($('#detalle').open) $('#detalle').close(); irA(ir.dataset.ir); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest && e.target.closest('.card');
      if (card) { e.preventDefault(); abrirDetalle(card.dataset.id); }
    }
    if (e.key === 'Escape' && resaltado) { resaltado = null; refrescar(); }
  });

  $('#busca').addEventListener('input', e => { filtroTexto = e.target.value.trim(); pintarMalla(); });
  $('#chkDisp').addEventListener('change', e => { soloDisponibles = e.target.checked; pintarMalla(); });

  $('#btnEdicion').addEventListener('click', () => {
    S.config.edicion = !S.config.edicion;
    if (S.config.edicion) soloDisponibles = $('#chkDisp').checked = false;
    guardar(); aplicarModoEdicion(); refrescar();
  });
  $('#btnRestaurarMalla').addEventListener('click', () => {
    if (!mallaModificada()) return avisar('La malla no tiene cambios.');
    if (!confirm('Se descartan todos los cambios de la malla (movimientos, ediciones y asignaturas añadidas).\n\nTu avance —lo aprobado y las optativas elegidas— se conserva. ¿Continuar?')) return;
    S.mods = porDefecto().mods;
    guardar(); construirPlan(); refrescar();
    avisar('Malla restaurada a la versión de los PDF.');
  });
  document.addEventListener('click', e => {
    const nueva = e.target.closest('[data-nueva]');
    if (nueva) abrirEditor(null, +nueva.dataset.nueva);
    const anadirHor = e.target.closest('[data-anadir-hor]');
    if (anadirHor) {
      const c = anadirHor.dataset.anadirHor;
      if (!S.horario.extras.includes(c)) S.horario.extras.push(c);
      guardar(); $('#buscaHor').value = ''; $('#horSugerencias').hidden = true; pintarHorario();
      return;
    }
    const quitarHor = e.target.closest('[data-quitar-hor]');
    if (quitarHor) {
      S.horario.extras = S.horario.extras.filter(c => c !== quitarHor.dataset.quitarHor);
      guardar(); pintarHorario();
    }
  });
  document.addEventListener('change', e => {
    const sel = e.target.closest('select[data-grupo]');
    if (!sel) return;
    if (sel.value) S.horario.grupos[sel.dataset.grupo] = sel.value; else delete S.horario.grupos[sel.dataset.grupo];
    guardar(); pintarHorario();
  });
  $('#buscaHor').addEventListener('input', sugerirHorario);
  $('#buscaHor').addEventListener('focus', sugerirHorario);
  $('#btnLimpiarResalte').addEventListener('click', () => { resaltado = null; refrescar(); });
  $('#selModo').addEventListener('change', pintarPlan);
  $('#numMax').addEventListener('change', pintarPlan);
  $('#chkNivel').addEventListener('change', pintarPlan);
  $('#buscaCat').addEventListener('input', pintarCatalogo);
  $('#selGrupo').addEventListener('change', pintarCatalogo);
  $('#buscaEle').addEventListener('input', pintarElectivas);
  $('#ordEle').addEventListener('change', pintarElectivas);
  $('#chkEleDesc').addEventListener('change', pintarElectivas);
  $('#chkEleVig').addEventListener('change', pintarElectivas);

  $('#btnTema').addEventListener('click', () => {
    const orden = ['auto', 'light', 'dark'];
    const i = (orden.indexOf(S.config.tema) + 1) % 3;
    S.config.tema = orden[i]; guardar(); aplicarTema();
  });

  $('#btnReiniciar').addEventListener('click', () => {
    if (!confirm('Esto borra tu avance guardado en este navegador. ¿Continuar?')) return;
    S = porDefecto(); guardar(); construirPlan(); aplicarModoEdicion(); refrescar(); $('#numMax').value = S.config.maxCr;
  });
  $('#btnExportar').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = CARRERA_APP.archivoAvance || 'avance-malla-quimica.json';
    a.click(); URL.revokeObjectURL(a.href);
  });
  $('#fileImportar').addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return;
    const fr = new FileReader();
    fr.onload = () => {
      try {
        const d = porDefecto(), g = JSON.parse(fr.result);
        S = Object.assign(d, g, { config: Object.assign(d.config, g.config), mods: Object.assign(d.mods, g.mods) });
        guardar(); construirPlan(); aplicarModoEdicion(); refrescar(); $('#numMax').value = S.config.maxCr;
      } catch { alert('El archivo no es un respaldo válido.'); }
    };
    fr.readAsText(f);
    e.target.value = '';
  });

  aplicarTema();
  aplicarModoEdicion();
  irA('vMalla');
  refrescar();
}

function aplicarModoEdicion() {
  const ed = S.config.edicion;
  $('#btnEdicion').textContent = ed ? '✓ Terminar edición' : '✎ Editar malla';
  $('#btnEdicion').classList.toggle('primario', ed);
  $('#barraEdicion').hidden = !ed;
  $('#ayudaMalla').hidden = ed;
}

function aplicarTema() {
  const t = S.config.tema;
  if (t === 'auto') document.documentElement.removeAttribute('data-tema');
  else document.documentElement.setAttribute('data-tema', t);
  $('#btnTema').textContent = { auto: '◐ Auto', light: '☀ Claro', dark: '☾ Oscuro' }[t];
}

document.addEventListener('DOMContentLoaded', init);
