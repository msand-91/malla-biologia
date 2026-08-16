/* ============================================================================
   verificar-losestudiantes.js
   ----------------------------------------------------------------------------
   Comprueba, contra losestudiantes.com, qué códigos SIA de la malla existen y
   con qué nombre están registrados allí. Sirve para dos cosas:

     1. Enlazar cada asignatura de la app con su página de profesores y reseñas.
     2. Validar los códigos contra una tercera fuente, independiente de los dos
        PDF (que se contradicen en varios).

   Genera js/losestudiantes.js, que la app carga como un <script> normal para
   que funcione también abriendo index.html con file://.

   Uso:  node herramientas/verificar-losestudiantes.js
         node herramientas/verificar-losestudiantes.js --catalogo   (+ optativas)

   Hace una petición por código, en serie y con pausa entre ellas.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RAIZ = path.resolve(__dirname, '..');
const BASE = 'https://losestudiantes.com/universidad-nacional/courses/';
const PAUSA_MS = 400;
const REINTENTOS = 2;

/* Título genérico = el código no existe en su base. */
const NO_EXISTE = /^Los Estudiantes \| Empoderamiento Estudiantil$/;

const dormir = ms => new Promise(r => setTimeout(r, ms));

/** Carga PLAN_BASE y CATALOGO desde js/datos.js sin necesitar un navegador. */
function cargarDatos() {
  const ctx = vm.createContext({});
  const src = fs.readFileSync(path.join(RAIZ, 'js/datos.js'), 'utf8')
    + '\n;({ PLAN_BASE, CATALOGO });';
  return vm.runInContext(src, ctx);
}

/** Las materias renumeradas (serie 2029xxx) están indexadas por nombre. */
const aSlug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function consultar(cod) {
  for (let i = 0; i <= REINTENTOS; i++) {
    try {
      const r = await fetch(BASE + cod, { headers: { 'user-agent': 'malla-curricular-unal/1.0' } });
      if (r.status === 429 || r.status >= 500) { await dormir(2000 * (i + 1)); continue; }
      const html = await r.text();
      const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
      const titulo = m ? m[1].trim() : '';
      if (NO_EXISTE.test(titulo)) return { existe: false };
      // Formato: "Nombre De La Materia - 1234567 | Los Estudiantes"
      const t = titulo.match(/^(.*?)\s*-\s*(\S+)\s*\|/);
      return { existe: true, nombre: t ? t[1].trim() : titulo, codConfirmado: t ? t[2] : null };
    } catch (e) {
      if (i === REINTENTOS) return { error: e.message };
      await dormir(1500 * (i + 1));
    }
  }
  return { error: 'sin respuesta' };
}

/** ¿Los dos nombres se refieren a la misma asignatura? Comparación laxa. */
const normalizar = s => (s || '')
  .toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/laboratorio/g, 'lab').replace(/[^a-z0-9]+/g, ' ').trim();

function parecidos(a, b) {
  const x = new Set(normalizar(a).split(' ').filter(w => w.length > 2));
  const y = new Set(normalizar(b).split(' ').filter(w => w.length > 2));
  if (!x.size || !y.size) return false;
  const comunes = [...x].filter(w => y.has(w)).length;
  return comunes / Math.min(x.size, y.size) >= 0.6;
}

(async () => {
  const { PLAN_BASE, CATALOGO } = cargarDatos();
  const conCatalogo = process.argv.includes('--catalogo');

  const objetivos = [
    ...PLAN_BASE.filter(a => a.cod).map(a => ({ cod: a.cod, nombre: a.nombre, origen: 'malla' })),
    ...(conCatalogo ? CATALOGO.map(c => ({ cod: c.cod, nombre: c.nombre, origen: 'catálogo' })) : []),
  ];
  // Un código puede repetirse (el catálogo tiene duplicados): se consulta una vez.
  const unicos = [...new Map(objetivos.map(o => [o.cod, o])).values()];

  console.log(`Consultando ${unicos.length} códigos en losestudiantes.com…\n`);
  const salida = {}, discrepancias = [], ausentes = [], fallos = [];

  for (let i = 0; i < unicos.length; i++) {
    const o = unicos[i];
    let ruta = o.cod;
    let r = await consultar(o.cod);
    // Si el código no está indexado, se intenta con el nombre convertido en slug.
    if (!r.error && !r.existe) {
      await dormir(PAUSA_MS);
      const slug = aSlug(o.nombre);
      const r2 = await consultar(slug);
      if (r2.existe) { r = r2; ruta = slug; }
    }
    const pos = `[${String(i + 1).padStart(3)}/${unicos.length}]`;

    if (r.error) { fallos.push({ ...o, error: r.error }); console.log(`${pos} ${o.cod}  ⚠ ${r.error}`); }
    else if (!r.existe) { ausentes.push(o); console.log(`${pos} ${o.cod}  —  no está registrado (${o.nombre})`); }
    else {
      salida[o.cod] = { nombre: r.nombre, url: BASE + ruta };
      const coincide = parecidos(o.nombre, r.nombre);
      if (!coincide) discrepancias.push({ ...o, alla: r.nombre });
      const via = ruta === o.cod ? '' : ' (por nombre)';
      console.log(`${pos} ${o.cod}  ${coincide ? '✓' : '≠'}  ${r.nombre}${via}${coincide ? '' : `   (malla: ${o.nombre})`}`);
    }
    if (i < unicos.length - 1) await dormir(PAUSA_MS);
  }

  const fecha = new Date().toISOString().slice(0, 10);
  const js = `/* ============================================================================
   losestudiantes.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fuente: losestudiantes.com · verificado el ${fecha}
   Regenerar con:  node herramientas/verificar-losestudiantes.js
   ========================================================================== */

const LE_BASE_PROFESOR = 'https://losestudiantes.com/universidad-nacional/professors/';
const LE_VERIFICADO = '${fecha}';

/* código SIA -> { nombre tal como aparece allí, url de la materia } */
const LOSESTUDIANTES = ${JSON.stringify(salida, null, 2)};
`;
  fs.writeFileSync(path.join(RAIZ, 'js/losestudiantes.js'), js);

  console.log(`\n──────────────────────────────────────────────`);
  console.log(`Encontrados : ${Object.keys(salida).length}`);
  console.log(`Sin registro: ${ausentes.length}`);
  console.log(`Errores     : ${fallos.length}`);
  if (discrepancias.length) {
    console.log(`\nNombres que no coinciden (posible código equivocado en la malla):`);
    for (const d of discrepancias) console.log(`  ${d.cod}  malla: "${d.nombre}"\n           allá: "${d.alla}"`);
  }
  if (ausentes.length) {
    console.log(`\nSin registro en losestudiantes.com:`);
    for (const a of ausentes) console.log(`  ${a.cod}  ${a.nombre}`);
  }
  console.log(`\nEscrito js/losestudiantes.js`);
})();
