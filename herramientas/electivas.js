/* ============================================================================
   electivas.js — catálogo de electivas de LIBRE ELECCIÓN
   ----------------------------------------------------------------------------
   No confundir con las optativas:

     · Libre elección (electivas) — 32 créditos. Casi cualquier asignatura de la
       Universidad. El SIA las marca en «Planes Relacionados» con
       2PEL PROGRAMA DE ELECTIVAS (L)  o  2CLE COMPONENTE DE LIBRE ELECCIÓN.
     · Fundamentación optativa   —  3 créditos.
     · Disciplinar optativa      — 18 créditos, por área de química.

   Por qué se busca por temas y no se descarga una lista completa: el listado de
   electivas de losestudiantes.com se carga con scroll infinito y solo entrega
   18 de las 120 sin sesión iniciada; y el SIA no permite listar por plan, solo
   buscar por nombre. Así que se barren temas y se conserva lo que el SIA marca
   como libre elección. El resultado se acumula: cada corrida añade lo nuevo.

   Uso:
     node herramientas/electivas.js                    barrido con los temas por defecto
     node herramientas/electivas.js buscar <tema>...   añade los temas que indiques
     node herramientas/electivas.js listar             muestra lo que ya hay guardado
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RAIZ = path.resolve(__dirname, '..');
const ARCHIVO = path.join(RAIZ, 'js/electivas.js');
const SIA = 'https://siabog.unal.edu.co/academia/apoyo-administrativo/ConsultaContenidos.do';
const PAUSA_MS = 350;
/* Tope de fichas nuevas que se revisan por tema, para no disparar el barrido. */
const MAX_POR_TEMA = 45;

/* Marcadores del SIA que identifican una asignatura de libre elección. */
const PLANES_LIBRE = ['2PEL', '2CLE'];
/* Plan de la carrera (js/carrera.js): sirve para destacar las más cercanas a ella. */
const PLAN_QUIMICA = (() => { const c = {}; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(RAIZ, 'js/carrera.js'), 'utf8') + ';this.p = CARRERA.plan', c); return c.p; })();

/* Temas del barrido por defecto: cubren las líneas donde suele haber electivas
   interesantes para alguien de la carrera, más las de formación general. */
const TEMAS = [
  'arte', 'musica', 'cine', 'literatura', 'narrativa', 'escritura', 'lectura',
  'historia', 'filosofia', 'etica', 'politica', 'sociedad', 'cultura', 'genero',
  'economia', 'administracion', 'emprendimiento', 'finanzas', 'derecho',
  'ambiente', 'sostenible', 'energia', 'clima', 'agua', 'residuos',
  'salud', 'nutricion', 'alimentos', 'farmacia', 'toxicologia',
  'biologia', 'ecologia', 'genetica', 'microbiologia', 'biotecnologia',
  'datos', 'programacion', 'computacion', 'estadistica', 'modelamiento',
  'materiales', 'nanotecnologia', 'catalisis', 'polimeros', 'simulacion',
  'ingles', 'frances', 'aleman', 'idioma', 'deporte', 'yoga',
  'investigacion', 'comunicacion', 'divulgacion', 'pedagogia',
];

const dormir = ms => new Promise(r => setTimeout(r, ms));

/* --- decodificación del SIA (ISO-8859-1 + entidades con nombre) ------------ */
const SEP = '';
const ENTIDADES = {
  nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", ordm: 'º', ordf: 'ª',
  aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú', uuml: 'ü', ntilde: 'ñ',
  Aacute: 'Á', Eacute: 'É', Iacute: 'Í', Oacute: 'Ó', Uacute: 'Ú', Uuml: 'Ü', Ntilde: 'Ñ',
  iquest: '¿', iexcl: '¡', deg: '°', mdash: '—', ndash: '–', hellip: '…',
  laquo: '«', raquo: '»', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’',
};
const limpiar = t => t
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&([a-zA-Z]+);/g, (m, n) => ENTIDADES[n] !== undefined ? ENTIDADES[n] : m)
  .replace(/\s+/g, ' ').trim();

