/* ============================================================================
   catalogo-sia.js — oferta del semestre (grupos, horarios, cupos) desde el
   Catálogo de asignaturas del SIA
   ----------------------------------------------------------------------------
   Usa el «Catálogo de asignaturas» público del SIA, que sí está en servicio
   (a diferencia del Buscador de cursos, en mantenimiento):

     https://sia.unal.edu.co/Catalogo/facespublico/public/servicioPublico.jsf
                                        ?taskflowId=task-flow-AC_CatalogoAsignaturas

   NO pide iniciar sesión ni credenciales de ningún tipo: es el acceso anónimo.

   Es una aplicación Oracle ADF: no hay URLs por asignatura, todo son
   «partial page requests» (POST) contra un formulario con estado de sesión.
   Este script reproduce exactamente esas peticiones — lo que haría el
   navegador — sin necesitar Chrome. Detalles que costó descubrir y conviene
   no perder:
     · Hay que mandar Adf-Window-Id=winnoloop (el valor del HTML inicial); con
       cualquier otro valor el servidor responde 302 y con ninguno un <noop/>.
     · El POST va a la ruta limpia (sin ;PortalJSESSION=…), con la cookie.
     · Cada respuesta trae un nuevo javax.faces.ViewState que hay que reenviar.
     · La sesión caduca a los 5 min sin actividad: si falla, se reinicia.

   Uso:
     node herramientas/catalogo-sia.js plan                lista el plan de la carrera (todas
                                                           las tipologías menos libre elección)
     node herramientas/catalogo-sia.js ver <código>        grupos y horarios de una asignatura
     node herramientas/catalogo-sia.js libre [plan]        libre elección: del componente 2CLE
                                                           de la sede o del plan indicado (p.ej. 2516)
     node herramientas/catalogo-sia.js sincronizar         descarga todo y escribe js/oferta.js
     node herramientas/catalogo-sia.js sincronizar --sin-libre    solo el plan de la carrera
     node herramientas/catalogo-sia.js electivas             js/electivas.js a partir de la libre elección de js/oferta.js
     node herramientas/catalogo-sia.js fichas                js/sia.js (fichas de datos.js) a partir de js/oferta.js

   Lo que sigue sin poder hacer: saber qué llevas aprobado (eso lo marcas en la
   app) ni inscribir nada.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const ARCHIVO = path.join(RAIZ, 'js/oferta.js');

/* La carrera se lee de js/carrera.js (plan del SIA, sede, facultad). */
const CARRERA = (() => {
  const vm = require('vm'), ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(RAIZ, 'js/carrera.js'), 'utf8') + ';this.C = CARRERA', ctx);
  return ctx.C;
})();

const BASE = 'https://sia.unal.edu.co';
const RUTA = '/Catalogo/facespublico/public/servicioPublico.jsf';
const INICIO = BASE + RUTA + '?taskflowId=task-flow-AC_CatalogoAsignaturas';
/* Ojo: con un User-Agent de navegador real, ADF responde una página «loopback»
   (redirección por JavaScript con _afrLoop) en vez del formulario. Con un agente
   sencillo entrega el formulario directamente. */
const NAVEGADOR = CARRERA.agente + ' (herramientas/catalogo-sia.js)';
const PAUSA_MS = 300;

/* Valores del formulario para el pregrado, según js/carrera.js. Los valores
   de las listas son índices, no códigos, así que se buscan por el texto de la
   opción antes de usarlos (ver `elegirPor`). */
const SEL = {
  nivel: { id: 'soc1', texto: /^Pregrado$/ },
  sede: { id: 'soc9', texto: CARRERA.sede },
  facultad: { id: 'soc2', texto: CARRERA.facultad },
  plan: { id: 'soc3', texto: new RegExp('^' + CARRERA.plan + ' ') },
  tipologia: { id: 'soc4' },
  // Solo para libre elección:
  modoLibre: { id: 'soc5', texto: /^Por facultad y plan$/ },
  sedeLibre: { id: 'soc10', texto: CARRERA.sede },
  facultadLibre: { id: 'soc6' },
  planLibre: { id: 'soc7' },
};
const TIP_TODAS = /^TODAS MENOS/;
const TIP_LIBRE = /^LIBRE ELECCI/;
const PLAN_CARRERA = CARRERA.plan;
const COMPONENTE_LIBRE = '2CLE';

