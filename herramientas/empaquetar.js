/* ============================================================================
   empaquetar.js
   ----------------------------------------------------------------------------
   Junta index.html + css + js en un solo archivo autocontenido, para poder
   publicarlo y abrirlo desde cualquier dispositivo con un enlace.

   La página publicada se inserta dentro de un esqueleto <!doctype html> ya
   existente, así que aquí se emite solo el contenido: <title>, <style>, el
   cuerpo y <script>. Sin html/head/body propios y sin archivos externos
   (la publicación bloquea cualquier petición a otro servidor).

   Uso:  node herramientas/empaquetar.js  ->  dist/<slug de js/carrera.js>.html
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
/* Para publicar: solo el contenido, sin html/head/body (los pone la plataforma). */
const SLUG = (() => { try { const vm = require('vm'), c = {}; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(RAIZ, 'js/carrera.js'), 'utf8') + ';this.s = CARRERA.slug', c); return c.s; } catch { return 'malla-quimica'; } })();
const SALIDA = path.join(RAIZ, `dist/${SLUG}.html`);
/* Para mandar por chat o copiar al celular: documento completo, con viewport.
   Sin la etiqueta viewport el móvil lo renderiza a ancho de escritorio. */
const SALIDA_SUELTA = path.join(RAIZ, `dist/${SLUG}-autonoma.html`);

const leer = p => fs.readFileSync(path.join(RAIZ, p), 'utf8');

const html = leer('index.html');

/* --- Título y cuerpo del index --------------------------------------------- */
const titulo = (html.match(/<title>([^<]*)<\/title>/) || [, 'Malla Curricular'])[1];
const cuerpo = (html.match(/<body>([\s\S]*?)<\/body>/) || [, ''])[1]
  .replace(/<script src="[^"]*"><\/script>\s*/g, '')   // los <script> se inlinean abajo
  .trim();

if (!cuerpo) { console.error('No se pudo extraer el <body> de index.html'); process.exit(1); }

/* --- Hojas de estilo y scripts, en el mismo orden que el index -------------- */
const hojas = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(m => m[1]);
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);

if (!hojas.length || !scripts.length) {
  console.error('No se encontraron hojas de estilo o scripts en index.html'); process.exit(1);
}

const css = hojas.map(f => `/* ===== ${f} ===== */\n${leer(f)}`).join('\n\n');
const js = scripts.map(f => `/* ===== ${f} ===== */\n${leer(f)}`).join('\n\n');

/* Un </script> dentro de una cadena de JS cerraría la etiqueta antes de tiempo. */
const jsSeguro = js.replace(/<\/script>/gi, '<\\/script>');

const salida = `<title>${titulo}</title>

<style>
${css}
</style>

${cuerpo}

<script>
${jsSeguro}
</script>
`;

const autonoma = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${salida.trim()}
</html>
`;

fs.mkdirSync(path.dirname(SALIDA), { recursive: true });
fs.writeFileSync(SALIDA, salida);
fs.writeFileSync(SALIDA_SUELTA, autonoma);

const kb = n => (n / 1024).toFixed(0) + ' kB';
console.log(`Empaquetado  ${path.relative(RAIZ, SALIDA)}  (${kb(salida.length)})  para publicar`);
console.log(`Empaquetado  ${path.relative(RAIZ, SALIDA_SUELTA)}  (${kb(autonoma.length)})  para abrir en cualquier dispositivo`);
console.log(`  estilos : ${hojas.join(', ')}`);
console.log(`  scripts : ${scripts.join(', ')}`);
console.log(`  título  : ${titulo}`);
if (/(src|href)="(?!data:|#)[^"]*"/.test(cuerpo))
  console.log('  ⚠ el cuerpo referencia archivos externos; la publicación los bloqueará');
