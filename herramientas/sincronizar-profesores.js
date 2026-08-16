/* ============================================================================
   sincronizar-profesores.js
   ----------------------------------------------------------------------------
   Añade a js/losestudiantes.js la lista de profesores que dicta cada materia,
   tal como aparece en el panel lateral de losestudiantes.com.

   Por qué hace falta un navegador: esa lista NO viene en el HTML que sirve el
   servidor, se carga después con JavaScript. Por eso aquí se renderiza la
   página con Chrome headless y se lee el resultado. La app en sí no puede
   hacerlo (el sitio no envía cabeceras CORS), de ahí que se cachee el
   resultado en un archivo que la app carga como <script>.

   Requiere:  npm install puppeteer && npx puppeteer browsers install chrome
   Uso:       node herramientas/sincronizar-profesores.js
              node herramientas/sincronizar-profesores.js --solo 2015570
   Trabaja de a una materia, con pausa entre ellas.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RAIZ = path.resolve(__dirname, '..');
const ARCHIVO = path.join(RAIZ, 'js/losestudiantes.js');
const PAUSA_MS = 900;
const ESPERA_RENDER_MS = 2200;

/** Calidad codificada en el nombre del icono: quality_<nivel>.png */
const CALIDAD = { zero: null, bad: 'mala', average: 'regular', good: 'buena' };

const dormir = ms => new Promise(r => setTimeout(r, ms));

function cargarIndice() {
  if (!fs.existsSync(ARCHIVO)) {
    console.error('Falta js/losestudiantes.js.\nEjecuta antes: node herramientas/verificar-losestudiantes.js');
    process.exit(1);
  }
  const ctx = vm.createContext({});
  return vm.runInContext(fs.readFileSync(ARCHIVO, 'utf8') + '\n;({ LOSESTUDIANTES, LE_VERIFICADO });', ctx);
}

/**
 * Extrae los profesores del panel lateral de una materia ya renderizada.
 * Ojo: dentro de cada <li> el primer enlace es el del icono y no tiene texto;
 * el nombre está en un segundo enlace al mismo perfil.
 */
function leerProfesores() {
  const items = [...document.querySelectorAll('li')].filter(li =>
    li.querySelector('img[src*="quality_"]') &&
    [...li.querySelectorAll('a[href*="/professors/"]')].some(a => a.textContent.trim()));

  return items.map(li => {
    const enlace = [...li.querySelectorAll('a[href*="/professors/"]')].find(a => a.textContent.trim());
    const src = li.querySelector('img[src*="quality_"]').getAttribute('src');
    const txt = li.innerText.replace(/\s+/g, ' ').trim();
    return {
      nombre: enlace.textContent.trim().replace(/\s+/g, ' '),
      slug: decodeURIComponent(enlace.getAttribute('href').split('/professors/')[1] || ''),
      nivel: (src.match(/quality_(\w+)\./) || [])[1] || 'zero',
      resenas: +((txt.match(/(\d+)\s*Rese/i) || [])[1] || 0),
    };
  });
}

/**
 * Calificación y nota promedio de un profesor. A diferencia del listado de la
 * materia, la ficha del profesor SÍ viene renderizada por el servidor, así que
 * basta un fetch normal: no hace falta el navegador.
 */
async function detalleProfesor(slug) {
  const r = await fetch('https://losestudiantes.com/universidad-nacional/professors/' + encodeURIComponent(slug),
    { headers: { 'user-agent': 'malla-curricular-unal/1.0' } });
  if (!r.ok) return null;
  const html = await r.text();
  const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s);
  if (!m) return null;
  let estado;
  try { estado = JSON.parse(m[1]).props.pageProps.props.initialApolloState; } catch { return null; }
  const p = Object.values(estado).find(v => v && v.__typename === 'Professor' && v.slug === slug);
  if (!p) return null;

  /* Las reseñas públicas: normalmente una sola, el resto pide sesión iniciada.
     Se guarda la más reciente, recortada, con enlace al resto en el sitio.    */
  const limpia = t => (t || '').replace(/\s+/g, ' ').trim();
  const recorta = (t, n) => t.length > n ? t.slice(0, n).replace(/\s+\S*$/, '') + '…' : t;
  const publicas = Object.values(estado)
    .filter(v => v && v.__typename === 'ProfessorReview' && limpia(v.content))
    .sort((a, b) => String(b.created_at || '').localeCompare(String(a.created_at || '')));
  const r0 = publicas[0];

  return {
    // overall_rating_avg: cómo lo califican quienes reseñan (sobre 5).
    calificacion: typeof p.overall_rating_avg === 'number' ? +p.overall_rating_avg.toFixed(2) : null,
    // grade_avg: la nota promedio que ponen quienes reseñan (sobre 5).
    notaPromedio: typeof p.grade_avg === 'number' ? +p.grade_avg.toFixed(2) : null,
    resenas: typeof p.review_count === 'number' ? p.review_count : null,
    resenasOcultas: typeof p.hidden_reviews === 'number' ? p.hidden_reviews : 0,
    resena: r0 ? {
      texto: recorta(limpia(r0.content), 600),
      pros: recorta(limpia(r0.pros), 220) || null,
      contras: recorta(limpia(r0.cons), 220) || null,
      periodo: r0.period || null,
      calificacion: typeof r0.overall_rating === 'number' ? +r0.overall_rating.toFixed(1) : null,
      dificultad: typeof r0.difficulty === 'number' ? +r0.difficulty.toFixed(1) : null,
    } : null,
  };
}