const dormir = ms => new Promise(r => setTimeout(r, ms));

/* ------------------------------------------------------------ texto ---- */
const ENTIDADES = {
  nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", ordm: 'º', ordf: 'ª',
  aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú', uuml: 'ü', ntilde: 'ñ',
  Aacute: 'Á', Eacute: 'É', Iacute: 'Í', Oacute: 'Ó', Uacute: 'Ú', Uuml: 'Ü', Ntilde: 'Ñ',
  iquest: '¿', iexcl: '¡', deg: '°', mdash: '—', ndash: '–', hellip: '…',
  laquo: '«', raquo: '»', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’',
};
const decodificar = t => String(t)
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&([a-zA-Z]+);/g, (m, n) => ENTIDADES[n] !== undefined ? ENTIDADES[n] : m);
const texto = h => decodificar(String(h).replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '')).replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').trim();
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* ------------------------------------------------------- cliente ADF ---- */
class Catalogo {
  constructor() { this.cookies = new Map(); this.viewState = null; this.form = {}; }

  guardarCookies(h) {
    const lista = h.getSetCookie ? h.getSetCookie() : [];
    for (const c of lista) { const [k, v] = c.split(';')[0].split('='); this.cookies.set(k, v); }
  }
  cabeceraCookies() { return [...this.cookies].map(([k, v]) => k + '=' + v).join('; '); }

