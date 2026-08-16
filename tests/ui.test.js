const { JSDOM } = require('jsdom');
const fs = require('fs');
const dir = require('path').resolve(__dirname, '..');

const errores = [];
const dom = new JSDOM(fs.readFileSync(dir + '/index.html', 'utf8'), {
  runScripts: 'outside-only', url: 'http://localhost/', pretendToBeVisual: true,
});
const w = dom.window;
w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
w.HTMLDialogElement.prototype.close = function () { this.open = false; };
w.onerror = (m) => errores.push('window.onerror: ' + m);

const src = fs.readFileSync(dir + '/js/carrera.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/losestudiantes.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/sia.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/electivas.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/oferta.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/datos.js', 'utf8') + '\n' + fs.readFileSync(dir + '/js/app.js', 'utf8');
w.eval(src + '\n;window.__api = { get S(){return S}, get PLAN(){return PLAN},'
  + ' get PLAN_POR_ID(){return PLAN_POR_ID}, CATALOGO, guardar, refrescar, construirPlan,'
  + ' moverAsignatura, abrirEditor, GRUPOS_CATALOGO, GRUPOS_DISCIPLINARES, metricas, OFERTA_MAP };');
w.document.dispatchEvent(new w.Event('DOMContentLoaded'));

const $ = s => w.document.querySelector(s);
const $$ = s => [...w.document.querySelectorAll(s)];

const chk = (cond, msg) => { console.log((cond ? '  OK   ' : '  FALLA') + '  ' + msg); if (!cond) errores.push(msg); };

const N = w.__api.PLAN.length;   // 51 en la malla de Biología
const LS = 'mallaBiologiaUNAL.v1';
const ECO = '2017777', TG = '2023028', ING1 = '1000044', ING2 = '1000045', ING4 = '1000047', GEN = '2017779', FINV = '2017778';

console.log('\n[A] Render inicial');
chk($$('#malla .card').length === N && N === 51, `51 tarjetas en la malla (hay ${$$('#malla .card').length})`);
chk($$('#malla .col-sem').length === 10, '10 columnas de semestre');
chk($('#resumenKpis').children.length === 4, 'panel de avance con 4 KPIs');
chk($$('#notasCont details').length > 0, `${$$('#notasCont details').length} notas sobre los datos`);
chk($('#progGlobal').style.width === '0%', 'barra global en 0% sin avance');
chk($('h1').textContent.includes('Biología'), 'el título es el de Biología');
chk($$('#selGrupo option').length === Object.keys(w.__api.GRUPOS_CATALOGO).length + 1, 'los grupos del catálogo se generan desde datos.js');

console.log('\n[B] Estado inicial de disponibilidad');
const disp = $$('#malla .card.disponible').length, bloq = $$('#malla .card.bloqueada').length;
console.log(`  disponibles=${disp}  bloqueadas=${bloq}`);
chk(disp > 0 && disp + bloq === N, 'toda tarjeta es disponible o bloqueada al inicio');
const q = [...$$('#malla .card')].find(c => c.dataset.id === ECO);
chk(q && q.classList.contains('disponible'), 'Ecología está disponible desde el inicio');
const tg = [...$$('#malla .card')].find(c => c.dataset.id === TG);
chk(tg && tg.classList.contains('bloqueada'), 'Trabajo de Grado está bloqueado al inicio (exige la fundamentación)');
chk([...$$('#malla .card')].find(c => c.dataset.id === ING2).classList.contains('bloqueada'), 'Inglés II está bloqueado (exige Inglés I)');

console.log('\n[C] Marcar una asignatura como aprobada');
[...$$('#malla .card')].find(c => c.dataset.id === ING1).dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').open === true, 'se abre el diálogo de detalle');
chk($('#detalle').textContent.includes('Inglés I'), 'el diálogo muestra la asignatura correcta');
[...$$('#segEstado button')].find(b => b.dataset.v === 'aprobada')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk([...$$('#malla .card')].find(c => c.dataset.id === ING1).classList.contains('aprobada'), 'la tarjeta queda marcada como aprobada');
chk([...$$('#malla .card')].find(c => c.dataset.id === ING2).classList.contains('disponible'), 'Inglés II se desbloquea');
chk($('#progGlobal').style.width === '0%', 'la nivelación NO mueve la barra de los 163 créditos');
chk(JSON.parse(w.localStorage.getItem(LS)).estado[ING1] === 'aprobada', 'se persiste en localStorage con la clave de Biología');
$('#detalle').close();
[...$$('#malla .card')].find(c => c.dataset.id === ECO).dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#segEstado button')].find(b => b.dataset.v === 'aprobada').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#progGlobal').style.width !== '0%', 'aprobar Ecología sí avanza la barra global');
$('#detalle').close();

