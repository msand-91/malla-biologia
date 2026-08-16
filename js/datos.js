/* ============================================================================
   datos.js — Malla curricular Pregrado en Biología (plan 2513), UNAL Sede Bogotá
   Fuentes:
     - "Malla Curricular Programa de Pregrado en Biología" (oficial, Facultad de
       Ciencias): semestres, cupos y créditos por semestre. NO trae códigos,
       créditos por asignatura ni prerrequisitos.
     - Catálogo de asignaturas del SIA (plan 2513): códigos, nombres, créditos y
       tipología de las 93 asignaturas del plan. De ahí salen todos los códigos.
     - Acuerdo del plan de estudios (régimen legal, doc. 90037; modifica el plan
       y deroga el Acuerdo 063 de 2015 del CFC): prerrequisitos y correquisitos
       de la fundamentación, de las optativas de fundamentación y de las
       disciplinares, y créditos exigidos por agrupación. Transcrito de las
       tablas del acuerdo el 2026-08-16.
   ========================================================================== */

/* --- Componentes de formación ------------------------------------------- */
/* Del acuerdo: fundamentación obligatoria 60 (Biología 30 + Matemática y
   Estadística 7 + Química 16 + Física 4 + Ciencias de la tierra 3) y optativas
   de fundamentación 8. Trabajo de grado 8 (SIA). Disciplinar 55 y libre
   elección 32 salen de la distribución publicada (68 / 63 / 32 = 163); el
   total disciplinar del acuerdo quedó fuera de las tablas transcritas.
   Nivelación (Inglés, Matemáticas Básicas) no cuenta en los 163 créditos.  */
const COMPONENTES = {
  FO: { id: 'FO', nombre: 'Fundamentación obligatoria', corto: 'Fund. oblig.', creditos: 60, color: '#e9b949' },
  FP: { id: 'FP', nombre: 'Fundamentación optativa', corto: 'Fund. optativa', creditos: 8, color: '#f6d992' },
  DP: { id: 'DP', nombre: 'Disciplinar (optativa)', corto: 'Disciplinar', creditos: 55, color: '#9fce9a' },
  TG: { id: 'TG', nombre: 'Trabajo de grado', corto: 'Trabajo de grado', creditos: 8, color: '#3f6fb5' },
  LE: { id: 'LE', nombre: 'Libre elección (electivas)', corto: 'Libre elección', creditos: 32, color: '#b07bc4' },
  NV: { id: 'NV', nombre: 'Nivelación (no cuenta en los créditos)', corto: 'Nivelación', creditos: 12, color: '#c9c9d4', noCuenta: true },
};

const TOTAL_CREDITOS = 163;

/* --- Áreas ---------------------------------------------------------------- */
const AREAS = {
  biologia: 'Biología (fundamentación)',
  quimica: 'Química',
  fisica_mate: 'Física, matemáticas y estadística',
  tierra: 'Ciencias de la tierra',
  investigacion: 'Investigación',
  disciplinar: 'Disciplinar (profundización)',
  grado: 'Trabajo de grado',
  idioma: 'Idioma extranjero',
};

/* ============================================================================
   PLAN DE ESTUDIOS
   ----------------------------------------------------------------------------
   id       identificador interno (código SIA, o ranura genérica OPT_ / DISC_ / ELE_)
   cod      código SIA (null si es un cupo genérico a llenar con una optativa)
   nombre   nombre de la asignatura
   cr       créditos (del SIA; en los cupos, el valor típico)
   sem      semestre sugerido por la malla oficial (1..10)
   comp     componente (FO/FP/DP/TG/LE/NV)
   area     área temática (clave de AREAS)
   pre      prerrequisitos obligatorios (acuerdo del plan)
   co       correquisitos (acuerdo del plan)
   preEsp   requisito en texto (Matemáticas Básicas, que es de nivelación y no está en la malla)
   ranura   si es un cupo genérico: grupos del catálogo que puede recibir
   nota     advertencia/aclaración mostrada en la ficha
   ========================================================================== */