  /** Carga la página inicial y toma la sesión y el ViewState. */
  async iniciar() {
    const r = await fetch(INICIO, { headers: { 'user-agent': NAVEGADOR }, signal: AbortSignal.timeout(60000) });
    if (!r.ok) throw new Error('HTTP ' + r.status + ' al abrir el catálogo');
    this.guardarCookies(r.headers);
    const html = await r.text();
    const vs = html.match(/javax\.faces\.ViewState" value="([^"]*)"/);
    if (!vs) throw new Error('La página del catálogo no trae ViewState: ¿está en mantenimiento?');
    this.viewState = vs[1];
    this.form = {};
    return html;
  }

  /** Una petición parcial ADF: `evento` es el id del componente que la dispara. */
  async ppr(evento, tipo = 'valueChange') {
    const cuerpo = new URLSearchParams({
      ...this.form,
      'org.apache.myfaces.trinidad.faces.FORM': 'f1',
      'Adf-Window-Id': 'winnoloop',
      'javax.faces.ViewState': this.viewState,
      event: evento,
      ['event.' + evento]: `<m xmlns="http://oracle.com/richClient/comm"><k v="type"><s>${tipo}</s></k></m>`,
      'oracle.adf.view.rich.PROCESS': evento,
    });
    const r = await fetch(BASE + RUTA, {
      method: 'POST', body: cuerpo, redirect: 'manual', signal: AbortSignal.timeout(60000),
      headers: {
        'user-agent': NAVEGADOR, cookie: this.cabeceraCookies(), referer: INICIO,
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Adf-Rich-Message': 'true', 'Adf-Ajax-Request': 'true',
      },
    });
    this.guardarCookies(r.headers);
    const xml = await r.text();
    if (r.status !== 200 || !/<partial-response>/.test(xml)) {
      throw new Error(`Respuesta inesperada del catálogo (HTTP ${r.status}): ${xml.replace(/\s+/g, ' ').slice(0, 120)}`);
    }
    if (/<redirect|sesión ha expirado|session has expired/i.test(xml)) throw new Error('Sesión del catálogo caducada');
    const vs = xml.match(/<update id="javax\.faces\.ViewState"><!\[CDATA\[([^\]]*)\]\]>/);
    if (vs) this.viewState = vs[1];
    await dormir(PAUSA_MS);
    return xml;
  }

  /** Opciones de una lista desplegable del formulario dentro de una respuesta. */
  static opciones(xml, id) {
    const m = xml.match(new RegExp('<select[^>]*id="' + esc(id) + '::content"[^>]*>([\\s\\S]*?)</select>'));
    if (!m) return null;
    return [...m[1].matchAll(/<option[^>]*value="([^"]*)"[^>]*>([^<]*)<\/option>/g)]
      .map(o => ({ valor: o[1], texto: texto(o[2]) }));
  }

  /** Elige un valor en el desplegable `campo` y devuelve las opciones que
      aparecen en `siguiente` (el desplegable dependiente). */
  async elegir(campo, valor, siguiente) {
    const id = 'pt1:r1:0:' + SEL[campo].id;
    this.form[id] = valor;
    const xml = await this.ppr(id);
    return siguiente ? Catalogo.opciones(xml, 'pt1:r1:0:' + SEL[siguiente].id) : xml;
  }

  /** Busca en `opciones` la que casa con `patron` y la elige. */
  async elegirPor(campo, opciones, patron, siguiente) {
    const op = (opciones || []).find(o => patron.test(o.texto));
    if (!op) throw new Error(`No aparece la opción ${patron} en «${campo}». Opciones: ${(opciones || []).map(o => o.texto).join(' | ')}`);
    return this.elegir(campo, op.valor, siguiente);
  }

  /** Recorre nivel → sede → facultad → plan y deja el formulario listo para
      elegir tipología. Devuelve las tipologías disponibles. */
  async irAlPlan() {
    const html = await this.iniciar();
    const niveles = Catalogo.opciones(html, 'pt1:r1:0:' + SEL.nivel.id);
    const sedes = await this.elegirPor('nivel', niveles, SEL.nivel.texto, 'sede');
    const facultades = await this.elegirPor('sede', sedes, SEL.sede.texto, 'facultad');
    const planes = await this.elegirPor('facultad', facultades, SEL.facultad.texto, 'plan');
    return this.elegirPor('plan', planes, SEL.plan.texto, 'tipologia');
  }

  /** Pulsa «Mostrar» y devuelve las filas de la tabla de resultados. */
  async buscar() {
    const xml = await this.ppr('pt1:r1:0:cb1', 'action');
    return Catalogo.filas(xml);
  }

  static filas(xml) {
    return [...xml.matchAll(/<tr role="row" _afrRK="(\d+)"[^>]*>([\s\S]*?)<\/tr>/g)].map(m => {
      const c = [...m[2].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(t => texto(t[1]));
      return { fila: +m[1], codigo: c[0], nombre: c[1], creditos: +c[2] || 0, tipologia: c[3], descripcion: c[4] || '' };
    });
  }

  /** Abre el detalle de la fila `n` de la última búsqueda, lo parsea y vuelve. */
  async detalle(n, codigoEsperado) {
    const xml = await this.ppr(`pt1:r1:0:t4:${n}:cl2`, 'action');
    const d = parsearDetalle(xml);
    if (!d.prefijo) throw new Error(`La fila ${n} no abrió una ficha (respuesta de ${xml.length} bytes)`);
    await this.ppr(d.prefijo + 'cb4', 'action');   // Volver a la lista
    delete d.prefijo;
    /* Si la ficha no es la de la fila pedida, la sesión está desincronizada
       (pasa tras un error a mitad de camino): mejor reiniciar que guardar mal. */
    if (codigoEsperado && codigoBase(d.codigo) !== codigoBase(codigoEsperado)) {
      throw new Error(`La fila ${n} (${codigoEsperado}) abrió otra ficha (${d.codigo} ${d.nombre})`);
    }
    return d;
  }
}

/* -------------------------------------------------------- detalle ---- */
const DIAS = { LUNES: 1, MARTES: 2, MIÉRCOLES: 3, MIERCOLES: 3, JUEVES: 4, VIERNES: 5, SÁBADO: 6, SABADO: 6, DOMINGO: 7 };

/** Trozos de `xml` que empiezan por un contenedor con id `prefijo:<n>:<sufijo>`,
    agrupados por n. Sirve para recorrer las listas iteradas de ADF. */
function porIndice(xml, prefijo, sufijo) {
  const re = new RegExp('id="' + esc(prefijo) + ':(\\d+):' + esc(sufijo) + '"', 'g');
  const idx = [...xml.matchAll(re)];
  return idx.map((m, i) => ({ n: +m[1], html: xml.slice(m.index, i + 1 < idx.length ? idx[i + 1].index : undefined) }));
}
const campo = (html, id) => { const m = html.match(new RegExp('id="' + esc(id) + '">([\\s\\S]*?)</span>')); return m ? texto(m[1]) : ''; };

function parsearDetalle(xml) {
  /* El prefijo de la región cambia en cada ficha abierta dentro de la misma
     sesión (pt1:r1:1:, pt1:r1:2:, …): ADF numera las instancias del flujo. */
  const mp = xml.match(/id="(pt1:r1:\d+:)t2:w-titulo"/);
  const P = mp ? mp[1] : 'pt1:r1:1:';
  const titulo = texto((xml.match(/<h2>([\s\S]*?)<\/h2>/) || [, ''])[1]);
  const mt = titulo.match(/^(.*)\(([^()]+)\)\s*$/);
  const d = {
    prefijo: mp ? P : null,
    codigo: mt ? mt[2].trim() : '', nombre: mt ? mt[1].trim() : titulo,
    tipologia: campo(xml, P + 'ot2'), creditos: +campo(xml, P + 'ot1') || 0, plan: campo(xml, P + 'ot18'),
    actividades: [],
  };
  for (const act of porIndice(xml, P + 'i2', 't3:w-titulo')) {
    const nombreAct = texto((act.html.match(/<h3>([\s\S]*?)<\/h3>/) || [, ''])[1]);
    const grupos = [];
    for (const g of porIndice(act.html, P + 'i2:' + act.n + ':i3', 'sdh2')) {
      const G = `${P}i2:${act.n}:i3:${g.n}:`;
      const nombreGrupo = texto((g.html.match(/class="af_showDetailHeader_title-text0[^"]*">([\s\S]*?)<\/h2>/) || [, ''])[1]);
      const profesores = [...g.html.matchAll(new RegExp('id="' + esc(G) + 'i4:\\d+:ot8">([\\s\\S]*?)</span>', 'g'))]
        .map(m => texto(m[1]).replace(/\.\s*$/, '')).filter(p => p && !/^No informado/i.test(p));
      const sesiones = [];
      for (const s of porIndice(g.html, G + 'i5', 'pgl33')) {
        const S = `${G}i5:${s.n}:`;
        const desde = campo(s.html, S + 'ot12'), hasta = campo(s.html, S + 'ot14');
        for (const h of porIndice(s.html, S + 'i111', 'pgl10')) {
          const H = `${S}i111:${h.n}:`;
          const franja = campo(h.html, H + 'ot10');
          const mf = franja.match(/^([A-ZÁÉÍÓÚ]+)\s+de\s+(\d{1,2}:\d{2})\s+a\s+(\d{1,2}:\d{2})/i);
          const lugar = [...h.html.matchAll(new RegExp('id="' + esc(H) + 'i6:\\d+:(ot2[7-9]|ot30)">([\\s\\S]*?)</span>', 'g'))]
            .map(m => texto(m[2]).replace(/\.\s*$/, ''));
          sesiones.push({
            dia: mf ? (DIAS[mf[1].toUpperCase()] || 0) : 0, diaTexto: mf ? mf[1] : franja,
            inicio: mf ? mf[2].padStart(5, '0') : '', fin: mf ? mf[3].padStart(5, '0') : '',
            lugar: lugar[0] || '', salon: lugar[1] || '', edificio: lugar[2] || '',
            desde, hasta,
          });
        }
      }
      grupos.push({
        grupo: nombreGrupo.replace(/^\([^)]*\)\s*/, '').trim() || nombreGrupo,
        codigoGrupo: (nombreGrupo.match(/^\(([^)]*)\)/) || [, ''])[1],
        profesores,
        facultad: campo(g.html, G + 'ot53'),
        duracion: campo(g.html, G + 'ot15').replace(/^Duración:\s*/i, ''),
        jornada: campo(g.html, G + 'ot26'),
        cupos: +campo(g.html, G + 'ot24') || 0,
        sesiones,
      });
    }
    d.actividades.push({ nombre: nombreAct, grupos });
  }
  return d;
}

/* ------------------------------------------------------- comandos ---- */
const codigoBase = c => String(c).split('-')[0].trim();
const sinProgramar = nombre => /ASIGNATURA SIN PROGRAMAR/i.test(nombre);
const limpiarNombre = nombre => nombre.replace(/\s*ASIGNATURA SIN PROGRAMAR\s*$/i, '').trim();

/** Ejecuta `fn(cat)` reintentando desde cero si la sesión ADF se cae. */
async function conSesion(fn, intentos = 3) {
  let ultimo;
  for (let i = 1; i <= intentos; i++) {
    const cat = new Catalogo();
    try { return await fn(cat); }
    catch (e) { ultimo = e; process.stderr.write(`  ⚠ ${e.message} — reintento ${i}/${intentos}\n`); await dormir(2000 * i); }
  }
  throw ultimo;
}

/** Lista del plan de la carrera, con todas las tipologías menos libre elección. */
async function listaPlan(cat) {
  const tipologias = await cat.irAlPlan();
  await cat.elegirPor('tipologia', tipologias, TIP_TODAS);
  return cat.buscar();
}

/** Lista de libre elección ofrecida por un plan (2CLE = componente de la sede). */
async function listaLibre(cat, planCod = COMPONENTE_LIBRE) {
  const tipologias = await cat.irAlPlan();
  const xml = await cat.elegirPor('tipologia', tipologias, TIP_LIBRE);
  const modos = Catalogo.opciones(xml, 'pt1:r1:0:' + SEL.modoLibre.id);
  const sedes = await cat.elegirPor('modoLibre', modos, SEL.modoLibre.texto, 'sedeLibre');
  const facultades = await cat.elegirPor('sedeLibre', sedes, SEL.sedeLibre.texto, 'facultadLibre');
  // El plan puede estar en cualquier facultad: se recorren hasta dar con él.
  for (const f of facultades.filter(o => o.valor !== '')) {
    const planes = await cat.elegir('facultadLibre', f.valor, 'planLibre');
    const p = (planes || []).find(o => o.texto.startsWith(planCod + ' '));
    if (p) { await cat.elegir('planLibre', p.valor); return { plan: p.texto, facultad: f.texto, filas: await cat.buscar() }; }
  }
  throw new Error('No hay ningún plan con código ' + planCod);
}

/** Descarga los detalles (grupos y horarios) de todas las filas de una lista.
    `navegar(cat)` debe dejar la lista en pantalla y devolver sus filas. Si el
    servidor falla a mitad (502, sesión caducada…), se abre otra sesión, se vuelve
    a la lista y se continúa desde la fila en la que iba. */
async function detalles(navegar, etiqueta, maxFallos = 8) {
  const out = [];
  let cat = null, filas = null, fallos = 0;
  while (true) {
    try {
      if (!cat) {
        cat = new Catalogo();
        const nuevas = await navegar(cat);
        // Si la lista cambió respecto a la anterior, lo descargado ya no está alineado.
        if (filas && (nuevas.length !== filas.length || nuevas.some((f, i) => f.codigo !== filas[i].codigo))) {
          process.stderr.write('  ⚠ La lista cambió entre sesiones: se empieza de nuevo\n');
          out.length = 0;
        }
        filas = nuevas;
      }
      while (out.length < filas.length) {
        const f = filas[out.length];
        process.stderr.write(`\r  ${etiqueta}: ${out.length + 1}/${filas.length}  ${f.codigo} ${f.nombre.slice(0, 40).padEnd(40)}`);
        const d = await cat.detalle(f.fila, f.codigo);
        out.push(Object.assign({}, f, d, { nombre: limpiarNombre(f.nombre), sinProgramar: sinProgramar(f.nombre) }));
      }
      process.stderr.write('\n');
      return { filas, detalles: out };
    } catch (e) {
      if (++fallos > maxFallos) throw e;
      process.stderr.write(`\n  ⚠ ${e.message.slice(0, 100)} — nueva sesión y sigo en ${out.length + 1} (${fallos}/${maxFallos})\n`);
      cat = null;
      await dormir(3000 * fallos);
    }
  }
}

const grupoTexto = g => {
  const ses = g.sesiones.map(s => `${s.diaTexto.slice(0, 3)} ${s.inicio}-${s.fin}${s.salon ? ' ' + s.salon : ''}`).join(', ');
  return `  · ${g.grupo}${g.profesores.length ? ' — ' + g.profesores.join(', ') : ''} — cupos ${g.cupos}${ses ? '\n      ' + ses : ''}`;
};
function imprimirDetalle(d) {
  console.log(`\n${d.nombre} (${d.codigo}) — ${d.creditos} cr — ${d.tipologia}`);
  if (!d.actividades.length) console.log('  Sin grupos programados.');
  for (const a of d.actividades) { console.log(' ' + a.nombre); a.grupos.forEach(g => console.log(grupoTexto(g))); }
}

async function cmdPlan() {
  const filas = await conSesion(listaPlan);
  for (const f of filas) console.log(`${f.codigo.padEnd(10)} ${String(f.creditos).padStart(2)} cr  ${f.tipologia.padEnd(26)} ${f.nombre}`);
  console.log(`\n${filas.length} asignaturas del plan ${PLAN_CARRERA} (sin libre elección)`);
}

async function cmdVer(cod) {
  await conSesion(async cat => {
    const filas = await listaPlan(cat);
    let f = filas.find(x => codigoBase(x.codigo) === codigoBase(cod));
    if (!f) {
      const le = await listaLibre(cat);
      f = le.filas.find(x => codigoBase(x.codigo) === codigoBase(cod));
      if (!f) throw new Error(`El código ${cod} no está en el plan ${PLAN_CARRERA} ni en el componente ${COMPONENTE_LIBRE}`);
    }
    imprimirDetalle(await cat.detalle(f.fila));
  });
}

async function cmdLibre(planCod) {
  const r = await conSesion(cat => listaLibre(cat, planCod || COMPONENTE_LIBRE));
  for (const f of r.filas) console.log(`${f.codigo.padEnd(10)} ${String(f.creditos).padStart(2)} cr  ${f.nombre}`);
  console.log(`\n${r.filas.length} asignaturas de libre elección — ${r.plan} (${r.facultad})`);
}

/** Convierte una lista de detalles a { código: ficha } sin duplicados. */
function indexar(lista, origen) {
  const out = {};
  for (const d of lista) {
    const cod = codigoBase(d.codigo);
    if (out[cod]) { if (!out[cod].origen.includes(origen)) out[cod].origen.push(origen); continue; }
    out[cod] = {
      cod, codigoSIA: d.codigo, nombre: d.nombre, creditos: d.creditos, tipologia: d.tipologia,
      descripcion: d.descripcion, sinProgramar: d.sinProgramar, origen: [origen],
      actividades: d.actividades,
    };
  }
  return out;
}

async function cmdSincronizar(opts) {
  const fecha = new Date().toISOString().slice(0, 10);
  console.error(`Plan de ${CARRERA.nombre} (${PLAN_CARRERA}, todas las tipologías menos libre elección)…`);
  const plan = (await detalles(listaPlan, 'plan')).detalles;
  let libre = [], planesLibre = [];
  if (!opts.sinLibre) {
    console.error(`Libre elección: componente ${COMPONENTE_LIBRE} de la sede…`);
    let nombrePlan = COMPONENTE_LIBRE;
    libre = (await detalles(async cat => { const l = await listaLibre(cat); nombrePlan = l.plan; return l.filas; }, 'libre')).detalles;
    planesLibre.push(nombrePlan);
  }
  const oferta = Object.assign(indexar(plan, 'plan ' + PLAN_CARRERA), indexar(libre, COMPONENTE_LIBRE));
  // Si un código está en ambos, gana la ficha del plan pero se anotan los dos orígenes.
  for (const d of libre) { const c = codigoBase(d.codigo); if (oferta[c] && !oferta[c].origen.includes(COMPONENTE_LIBRE)) oferta[c].origen.push(COMPONENTE_LIBRE); }

  const periodo = periodoDe(oferta);
  const nGrupos = Object.values(oferta).reduce((s, a) => s + a.actividades.reduce((t, x) => t + x.grupos.length, 0), 0);
  const conGrupos = Object.values(oferta).filter(a => a.actividades.some(x => x.grupos.length)).length;
  const salida = `/* ============================================================================
   oferta.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Oferta del semestre: grupos, profesores, horarios, salones y cupos.
   Fuente: «Catálogo de asignaturas» público del SIA (acceso anónimo, sin sesión).
   Consultado el ${fecha}. Regenerar con: node herramientas/catalogo-sia.js sincronizar

   Contiene el plan ${PLAN_CARRERA} (${CARRERA.nombre}, todas las tipologías menos libre elección)
   ${planesLibre.length ? 'y la libre elección del componente ' + planesLibre.join(', ') + ' de la sede Bogotá' : 'sin libre elección'}.
   ${Object.keys(oferta).length} asignaturas, ${conGrupos} con grupos programados, ${nGrupos} grupos.
   Los cupos son los del momento de la consulta; cambian a diario en inscripción.
   ========================================================================== */

const OFERTA_CONSULTADO = '${fecha}';
const OFERTA_PERIODO = ${JSON.stringify(periodo)};

/* código -> { cod, nombre, creditos, tipologia, actividades: [{ nombre, grupos: [
     { grupo, profesores, cupos, jornada, sesiones: [{ dia (1=lunes), inicio, fin, salon, edificio, desde, hasta }] } ] }] } */
const OFERTA = ${JSON.stringify(oferta, null, 1)};
`;
  fs.writeFileSync(ARCHIVO, salida);
  console.error(`\nEscrito ${path.relative(RAIZ, ARCHIVO)}: ${Object.keys(oferta).length} asignaturas, ${conGrupos} con grupos, ${nGrupos} grupos. Periodo ${periodo || '?'}.`);
}

/** Escribe js/electivas.js a partir de la libre elección de js/oferta.js (componente
    2CLE), con el formato que espera la pestaña Electivas de la app. Sirve cuando el
    catálogo «Contenido de asignaturas» (herramientas/electivas.js) no responde. */
function cmdElectivas() {
  const vm = require('vm'), ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(ARCHIVO, 'utf8') + ';this.O = OFERTA; this.F = OFERTA_CONSULTADO', ctx);
  const lista = Object.values(ctx.O).filter(a => a.origen.includes(COMPONENTE_LIBRE)).map(a => ({
    cod: a.cod, nombre: a.nombre, vigente: true, unidad: null, creditos: a.creditos, horas: null, validable: null,
    planes: [{ cod: COMPONENTE_LIBRE, nombre: 'COMPONENTE DE LIBRE ELECCIÓN' }],
    enPlan: a.origen.some(o => o.startsWith('plan ')), sinProgramar: !!a.sinProgramar,
    descripcion: a.descripcion || null,
  })).sort((x, y) => x.nombre.localeCompare(y.nombre, 'es'));
  const salida = `/* ============================================================================
   electivas.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Electivas de LIBRE ELECCIÓN: las ${lista.length} asignaturas del componente ${COMPONENTE_LIBRE} de la
   sede Bogotá según el Catálogo de asignaturas del SIA (consultado el ${ctx.F}).
   Regenerar con: node herramientas/catalogo-sia.js sincronizar && node herramientas/catalogo-sia.js electivas
   ========================================================================== */

const ELECTIVAS_ACTUALIZADO = '${ctx.F}';
const ELECTIVAS_FUENTE = 'electivas de libre elección del componente ${COMPONENTE_LIBRE} de la sede, según el Catálogo del SIA';

const ELECTIVAS = ${JSON.stringify(lista, null, 1)};
`;
  fs.writeFileSync(path.join(RAIZ, 'js/electivas.js'), salida);
  console.error(`Escrito js/electivas.js: ${lista.length} electivas.`);
}

/** Escribe js/sia.js (fichas «código|nombre» que usa la app) a partir de js/oferta.js,
    para las asignaturas de js/datos.js (plan y catálogo). Es un sustituto de
    `herramientas/sia.js enriquecer` mientras «Contenido de asignaturas» no responda:
    trae créditos y descripción, pero no temario ni horas. */
function cmdFichas() {
  const vm = require('vm'), ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(ARCHIVO, 'utf8') + ';this.O = OFERTA; this.F = OFERTA_CONSULTADO', ctx);
  const d = vm.createContext({});
  const { PLAN_BASE, CATALOGO } = vm.runInContext(fs.readFileSync(path.join(RAIZ, 'js/datos.js'), 'utf8') + '\n;({ PLAN_BASE, CATALOGO })', d);
  const fichas = {};
  let n = 0;
  for (const a of [...PLAN_BASE, ...CATALOGO]) {
    if (!a.cod) continue;
    const o = ctx.O[codigoBase(a.cod)];
    if (!o) continue;
    fichas[a.cod + '|' + a.nombre] = {
      cod: a.cod, nombre: o.nombre, vigente: !o.sinProgramar, unidad: null, creditos: o.creditos,
      semanas: null, horas: null, validable: null, asistencia: null, libreEleccion: null,
      descripcion: o.descripcion || null, contenido: null, tipologia: o.tipologia, via: 'catalogo-sia',
    };
    n++;
  }
  const salida = `/* ============================================================================
   sia.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fichas derivadas del Catálogo de asignaturas del SIA (js/oferta.js), consultado
   el ${ctx.F}. Traen créditos, tipología y descripción; no temario ni horas.
   Cuando «Contenido de asignaturas» vuelva a responder, sustituir con:
   node herramientas/sia.js enriquecer
   Regenerar con: node herramientas/catalogo-sia.js fichas
   ========================================================================== */

const SIA_CONSULTADO = '${ctx.F}';

/* "código|nombre de la malla" -> ficha */
const SIA = ${JSON.stringify(fichas, null, 1)};
`;
  fs.writeFileSync(path.join(RAIZ, 'js/sia.js'), salida);
  console.error(`Escrito js/sia.js: ${n} fichas.`);
}

