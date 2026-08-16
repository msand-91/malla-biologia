const fs = require('fs'), vm = require('vm');
const dir = require('path').resolve(__dirname, '..');
const store = {};
const ctx = {
  console,
  localStorage: { getItem: k => store[k] ?? null, setItem: (k, v) => { store[k] = v; } },
  document: { addEventListener() {}, querySelector: () => null, querySelectorAll: () => [] },
};
vm.createContext(ctx);
// datos.js + app.js deben compartir un mismo ámbito léxico: se concatenan.
const fuente = fs.readFileSync(dir + '/js/carrera.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/losestudiantes.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/sia.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/electivas.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/oferta.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/datos.js', 'utf8') + '\n'
  + fs.readFileSync(dir + '/js/app.js', 'utf8')
      .replace("document.addEventListener('DOMContentLoaded', init);", '')
  + '\n;construirPlan();'
  + '\n;({ get PLAN() { return PLAN }, get PLAN_POR_ID() { return PLAN_POR_ID }, get S() { return S },'
  + ' PLAN_BASE, CATALOGO, COMPONENTES, TOTAL_CREDITOS, planificar, construirPlan, cicloDetectado,'
  + ' evaluar, calcularDisponibilidad, profundidad, metricas });';
const api = vm.runInContext(fuente, ctx);
const { PLAN, PLAN_POR_ID, CATALOGO, COMPONENTES, TOTAL_CREDITOS } = api;

/* ---------- 1. integridad ---------- */
const ids = new Set(PLAN.map(a => a.id));
const errs = [];
for (const a of PLAN) {
  for (const p of a.pre || []) if (!ids.has(p)) errs.push(`pre inexistente: ${a.id} -> ${p}`);
  for (const c of a.co || []) if (!ids.has(c)) errs.push(`co inexistente: ${a.id} -> ${c}`);
  for (const p of a.preSug || []) if (!ids.has(p)) errs.push(`preSug inexistente: ${a.id} -> ${p}`);
  if (a.pre && a.pre.includes(a.id)) errs.push(`autoprerrequisito: ${a.id}`);
}
const dup = PLAN.map(a => a.id).filter((v, i, x) => x.indexOf(v) !== i);
if (dup.length) errs.push('ids duplicados: ' + dup);
console.log(errs.length ? 'ERRORES:\n' + errs.join('\n') : '[1] OK — referencias e ids consistentes');

/* ---------- 2. créditos ---------- */
const porComp = {}; let tot = 0;
for (const a of PLAN) { porComp[a.comp] = (porComp[a.comp] || 0) + a.cr; if (!COMPONENTES[a.comp].noCuenta) tot += a.cr; }
console.log('\n[2] Créditos por componente (los cupos genéricos usan un valor típico, así que FP/DP/LE pueden no cuadrar exactamente)');
for (const k in COMPONENTES)
  console.log(`   ${k.padEnd(3)} ${String(porComp[k] || 0).padStart(3)} vs declarado ${String(COMPONENTES[k].creditos).padStart(3)}  ${(porComp[k] || 0) === COMPONENTES[k].creditos ? 'OK' : '≈'}`);
console.log(`   TOTAL ${tot} vs ${TOTAL_CREDITOS} (sin nivelación)`);
// Lo que sí debe cuadrar exactamente: fundamentación obligatoria y trabajo de grado (verificados con el SIA)
if (porComp.FO !== COMPONENTES.FO.creditos) errs.push(`FO suma ${porComp.FO}, declarado ${COMPONENTES.FO.creditos}`);
if (porComp.TG !== COMPONENTES.TG.creditos) errs.push(`TG suma ${porComp.TG}, declarado ${COMPONENTES.TG.creditos}`);
if (Math.abs(tot - TOTAL_CREDITOS) > 6) errs.push(`el total del plan (${tot}) se aleja demasiado de ${TOTAL_CREDITOS}`);
const porSem = {}; for (const a of PLAN) porSem[a.sem] = (porSem[a.sem] || 0) + a.cr;
console.log('   por semestre:', JSON.stringify(porSem));

/* ---------- 3. ¿la malla oficial es autoconsistente? ---------- */
// Recorrer semestre a semestre: cada asignatura del semestre s debe tener sus
// prerrequisitos en semestres < s y sus correquisitos en semestres <= s.
console.log('\n[3] Coherencia de la secuencia oficial');
const semDe = Object.fromEntries(PLAN.map(a => [a.id, a.sem]));
let malos = 0;
for (const a of PLAN) {
  for (const p of a.pre || []) if (semDe[p] >= a.sem) { console.log(`   ✗ ${a.nombre} (sem ${a.sem}) requiere ${PLAN_POR_ID[p].nombre} (sem ${semDe[p]})`); malos++; }
  for (const c of a.co || []) if (semDe[c] > a.sem) { console.log(`   ✗ ${a.nombre} (sem ${a.sem}) correq ${PLAN_POR_ID[c].nombre} (sem ${semDe[c]})`); malos++; }
}
console.log(malos ? `   ${malos} incoherencia(s)` : '   OK — ninguna asignatura se adelanta a sus requisitos');