const ETIQUETAS = new Set(['asignatura vigente', 'nombre asignatura', 'unidad académica básica',
  'número de semanas', 'horas presenciales', 'créditos', 'validable', 'porcentaje de asistencia',
  'libre elección', 'descripción', 'planes relacionados', 'contenido', 'codigo', 'nombre',
  'regresar', 'versión impresión']);

async function pedir(params) {
  const url = SIA + '?' + new URLSearchParams(Object.assign(
    { action: '', idAsignatura: '', idSession_hd: '', txtIdAsignatura: '', txtNombreAsignatura: '' }, params));
  const r = await fetch(url, { headers: { 'user-agent': 'malla-curricular-unal/1.0' }, signal: AbortSignal.timeout(40000) });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return new TextDecoder('iso-8859-1').decode(await r.arrayBuffer());
}

async function buscarNombre(texto) {
  const html = await pedir({ action: 'Buscar', txtNombreAsignatura: texto });
  const out = [];
  for (const f of html.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || []) {
    const celdas = (f.match(/<td[^>]*>[\s\S]*?<\/td>/gi) || [])
      .map(c => limpiar(c.replace(/<[^>]+>/g, SEP).split(SEP).join(' ')));
    const k = celdas.findIndex(c => /^\d{6,7}$/.test(c));
    if (k >= 0 && celdas[k + 1]) out.push({ cod: celdas[k], nombre: celdas[k + 1], dependencia: celdas[k + 2] || '' });
  }
  return out;
}

async function ficha(cod) {
  const html = await pedir({ action: 'Info', idAsignatura: cod });
  const campos = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, SEP)
    .split(SEP).map(limpiar).filter(Boolean);
  const i = campos.findIndex(t => /^Información de la Asignatura$/i.test(t));
  if (i < 0) return null;
  const c = campos.slice(i + 1);

  const tras = et => {
    const k = c.findIndex(t => t.toLowerCase() === et.toLowerCase());
    if (k < 0) return null;
    const v = c[k + 1];
    return v && !ETIQUETAS.has(v.toLowerCase()) ? v : null;
  };
  const largo = (desde, hasta) => {
    const a = c.findIndex(t => t.toLowerCase() === desde.toLowerCase());
    if (a < 0) return null;
    let b = c.length;
    for (const h of hasta) {
      const k = c.findIndex((t, j) => j > a && t.toLowerCase() === h.toLowerCase());
      if (k >= 0 && k < b) b = k;
    }
    return c.slice(a + 1, b).join(' ').trim() || null;
  };

  const nombre = tras('Nombre Asignatura');
  if (!nombre) return null;

  /* «Planes Relacionados» es una tabla código/nombre; se leen los pares que
     siguen a las cabeceras «Codigo» y «Nombre». */
  const planes = [];
  const p0 = c.findIndex(t => /^Planes Relacionados$/i.test(t));
  if (p0 >= 0) {
    const fin = c.findIndex((t, j) => j > p0 && /^Contenido$/i.test(t));
    const trozo = c.slice(p0 + 1, fin < 0 ? c.length : fin).filter(t => !/^(codigo|nombre)$/i.test(t));
    for (let k = 0; k + 1 < trozo.length; k += 2)
      if (/^[0-9A-Z]{3,6}$/.test(trozo[k])) planes.push({ cod: trozo[k], nombre: trozo[k + 1] });
  }

  const num = v => { const n = parseFloat(String(v).replace(',', '.')); return Number.isFinite(n) ? n : null; };
  return {
    cod, nombre,
    vigente: /^s[ií]$/i.test(tras('Asignatura vigente') || ''),
    unidad: tras('Unidad Académica Básica'),
    creditos: num(tras('Créditos')),
    horas: num(tras('Horas presenciales')),
    validable: /^s[ií]$/i.test(tras('Validable') || ''),
    planes,
    esLibreEleccion: planes.some(p => PLANES_LIBRE.includes(p.cod)),
    enPlanQuimica: planes.some(p => p.cod === PLAN_QUIMICA),
    descripcion: largo('Descripción', ['Planes Relacionados', 'Contenido', 'Regresar']),
    contenido: largo('Contenido', ['Regresar', 'versión impresión']),
  };
}

