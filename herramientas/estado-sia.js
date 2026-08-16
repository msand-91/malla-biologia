/* ============================================================================
   estado-sia.js — ¿qué servicios del SIA se pueden consultar sin sesión?
   ----------------------------------------------------------------------------
   Sirve para saber cuándo vuelve el Buscador de cursos, que es lo que haría
   falta para armar el horario automáticamente.

   Ojo con una confusión fácil: que a ti te funcione el SIA en el navegador NO
   significa que esté disponible aquí. Tú entras con sesión iniciada; estas
   herramientas solo pueden usar lo de libre acceso. Este script comprueba
   exactamente eso: el acceso anónimo.

   Uso:  node herramientas/estado-sia.js
   ========================================================================== */
'use strict';

const SERVICIOS = [
  { nombre: 'Contenido de asignaturas (Bogotá)',
    url: 'https://siabog.unal.edu.co/academia/apoyo-administrativo/ConsultaContenidos.do',
    para: 'créditos, descripción, temario y vigencia — lo que usa herramientas/sia.js' },
  { nombre: 'Catálogo de asignaturas (ruta /Catalogo/)',
    url: 'https://sia.unal.edu.co/Catalogo/facespublico/public/servicioPublico.jsf?taskflowId=task-flow-AC_CatalogoAsignaturas',
    para: 'oferta por plan con grupos, horarios, profesores y cupos — lo que usa herramientas/catalogo-sia.js' },
  { nombre: 'Buscador de cursos',
    url: 'https://sia.unal.edu.co/ServiciosApp/facespublico/public/servicioPublico.jsf?taskflowId=task-flow-AC_BuscadorCursos',
    para: 'grupos, horarios y cupos del semestre — haría falta para armar el horario' },
  { nombre: 'Catálogo de asignaturas',
    url: 'https://sia.unal.edu.co/ServiciosApp/facespublico/public/servicioPublico.jsf?taskflowId=task-flow-AC_CatalogoAsignaturas',
    para: 'oferta por plan de estudios' },
  { nombre: 'Programas curriculares',
    url: 'https://sia.unal.edu.co/ServiciosApp/facespublico/public/servicioPublico.jsf?taskflowId=task-flow-AC_ProgramasCurriculares',
    para: 'planes de estudio y sus tipologías' },
];

const NAVEGADOR = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36';

async function revisar(s) {
  const t0 = Date.now();
  try {
    const r = await fetch(s.url, {
      redirect: 'follow',
      headers: { 'user-agent': NAVEGADOR, 'accept-language': 'es-CO,es;q=0.9' },
      signal: AbortSignal.timeout(30000),
    });
    const ms = Date.now() - t0;
    const html = new TextDecoder('iso-8859-1').decode(await r.arrayBuffer());
    const enMantenimiento = /avisomantenimiento|fuera de servicio/i.test(r.url + ' ' + html);
    if (enMantenimiento) return { estado: 'CAÍDO', detalle: 'redirige al aviso de mantenimiento', ms };
    if (!r.ok) return { estado: 'ERROR', detalle: 'HTTP ' + r.status, ms };
    return { estado: 'OK', detalle: `${(html.length / 1024).toFixed(0)} kB`, ms };
  } catch (e) {
    return { estado: 'ERROR', detalle: e.name === 'TimeoutError' ? 'sin respuesta a tiempo' : e.message, ms: Date.now() - t0 };
  }
}

(async () => {
  console.log('Acceso anónimo a los servicios públicos del SIA\n');
  let algunoCaido = false;
  for (const s of SERVICIOS) {
    const r = await revisar(s);
    if (r.estado !== 'OK') algunoCaido = true;
    const marca = { OK: '✓', 'CAÍDO': '✗', ERROR: '⚠' }[r.estado];
    console.log(`${marca} ${r.estado.padEnd(6)} ${s.nombre}`);
    console.log(`           ${r.detalle} · ${r.ms} ms`);
    console.log(`           ${s.para}\n`);
  }
  console.log(algunoCaido
    ? 'Los horarios salen del Catálogo (ruta /Catalogo/): si está OK, basta con\n  node herramientas/catalogo-sia.js sincronizar'
    : 'Todo disponible.');
})();
