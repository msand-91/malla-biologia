/* ============================================================================
   carrera.js — qué carrera es esta copia de la app.
   Lo leen la app (título, clave de guardado) y las herramientas de línea de
   comandos (qué plan consultar en el SIA). Todo lo demás es genérico.
   ========================================================================== */
const CARRERA = {
  nombre: 'Biología',
  titulo: 'Malla Curricular · Pregrado en Biología',
  slug: 'malla-biologia',
  plan: '2513',                                  // código del plan de estudios en el SIA
  sede: /1101 SEDE BOGOT/,                       // textos de las listas del Catálogo del SIA
  facultad: /2050 FACULTAD DE CIENCIAS$/,
  claveLS: 'mallaBiologiaUNAL.v1',               // clave de localStorage
  archivoAvance: 'avance-malla-biologia.json',
  agente: 'malla-biologia-unal/1.0',
};