/* -------------------------------------------------------------------------- */

function cargar() {
  if (!fs.existsSync(ARCHIVO)) return [];
  try {
    const ctx = vm.createContext({});
    return vm.runInContext(fs.readFileSync(ARCHIVO, 'utf8') + '\n;ELECTIVAS;', ctx) || [];
  } catch { return []; }
}

function guardar(lista) {
  lista.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  const fecha = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(ARCHIVO, `/* ============================================================================
   electivas.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Electivas de LIBRE ELECCIÓN (los 32 créditos), no optativas.
   Fuente: catálogo público de asignaturas del SIA Bogotá. Se conservan solo las
   que el SIA marca en «Planes Relacionados» con ${PLANES_LIBRE.join(' o ')}.
   Última actualización: ${fecha}
   Ampliar con: node herramientas/electivas.js buscar <tema>
   ========================================================================== */

const ELECTIVAS_ACTUALIZADO = '${fecha}';

const ELECTIVAS = ${JSON.stringify(lista, null, 2)};
`);
}

async function barrer(temas) {
  const lista = cargar();
  const porCod = new Map(lista.map(e => [e.cod, e]));
  const yaVistos = new Set(porCod.keys());
  let nuevas = 0, revisadas = 0;

  console.log(`Partiendo de ${lista.length} electivas guardadas.`);
  console.log(`Barriendo ${temas.length} tema(s)…\n`);

  for (const tema of temas) {
    let hallazgos;
    try { hallazgos = await buscarNombre(tema); }
    catch (e) { console.log(`  ${tema.padEnd(18)} ⚠ ${e.message}`); continue; }

    // Tope por tema: hay búsquedas que devuelven cientos de resultados y cada
    // ficha es una petición. Lo que queda fuera se avisa, no se calla.
    const todos = hallazgos.filter(h => !yaVistos.has(h.cod));
    const pendientes = todos.slice(0, MAX_POR_TEMA);
    const omitidas = todos.length - pendientes.length;
    let delTema = 0;
    for (const h of pendientes) {
      yaVistos.add(h.cod);
      revisadas++;
      try {
        const f = await ficha(h.cod);
        if (f && f.esLibreEleccion) {
          porCod.set(f.cod, f);
          nuevas++; delTema++;
        }
      } catch {}
      await dormir(PAUSA_MS);
    }
    console.log(`  ${tema.padEnd(18)} ${String(hallazgos.length).padStart(3)} resultado(s), ${String(pendientes.length).padStart(3)} revisadas, ${delTema} de libre elección${omitidas ? `  (${omitidas} sin revisar por el tope)` : ''}`);
    await dormir(PAUSA_MS);
  }

  const salida = [...porCod.values()];
  guardar(salida);
  console.log(`\n──────────────────────────────────────────────`);
  console.log(`Fichas revisadas   : ${revisadas}`);
  console.log(`Electivas nuevas   : ${nuevas}`);
  console.log(`Total en catálogo  : ${salida.length}`);
  console.log(`  del plan Química : ${salida.filter(e => e.enPlanQuimica).length}`);
  console.log(`  con descripción  : ${salida.filter(e => e.descripcion).length}`);
  console.log(`\nEscrito js/electivas.js`);
}

/**
 * Importa el listado copiado a mano del Departamento de Electivas y contrasta
 * cada código con el SIA: nombre completo (en el listado vienen recortados con
 * «…»), créditos, si sigue vigente y si de verdad cuenta como libre elección.
 */