(async () => {
  const { LOSESTUDIANTES, LE_VERIFICADO } = cargarIndice();
  const filtro = process.argv.includes('--solo') ? process.argv[process.argv.indexOf('--solo') + 1] : null;
  /* --fichas: no vuelve a recorrer las materias, solo refresca calificaciones y
     reseñas de los profesores ya conocidos. No necesita navegador. */
  const soloFichas = process.argv.includes('--fichas');
  const codigos = Object.keys(LOSESTUDIANTES).filter(c => !filtro || c === filtro);

  let conProfes = 0, sinProfes = 0, fallos = 0;

  if (soloFichas) {
    console.log('Modo --fichas: se conservan las listas de profesores por materia.\n');
  } else await recorrerMaterias();

  async function recorrerMaterias() {
  let puppeteer;
  try { puppeteer = require('puppeteer'); }
  catch {
    console.error('Falta puppeteer.\n  npm install puppeteer && npx puppeteer browsers install chrome');
    process.exit(1);
  }

  console.log(`Consultando profesores de ${codigos.length} materias…\n`);
  const navegador = await puppeteer.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const pagina = await navegador.newPage();
  await pagina.setViewport({ width: 1440, height: 1000 });

  for (let i = 0; i < codigos.length; i++) {
    const cod = codigos[i];
    const entrada = LOSESTUDIANTES[cod];
    const pos = `[${String(i + 1).padStart(3)}/${codigos.length}]`;
    try {
      await pagina.goto(entrada.url, { waitUntil: 'networkidle0', timeout: 60000 });
      await dormir(ESPERA_RENDER_MS);
      const profes = await pagina.evaluate(leerProfesores);
      // Se ordenan por número de reseñas: los más comentados primero.
      profes.sort((a, b) => b.resenas - a.resenas || a.nombre.localeCompare(b.nombre));
      entrada.profesores = profes.map(p => ({
        nombre: p.nombre, slug: p.slug, resenas: p.resenas,
        calidad: CALIDAD[p.nivel] || null,
      }));
      if (profes.length) conProfes++; else sinProfes++;
      const top = profes.filter(p => p.resenas).slice(0, 3).map(p => `${p.nombre} (${p.resenas})`).join(', ');
      console.log(`${pos} ${cod}  ${String(profes.length).padStart(2)} profesor(es)  ${entrada.nombre}${top ? `\n            ${top}` : ''}`);
    } catch (e) {
      fallos++;
      console.log(`${pos} ${cod}  ⚠ ${e.message.split('\n')[0]}`);
    }
    if (i < codigos.length - 1) await dormir(PAUSA_MS);
  }

  await navegador.close();
  }

  /* --- Segunda fase: calificación y nota promedio de cada profesor ---------
     Se consulta una sola vez por profesor aunque dicte varias materias.      */
  const slugs = [...new Set(codigos.map(c => LOSESTUDIANTES[c])
    .flatMap(e => (e.profesores || []).map(p => p.slug)))];
  console.log(`\nConsultando la ficha de ${slugs.length} profesores…\n`);

  const detalles = {};
  for (let i = 0; i < slugs.length; i++) {
    const s = slugs[i];
    try {
      const d = await detalleProfesor(s);
      if (d) {
        detalles[s] = d;
        console.log(`[${String(i + 1).padStart(3)}/${slugs.length}] ${s.padEnd(42)} calif ${String(d.calificacion ?? '—').padStart(4)}  nota ${String(d.notaPromedio ?? '—').padStart(4)}  ${d.resenas} reseña(s)`);
      } else {
        console.log(`[${String(i + 1).padStart(3)}/${slugs.length}] ${s.padEnd(42)} sin datos`);
      }
    } catch (e) {
      console.log(`[${String(i + 1).padStart(3)}/${slugs.length}] ${s.padEnd(42)} ⚠ ${e.message}`);
    }
    if (i < slugs.length - 1) await dormir(350);
  }

  for (const e of Object.values(LOSESTUDIANTES)) {
    for (const p of (e.profesores || [])) Object.assign(p, detalles[p.slug] || {});
    // Los mejor calificados primero; sin calificación, al final.
    (e.profesores || []).sort((a, b) =>
      (b.calificacion ?? -1) - (a.calificacion ?? -1) || (b.resenas || 0) - (a.resenas || 0));
  }

  const fecha = new Date().toISOString().slice(0, 10);
  const js = `/* ============================================================================
   losestudiantes.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fuente: losestudiantes.com
     · códigos y URLs verificados el ${LE_VERIFICADO}
     · profesores por materia actualizados el ${fecha}
   Regenerar con:
     node herramientas/verificar-losestudiantes.js     (códigos y enlaces)
     node herramientas/sincronizar-profesores.js       (profesores)
   ========================================================================== */

const LE_BASE_PROFESOR = 'https://losestudiantes.com/universidad-nacional/professors/';
const LE_VERIFICADO = '${LE_VERIFICADO}';
const LE_PROFESORES_ACTUALIZADO = '${fecha}';

/* código SIA -> { nombre, url, profesores: [{ nombre, slug, resenas, calidad }] } */
const LOSESTUDIANTES = ${JSON.stringify(LOSESTUDIANTES, null, 2)};
`;
  fs.writeFileSync(ARCHIVO, js);

  const total = Object.values(LOSESTUDIANTES).reduce((n, e) => n + (e.profesores || []).length, 0);
  console.log(`\n──────────────────────────────────────────────`);
  console.log(`Materias con profesores: ${conProfes}`);
  console.log(`Materias sin profesores: ${sinProfes}`);
  console.log(`Errores                : ${fallos}`);
  console.log(`Profesores registrados : ${total}`);
  console.log(`\nEscrito js/losestudiantes.js`);
})();