/** Deduce el periodo académico (p.ej. 2026-2) de las fechas de las sesiones. */
function periodoDe(oferta) {
  const cuenta = {};
  for (const a of Object.values(oferta)) for (const x of a.actividades) for (const g of x.grupos) for (const s of g.sesiones) {
    const m = (s.desde || '').match(/(\d{2})\/(\d{2})\/(\d{4})/); if (!m) continue;
    const p = m[3] + '-' + (+m[2] >= 7 ? '2' : '1'); cuenta[p] = (cuenta[p] || 0) + 1;
  }
  return Object.entries(cuenta).sort((a, b) => b[1] - a[1]).map(e => e[0])[0] || null;
}

/* ------------------------------------------------------------- main ---- */
if (require.main === module) {
  const [cmd, arg, ...resto] = process.argv.slice(2);
  const opts = { sinLibre: [arg, ...resto].includes('--sin-libre') };
  const run = {
    plan: () => cmdPlan(),
    ver: () => arg ? cmdVer(arg) : Promise.reject(new Error('Falta el código')),
    libre: () => cmdLibre(arg && !arg.startsWith('--') ? arg : undefined),
    sincronizar: () => cmdSincronizar(opts),
    electivas: () => Promise.resolve(cmdElectivas()),
    fichas: () => Promise.resolve(cmdFichas()),
  }[cmd];
  if (!run) {
    console.log('Uso:\n  node herramientas/catalogo-sia.js plan\n  node herramientas/catalogo-sia.js ver <código>\n  node herramientas/catalogo-sia.js libre [plan]\n  node herramientas/catalogo-sia.js sincronizar [--sin-libre]\n  node herramientas/catalogo-sia.js electivas\n  node herramientas/catalogo-sia.js fichas');
    process.exit(cmd ? 1 : 0);
  }
  run().catch(e => { console.error('Error:', e.message); process.exit(1); });
}

module.exports = { Catalogo, parsearDetalle, listaPlan, listaLibre };