async function importar() {
  const ruta = path.join(RAIZ, 'datos/electivas-listado.txt');
  if (!fs.existsSync(ruta)) {
    console.error(`Falta ${path.relative(RAIZ, ruta)}.`);
    process.exit(1);
  }
  const lineas = fs.readFileSync(ruta, 'utf8').split('\n')
    .map(l => l.trim()).filter(l => l && !l.startsWith('#'));

  /* El listado alterna nombre y "código - N Archivos". */
  const entradas = [];
  const descartadas = [];
  for (let i = 0; i < lineas.length - 1; i++) {
    const m = lineas[i + 1].match(/^(\S+)\s*-\s*-?\d+\s+Archivos?$/i);
    if (!m) continue;
    const cod = m[1], nombre = lineas[i];
    if (!/^\d{6,7}(-[A-Z])?$/.test(cod)) { descartadas.push(`${nombre} (código «${cod}»)`); i++; continue; }
    entradas.push({ cod, nombre });
    i++;
  }

  console.log(`${entradas.length} entradas con código válido.`);
  if (descartadas.length) console.log(`${descartadas.length} descartadas: ${descartadas.join(', ')}`);
  console.log();

  const salida = [], noVigentes = [], sinFicha = [], noSonLibre = [];
  for (let i = 0; i < entradas.length; i++) {
    const e = entradas[i];
    const pos = `[${String(i + 1).padStart(3)}/${entradas.length}]`;
    let f = null;
    try { f = await ficha(e.cod); } catch {}
    // Los códigos con sufijo de sede (1000089-B) a veces solo existen sin él.
    if (!f && e.cod.includes('-')) {
      await dormir(PAUSA_MS);
      try { f = await ficha(e.cod.split('-')[0]); } catch {}
    }

    if (!f) {
      sinFicha.push(e);
      salida.push({ cod: e.cod, nombre: e.nombre.replace(/\.\.\.$/, '').trim(), vigente: null,
        creditos: null, unidad: null, esLibreEleccion: null, enPlanQuimica: false,
        descripcion: null, contenido: null, sinFicha: true });
      console.log(`${pos} ${e.cod.padEnd(10)} —  sin ficha  ${e.nombre.slice(0, 50)}`);
      } else {
      if (!f.vigente) noVigentes.push({ ...e, real: f.nombre });
      if (!f.esLibreEleccion) noSonLibre.push({ ...e, real: f.nombre });
      salida.push(Object.assign({}, f, { cod: e.cod }));
      const marca = !f.vigente ? '✗ no vigente' : f.esLibreEleccion ? '✓ libre elección' : '· sin marca LE';
      console.log(`${pos} ${e.cod.padEnd(10)} ${String(f.creditos ?? '?').padStart(2)} cr  ${marca.padEnd(16)} ${f.nombre.slice(0, 46)}`);
    }
    if (i < entradas.length - 1) await dormir(PAUSA_MS);
  }

  guardar(salida);
  console.log(`\n──────────────────────────────────────────────`);
  console.log(`Total importadas    : ${salida.length}`);
  console.log(`Vigentes            : ${salida.filter(e => e.vigente).length}`);
  console.log(`Ya NO vigentes      : ${noVigentes.length}`);
  console.log(`Sin ficha en el SIA : ${sinFicha.length}`);
  console.log(`Marcadas libre elec.: ${salida.filter(e => e.esLibreEleccion).length}`);
  console.log(`Del plan de Química : ${salida.filter(e => e.enPlanQuimica).length}`);
  console.log(`Con descripción     : ${salida.filter(e => e.descripcion).length}`);
  if (noVigentes.length) {
    console.log(`\nYa no están vigentes (no las inscribas):`);
    for (const n of noVigentes) console.log(`  ${n.cod.padEnd(10)} ${n.real}`);
  }
  if (sinFicha.length) {
    console.log(`\nSin ficha en el catálogo público (verificar en el SIA):`);
    for (const n of sinFicha) console.log(`  ${n.cod.padEnd(10)} ${n.nombre}`);
  }
  console.log(`\nEscrito js/electivas.js`);
}

(async () => {
  const [orden, ...resto] = process.argv.slice(2);
  if (orden === 'importar') {
    await importar();
  } else if (orden === 'listar') {
    const l = cargar();
    console.log(`${l.length} electivas guardadas\n`);
    for (const e of l) console.log(`  ${e.cod}  ${String(e.creditos ?? '?').padStart(2)} cr  ${e.enPlanQuimica ? '★' : ' '} ${e.nombre}`);
  } else if (orden === 'buscar' && resto.length) {
    await barrer(resto);
  } else {
    await barrer(TEMAS);
  }
})();
