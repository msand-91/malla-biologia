/* ============================================================================
   sia.js — consulta el catálogo público de asignaturas de la UNAL
   ----------------------------------------------------------------------------
   Usa "Contenido de asignaturas" del SIA Bogotá, que es de libre acceso: NO
   pide iniciar sesión ni credenciales de ningún tipo.

     node herramientas/sia.js buscar <texto>     lista códigos y nombres
     node herramientas/sia.js ver <código>       ficha completa de una asignatura
     node herramientas/sia.js enriquecer         cruza la malla y el catálogo de
                                                 optativas con el SIA y escribe
                                                 js/sia.js

   Lo que NO puede hacer, y conviene tener claro:
     · No sabe qué se ofrece este semestre, ni horarios, ni cupos. Eso está en
       el "Buscador de cursos" y en la inscripción, que dependen de tu sesión.
     · No sabe qué llevas aprobado. Eso lo marcas tú en la app.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RAIZ = path.resolve(__dirname, '..');
const BASE = 'https://siabog.unal.edu.co/academia/apoyo-administrativo/ConsultaContenidos.do';
const PAUSA_MS = 500;

const dormir = ms => new Promise(r => setTimeout(r, ms));

/* El SIA responde en ISO-8859-1; hay que decodificarlo o los acentos se rompen. */
async function pedir(params) {
  const url = BASE + '?' + new URLSearchParams(
    Object.assign({ action: '', idAsignatura: '', idSession_hd: '', txtIdAsignatura: '', txtNombreAsignatura: '' }, params));
  const r = await fetch(url, { headers: { 'user-agent': 'malla-curricular-unal/1.0' } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return new TextDecoder('iso-8859-1').decode(await r.arrayBuffer());
}

const SEP = '\u0001';   // marca dónde había una etiqueta, para separar campos
const sinEtiquetas = h => h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, SEP);
/* El SIA escribe los acentos como entidades con nombre (&oacute;, &ntilde;…),
   no como caracteres. Sin decodificarlas no se reconoce ninguna etiqueta. */
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

/** Lista de asignaturas cuyo nombre contiene `texto`. */
async function buscar(texto) {
  const html = await pedir({ action: 'Buscar', txtNombreAsignatura: texto });
  const filas = html.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
  const out = [];
  for (const f of filas) {
    const celdas = (f.match(/<td[^>]*>[\s\S]*?<\/td>/gi) || [])
      .map(c => limpiar(sinEtiquetas(c).split(SEP).join(' ')));
    // La fila empieza con una celda vacía, así que se localiza la del código.
    const k = celdas.findIndex(c => /^\d{6,7}(-[A-Z])?$/.test(c));
    if (k >= 0 && celdas[k + 1])
      out.push({ cod: celdas[k], nombre: celdas[k + 1], dependencia: celdas[k + 2] || '' });
  }
  return out;
}

/** Ficha completa de una asignatura por código. */
async function ver(cod) {
  const html = await pedir({ action: 'Info', idAsignatura: cod });
  // La ficha es una sucesión de etiqueta/valor; se aplana y se lee por pares.
  const trozos = sinEtiquetas(html).split(SEP).map(x => limpiar(x)).filter(Boolean);
  const i = trozos.findIndex(t => /^Informaci[oó]n de la Asignatura$/i.test(t));
  if (i < 0) return null;
  const campos = trozos.slice(i + 1);

  /* Cuidado: si un campo viene vacío, el siguiente trozo es ya la etiqueta
     siguiente. Sin este control, "Nombre Asignatura" acabaría valiendo
     "Unidad Académica Básica" y se colarían fichas fantasma. */
  const ETIQUETAS = new Set(['asignatura vigente', 'nombre asignatura', 'unidad académica básica',
    'número de semanas', 'horas presenciales', 'créditos', 'validable', 'porcentaje de asistencia',
    'libre elección', 'descripción', 'planes relacionados', 'contenido', 'codigo', 'nombre',
    'regresar', 'versión impresión']);

  const tras = etiqueta => {
    const k = campos.findIndex(t => t.toLowerCase() === etiqueta.toLowerCase());
    if (k < 0) return null;
    const v = campos[k + 1];
    return v && !ETIQUETAS.has(v.toLowerCase()) ? v : null;
  };
  const num = v => { const n = parseFloat(String(v).replace(',', '.')); return Number.isFinite(n) ? n : null; };
  const siNo = v => v == null ? null : /^s[ií]$/i.test(v);

  const nombre = tras('Nombre Asignatura');
  if (!nombre) return null;

  /* La descripción y el contenido son textos largos: van entre su etiqueta y
     la siguiente etiqueta conocida. */
  const largo = (desde, hasta) => {
    const a = campos.findIndex(t => t.toLowerCase() === desde.toLowerCase());
    if (a < 0) return null;
    let b = campos.length;
    for (const h of hasta) {
      const k = campos.findIndex((t, j) => j > a && t.toLowerCase() === h.toLowerCase());
      if (k >= 0 && k < b) b = k;
    }
    const txt = campos.slice(a + 1, b).join(' ').trim();
    return txt || null;
  };

  return {
    cod,
    nombre,
    vigente: siNo(tras('Asignatura vigente')),
    unidad: tras('Unidad Académica Básica'),
    creditos: num(tras('Créditos')),
    semanas: num(tras('Número de Semanas')),
    horas: num(tras('Horas presenciales')),
    validable: siNo(tras('Validable')),
    asistencia: tras('Porcentaje de Asistencia'),
    libreEleccion: siNo(tras('Libre Elección')),
    descripcion: largo('Descripción', ['Planes Relacionados', 'Contenido', 'Regresar']),
    contenido: largo('Contenido', ['Regresar', 'versión impresión']),
  };
}

/* -------------------------------------------------------------------------- */

function cargarDatos() {
  const ctx = vm.createContext({});
  return vm.runInContext(
    fs.readFileSync(path.join(RAIZ, 'js/datos.js'), 'utf8') + '\n;({ PLAN_BASE, CATALOGO });', ctx);
}

const normalizar = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').trim();

/** ¿Dos nombres se refieren a la misma asignatura? */
function parecidos(a, b) {
  const x = new Set(normalizar(a).split(' ').filter(w => w.length > 2));
  const y = new Set(normalizar(b).split(' ').filter(w => w.length > 2));
  if (!x.size || !y.size) return false;
  return [...x].filter(w => y.has(w)).length / Math.min(x.size, y.size) >= 0.6;
}

/**
 * Cruza cada asignatura de la malla y del catálogo con el SIA. Para las que
 * llevan el código mal impreso en el PDF, intenta encontrarlo por nombre.
 */
async function enriquecer() {
  const { PLAN_BASE, CATALOGO } = cargarDatos();
  const objetivos = [
    ...PLAN_BASE.filter(a => a.cod).map(a => ({ cod: a.cod, nombre: a.nombre, origen: 'malla', codErrado: false })),
    ...CATALOGO.map(c => ({ cod: c.cod, nombre: c.nombre, origen: 'catálogo', codErrado: !!c.codErrado })),
  ];
  const unicos = [...new Map(objetivos.map(o => [o.cod + '|' + o.nombre, o])).values()];

  console.log(`Consultando ${unicos.length} asignaturas en el catálogo público del SIA…\n`);
  const salida = {}, rescatados = [], noVigentes = [], sinEncontrar = [];

  for (let i = 0; i < unicos.length; i++) {
    const o = unicos[i];
    const pos = `[${String(i + 1).padStart(3)}/${unicos.length}]`;
    try {
      let d = o.codErrado ? null : await ver(o.cod);
      let via = 'código';

      // Si el código no sirve o apunta a otra asignatura, se busca por nombre.
      if (!d || !parecidos(o.nombre, d.nombre)) {
        await dormir(PAUSA_MS);
        const cands = await buscar(o.nombre.split(/[—(]/)[0].trim());
        const c = cands.find(x => parecidos(o.nombre, x.nombre) && /^\d+$/.test(x.cod));
        if (c) {
          await dormir(PAUSA_MS);
          const d2 = await ver(c.cod);
          if (d2) {
            d = d2; via = 'nombre';
            if (c.cod !== o.cod) rescatados.push({ ...o, real: c.cod, nombreSIA: d2.nombre });
          }
        }
      }

      if (!d) { sinEncontrar.push(o); console.log(`${pos} ${o.cod}  —  no aparece: ${o.nombre}`); }
      else {
        salida[o.cod + '|' + o.nombre] = { ...d, buscadoComo: o.cod, via };
        if (d.vigente === false) noVigentes.push({ ...o, real: d.cod });
        console.log(`${pos} ${o.cod}  ${d.vigente === false ? '✗' : '✓'} ${String(d.creditos ?? '?').padStart(2)} cr  ${d.nombre}${via === 'nombre' ? `   (hallada por nombre → ${d.cod})` : ''}`);
      }
    } catch (e) {
      sinEncontrar.push(o);
      console.log(`${pos} ${o.cod}  ⚠ ${e.message}`);
    }
    if (i < unicos.length - 1) await dormir(PAUSA_MS);
  }

  const fecha = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(RAIZ, 'js/sia.js'), `/* ============================================================================
   sia.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fuente: catálogo público "Contenido de asignaturas" del SIA Bogotá
   Consultado el ${fecha}. Regenerar con: node herramientas/sia.js enriquecer

   No incluye oferta del semestre, horarios ni cupos: eso no es de libre acceso.
   ========================================================================== */

const SIA_CONSULTADO = '${fecha}';

/* "código|nombre de la malla" -> ficha oficial del SIA */
const SIA = ${JSON.stringify(salida, null, 2)};
`);

  console.log(`\n──────────────────────────────────────────────`);
  console.log(`Encontradas    : ${Object.keys(salida).length}`);
  console.log(`Sin encontrar  : ${sinEncontrar.length}`);
  if (rescatados.length) {
    console.log(`\nCódigos corregidos gracias al SIA:`);
    for (const r of rescatados) console.log(`  ${r.nombre}\n     PDF: ${r.cod}   SIA: ${r.real}  (${r.nombreSIA})`);
  }
  if (noVigentes.length) {
    console.log(`\nYa no están vigentes:`);
    for (const n of noVigentes) console.log(`  ${n.real}  ${n.nombre}`);
  }
  if (sinEncontrar.length) {
    console.log(`\nNo aparecen en el catálogo:`);
    for (const n of sinEncontrar) console.log(`  ${n.cod}  ${n.nombre}`);
  }
  console.log(`\nEscrito js/sia.js`);
}

/* ------------------------------------------------------------------ arranque */
(async () => {
  const [orden, ...resto] = process.argv.slice(2);
  const arg = resto.join(' ').trim();

  if (orden === 'buscar' && arg) {
    const r = await buscar(arg);
    console.log(`${r.length} resultado(s) para «${arg}»\n`);
    for (const x of r) console.log(`  ${x.cod.padEnd(10)} ${x.nombre.padEnd(52)} ${x.dependencia}`);
  } else if (orden === 'ver' && arg) {
    const d = await ver(arg);
    if (!d) return console.log('No encontrada.');
    console.log(`${d.nombre}  (${d.cod})`);
    console.log(`  vigente: ${d.vigente ? 'sí' : 'NO'} · ${d.creditos ?? '?'} créditos · ${d.horas ?? '?'} h presenciales`);
    console.log(`  ${d.unidad}`);
    console.log(`  validable: ${d.validable ? 'sí' : 'no'} · libre elección: ${d.libreEleccion ? 'sí' : 'no'}${d.asistencia ? ' · asistencia ' + d.asistencia : ''}`);
    if (d.descripcion) console.log(`\n  ${d.descripcion.slice(0, 1200)}`);
    if (d.contenido) console.log(`\n  Contenido: ${d.contenido.slice(0, 800)}`);
  } else if (orden === 'enriquecer') {
    await enriquecer();
  } else {
    console.log(`Uso:
  node herramientas/sia.js buscar <texto>
  node herramientas/sia.js ver <código>
  node herramientas/sia.js enriquecer`);
  }
})();
