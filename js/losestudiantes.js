/* ============================================================================
   losestudiantes.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Fuente: losestudiantes.com · verificado el 2026-08-16
   Regenerar con:  node herramientas/verificar-losestudiantes.js
   ========================================================================== */

const LE_BASE_PROFESOR = 'https://losestudiantes.com/universidad-nacional/professors/';
const LE_VERIFICADO = '2026-08-16';

/* código SIA -> { nombre tal como aparece allí, url de la materia } */
const LOSESTUDIANTES = {
  "1000001": {
    "nombre": "Matematicas Basicas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000001"
  },
  "1000002": {
    "nombre": "Lecto-Escritura",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000002"
  },
  "1000003": {
    "nombre": "Algebra Lineal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000003"
  },
  "1000004": {
    "nombre": "Calculo Diferencial",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000004"
  },
  "1000005": {
    "nombre": "Calculo Integral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000005"
  },
  "1000012": {
    "nombre": "Bioestadistica Fundamental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000012"
  },
  "1000013": {
    "nombre": "Probabilidad Y Estadistica Fundamental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000013"
  },
  "1000017": {
    "nombre": "Fundamentos De Electricidad Y Magnetismo",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000017"
  },
  "1000022": {
    "nombre": "Fluidos Y Electromagnetismo Para Biociencias",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000022"
  },
  "1000023": {
    "nombre": "Mecanica Y Ondas Para Biociencias",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000023"
  },
  "1000024": {
    "nombre": "Principios De Quimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000024"
  },
  "1000025": {
    "nombre": "Laboratorio Tecnicas Basicas En Quimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000025"
  },
  "1000030": {
    "nombre": "Principios De Quimica Organica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000030"
  },
  "1000031": {
    "nombre": "Laboratorio Principios De Quimica Organica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000031"
  },
  "1000037": {
    "nombre": "Fisicoquimica I",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000037"
  },
  "1000044": {
    "nombre": "Ingles I- Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000044"
  },
  "1000045": {
    "nombre": "Ingles Ii - Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000045"
  },
  "1000046": {
    "nombre": "Ingles Iii - Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000046"
  },
  "1000047": {
    "nombre": "Ingles Iv- Semestral",
    "url": "https://losestudiantes.com/universidad-nacional/courses/1000047"
  },
  "2015233": {
    "nombre": "Fotointerpretacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015233"
  },
  "2015238": {
    "nombre": "Geografia Fisica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015238"
  },
  "2015250": {
    "nombre": "Introduccion Al Trabajo Cientifico",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015250"
  },
  "2015345": {
    "nombre": "Derecho Ambiental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015345"
  },
  "2015446": {
    "nombre": "Derecho Constitucional Colombiano",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015446"
  },
  "2015516": {
    "nombre": "Climatologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015516"
  },
  "2015542": {
    "nombre": "Introduccion A La Economia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015542"
  },
  "2015877": {
    "nombre": "Biologia De Plantas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2015877"
  },
  "2016343": {
    "nombre": "Español Funcional",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016343"
  },
  "2016365": {
    "nombre": "Estadistica Descriptiva Multivariada",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2016365"
  },
  "2017010": {
    "nombre": "Laboratorio Principios De Bioquimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017010"
  },
  "2017516": {
    "nombre": "Artropodos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/artropodos"
  },
  "2017517": {
    "nombre": "Fisiologia Animal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017517"
  },
  "2017519": {
    "nombre": "Vertebrados",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017519"
  },
  "2017522": {
    "nombre": "Biologia Celular",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017522"
  },
  "2017523": {
    "nombre": "Biologia Molecular",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017523"
  },
  "2017524": {
    "nombre": "Biologia Del Desarrollo",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017524"
  },
  "2017527": {
    "nombre": "Ecologia Regional Continental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017527"
  },
  "2017528": {
    "nombre": "Evolucion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017528"
  },
  "2017529": {
    "nombre": "Fundamentos De Biologia Y Ecologia Marina",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017529"
  },
  "2017530": {
    "nombre": "Genetica De Poblaciones",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017530"
  },
  "2017531": {
    "nombre": "Inmunologia Celular Y Molecular",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017531"
  },
  "2017532": {
    "nombre": "Limnologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017532"
  },
  "2017533": {
    "nombre": "Biologia De Hongos Y Liquenes",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017533"
  },
  "2017534": {
    "nombre": "Biologia De Protistos Y Algas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017534"
  },
  "2017535": {
    "nombre": "Diseño Experimental",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017535"
  },
  "2017536": {
    "nombre": "Embriofitos Basales",
    "url": "https://losestudiantes.com/universidad-nacional/courses/embriofitos-basales"
  },
  "2017537": {
    "nombre": "Espermatofitos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017537"
  },
  "2017538": {
    "nombre": "Fisiologia Vegetal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017538"
  },
  "2017540": {
    "nombre": "Gestion De Proyectos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017540"
  },
  "2017541": {
    "nombre": "Introducción a la Biología de la Conservación",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017541"
  },
  "2017543": {
    "nombre": "Microbiologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017543"
  },
  "2017545": {
    "nombre": "Sistemática Biológica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017545"
  },
  "2017771": {
    "nombre": "Analisis Y Modelacion De Sistemas Biologicos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017771"
  },
  "2017772": {
    "nombre": "Biologia Animal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017772"
  },
  "2017773": {
    "nombre": "Biologia De Microorganismos",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017773"
  },
  "2017774": {
    "nombre": "Biologia Evolutiva",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017774"
  },
  "2017775": {
    "nombre": "Biologia Molecular De La Celula",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017775"
  },
  "2017776": {
    "nombre": "Ciencias De La Tierra",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017776"
  },
  "2017777": {
    "nombre": "Ecologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017777"
  },
  "2017778": {
    "nombre": "Fundamentos De Investigacion",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017778"
  },
  "2017779": {
    "nombre": "Genetica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017779"
  },
  "2017780": {
    "nombre": "Historia Del Pensamiento Biologico",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017780"
  },
  "2017783": {
    "nombre": "Biogeografia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017783"
  },
  "2017792": {
    "nombre": "Conservacion Genetica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017792"
  },
  "2017804": {
    "nombre": "Etologia",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017804"
  },
  "2017817": {
    "nombre": "Histologia Animal",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017817"
  },
  "2017833": {
    "nombre": "Métodos en conservación y manejo de vida silvestre",
    "url": "https://losestudiantes.com/universidad-nacional/courses/metodos-en-conservacion-y-manejo-de-vida-silvestre"
  },
  "2017842": {
    "nombre": "Relaciones Ecofisiologicas Planta Suelo Agua",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017842"
  },
  "2017845": {
    "nombre": "Tecnicas En Biologia Molecular",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2017845"
  },
  "2023028": {
    "nombre": "Trabajo De Grado",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2023028"
  },
  "2023214": {
    "nombre": "Principios De Bioquimica",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2023214"
  },
  "2023215": {
    "nombre": "Geologia General",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2023215"
  },
  "2025196": {
    "nombre": "Introduccion A La Biologia Computacional",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2025196"
  },
  "2026822": {
    "nombre": "Fundamentos De Ecologia De Ecosistemas",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026822"
  },
  "2026823": {
    "nombre": "Fundamentos De Ecologia De Poblaciones",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026823"
  },
  "2026824": {
    "nombre": "Fundamentos De Ecologia Del Paisaje",
    "url": "https://losestudiantes.com/universidad-nacional/courses/2026824"
  }
};