console.log('\n[D] Pestañas');
for (const b of $$('nav.tabs button')) {
  b.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  const v = $('#' + b.dataset.vista);
  chk(!v.hidden && v.textContent.trim().length > 20, `pestaña ${b.dataset.vista} se muestra con contenido`);
}

console.log('\n[E] Plan sugerido');
$('[data-vista="vPlan"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#planCont .plan-sem').length > 0, `${$$('#planCont .plan-sem').length} semestres proyectados`);
chk(!$('#planCont').textContent.includes('Sin ruta viable'), 'ninguna asignatura sin ruta viable');
$('#numMax').value = '10'; $('#numMax').dispatchEvent(new w.Event('change', { bubbles: true }));
const n10 = $$('#planCont .plan-sem').length;
$('#numMax').value = '20'; $('#numMax').dispatchEvent(new w.Event('change', { bubbles: true }));
const n20 = $$('#planCont .plan-sem').length;
chk(n10 > n20, `menos créditos ⇒ más semestres (${n10} con 10 cr vs ${n20} con 20 cr)`);

console.log('\n[F] Catálogo de optativas');
$('[data-vista="vCatalogo"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#catCont .cat-item').length === w.__api.CATALOGO.length, `catálogo completo (${$$('#catCont .cat-item').length} optativas)`);
$('#selGrupo').value = 'microbiologia'; $('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));
chk($$('#catCont .cat-item').length === 2, 'el filtro por grupo funciona (2 de microbiología)');
$('#buscaCat').value = 'zzzz'; $('#buscaCat').dispatchEvent(new w.Event('input', { bubbles: true }));
chk($('#catCont').textContent.includes('Sin resultados'), 'búsqueda sin resultados se maneja');
$('#selGrupo').value = ''; $('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));
$('#buscaCat').value = ''; $('#buscaCat').dispatchEvent(new w.Event('input', { bubbles: true }));
chk($$('#catCont .cat-item details.ficha').length > 40,
    `${$$('#catCont .cat-item details.ficha').length} optativas muestran la descripcion del SIA`);
chk($('#catCont').textContent.includes('créditos'), 'el catalogo muestra creditos reales');
$('#buscaCat').value = 'aves'; $('#buscaCat').dispatchEvent(new w.Event('input', { bubbles: true }));
const porTema = $$('#catCont .cat-item').length;
chk(porTema > 0 && porTema < w.__api.CATALOGO.length,
    `buscar por tema encuentra ${porTema} optativa(s) mirando dentro de las descripciones`);
$('#buscaCat').value = ''; $('#selGrupo').value = '';
$('#selGrupo').dispatchEvent(new w.Event('change', { bubbles: true }));

console.log('\n[G] Asignar una optativa a un cupo');
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === 'OPT_FUND_2')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const sel = $('#selRanura');
chk(!!sel, 'el cupo optativo ofrece un selector del catálogo');
chk(sel.options.length === 19, `18 opciones de fundamentación (hay ${sel.options.length - 1} + vacía)`);
sel.value = '2017783|Biogeografía';
sel.dispatchEvent(new w.Event('change', { bubbles: true }));
const cupo = [...$$('#malla .card')].find(c => c.dataset.id === 'OPT_FUND_2');
chk(cupo.textContent.includes('Biogeografía'), 'la tarjeta del cupo muestra la optativa elegida');
$('#detalle').close();
[...$$('#malla .card')].find(c => c.dataset.id === 'OPT_FUND_1').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk([...$('#selRanura').options].some(o => o.value.startsWith('1000001|')), 'el cupo del semestre I admite Matemáticas Básicas (nivelación)');
$('#detalle').close();
[...$$('#malla .card')].find(c => c.dataset.id === 'DISC_6_1').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#detalle #selRanura optgroup').length === w.__api.GRUPOS_DISCIPLINARES.length, 'un cupo disciplinar ofrece todos los grupos disciplinares');
$('#detalle').close();

console.log('\n[H] Filtros de la malla');
$('#chkDisp').checked = true; $('#chkDisp').dispatchEvent(new w.Event('change', { bubbles: true }));
chk($$('#malla .card').length < N && $$('#malla .card.bloqueada').length === 0, 'filtro "solo disponibles" oculta las bloqueadas');
$('#chkDisp').checked = false; $('#chkDisp').dispatchEvent(new w.Event('change', { bubbles: true }));
$('#busca').value = 'química'; $('#busca').dispatchEvent(new w.Event('input', { bubbles: true }));
chk($$('#malla .card').length > 0 && $$('#malla .card').length < N, `búsqueda de texto filtra (${$$('#malla .card').length} resultados)`);
$('#busca').value = ''; $('#busca').dispatchEvent(new w.Event('input', { bubbles: true }));

console.log('\n[I] Graduación completa');
w.__api.PLAN.forEach(a => { w.__api.S.estado[a.id] = 'aprobada'; });
w.__api.guardar(); w.__api.refrescar();
chk($('#progGlobal').style.width === '100%', 'barra global al 100% con todo aprobado');
$('[data-vista="vPlan"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#planCont').textContent.includes('No queda nada'), 'el planificador reconoce el plan terminado');