const PLAN_BASE = [
  /* ---------------------------- Semestre I ------------------------------- */
  { id: '2017777', cod: '2017777', nombre: 'Ecología', cr: 4, sem: 1, comp: 'FO', area: 'biologia', pre: [], co: ['2017776'] },
  { id: '2017776', cod: '2017776', nombre: 'Ciencias de la tierra', cr: 3, sem: 1, comp: 'FO', area: 'tierra', pre: [], co: ['2017777'] },
  { id: '1000024', cod: '1000024', nombre: 'Principios de química', cr: 3, sem: 1, comp: 'FO', area: 'quimica', pre: [], co: [] },
  { id: '1000025', cod: '1000025', nombre: 'Laboratorio de técnicas básicas en química', cr: 3, sem: 1, comp: 'FO', area: 'quimica', pre: [], co: ['1000024'],
    nota: 'La malla lo llama «Lab. Princ. Química». En el SIA es «Laboratorio técnicas básicas en química» (1000025).' },
  { id: 'OPT_FUND_1', cod: null, nombre: 'Matemáticas Básicas u optativa de fundamentación', cr: 3, sem: 1, comp: 'FP', area: 'fisica_mate', pre: [], co: [], ranura: ['fundamentacion', 'nivelacion'],
    nota: 'La malla dice «Matemáticas Básicas (u Optativa Fundamental)»: quien entra al plan de nivelación cursa Matemáticas Básicas (1000001, 4 créditos de nivelación, no cuentan en los 163); quien no, una optativa de fundamentación.' },

  /* ---------------------------- Semestre II ------------------------------ */
  { id: '2015877', cod: '2015877', nombre: 'Biología de plantas', cr: 4, sem: 2, comp: 'FO', area: 'biologia', pre: [], co: [] },
  { id: '2017774', cod: '2017774', nombre: 'Biología evolutiva', cr: 4, sem: 2, comp: 'FO', area: 'biologia', pre: [], co: [] },
  { id: '1000030', cod: '1000030', nombre: 'Principios de química orgánica', cr: 3, sem: 2, comp: 'FO', area: 'quimica', pre: ['1000024'], co: [] },
  { id: '1000031', cod: '1000031', nombre: 'Laboratorio de principios de química orgánica', cr: 2, sem: 2, comp: 'FO', area: 'quimica', pre: [], co: ['1000030'] },
  { id: '1000044', cod: '1000044', nombre: 'Inglés I', cr: 3, sem: 2, comp: 'NV', area: 'idioma', pre: [], co: [],
    nota: 'Nivelación: 12 créditos de inglés (I a IV) que no cuentan en los 163 del plan. Modalidad semestral (1000044); también existe virtual (1000048) e intensivo I y II (1000052, 6 cr).' },

  /* ---------------------------- Semestre III ----------------------------- */
  { id: '2017772', cod: '2017772', nombre: 'Biología animal', cr: 4, sem: 3, comp: 'FO', area: 'biologia', pre: [], co: [] },
  { id: '2017773', cod: '2017773', nombre: 'Biología de microorganismos', cr: 4, sem: 3, comp: 'FO', area: 'biologia', pre: [], co: [] },
  { id: '2023214', cod: '2023214', nombre: 'Principios de bioquímica', cr: 3, sem: 3, comp: 'FO', area: 'quimica', pre: ['1000030'], co: [] },
  { id: '2017010', cod: '2017010', nombre: 'Laboratorio de principios de bioquímica', cr: 2, sem: 3, comp: 'FO', area: 'quimica', pre: [], co: ['2023214'] },
  { id: '1000045', cod: '1000045', nombre: 'Inglés II', cr: 3, sem: 3, comp: 'NV', area: 'idioma', pre: ['1000044'], co: [] },

  /* ---------------------------- Semestre IV ------------------------------ */
  { id: '2017775', cod: '2017775', nombre: 'Biología molecular de la célula', cr: 4, sem: 4, comp: 'FO', area: 'biologia', pre: [], co: [] },
  { id: '2017778', cod: '2017778', nombre: 'Fundamentos de investigación', cr: 2, sem: 4, comp: 'FO', area: 'investigacion', pre: [], co: [] },
  { id: '1000004', cod: '1000004', nombre: 'Cálculo diferencial', cr: 4, sem: 4, comp: 'FO', area: 'fisica_mate', pre: [], co: [], preEsp: 'Matemáticas Básicas (1000001) aprobada, o exención por el examen de admisión' },
  { id: '1000023', cod: '1000023', nombre: 'Mecánica y ondas para biociencias', cr: 4, sem: 4, comp: 'FO', area: 'fisica_mate', pre: [], co: [], preEsp: 'Matemáticas Básicas (1000001) aprobada, o exención por el examen de admisión' },
  { id: '1000046', cod: '1000046', nombre: 'Inglés III', cr: 3, sem: 4, comp: 'NV', area: 'idioma', pre: ['1000045'], co: [] },

  /* ---------------------------- Semestre V ------------------------------- */
  { id: '2017779', cod: '2017779', nombre: 'Genética', cr: 4, sem: 5, comp: 'FO', area: 'biologia', pre: ['2017775'], co: [] },
  { id: 'OPT_FUND_2', cod: null, nombre: 'Optativa de fundamentación', cr: 3, sem: 5, comp: 'FP', area: 'biologia', pre: [], co: [], ranura: ['fundamentacion'] },
  { id: 'DISC_5_1', cod: null, nombre: 'Disciplinar', cr: 4, sem: 5, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: '1000012', cod: '1000012', nombre: 'Bioestadística fundamental', cr: 3, sem: 5, comp: 'FO', area: 'fisica_mate', pre: [], co: [], preEsp: 'Matemáticas Básicas (1000001) aprobada, o exención por el examen de admisión' },
  { id: '1000047', cod: '1000047', nombre: 'Inglés IV', cr: 3, sem: 5, comp: 'NV', area: 'idioma', pre: ['1000046'], co: [] },

  /* ---------------------------- Semestre VI ------------------------------ */
  { id: 'OPT_FUND_3', cod: null, nombre: 'Optativa de fundamentación', cr: 3, sem: 6, comp: 'FP', area: 'biologia', pre: [], co: [], ranura: ['fundamentacion'] },
  { id: 'DISC_6_1', cod: null, nombre: 'Disciplinar', cr: 4, sem: 6, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_6_2', cod: null, nombre: 'Disciplinar', cr: 4, sem: 6, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_6_3', cod: null, nombre: 'Disciplinar', cr: 4, sem: 6, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'ELE_6_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 6, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre VII ----------------------------- */
  { id: 'DISC_7_1', cod: null, nombre: 'Disciplinar', cr: 4, sem: 7, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_7_2', cod: null, nombre: 'Disciplinar', cr: 4, sem: 7, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_7_3', cod: null, nombre: 'Disciplinar', cr: 4, sem: 7, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_7_4', cod: null, nombre: 'Disciplinar', cr: 4, sem: 7, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'ELE_7_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 7, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre VIII ---------------------------- */
  { id: 'DISC_8_1', cod: null, nombre: 'Disciplinar', cr: 4, sem: 8, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_8_2', cod: null, nombre: 'Disciplinar', cr: 4, sem: 8, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_8_3', cod: null, nombre: 'Disciplinar', cr: 4, sem: 8, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'ELE_8_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 8, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_8_2', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 8, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_8_3', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 8, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre IX ------------------------------ */
  { id: 'DISC_9_1', cod: null, nombre: 'Disciplinar', cr: 4, sem: 9, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_9_2', cod: null, nombre: 'Disciplinar', cr: 4, sem: 9, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'DISC_9_3', cod: null, nombre: 'Disciplinar', cr: 4, sem: 9, comp: 'DP', area: 'disciplinar', pre: [], co: [], ranura: ['disciplinar'] },
  { id: 'ELE_9_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_9_2', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_9_3', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 9, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },

  /* ---------------------------- Semestre X ------------------------------- */
  { id: '2023028', cod: '2023028', nombre: 'Trabajo de Grado', cr: 8, sem: 10, comp: 'TG', area: 'grado', pre: [], co: [], preEsp: 'Haber aprobado el 100 % de la fundamentación y del componente disciplinar (regla general de la Universidad)',
    preEsp: 'Haber aprobado el 100 % de la fundamentación y del componente disciplinar (regla general de la Universidad)',
    nota: 'Modalidad alterna en el SIA: Trabajo de Grado - Asignaturas de Posgrado (2023029, 8 créditos).' },
  { id: 'ELE_10_1', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 10, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_10_2', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 10, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
  { id: 'ELE_10_3', cod: null, nombre: 'Electiva (libre elección)', cr: 3, sem: 10, comp: 'LE', area: null, pre: [], co: [], ranura: ['libre'] },
];

/* ============================================================================
   CATÁLOGO DE OPTATIVAS  (Catálogo de asignaturas del SIA, plan 2513)
   grupo: fundamentacion | nivelacion | los grupos disciplinares de abajo
   Las agrupaciones disciplinares NO son oficiales: se hicieron por el tema del
   título para poder filtrar (el acuerdo las lista todas en una sola agrupación).
   pre / preEsp / preFund: requisitos según el acuerdo; el cupo al que se asigne
   la optativa los hereda.
   ========================================================================== */
const CATALOGO = [
  /* ------- Optativas de fundamentación (SIA: FUND. OPTATIVA) -------- */
  { cod: '2017771', nombre: 'Análisis y modelación de sistemas biológicos', grupo: 'fundamentacion', linea: 'Biología' },
  { cod: '2017783', nombre: 'Biogeografía', grupo: 'fundamentacion', linea: 'Biología' },
  { cod: '2017804', nombre: 'Etología', grupo: 'fundamentacion', linea: 'Biología' },
  { cod: '2017780', nombre: 'Historia del pensamiento biológico', grupo: 'fundamentacion', linea: 'Biología' },
  { cod: '2015250', nombre: 'Introducción al trabajo científico', grupo: 'fundamentacion', linea: 'Biología' },
  { cod: '1000003', nombre: 'Álgebra Lineal', grupo: 'fundamentacion', linea: 'Matemáticas y estadística', preEsp: 'Matemáticas Básicas (1000001) aprobada, o exención por el examen de admisión' },
  { cod: '1000005', nombre: 'Cálculo Integral', grupo: 'fundamentacion', linea: 'Matemáticas y estadística', pre: ['1000004'] },
  { cod: '1000013', nombre: 'Probabilidad y estadística fundamental', grupo: 'fundamentacion', linea: 'Matemáticas y estadística', pre: ['1000004'] },
  { cod: '2016365', nombre: 'Estadística descriptiva multivariada', grupo: 'fundamentacion', linea: 'Matemáticas y estadística', pre: ['1000012'] },
  { cod: '1000017', nombre: 'Fundamentos de electricidad y magnetismo', grupo: 'fundamentacion', linea: 'Física y química' },
  { cod: '1000022', nombre: 'Fluidos y electromagnetismo para biociencias', grupo: 'fundamentacion', linea: 'Física y química', pre: ['1000023'] },
  { cod: '1000037', nombre: 'Fisicoquímica I', grupo: 'fundamentacion', linea: 'Física y química' },
  { cod: '2015516', nombre: 'Climatología', grupo: 'fundamentacion', linea: 'Ciencias de la tierra' },
  { cod: '2015238', nombre: 'Geografía física', grupo: 'fundamentacion', linea: 'Ciencias de la tierra' },
  { cod: '2023215', nombre: 'Geología general', grupo: 'fundamentacion', linea: 'Ciencias de la tierra' },
  { cod: '2015446', nombre: 'Derecho constitucional colombiano', grupo: 'fundamentacion', linea: 'Ciencias sociales y lenguaje' },
  { cod: '2015542', nombre: 'Introducción a la economía', grupo: 'fundamentacion', linea: 'Ciencias sociales y lenguaje' },
  { cod: '2016343', nombre: 'Español funcional', grupo: 'fundamentacion', linea: 'Ciencias sociales y lenguaje' },

  /* ------- Nivelación (no cuenta en los créditos del plan) -------- */
  { cod: '1000001', nombre: 'Matemáticas Básicas', grupo: 'nivelacion', linea: 'Nivelación',
    nota: 'Solo para quienes entran al plan de nivelación en matemáticas. Sus 4 créditos no cuentan en los 163.' },
  { cod: '1000002', nombre: 'Lecto-Escritura', grupo: 'nivelacion', linea: 'Nivelación',
    nota: 'Solo para quienes entran al plan de nivelación en lecto-escritura. No cuenta en los 163 créditos.' },

  /* ------- Disciplinares: botánica -------- */
  { cod: '2017536', nombre: 'Embriófitos basales', grupo: 'botanica', linea: 'Botánica', pre: ['2015877'] },
  { cod: '2017537', nombre: 'Espermatófitos', grupo: 'botanica', linea: 'Botánica', pre: ['2015877'] },
  { cod: '2017546', nombre: 'Taxonomía de angiospermas', grupo: 'botanica', linea: 'Botánica', pre: ['2015877'] },
  { cod: '2017538', nombre: 'Fisiología vegetal', grupo: 'botanica', linea: 'Botánica', pre: ['2015877', '2023214'] },
  { cod: '2017806', nombre: 'Fisiología del crecimiento y desarrollo vegetal', grupo: 'botanica', linea: 'Botánica' },
  { cod: '2017808', nombre: 'Florística y fitogeografía', grupo: 'botanica', linea: 'Botánica' },
  { cod: '2017842', nombre: 'Relaciones ecofisiológicas planta suelo agua', grupo: 'botanica', linea: 'Botánica' },
  { cod: '2027218', nombre: 'Biología de macroalgas marinas', grupo: 'botanica', linea: 'Botánica' },
  { cod: '2017534', nombre: 'Biología de protistos y algas', grupo: 'botanica', linea: 'Botánica', pre: ['2017773'] },

  /* ------- Disciplinares: zoología -------- */
  { cod: '2017516', nombre: 'Artrópodos', grupo: 'zoologia', linea: 'Zoología', pre: ['2017772'] },
  { cod: '2029763', nombre: 'Evolución y diversidad en insectos', grupo: 'zoologia', linea: 'Zoología' },
  { cod: '2017519', nombre: 'Vertebrados', grupo: 'zoologia', linea: 'Zoología', pre: ['2017774', '2017772'] },
  { cod: '2017819', nombre: 'Ictiología: la biología de los peces', grupo: 'zoologia', linea: 'Zoología' },
  { cod: '2025432', nombre: 'Biología de reptiles escamados', grupo: 'zoologia', linea: 'Zoología' },
  { cod: '2017837', nombre: 'Ornitología', grupo: 'zoologia', linea: 'Zoología' },
  { cod: '2025434', nombre: 'Mastozoología general', grupo: 'zoologia', linea: 'Zoología' },
  { cod: '2017518', nombre: 'Taxonomía animal', grupo: 'zoologia', linea: 'Zoología', pre: ['2017772'] },
  { cod: '2017517', nombre: 'Fisiología animal', grupo: 'zoologia', linea: 'Zoología', pre: ['2023214', '1000023'] },
  { cod: '2017817', nombre: 'Histología animal', grupo: 'zoologia', linea: 'Zoología' },

  /* ------- Disciplinares: ecología y conservación -------- */
  { cod: '2026822', nombre: 'Fundamentos de ecología de ecosistemas', grupo: 'ecologia', linea: 'Ecología' },
  { cod: '2026823', nombre: 'Fundamentos de ecología de poblaciones', grupo: 'ecologia', linea: 'Ecología' },
  { cod: '2026824', nombre: 'Fundamentos de ecología del paisaje', grupo: 'ecologia', linea: 'Ecología' },
  { cod: '2017527', nombre: 'Ecología regional continental', grupo: 'ecologia', linea: 'Ecología', pre: ['2017777', '2017776', '1000012'] },
  { cod: '2017529', nombre: 'Fundamentos de biología y ecología marina', grupo: 'ecologia', linea: 'Ecología', pre: ['2017777', '2017776', '1000012'] },
  { cod: '2017532', nombre: 'Limnología', grupo: 'ecologia', linea: 'Ecología', pre: ['2017777'] },
  { cod: '2017541', nombre: 'Introducción a la biología de la conservación', grupo: 'ecologia', linea: 'Conservación', pre: ['2017777', '1000012'] },
  { cod: '2017833', nombre: 'Métodos en conservación y manejo de vida silvestre', grupo: 'ecologia', linea: 'Conservación' },
  { cod: '2017792', nombre: 'Conservación genética', grupo: 'ecologia', linea: 'Conservación' },
  { cod: '2015345', nombre: 'Derecho Ambiental', grupo: 'ecologia', linea: 'Conservación' },
  { cod: '2015233', nombre: 'Fotointerpretación', grupo: 'ecologia', linea: 'Conservación' },

  /* ------- Disciplinares: genética, evolución, biología celular y molecular -------- */
  { cod: '2017528', nombre: 'Evolución', grupo: 'genetica_molecular', linea: 'Genética y evolución', pre: ['2017774', '2017779'] },
  { cod: '2017530', nombre: 'Genética de poblaciones', grupo: 'genetica_molecular', linea: 'Genética y evolución', pre: ['2017779', '1000012'] },
  { cod: '2017545', nombre: 'Sistemática Biológica', grupo: 'genetica_molecular', linea: 'Genética y evolución', pre: ['2017774'] },
  { cod: '2017522', nombre: 'Biología celular', grupo: 'genetica_molecular', linea: 'Biología celular y molecular', pre: ['2023214'] },
  { cod: '2017523', nombre: 'Biología Molecular', grupo: 'genetica_molecular', linea: 'Biología celular y molecular', pre: ['2023214', '2017779'] },
  { cod: '2017524', nombre: 'Biología del Desarrollo', grupo: 'genetica_molecular', linea: 'Biología celular y molecular', pre: ['2017775'] },
  { cod: '2017845', nombre: 'Técnicas en biología molecular', grupo: 'genetica_molecular', linea: 'Biología celular y molecular' },
  { cod: '2017531', nombre: 'Inmunología celular y molecular', grupo: 'genetica_molecular', linea: 'Biología celular y molecular', pre: ['2017775', '2023214'] },
  { cod: '2025196', nombre: 'Introducción a la biología computacional', grupo: 'genetica_molecular', linea: 'Biología celular y molecular' },

  /* ------- Disciplinares: microbiología -------- */
  { cod: '2017543', nombre: 'Microbiología', grupo: 'microbiologia', linea: 'Microbiología', pre: ['2017773', '2023214'] },
  { cod: '2017533', nombre: 'Biología de hongos y líquenes', grupo: 'microbiologia', linea: 'Microbiología' },

  /* ------- Disciplinares: métodos y gestión -------- */
  { cod: '2017535', nombre: 'Diseño Experimental', grupo: 'metodos', linea: 'Métodos', pre: ['1000012'] },
  { cod: '2023212', nombre: 'Análisis y diseño de experimentos', grupo: 'metodos', linea: 'Métodos', pre: ['1000012'] },
  { cod: '2017540', nombre: 'Gestión de proyectos', grupo: 'metodos', linea: 'Métodos', preFund: true, preEsp: 'Tener aprobado el 100 % de la fundamentación' },
];

const GRUPOS_CATALOGO = {
  fundamentacion: 'Optativas de fundamentación',
  nivelacion: 'Nivelación',
  botanica: 'Botánica',
  zoologia: 'Zoología',
  ecologia: 'Ecología y conservación',
  genetica_molecular: 'Genética, evolución y biología celular/molecular',
  microbiologia: 'Microbiología',
  metodos: 'Métodos y gestión',
};

/* Grupos disciplinares (para la ranura genérica 'disciplinar') */
const GRUPOS_DISCIPLINARES = ['botanica', 'zoologia', 'ecologia', 'genetica_molecular', 'microbiologia', 'metodos'];

/* ============================================================================
   Notas sobre los datos y sus fuentes
   ========================================================================== */
const INCONSISTENCIAS = [
  { asig: 'Prerrequisitos y correquisitos: del acuerdo del plan', detalle: 'La malla oficial publicada (Facultad de Ciencias) es solo el diagrama de semestres. Los códigos y créditos se tomaron del Catálogo de asignaturas del SIA (plan 2513), y los prerrequisitos y correquisitos del acuerdo del plan de estudios (régimen legal de la UNAL, documento 90037, que modifica el plan y deroga el Acuerdo 063 de 2015 del Consejo de Facultad de Ciencias). En la fundamentación: Ecología y Ciencias de la tierra son correquisitos entre sí; los tres laboratorios de química son correquisito de su teórica; Principios de química orgánica exige Principios de química; Principios de bioquímica exige Química orgánica; Genética exige Biología molecular de la célula; Cálculo diferencial, Bioestadística y Mecánica y ondas exigen Matemáticas Básicas (o su exención). Las optativas de fundamentación y las disciplinares llevan sus propios requisitos: al asignar una a un cupo, el cupo los hereda y la app los evalúa.' },
  { asig: 'Créditos por componente', detalle: 'Del acuerdo: fundamentación obligatoria 60 (Biología 30, Matemática y Estadística 7, Química 16, Física 4, Ciencias de la tierra 3) y optativas de fundamentación 8. Trabajo de grado 8 según el SIA. Disciplinar 55 y libre elección 32 salen de la distribución publicada del plan (68 / 63 / 32 = 163); el total exigido en la agrupación disciplinar quedó fuera de las tablas transcritas del acuerdo. Los cupos de la malla suman algo más (14 disciplinares de 4 y 11 electivas de 3) porque los créditos reales de cada optativa varían: la app usa siempre los créditos reales de la asignatura que asignes a cada cupo.' },
  { asig: 'Diferencias entre el acuerdo y el catálogo actual del SIA', detalle: 'El acuerdo lista optativas que hoy no aparecen en el plan 2513 del SIA (Ecología de poblaciones y comunidades 2017526, Ecología de ecosistemas y paisajes 2017525, Formulación y gerencia de proyectos 2017539, Política y legislación de recursos naturales 2017544, Muestreo en poblaciones biológicas 2016329, Metodología de la investigación científica 2017542, Física de radiaciones sin código, Geología general 2015244) y el SIA ofrece otras que no están en el acuerdo transcrito (Fundamentos de ecología de ecosistemas / de poblaciones / del paisaje 2026822–2026824, Biogeografía, Introducción al trabajo científico, Ictiología, Ornitología, Mastozoología, Histología animal, Técnicas en biología molecular, Introducción a la biología computacional, Conservación genética, Derecho ambiental, Fotointerpretación, Métodos en conservación, Fisiología del crecimiento vegetal, Florística, Relaciones ecofisiológicas, Macroalgas marinas, Evolución y diversidad en insectos, Reptiles escamados, Fundamentos de electricidad y magnetismo, Derecho constitucional, Introducción a la economía). La app muestra lo que ofrece el SIA hoy; las que no están en el acuerdo van sin prerrequisito porque no se conoce (probablemente exigen Ecología, Bioestadística o la fundamentación correspondiente: confírmalo en el SIA). Análisis y diseño de experimentos tiene 3 créditos en el acuerdo y 4 en el SIA (se usan 4); Geología general es 2015244 en el acuerdo y 2023215 en el SIA (se usa 2023215).' },
  { asig: 'Nivelación e Inglés', detalle: 'La malla marca «163 + 12 (Inglés) = 175». Los 12 créditos de Inglés I–IV y Matemáticas Básicas / Lecto-Escritura son de nivelación y no cuentan en los 163 del plan; en la app aparecen en gris y no suman al avance total, pero sí ocupan carga en el plan sugerido. Matemáticas Básicas es prerrequisito de Cálculo diferencial, Bioestadística, Mecánica y ondas y Álgebra lineal: como no está en la malla, se muestra como requisito en texto (quien no la necesitó por el examen de admisión lo cumple).' },
  { asig: 'Matemáticas Básicas u optativa de fundamentación (semestre I)', detalle: 'La malla pone en el semestre I «Matemáticas Básicas (u Optativa Fundamental)». Se modeló como un cupo de fundamentación optativa que admite Matemáticas Básicas (nivelación) o cualquier optativa de fundamentación.' },
  { asig: 'Agrupaciones de las disciplinares', detalle: 'El acuerdo lista las disciplinares en una sola agrupación («Asignaturas de formación disciplinar o profesional») y el SIA tampoco las agrupa. Los grupos de la pestaña Optativas (botánica, zoología, ecología…) se hicieron por el tema del título, para poder filtrar; no son una clasificación oficial. Cualquier disciplinar sirve para cualquier cupo disciplinar.' },
  { asig: 'Nombres de las asignaturas de química', detalle: 'La malla los abrevia («Lab. Princ. Química», «P. Química Orgánica», «Lab. Pric. Orgánica»); en la app van con el nombre completo del SIA y su código: Principios de química (1000024), Laboratorio técnicas básicas en química (1000025), Principios de química orgánica (1000030), Laboratorio principios de química orgánica (1000031).' },
  { asig: 'Trabajo de Grado', detalle: 'Dos códigos en el SIA: 2023028 (Trabajo de Grado) y 2023029 (Trabajo de Grado - Asignaturas de Posgrado), ambos de 8 créditos. La app usa 2023028; puedes cambiar el código desde «Editar asignatura». Exige tener aprobada toda la fundamentación y el componente disciplinar (regla general).' },
];