/* ---------- 4. planificador (simulación desde cero) ---------- */
function correr(etiqueta, aprobadas, maxCr, modo = 'critico', nivel = true) {
  api.S.estado = Object.fromEntries(aprobadas.map(i => [i, 'aprobada']));
  api.S.ranuras = {};
  const r = api.planificar(maxCr, modo, nivel);
  console.log(`\n[4] ${etiqueta} (tope ${maxCr} cr) → ${r.semestres.length} semestres, ${r.bloqueadas.length} bloqueada(s)`);
  r.semestres.forEach((s, i) => {
    console.log(`   S${i + 1} (${s.cr} cr): ` + s.asigs.map(a => a.nombre.replace(/^Laboratorio de /, 'Lab. ')).join(' | '));
  });
  if (r.bloqueadas.length) console.log('   BLOQUEADAS: ' + r.bloqueadas.map(a => a.nombre).join(', '));
  // verificación dura del plan producido
  const hechas = new Set(aprobadas);
  let viol = 0;
  for (const s of r.semestres) {
    const enSem = new Set(s.asigs.map(a => a.id));
    for (const a of s.asigs) {
      for (const p of a.pre || []) if (!hechas.has(p)) { console.log(`   ✗ VIOLA pre: ${a.nombre} sin ${api.PLAN_POR_ID[p].nombre}`); viol++; }
      for (const c of a.co || []) if (!hechas.has(c) && !enSem.has(c)) { console.log(`   ✗ VIOLA co: ${a.nombre} sin ${api.PLAN_POR_ID[c].nombre}`); viol++; }
    }
    if (s.cr > maxCr) { console.log(`   ✗ excede tope: ${s.cr} > ${maxCr}`); viol++; }
    s.asigs.forEach(a => hechas.add(a.id));
  }
  const cubiertas = hechas.size === api.PLAN.length;
  console.log(`   validación: ${viol ? viol + ' violación(es)' : 'sin violaciones'}; cobertura ${hechas.size}/${api.PLAN.length} ${cubiertas ? 'OK' : 'INCOMPLETA'}`);
  return r;
}

correr('Desde cero / ruta crítica', [], 18);
correr('Desde cero / orden de malla', [], 18, 'malla');
correr('Desde cero / sin guarda de nivel', [], 18, 'critico', false);
correr('Desde cero / carga ligera', [], 12);
correr('Desde cero / carga alta', [], 24);
const tres = PLAN.filter(a => a.sem <= 3).map(a => a.id);
correr('Semestres I-III aprobados', tres, 18);
// caso patológico: solo aprobó cosas sueltas
correr('Solo Ecologia aprobada', ['2017777'], 16);

/* ---------- 5. edición de la malla ---------- */
console.log('\n[5] Edición de la malla');
const ok = (c, m) => { console.log((c ? '   OK   ' : '   FALLA') + '  ' + m); if (!c) errs.push(m); };
const sinMods = () => ({ editados: {}, nuevos: [], eliminados: [], orden: null });
const conMods = m => { api.S.estado = {}; api.S.ranuras = {}; api.S.mods = Object.assign(sinMods(), m); api.construirPlan(); };

const N = api.PLAN_BASE.length;
conMods({ editados: { '2017779': { sem: 6 } } });
ok(api.PLAN_POR_ID['2017779'].sem === 6, 'mover una asignatura a otro semestre (Genética V → VI)');
ok(api.PLAN_BASE.find(a => a.id === '2017779').sem === 5, 'la malla original queda intacta');

conMods({ editados: { '2017779': { cr: 5 } } });
ok(api.metricas().comp.FO.plan === COMPONENTES.FO.creditos + 1, 'editar créditos recalcula el componente (60 → 61)');

conMods({ eliminados: ['1000045'] });
ok(!api.PLAN_POR_ID['1000045'], 'la asignatura eliminada sale del plan');
ok(!api.PLAN_POR_ID['1000046'].pre.includes('1000045'), 'se limpian las referencias colgantes (Inglés III ya no exige Inglés II)');
ok(api.PLAN.length === N - 1, `quedan ${N - 1} asignaturas (hay ${api.PLAN.length})`);

conMods({ nuevos: [{ id: 'X1', cod: '9999', nombre: 'Seminario', cr: 2, sem: 6, comp: 'LE', area: null, pre: ['2017777'], co: [] }] });
ok(api.PLAN.length === N + 1 && api.PLAN_POR_ID['X1'].sem === 6, 'la asignatura nueva entra en el plan');

conMods({ editados: { '1000044': { pre: ['1000047'] } } });
ok(api.cicloDetectado() === true, 'detecta un ciclo de prerrequisitos (Inglés I ← Inglés IV)');
conMods({ editados: { '2017777': { co: ['2017776'] }, '2017776': { co: ['2017777'] } } });
ok(api.cicloDetectado() === false, 'los correquisitos mutuos NO cuentan como ciclo');
conMods({});

conMods({ orden: api.PLAN.map(a => a.id).reverse() });
ok(api.PLAN[0].id === 'ELE_10_3', 'el orden explícito (arrastrar) se respeta');

// el planificador debe seguir produciendo planes válidos sobre una malla editada
conMods({
  editados: { '2017779': { sem: 6 }, '2017775': { cr: 3 } },
  nuevos: [{ id: 'X2', cod: null, nombre: 'Electiva extra', cr: 3, sem: 9, comp: 'LE', area: null, pre: [], co: [] }],
});
correr('Plan sobre una malla editada', [], 18);
conMods({});

console.log('\n' + (errs.length ? `✗ ${errs.length} FALLA(S)` : '✓ TODO PASA'));
process.exit(errs.length ? 1 : 0);