console.log('\n[J] Modo edición');
w.__api.S.estado = {}; w.__api.S.mods = { editados: {}, nuevos: [], eliminados: [], orden: null };
w.__api.guardar(); w.__api.construirPlan();
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#btnEdicion').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#barraEdicion').hidden, 'la barra de edición aparece');
chk($('#ayudaMalla').hidden, 'la ayuda se oculta en modo edición');
chk($$('#malla .card .mover button').length === N * 2, `botones ‹ › en las ${N} tarjetas (hay ${$$('#malla .card .mover button').length})`);
chk($$('#malla .card[draggable="true"]').length === N, 'todas las tarjetas quedan arrastrables');
chk($$('#malla .col-sem').length === 11, 'aparece una columna extra para un semestre nuevo');
chk($$('#malla button.soltar').length === 11, 'cada columna ofrece "+ asignatura"');

console.log('\n[K2] Mover con los botones ‹ ›');
$('#detalle').close();
const cardG = [...$$('#malla .card')].find(c => c.dataset.id === GEN);
cardG.querySelector('[data-mover$=":1"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN_POR_ID[GEN].sem === 6, 'el boton › baja Genética un semestre');
chk($('#detalle').open === false, 'y no abre la ficha por error');
[...$$('#malla .card')].find(c => c.dataset.id === GEN)
  .querySelector('[data-mover$=":-1"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN_POR_ID[GEN].sem === 5, 'el boton ‹ la devuelve');

console.log('\n[K] Mover una asignatura de semestre');
w.__api.moverAsignatura(GEN, 3, null);
chk(w.__api.PLAN_POR_ID[GEN].sem === 3, 'Genética pasa del semestre V al III');
const t = [...$$('#malla .card')].find(c => c.dataset.id === GEN);
chk(t.closest('.col-sem').dataset.sem === '3', 'la tarjeta se redibuja en la columna III');
chk(t.classList.contains('movida'), 'queda marcada como movida');
chk($('#contadorMods').textContent.includes('1'), 'el contador de cambios se actualiza');
chk(JSON.parse(w.localStorage.getItem(LS)).mods.editados[GEN].sem === 3, 'el movimiento se persiste');

console.log('\n[L] Editar una asignatura');
[...$$('#malla .card')].find(c => c.dataset.id === FINV)
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#btnEditar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!!$('#edNombre') && $('#edNombre').value === 'Fundamentos de investigación', 'el editor abre con los datos actuales');
$('#edCr').value = '3';
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN_POR_ID[FINV].cr === 3, 'el cambio de créditos se aplica');
chk($('#detalle').open === false, 'el editor se cierra al guardar');

console.log('\n[M] El editor rechaza datos inválidos');
w.__api.abrirEditor(FINV);
$('#edNombre').value = '   ';
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#edError').hidden && $('#detalle').open, 'un nombre vacío muestra error y no cierra');
$('#edNombre').value = 'Fundamentos de investigación';
[...$('#edPre').options].find(o => o.value === ECO).selected = true;
[...$('#edCo').options].find(o => o.value === ECO).selected = true;
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#edError').textContent.includes('prerrequisito y correquisito'), 'rechaza pre y correq duplicados');
$('#edCancelar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));

console.log('\n[N] Ciclos de prerrequisitos');
w.__api.abrirEditor(ING1);   // Inglés I es raíz de la cadena de inglés
[...$('#edPre').options].find(o => o.value === ING4).selected = true;  // Inglés IV
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#edError').textContent.includes('ciclo'), 'un ciclo se rechaza con mensaje claro');
chk(w.__api.PLAN_POR_ID[ING1].pre.length === 0, 'y el plan no queda corrupto');
$('#edCancelar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));

console.log('\n[O] Añadir y eliminar');
$$('#malla button.soltar')[5].dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#edNombre').value = 'Seminario de investigación';
$('#edCr').value = '2';
$('#edGuardar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const nuevo = w.__api.PLAN.find(a => a.nombre === 'Seminario de investigación');
chk(!!nuevo && w.__api.PLAN.length === N + 1, 'la asignatura nueva se añade al plan');
w.__api.abrirEditor(nuevo.id);
w.confirm = () => true;
$('#edBorrar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN.length === N, 'y se puede volver a eliminar');

console.log('\n[P] Restaurar la malla original');
w.__api.S.estado[ECO] = 'aprobada'; w.__api.guardar();
$('#btnRestaurarMalla').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.PLAN_POR_ID[GEN].sem === 5, 'Genética vuelve al semestre V');
chk(w.__api.PLAN_POR_ID[FINV].cr === 2, 'Fundamentos de investigación vuelve a 2 créditos');
chk(w.__api.S.estado[ECO] === 'aprobada', 'el avance aprobado se conserva');
$('#btnEdicion').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#barraEdicion').hidden && $$('#malla .col-sem').length === 10, 'al salir de edición todo vuelve a la normalidad');

console.log('\n[Q] Enlaces a Los Estudiantes');
[...$$('#malla .card')].find(c => c.dataset.id === GEN)
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const le = $('#detalle a.le-link');
chk(!!le && le.href.includes('losestudiantes.com'), 'la ficha enlaza a la pagina de la materia');
chk(le && le.target === '_blank' && le.rel.includes('noopener'), 'el enlace abre en otra pestana de forma segura');
chk(le && le.href.endsWith('/' + GEN), `el enlace apunta al codigo correcto (${le && le.href.split('/').pop()})`);
$('#btnCerrar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('[data-vista="vCatalogo"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#catCont a.le-link').length > 40, `${$$('#catCont a.le-link').length} optativas con enlace`);
chk($$('#catCont .cat-item.cod-malo').length === 0, 'ninguna optativa con codigo errado (todos vienen del SIA)');

console.log('\n[R] Ficha del SIA');
$('#detalle').close();
[...$$('#malla .card')].find(c => c.dataset.id === GEN)
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const fichas = $$('#detalle details.ficha');
chk(fichas.length >= 1, `la ficha muestra ${fichas.length} bloque(s) del SIA`);
const cuerpo = fichas[0] && fichas[0].querySelector('p').textContent.trim();
chk(cuerpo && cuerpo.length > 80, `con texto real (${cuerpo ? cuerpo.slice(0,45) + '...' : 'vacio'})`);
$('#btnCerrar').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));

console.log('\n[S] Electivas de libre eleccion');
$('[data-vista="vElectivas"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const tarjetas = $$('#eleCont .cat-item');
chk(tarjetas.length > 150, `${tarjetas.length} electivas listadas`);
chk($('#eleCont').textContent.includes('créditos'), 'muestra creditos reales');
chk($$('#eleCont details.ficha').length > 100, `${$$('#eleCont details.ficha').length} con descripcion del SIA`);
$('#buscaEle').value = 'cine'; $('#buscaEle').dispatchEvent(new w.Event('input', { bubbles: true }));
const nCine = $$('#eleCont .cat-item').length;
chk(nCine > 0 && nCine < 30, `buscar «cine» encuentra ${nCine}`);
$('#buscaEle').value = ''; $('#buscaEle').dispatchEvent(new w.Event('input', { bubbles: true }));
const antesLE = Object.keys(w.__api.S.ranuras).length;
const btn = $('#eleCont [data-poner-ele]');
chk(!!btn, 'ofrece asignar la electiva a un cupo');
btn.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(Object.keys(w.__api.S.ranuras).length === antesLE + 1, 'la electiva ocupa un cupo de libre eleccion');
const quitar = $('#eleCont [data-quitar-ele]');
chk(!!quitar, 'y se puede quitar');
quitar.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(Object.keys(w.__api.S.ranuras).length === antesLE, 'el cupo queda libre otra vez');

console.log('\n[T] Una optativa puede ocupar un cupo de libre eleccion');
w.__api.S.ranuras = {}; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vCatalogo"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#catCont [data-opt-como-ele]').length > 0, 'el catalogo de optativas ofrece «Usar como electiva»');
const btnOpt = [...$$('#catCont [data-opt-como-ele]')].find(b => b.dataset.optComoEle.startsWith('2017528'));
chk(!!btnOpt, 'incluida Evolución (2017528)');
btnOpt.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const ranuras = w.__api.S.ranuras;
const nuevas = Object.keys(ranuras).filter(k => k.startsWith('ELE_'));
chk(nuevas.length === 1, 'la optativa ocupa un cupo de libre eleccion (ELE_*)');
chk(ranuras[nuevas[0]].cr === 4, `y toma sus creditos reales del SIA (${ranuras[nuevas[0]].cr})`);
w.__api.S.ranuras = {}; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === 'ELE_6_1')
  .dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const grupos = [...$$('#detalle #selRanura optgroup')].map(g => g.label);
chk(grupos.length === 3, `el cupo de electiva ofrece ${grupos.length} familias: ${grupos.join(' / ')}`);
$('#detalle').close();

console.log('\n[U] Coherencia de la malla de Biología');
let adelantadas = 0;
for (const a of w.__api.PLAN) {
  for (const pr of a.pre || []) if (w.__api.PLAN_POR_ID[pr] && w.__api.PLAN_POR_ID[pr].sem >= a.sem) adelantadas++;
  for (const co of a.co || []) if (w.__api.PLAN_POR_ID[co] && w.__api.PLAN_POR_ID[co].sem > a.sem) adelantadas++;
}
chk(adelantadas === 0, 'ninguna asignatura va por delante de sus requisitos');
const porSem = {};
for (const a of w.__api.PLAN) porSem[a.sem] = (porSem[a.sem] || 0) + a.cr;
chk(Object.keys(porSem).length === 10, 'la malla tiene 10 semestres');
chk(porSem[1] === 16 && porSem[2] === 16 && porSem[3] === 16 && porSem[4] === 17 && porSem[10] === 17,
    `los semestres I–IV y X cuadran con la malla oficial (16/16/16/17/…/17)`);
const m = w.__api.metricas();
chk(m.total.meta === 163, 'la meta son 163 créditos');
chk(m.comp.FO.plan === 60 && m.comp.TG.plan === 8, 'fundamentación obligatoria 60 y trabajo de grado 8 (verificados con el SIA)');
chk(m.comp.NV.plan === 12 + 0, 'los 12 créditos de inglés van en nivelación');
$('[data-vista="vNotas"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#notasCont').textContent.includes('del acuerdo del plan'), 'las notas explican de dónde salen los prerrequisitos');
// requisitos del acuerdo cargados
chk(w.__api.PLAN_POR_ID['2017779'].pre.includes('2017775'), 'Genética exige Biología molecular de la célula');
chk(w.__api.PLAN_POR_ID['1000025'].co.includes('1000024'), 'el laboratorio de química es correquisito de Principios de química');
// un cupo hereda los requisitos de la optativa asignada
w.__api.S.estado = {}; w.__api.S.ranuras = { 'DISC_5_1': { cod: '2017519', nombre: 'Vertebrados', cr: 4 } }; w.__api.guardar(); w.__api.refrescar();
chk(w.__api.PLAN_POR_ID['DISC_5_1'].pre.includes('2017772') && w.__api.PLAN_POR_ID['DISC_5_1'].pre.includes('2017774'), 'el cupo con Vertebrados hereda sus prerrequisitos (Biología animal y evolutiva)');
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk([...$$('#malla .card')].find(c => c.dataset.id === 'DISC_5_1').classList.contains('bloqueada'), 'y aparece bloqueado hasta aprobarlos');
w.__api.S.ranuras = { 'DISC_6_1': { cod: '2017540', nombre: 'Gestión de proyectos', cr: 4 } }; w.__api.guardar(); w.__api.refrescar();
chk([...$$('#malla .card')].find(c => c.dataset.id === 'DISC_6_1').classList.contains('bloqueada'), 'Gestión de proyectos exige toda la fundamentación');
w.__api.PLAN.filter(a => ['FO', 'FP'].includes(a.comp)).forEach(a => { w.__api.S.estado[a.id] = 'aprobada'; }); w.__api.guardar(); w.__api.refrescar();
chk([...$$('#malla .card')].find(c => c.dataset.id === 'DISC_6_1').classList.contains('disponible'), 'y se desbloquea con la fundamentación aprobada');
w.__api.S.estado = {}; w.__api.S.ranuras = {}; w.__api.guardar(); w.__api.refrescar();

const HACT = () => w.__api.S.horario.escenarios[w.__api.S.horario.activo];
console.log('\n[V] Horario con la oferta del SIA');
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vHorario"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#vHorario').hidden, 'la pestaña Horario se abre');
chk($('#horCont').textContent.includes('Cursando'), 'sin nada marcado, pide marcar asignaturas como cursando');
// una asignatura del plan con varios grupos en la oferta
const conGrupos = w.__api.PLAN.filter(a => a.cod && w.__api.OFERTA_MAP[a.cod] && w.__api.OFERTA_MAP[a.cod].actividades.some(x => x.grupos.length >= 2))[0];
chk(!!conGrupos, `hay asignaturas del plan con varios grupos en la oferta (${conGrupos && conGrupos.nombre})`);
w.__api.S.estado[conGrupos.id] = 'cursando'; w.__api.guardar(); w.__api.refrescar();
chk($$('#horCont .hor-item').length === 1, `una asignatura en el horario (hay ${$$('#horCont .hor-item').length})`);
const selHor = $('#horCont select[data-grupo]');
chk(!!selHor && selHor.options.length >= 2, `ofrece los grupos de ${conGrupos.nombre}`);
if (selHor) {
  selHor.value = selHor.options[1].value;
  selHor.dispatchEvent(new w.Event('change', { bubbles: true }));
  chk($$('#horCont .hor-bloque').length >= 1, `al elegir grupo se pintan bloques en la semana (${$$('#horCont .hor-bloque').length})`);
  chk(Object.values(HACT().grupos)[0] === selHor.value, 'el grupo elegido se guarda');
}
$('#buscaHor').value = 'ecología';
$('#buscaHor').dispatchEvent(new w.Event('input', { bubbles: true }));
const sug = $('#horSugerencias button[data-anadir-hor]');
chk(!!sug, 'el buscador sugiere asignaturas de la oferta');
if (sug) {
  sug.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  chk($$('#horCont .hor-item').length === 2, 'la asignatura añadida aparece en el horario');
  chk(HACT().extras.length === 1, 'y queda guardada como extra');
  $('#horCont [data-quitar-hor]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  chk($$('#horCont .hor-item').length === 1, 'se puede quitar');
}
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === conGrupos.id).dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#detalle').textContent.includes('Oferta') && $('#detalle').textContent.includes('Grupo'), 'la ficha muestra los grupos del SIA');
$('#detalle').close();
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();

console.log('\n[W] ¿Qué cabe en mis huecos?');
w.__api.S.estado = {}; w.__api.S.ranuras = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vHorario"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!!$('#horCont .hor-huecos'), 'el panel de huecos aparece aunque el horario esté vacío');
const nVacio = $$('#horCont .hueco-item').length;
chk(nVacio > 0, `con el horario vacío ofrece ${nVacio} opciones (limitadas a 30 por página)`);
chk($('#horCont .hor-huecos').textContent.includes('Obligatorias del plan') && $('#horCont .hor-huecos').textContent.includes('Libre elección'), 'los filtros distinguen obligatorias, optativas y libre elección');
// la primera opción es una obligatoria del plan disponible (van primero)
const primera = $('#horCont .hueco-item');
chk(primera && /sem [IVX]+ · disponible/.test(primera.textContent), `la primera opción es una obligatoria disponible del plan (${primera && primera.querySelector('b').textContent})`);
// añadirla al horario con el grupo que cabe
const btnH = primera.querySelector('[data-hueco]');
const codH = btnH.dataset.hueco.split('|')[0];
btnH.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#horCont .hor-item').length === 1 && HACT().extras.includes(codH), 'al añadirla entra en el horario');
chk(Object.keys(HACT().grupos).some(k => k.startsWith(codH + '|')), 'con el grupo elegido');
chk($$('#horCont .hor-bloque').length > 0, 'y se pinta en la semana');
// lo que se ofrece ahora no se cruza con lo que hay
const sesAhora = [...$$('#horCont .hor-bloque')].length;
const cand2 = $$('#horCont .hueco-item');
chk(cand2.length > 0 && !cand2.some(c => c.textContent.includes(codH)), 'las opciones nuevas no incluyen la ya añadida');
chk($('#horCont .hueco-libres').textContent.includes('–'), 'muestra los huecos libres por día');
// filtro por tipo: libre elección
const selTipo = $('#horCont [data-hueco-f="tipo"]'); selTipo.value = 'libre'; selTipo.dispatchEvent(new w.Event('change', { bubbles: true }));
const soloLibre = $$('#horCont .hueco-item');
chk(soloLibre.length > 0 && soloLibre.every(c => c.textContent.includes('Libre elección')), `el filtro «Libre elección» deja solo electivas (${soloLibre.length})`);
// filtro de créditos
const inCr = $('#horCont [data-hueco-f="maxCr"]'); inCr.value = '2'; inCr.dispatchEvent(new w.Event('change', { bubbles: true }));
chk($$('#horCont .hueco-item').every(c => /· [12] cr/.test(c.textContent)), 'el tope de créditos se respeta');
// mostrar más
const selTipo2 = $('#horCont [data-hueco-f="tipo"]'); selTipo2.value = 'todas'; selTipo2.dispatchEvent(new w.Event('change', { bubbles: true }));
$('#horCont [data-hueco-f="maxCr"]').value = ''; $('#horCont [data-hueco-f="maxCr"]').dispatchEvent(new w.Event('change', { bubbles: true }));
const antesMas = $$('#horCont .hueco-item').length;
const mas = $('#horCont [data-hueco-mas]');
if (mas) { mas.dispatchEvent(new w.MouseEvent('click', { bubbles: true })); chk($$('#horCont .hueco-item').length > antesMas, '«Mostrar más» amplía la lista'); }
// nada de lo ofrecido se cruza con el horario actual (comprobación dura)
const S2 = w.__api.S; const OF = w.__api.OFERTA_MAP;
const ocupadas = [];
for (const [k, g] of Object.entries(HACT().grupos)) { const [c, act] = k.split('|'); const a = OF[c].actividades.find(x => x.nombre === act); const gg = a && a.grupos.find(x => x.codigoGrupo === g); if (gg) gg.sesiones.forEach(x => ocupadas.push(x)); }
const min = h => { const [a, b] = h.split(':').map(Number); return a * 60 + b; };
let cruces = 0;
for (const item of $$('#horCont .hueco-item')) {
  const [c, grupos] = item.querySelector('[data-hueco]').dataset.hueco.split('|');
  for (const par of grupos.split(';')) { const i = par.lastIndexOf('='); const a = OF[c].actividades.find(x => x.nombre === par.slice(0, i)); const g = a.grupos.find(x => x.codigoGrupo === par.slice(i + 1));
    for (const x of g.sesiones) for (const y of ocupadas) if (x.dia === y.dia && min(x.inicio) < min(y.fin) && min(y.inicio) < min(x.fin)) cruces++; }
}
chk(cruces === 0, `ninguna opción ofrecida se cruza con el horario (${cruces} cruces)`);
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();

const LS_HOR = LS;
console.log('\n[X] Varios horarios (escenarios) y comparación');
// formato antiguo → se migra
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vHorario"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(Array.isArray(w.__api.S.horario.escenarios) && w.__api.S.horario.escenarios.length === 1, 'el formato antiguo se migra a un escenario «Horario A»');
chk($$('#horCont .hor-escenarios .esc').length >= 2, 'aparece la barra de escenarios');
// añadir una asignatura por huecos y luego duplicar
$('#horCont [data-hueco]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const codA = w.__api.S.horario.escenarios[0].extras[0];
$('#horCont [data-esc-duplicar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.escenarios.length === 2 && w.__api.S.horario.activo === 1, 'duplicar crea «Horario B» y lo activa');
chk(w.__api.S.horario.escenarios[1].extras.includes(codA), 'con la misma asignatura');
// en B añadimos otra; A no cambia
$('#horCont [data-hueco]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.escenarios[1].extras.length === 2 && w.__api.S.horario.escenarios[0].extras.length === 1, 'los cambios en B no tocan A');
// cambiar a A
$('#horCont [data-esc="0"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.activo === 0 && $$('#horCont .hor-item').length === 1, 'volver a A muestra su horario');
// comparar
$('#horCont [data-esc-comparar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($$('#horCont table.hor-comparar tbody tr').length === 2, 'la comparación lista los dos escenarios');
chk($$('#horCont .hor-comparar-semanas .hor-semana').length === 2, 'con sus dos semanas lado a lado');
$('#horCont [data-esc="1"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#horCont table.hor-comparar') && w.__api.S.horario.activo === 1, '«abrir» sale de la comparación al escenario elegido');
// nuevo vacío y eliminar
$('#horCont [data-esc-nuevo]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.escenarios.length === 3 && $$('#horCont .hor-item').length === 0, 'nuevo crea un escenario vacío');
w.confirm = () => true;
$('#horCont [data-esc-eliminar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(w.__api.S.horario.escenarios.length === 2, 'eliminar lo quita');
chk(JSON.parse(w.localStorage.getItem(LS_HOR)).horario.escenarios.length === 2, 'los escenarios se persisten');

console.log('\n[Y] Optimizador de horario');
// escenario B tiene 2 asignaturas; añadimos una tercera con varios grupos si existe
w.__api.S.horario.activo = 1; w.__api.guardar(); w.__api.refrescar();
const itemsB = w.__api.S.horario.escenarios[1].extras.slice();
$('#horCont [data-opt-buscar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const props = $$('#horCont .opt-lista .hueco-item');
chk(props.length >= 1, `el optimizador propone ${props.length} combinación(es)`);
chk($('#horCont .hor-optimizar').textContent.includes('combinaciones exploradas'), 'e informa cuántas combinaciones exploró');
// aplicar la primera: sin cruces y todos los grupos elegidos
props[0].querySelector('[data-opt-aplicar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(!$('#horCont .hor-resumen').textContent.includes('con cruce'), 'la propuesta aplicada no tiene cruces');
chk(!$('#horCont .hor-resumen').textContent.includes('Falta elegir grupo'), 'y deja grupo elegido en todas las actividades');
// guardar como nuevo
$('#horCont [data-opt-buscar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const nAntes = w.__api.S.horario.escenarios.length;
const btnG = $('#horCont [data-opt-guardar]');
if (btnG) { btnG.dispatchEvent(new w.MouseEvent('click', { bubbles: true })); chk(w.__api.S.horario.escenarios.length === nAntes + 1, '«Guardar como horario nuevo» crea otro escenario con esos grupos'); }
// límite horario imposible → aviso claro
w.__api.S.horario.activo = 1; w.__api.guardar(); w.__api.refrescar();
const desde = $('#horCont [data-opt-f="desde"]'); desde.value = '19:00'; desde.dispatchEvent(new w.Event('change', { bubbles: true }));
$('#horCont [data-opt-buscar]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk($('#horCont .hor-optimizar .aviso.malo') !== null, 'con una ventana imposible avisa en vez de fallar');
const desde2 = $('#horCont [data-opt-f="desde"]'); desde2.value = ''; desde2.dispatchEvent(new w.Event('change', { bubbles: true }));
w.__api.S.estado = {}; w.__api.S.horario = { extras: [], grupos: {} }; w.__api.guardar(); w.__api.refrescar();

console.log('\n[Z] Homologada / exenta');
w.__api.S.estado = {}; w.__api.guardar(); w.__api.refrescar();
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
[...$$('#malla .card')].find(c => c.dataset.id === '1000044').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const bH = [...$$('#segEstado button')].find(b => b.dataset.v === 'homologada');
chk(!!bH, 'la ficha ofrece «Homologada / exenta»');
bH.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#detalle').close();
const cH = [...$$('#malla .card')].find(c => c.dataset.id === '1000044');
chk(cH.classList.contains('homologada') && cH.classList.contains('aprobada'), 'la tarjeta queda como homologada (y aprobada a efectos de estilo)');
chk(cH.textContent.includes('Homologada'), 'con su etiqueta propia');
chk([...$$('#malla .card')].find(c => c.dataset.id === '1000045').classList.contains('disponible'), 'desbloquea lo que dependía de ella');
chk(w.__api.S.estado['1000044'] === 'homologada', 'se guarda como estado distinto');

// atajo de nivelación (Biología)
$('[data-vista="vMalla"]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('#btnNivelacion').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const niv = w.__api.PLAN.filter(a => a.comp === 'NV');
chk(niv.length === 4 && niv.every(a => w.__api.S.estado[a.id] === 'homologada'), 'el botón «Nivelación: exento» marca los 4 niveles de inglés como homologados');
chk($('#progGlobal').style.width === '0%', 'sin que eso mueva la barra de los 163 créditos');
$('#btnNivelacion').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
chk(niv.every(a => !w.__api.S.estado[a.id]), 'y al pulsarlo otra vez los devuelve a pendiente');

w.__api.S.estado = {}; w.__api.guardar(); w.__api.refrescar();

console.log('\n' + (errores.length ? `✗ ${errores.length} FALLA(S)` : '✓ TODAS LAS COMPROBACIONES PASAN'));
process.exit(errores.length ? 1 : 0);
