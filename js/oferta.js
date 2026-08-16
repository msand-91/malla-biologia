/* ============================================================================
   oferta.js — GENERADO AUTOMÁTICAMENTE, no editar a mano.
   Oferta del semestre: grupos, profesores, horarios, salones y cupos.
   Fuente: «Catálogo de asignaturas» público del SIA (acceso anónimo, sin sesión).
   Consultado el 2026-08-16. Regenerar con: node herramientas/catalogo-sia.js sincronizar

   Contiene el plan 2513 (Biología, todas las tipologías menos libre elección)
   y la libre elección del componente 2CLE COMPONENTE DE LIBRE ELECCIÓN de la sede Bogotá.
   334 asignaturas, 252 con grupos programados, 748 grupos.
   Los cupos son los del momento de la consulta; cambian a diario en inscripción.
   ========================================================================== */

const OFERTA_CONSULTADO = '2026-08-16';
const OFERTA_PERIODO = "2026-2";

/* código -> { cod, nombre, creditos, tipologia, actividades: [{ nombre, grupos: [
     { grupo, profesores, cupos, jornada, sesiones: [{ dia (1=lunes), inicio, fin, salon, edificio, desde, hasta }] } ] }] } */
const OFERTA = {
 "1000001": {
  "cod": "1000001",
  "codigoSIA": "1000001-B",
  "nombre": "Matemáticas Básicas",
  "creditos": 4,
  "tipologia": "NIVELACIÓN",
  "descripcion": "OBJETIVOS:\nGenerales\n¿ Brindar al estudiante los fundamentos conceptuales para abordar los cursos posteriores que requieran la matemática básica.\n¿ Promover a través de los talleres, una participación activa del estudiante en su proceso de aprendizaje matemático.\n¿ Generar un espacio y tiempo más adecuados para que el estudiante madure e interiorice los conocimientos adquiridos.\nEspecíficos\n¿ Presentar elementos básicos de lógica que permitan al estudiante incorporar formalismo y validez a sus argumentos.\n¿ Desarrollar habilidades básicas para el manejo de operaciones aritméticas y entre conjuntos\n¿ Lograr un manejo adecuado de las expresiones algebraicas.\n¿ Familiarizar al alumno con la noción de función, su representación gráfica e interpretación, y trabajar con algunas funciones fundamentales tales como las lineales, cuadráticas, exponenciales, logarítmicas y trigonométricas.\n¿ Repasar elementos de la geometría euclidiana básica y de la trigonometría elemental.\n¿ Hacer una introducción a los métodos de conteo.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000001-B)",
    "grupos": [
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 4,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "CAPILLA",
        "salon": "01",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "CAPILLA",
        "salon": "01",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 2",
      "codigoGrupo": "CARI-02",
      "profesores": [],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "CAPILLA",
        "salon": "01",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Luisa María Arrechea Fajardo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Luisa María Arrechea Fajardo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 3",
      "codigoGrupo": "TUMA-03",
      "profesores": [
       "Luisa María Arrechea Fajardo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 4",
      "codigoGrupo": "TUMA-04",
      "profesores": [
       "JESÚS ALBERTO ANGULO CUERO"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 5B",
        "salon": "18",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 3",
      "codigoGrupo": "AMAZ-03",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 4",
      "codigoGrupo": "AMAZ-04",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Salud Grupo 5",
      "codigoGrupo": "AMAZ-05",
      "profesores": [],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Arauca Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Arauca Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "LAUDY KATERINE PAN PEREZ"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 3 (Arauca Presencial)",
      "codigoGrupo": "ORIN-03",
      "profesores": [
       "Vicente Carlos Pérez Álvarez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 4 (Arauca Presencial)",
      "codigoGrupo": "ORIN-04",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE MAGISTRAL (1000001-B)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Ibeth Marcela Rubio Perilla"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Herbert Alonso Dueñas Ruiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Jeanneth Galeano Penaloza"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Gustavo Adolfo Nieto Clavijo"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Natalia Camila Pinzon Cortes"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO MARIA CRISTINA SALAZAR C",
        "salon": "212-121",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Martha Cecilia Moreno Penagos"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Claudio Rodriguez Beltran"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUD. PRINCIPAL",
        "salon": "310-03",
        "edificio": "310 - Antonio García Nossa",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUD. PRINCIPAL",
        "salon": "310-03",
        "edificio": "310 - Antonio García Nossa",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Gabriel Ignacio Padilla Leon"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUD. PRINCIPAL",
        "salon": "310-03",
        "edificio": "310 - Antonio García Nossa",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Juan David Osorio Cano"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Peama - Caribe Grupo 2",
      "codigoGrupo": "CARI-02",
      "profesores": [
       "Juan David Osorio Cano"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 3",
      "codigoGrupo": "TUMA-03",
      "profesores": [],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 4",
      "codigoGrupo": "TUMA-04",
      "profesores": [],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": []
     },
     {
      "grupo": "Peama-Amazonia Salud Grupo 5",
      "codigoGrupo": "AMAZ-05",
      "profesores": [],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": []
     },
     {
      "grupo": "Peama-Amazonia-Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": []
     },
     {
      "grupo": "Peama-Amazonia-Grupo 3",
      "codigoGrupo": "AMAZ-03",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": []
     },
     {
      "grupo": "Peama-Amazonia-Grupo 4",
      "codigoGrupo": "AMAZ-04",
      "profesores": [
       "Jorge Andres Araujo Bernal"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": []
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Arauca Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Arauca Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "LAUDY KATERINE PAN PEREZ"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 3 (Arauca Presencial)",
      "codigoGrupo": "ORIN-03",
      "profesores": [
       "Vicente Carlos Pérez Álvarez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 4 (Arauca Presencial)",
      "codigoGrupo": "ORIN-04",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000002": {
  "cod": "1000002",
  "codigoSIA": "1000002-B",
  "nombre": "Lecto-Escritura",
  "creditos": 4,
  "tipologia": "NIVELACIÓN",
  "descripcion": "El objetivo de este curso nivelatorio es cualificar la competencia argumentativa de los estudiantes, en lectura y escritura, por medio de la apropiación de estrategias de comprensión y expresión.\nAl finalizar el curso los estudiantes estarán en la capacidad de:\n- Identificar distintos modos discursivos presentes en un texto argumentativo.\n- Identificar la estructura argumentativa de un texto: Tesis central o hipótesis, premisas, red de relaciones entre la premisas.\n- Emitir un juicio de valor en la relación con la estructura identificada.\n- Identificar las distintas posturas que origina la argumentación contenida en el texto.\n- Construir un texto que tenga una estructura argumentativa.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000002)",
    "grupos": [
     {
      "grupo": "PAET-Amazonia Grupo 1 Antropologia",
      "codigoGrupo": "AMAZ-05",
      "profesores": [
       "David Alexander Cruz Calderon"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Amazonia Grupo 2 Antropologia",
      "codigoGrupo": "AMAZ-06",
      "profesores": [
       "David Alexander Cruz Calderon"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET-Amazonia Grupo 3 Antropologia",
      "codigoGrupo": "AMAZ-07",
      "profesores": [
       "David Alexander Cruz Calderon"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Caribe Grupo 2",
      "codigoGrupo": "CARI-02",
      "profesores": [],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Maria Teresa Salcedo Montero"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Maria Teresa Salcedo Montero"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 3",
      "codigoGrupo": "TUMA-03",
      "profesores": [
       "Maria Teresa Salcedo Montero"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 4",
      "codigoGrupo": "TUMA-04",
      "profesores": [
       "Maria Teresa Salcedo Montero"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 3",
      "codigoGrupo": "AMAZ-03",
      "profesores": [
       "Diego Fabián Arévalo Viveros"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 2",
        "salon": "10",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 2",
        "salon": "10",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 4",
      "codigoGrupo": "AMAZ-04",
      "profesores": [
       "David Felipe Guerrero Beltrán"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 8,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 3 (Presencial)",
      "codigoGrupo": "ORIN-03",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 4 (Presencial)",
      "codigoGrupo": "ORIN-04",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 5,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 5 (Presencial)",
      "codigoGrupo": "ORIN-05",
      "profesores": [
       "Carlas Lucia Castilla Lara"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000003": {
  "cod": "1000003",
  "codigoSIA": "1000003-B",
  "nombre": "Álgebra Lineal",
  "creditos": 4,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "OBJETIVOS: Asimilar los fundamentos del Algebra Lineal, a nivel elemental, pero con la profundidad necesaria para adquirir los conocimientos y habilidades básicas (capacidad de análisis y de razonamiento lógico - deductivo) para la solución de problemas en las cuales estén involucrados los elementos matemáticos de sistemas de ecuaciones lineales, espacios vectoriales, valores y vectores propios de una matriz y diagonalización de matrices.\n\nMETODOLOGÍA: La modalidad de cursos magistrales consiste de un sistema integrado de conferencias teóricas, talleres y asesorías. Cada curso magistral tiene dos conferencias teóricas a la semana, de dos horas cada una, y son atendidas por profesores de planta, por monitores académicos de posgrado y en casos excepcionales por docentes ocasionales.\nEl estudiante de un curso magistral tiene la opción de asistir a un taller semanal de dos horas, que sirve de refuerzo a la clase teórica y que está a cargo de un monitor académico de posgrado o de pregrado. Así mismo el estudiante puede ser atendido de manera individual en las asesorías.\nLas asesorías son brinadadas, tanto por los profesores de planta como por los monitores académicos de posgardo y pregrado.\nEn las asesorías el estudiante consulta las dudas teóricas y recibe orientación acerca de los ejercicios que no pudo resolver en su trabajo personal.\nLa asistencia de los estudiantes a las asesorías es opcional.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 1000003 (21000003)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Agustin Moreno Canadas"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "Erika Lorena Rosero Alzate",
       "Oscar Andrés Rojas Sepúlveda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Epifanio Lozano Ayala"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "Mohammed EL AIDI "
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Myriam Leonor Campos Florez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [
       "Martha Cecilia Moreno Penagos"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18",
      "codigoGrupo": "18",
      "profesores": [
       "John Alexander Cruz Morales"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 52,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AUDITORIO PARA SUSTENTAR CLASES (MATEMATICAS)",
        "salon": "405-202",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AUDITORIO PARA SUSTENTAR CLASES (MATEMATICAS)",
        "salon": "405-202",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 20",
      "codigoGrupo": "20",
      "profesores": [
       "Natalia Camila Pinzon Cortes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 200",
        "salon": "404-200",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 200",
        "salon": "404-200",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 21",
      "codigoGrupo": "21",
      "profesores": [
       "Ivon Andrea Dorado Correa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 52,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO PARA SUSTENTAR CLASES (MATEMATICAS)",
        "salon": "405-202",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO PARA SUSTENTAR CLASES (MATEMATICAS)",
        "salon": "405-202",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 22",
      "codigoGrupo": "22",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 46,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON 203",
        "salon": "564-203",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON 203",
        "salon": "564-203",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Luis Alejandro Barbosa Torres"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 112,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Jaime David Mora Paz"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Myriam Leonor Campos Florez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama- Tumaco -Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Fredy Angel Jimenez Giraldo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000004": {
  "cod": "1000004",
  "codigoSIA": "1000004-B",
  "nombre": "Cálculo diferencial",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "OBJETIVOS\nEstudiar los conceptos de límite y derivada para funciones de una variable real y utilizar estas ideas en la solución de problemas de optimización, trazado de curvas y razones de cambio.\n\nMETODOLOGÍA: La modalidad de cursos magistrales consiste de un sistema integrado de conferencias teóricas, talleres y asesorías. Cada curso magistral tiene dos conferencias teóricas a la semana, de dos horas cada una, y son atendidas por profesores de planta, por monitores académicos de posgrado y en casos excepcionales por docentes ocasionales.\nEl estudiante de un curso magistral tiene la opción de asistir a un taller semanal de dos horas, que sirve de refuerzo a la clase teórica y que está a cargo de un monitor académico de posgrado o de pregrado. Así mismo el estudiante puede ser atendido de manera individual en las asesorías.\nLas asesorías son brinadadas, tanto por los profesores de planta como por los monitores académicos de posgardo y pregrado.\nEn las asesorías el estudiante consulta las dudas teóricas y recibe orientación acerca de los ejercicios que no pudo resolver en su trabajo personal.\nLa asistencia de los estudiantes a las asesorías es opcional.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 1000004 (21000004)",
    "grupos": [
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 53,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 90,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO C - ANTONIO MARÍA GÓMEZ",
        "salon": "453-233",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 27,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO",
        "salon": "311-305",
        "edificio": "311 - Lauchlin Currie",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO",
        "salon": "311-305",
        "edificio": "311 - Lauchlin Currie",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [
       "Hernan Garzon Gutierrez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 39,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18",
      "codigoGrupo": "18",
      "profesores": [
       "Mauricio Lopez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO AUXILIAR 1",
        "salon": "310-121",
        "edificio": "310 - Antonio García Nossa",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO AUXILIAR 1",
        "salon": "310-121",
        "edificio": "310 - Antonio García Nossa",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 19",
      "codigoGrupo": "19",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 59,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 20",
      "codigoGrupo": "20",
      "profesores": [
       "Hernan Garzon Gutierrez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 21",
      "codigoGrupo": "21",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 22",
      "codigoGrupo": "22",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 24",
      "codigoGrupo": "24",
      "profesores": [
       "Ricardo Ariel Pastran Ramirez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 200",
        "salon": "404-200",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 200",
        "salon": "404-200",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 25",
      "codigoGrupo": "25",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 27",
      "codigoGrupo": "27",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 51,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 28",
      "codigoGrupo": "28",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 29",
      "codigoGrupo": "29",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 30",
      "codigoGrupo": "30",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 32",
      "codigoGrupo": "32",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 89,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Myriam Leonor Campos Florez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 37,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Oscar Javier Lopez Alfonso"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 84,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Anderson Arley Vera Arboleda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 64,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AUDITORIO CARLOS ALBERTO BARBERI PERDOMO (PARANINFO A)",
        "salon": "401-PAR-A",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-208",
        "salon": "401-208",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Fredy Angel Jimenez Giraldo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "JESÚS ALBERTO ANGULO CUERO"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "Gustavo Adolfo Artunduaga Guevara"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "Reina Isabel Baldeon Moreno"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 3B",
        "salon": "15",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 3B",
        "salon": "15",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Ronald Stewart Venera Martinez"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE INNOVACION Y PENSAMIENTO CRITICO",
        "salon": "06",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE INNOVACION Y PENSAMIENTO CRITICO",
        "salon": "06",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 14,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000005": {
  "cod": "1000005",
  "codigoSIA": "1000005-B",
  "nombre": "Cálculo Integral",
  "creditos": 4,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "OBJETIVOS\nGeneral\n¿ Lograr la apropiación por parte del. estudiante de los conceptos fundamentales del cálculo integral de funciones de una variable real y crear habilidades que le permitan aplicar estos conocimientos en problemas propios de su disciplina y abordar de manera elemental los conceptos de sucesiones y series.\nEspecíficos\n¿ Conocer y manejar con propiedad el concepto de integral definida de una función real de una variable real y su relación con el concepto de primitiva o antiderivada, para facilitar los cálculos.\n¿ Estudiar algunas de las diferentes aplicaciones del concepto de integral.\n¿ Adquirir destrezas en el estudio de la convergencia de sucesiones y series",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 1000005 (21000005)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "Orlando Vanegas Canro"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Epifanio Lozano Ayala"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO PARA SUSTENTAR CLASES (MATEMATICAS)",
        "salon": "405-202",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO PARA SUSTENTAR CLASES (MATEMATICAS)",
        "salon": "405-202",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Mohammed EL AIDI "
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Alina Fedosova "
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 70,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 200",
        "salon": "404-200",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 200",
        "salon": "404-200",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [
       "Hernan Garzon Gutierrez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-413",
        "salon": "453-413",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "RENE ERLIN CASTILLO "
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 20",
      "codigoGrupo": "20",
      "profesores": [
       "Franqui Solis Cardenas Poloche"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Eduardo Cardenas Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 70,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 200",
        "salon": "404-200",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 200",
        "salon": "404-200",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Edward Samuel Becerra Rojas"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALÓN DE CLASE 401-104",
        "salon": "401-104",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-304",
        "salon": "401-304",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Franqui Solis Cardenas Poloche"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 100,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO JUAN BAUTISTA GOMES RODRIGUEZ (PARANINFO B)",
        "salon": "401-PAR-B",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO JUAN BAUTISTA GOMES RODRIGUEZ (PARANINFO B)",
        "salon": "401-PAR-B",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Alexandre Sinitsyne "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALÓN DE CLASE 401-205",
        "salon": "401-205",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "JESÚS ALBERTO ANGULO CUERO"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 2",
        "salon": "AULA 2",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 2",
        "salon": "AULA 2",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 2",
        "salon": "AULA 2",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000012": {
  "cod": "1000012",
  "codigoSIA": "1000012-B",
  "nombre": "Bioestadística fundamental",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000012)",
    "grupos": [
     {
      "grupo": "Grupo 1 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "JHONIER SEBASTIAN RANGEL GUTIERREZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Jose Giovany Babativa Marquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 45,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA",
        "salon": "404-200B",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA",
        "salon": "404-200B",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Emilse Gomez Torres"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 302",
        "salon": "564-302",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 302",
        "salon": "564-302",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "CRISTIAN FELIPE CASTELBLANCO BENAVIDES"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE-ESTADISTICA",
        "salon": "404-206",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE-ESTADISTICA",
        "salon": "404-206",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "CRISTIAN FELIPE CASTELBLANCO BENAVIDES"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE-ESTADISTICA",
        "salon": "404-206",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE-ESTADISTICA",
        "salon": "404-206",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Miller Fernando Palta "
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "AULA DE INFORMATICA No. 1",
        "salon": "INFORMATICA",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000013": {
  "cod": "1000013",
  "codigoSIA": "1000013-B",
  "nombre": "Probabilidad y estadística fundamental",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000013)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Eduardo Alonso Malaver"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 35,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-307 (SALA TIC)",
        "salon": "453-307",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-307 (SALA TIC)",
        "salon": "453-307",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "JHONIER SEBASTIAN RANGEL GUTIERREZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Sandra Vergara Cardozo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 35,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE-ESTADISTICA",
        "salon": "405-313",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE-ESTADISTICA",
        "salon": "405-313",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "DIEGO ALBERTO MARTINEZ SIMBAQUEVA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 205",
        "salon": "564-205",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 205",
        "salon": "564-205",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "DIEGO ALBERTO MARTINEZ SIMBAQUEVA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 205",
        "salon": "564-205",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 205",
        "salon": "564-205",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "DIEGO ALBERTO MARTINEZ SIMBAQUEVA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-306",
        "salon": "401-306",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-306",
        "salon": "401-306",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Andrea Catalina Garcia Montoya"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 45,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA",
        "salon": "404-200B",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA",
        "salon": "404-200B",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Sergio Alejandro Calderon Villanueva"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE-ESTADISTICA",
        "salon": "405-312",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE-ESTADISTICA",
        "salon": "405-312",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Luis Guillermo Diaz Monroy"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA TIC ESTADISTICA",
        "salon": "405-209",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA TIC ESTADISTICA",
        "salon": "405-209",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 22",
      "codigoGrupo": "22",
      "profesores": [
       "Hanwen Zhang "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 45,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA",
        "salon": "404-200B",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA",
        "salon": "404-200B",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 23",
      "codigoGrupo": "23",
      "profesores": [
       "ULPIANO LARA CRISTANCHO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA TIC ESTADISTICA",
        "salon": "405-209",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA TIC ESTADISTICA",
        "salon": "405-209",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Diana Carolina Franco Soto"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ANÁLISIS DE DATOS - SALA DE INFORMÁTICA",
        "salon": "405-208",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ANÁLISIS DE DATOS - SALA DE INFORMÁTICA",
        "salon": "405-208",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Diana Carolina Franco Soto"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ANÁLISIS DE DATOS - SALA DE INFORMÁTICA",
        "salon": "405-208",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ANÁLISIS DE DATOS - SALA DE INFORMÁTICA",
        "salon": "405-208",
        "edificio": "405 - Posgrados Matemáticas y Física",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Darwin Eduardo Martínez Riaño"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 35,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Darwin Eduardo Martínez Riaño"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 35,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Camilo Jose Torres Jimenez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA",
        "salon": "404-200B",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA",
        "salon": "404-200B",
        "edificio": "404 - Yu Takeuchi",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000017": {
  "cod": "1000017",
  "codigoSIA": "1000017-B",
  "nombre": "Fundamentos de electricidad y magnetismo",
  "creditos": 4,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "Asignatura de pregrado orientada al estudio de los principios fundamentales de la electricidad y el magnetismo, así como de las interacciones electromagnéticas presentes en sistemas naturales y tecnológicos. El curso proporciona herramientas conceptuales y matemáticas para comprender fenómenos eléctricos, magnéticos y electromagnéticos esenciales en la formación científica y tecnológica.\n\nDurante la asignatura, el estudiante desarrollará habilidades para analizar campos eléctricos y magnéticos, interpretar circuitos básicos, comprender fenómenos de inducción electromagnética y resolver problemas relacionados con cargas, corrientes y potenciales eléctricos. Asimismo, fortalecerá competencias en razonamiento lógico, modelación matemática, análisis experimental y solución de problemas físicos.\n\nLa asignatura posee un carácter interdisciplinar al relacionarse con áreas como física, ingeniería, telecomunicaciones, electrónica, bioingeniería y ciencias aplicadas, beneficiando a estudiantes interesados en comprender el funcionamiento de múltiples tecnologías contemporáneas.\n\nLos contenidos tienen aplicación práctica en sistemas eléctricos, dispositivos electrónicos, telecomunicaciones, instrumentación científica y tecnologías de uso cotidiano, además de aportar herramientas fundamentales para la comprensión de fenómenos físicos presentes en diversos contextos académicos y profesionales.\n\nEstá dirigida a estudiantes de pregrado. No requiere conocimientos especializados previos, aunque se recomienda contar con bases en física general y matemáticas básicas, especialmente en álgebra y cálculo diferencial. Se sugiere un avance curricular inicial o intermedio para favorecer la apropiación conceptual y matemática de los contenidos.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TALLER (1000017-B )",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Roberto Franco Peñaloza"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Felipe Valencia Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "Felipe Valencia Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "Frank Rodolfo Fonseca Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "Clara Lilia Calderon Triana"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Clara Lilia Calderon Triana"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Clara Lilia Calderon Triana"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Roberto Franco Peñaloza"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Eulises Alejandro Fonseca Parra"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Roberto Franco Peñaloza"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Eulises Alejandro Fonseca Parra"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-413",
        "salon": "453-413",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "JUAN PABLO GUEVARA MARULANDA"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Gil Capote Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "JUAN DIEGO CASTAÑO MARÍN"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Gil Capote Rodriguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "30/09/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "01/10/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Roberto Franco Peñaloza"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE MAGISTRAL (1000017-B )",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Eulises Alejandro Fonseca Parra"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO A INGENIERIA",
        "salon": "453-231",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Felipe Valencia Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "Felipe Valencia Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "Felipe Valencia Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "Clara Lilia Calderon Triana"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO A INGENIERIA",
        "salon": "453-231",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Clara Lilia Calderon Triana"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO A INGENIERIA",
        "salon": "453-231",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Clara Lilia Calderon Triana"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO A INGENIERIA",
        "salon": "453-231",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Clara Lilia Calderon Triana"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO A INGENIERIA",
        "salon": "453-231",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Eulises Alejandro Fonseca Parra"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO A INGENIERIA",
        "salon": "453-231",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Eulises Alejandro Fonseca Parra"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO A INGENIERIA",
        "salon": "453-231",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Eulises Alejandro Fonseca Parra"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO A INGENIERIA",
        "salon": "453-231",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Gil Capote Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Gil Capote Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Gil Capote Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Gil Capote Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Felipe Valencia Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO B INGENIERIA",
        "salon": "453-232",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE LABORATORIO (1000017-B )",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Eulises Alejandro Fonseca Parra"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "ASTRID CAMILA RIVEROS MESA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-108",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "JUAN DIEGO CASTAÑO MARÍN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "JUAN PABLO GUEVARA MARULANDA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "JUAN DIEGO CASTAÑO MARÍN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "ASTRID CAMILA RIVEROS MESA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "CARLOS FELIPE ANGEL QUIROGA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-108",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "JUAN PABLO GUEVARA MARULANDA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Ian Mitchel Rossi Rincon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-108",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "JUAN PABLO GUEVARA MARULANDA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "JUAN DIEGO CASTAÑO MARÍN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Ian Mitchel Rossi Rincon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Gil Capote Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "30/09/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "01/10/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Gil Capote Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Hector Fabio Castro Serrato"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "CARLOS FELIPE ANGEL QUIROGA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-106",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000022": {
  "cod": "1000022",
  "codigoSIA": "1000022-B",
  "nombre": "Fluidos y electromagnetismo para biociencias",
  "creditos": 4,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "Asignatura de pregrado orientada al estudio de los principios físicos relacionados con la mecánica de fluidos y el electromagnetismo, aplicados a fenómenos biológicos y sistemas propios de las biociencias. El curso busca proporcionar herramientas conceptuales y analíticas que permitan comprender procesos naturales y tecnológicos relevantes en contextos biomédicos, ambientales y experimentales.\n\n\nDurante la asignatura, el estudiante fortalecerá habilidades para analizar el comportamiento de fluidos, interpretar fenómenos eléctricos y magnéticos, modelar procesos físicos en sistemas biológicos y resolver problemas aplicados a situaciones reales. Asimismo, desarrollará competencias en razonamiento científico, análisis cuantitativo, interpretación experimental y articulación interdisciplinaria del conocimiento.\n\n\nLa asignatura tiene un enfoque interdisciplinar al integrar conceptos de física, biología, medicina, bioingeniería y ciencias ambientales, permitiendo que estudiantes de diferentes áreas comprendan fenómenos como circulación sanguínea, transporte de fluidos, bioelectricidad y funcionamiento de dispositivos biomédicos.\n\n\nEstá dirigida a estudiantes de pregrado en áreas relacionadas con biociencias. No requiere conocimientos especializados previos, aunque se recomienda contar con bases en matemáticas y física general, así como un nivel inicial o intermedio de avance curricular que favorezca la apropiación de los contenidos. Se sugiere un avance curricular intermedio o avanzado para una adecuada apropiación de los contenidos.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE MAGISTRAL (1000022-B )",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Joel Perilla Perilla"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE-FISICA",
        "salon": "404-203",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE TALLER (1000022-B )",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Joel Perilla Perilla"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE-FISICA",
        "salon": "404-203",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE LABORATORIO (1000022-B )",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE ELECTRICIDAD - SF",
        "salon": "404-110",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000023": {
  "cod": "1000023",
  "codigoSIA": "1000023-B",
  "nombre": "Mecánica y ondas para biociencias",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "Asignatura de pregrado enfocada en el estudio de los fundamentos de la mecánica clásica y los fenómenos ondulatorios aplicados al análisis de sistemas biológicos y procesos relacionados con las biociencias. El curso proporciona herramientas para comprender el movimiento, las interacciones físicas y la propagación de ondas.\n\nA lo largo de la asignatura, el estudiante desarrollará habilidades para analizar movimientos, interpretar fuerzas e interacciones mecánicas, comprender fenómenos de vibración y propagación de ondas, y resolver problemas asociados a sistemas físicos y biológicos. Asimismo, fortalecerá competencias en pensamiento científico, modelación matemática y análisis experimental.\n\nEl carácter interdisciplinar del curso permite articular conocimientos de física, biología, medicina, bioingeniería y ciencias de la salud, favoreciendo la comprensión de fenómenos como biomecánica, acústica, propagación de señales y comportamiento dinámico de sistemas biológicos.\n\nEstá dirigida a estudiantes de pregrado en áreas de biociencias y ciencias de la salud. No requiere conocimientos especializados previos, aunque se recomienda contar con bases en matemáticas y física básica. Se sugiere un nivel inicial o intermedio de avance curricular para facilitar el desarrollo de las competencias propuestas.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE MAGISTRAL (1000023-B )",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "William Jaramillo Garzón"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 - PEAMA Sumapaz",
      "codigoGrupo": "11",
      "profesores": [
       "Jose Jairo Giraldo Gallo"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 1 PEAMA Orinoquia (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Camilo Andres Velasquez Andrade"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 3",
        "salon": "AULA 3",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 3",
        "salon": "AULA 3",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "William Jaramillo Garzón"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 6,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Andrea Johana Abril Fajardo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Andrea Johana Abril Fajardo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "William Jaramillo Garzón"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "William Jaramillo Garzón"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "William Jaramillo Garzón"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Andrea Johana Abril Fajardo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO 2 - STELLA TORRES DE YOUNG",
        "salon": "564-S11",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "William Jaramillo Garzón"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET Medellín (farmacia)",
      "codigoGrupo": "MED_01",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "12:00",
        "fin": "14:00",
        "lugar": "AULA PREFERENCIAL - CIENCIAS DE LA VIDA",
        "salon": "46-205",
        "edificio": "BLOQUE 46",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "12:00",
        "fin": "14:00",
        "lugar": "AULA PREFERENCIAL - CIENCIAS DE LA VIDA",
        "salon": "46-205",
        "edificio": "BLOQUE 46",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE LABORATORIO (1000023-B )",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "MIGUEL ENRIQUE GÁMEZ LÓPEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-102",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 PEAMA Orinoquia (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Camilo Andres Velasquez Andrade"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 3",
        "salon": "AULA 3",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA DE CLASE ORINOQUIA 3",
        "salon": "AULA 3",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 Peama (Sumapaz)",
      "codigoGrupo": "13",
      "profesores": [],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "FERNANDA ANDREA PAEZ REYES"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 6,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-100",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "LUIS AGULLES PEDROS"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-104",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-104",
        "edificio": "404 - Yu Takeuchi",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "FERNANDA ANDREA PAEZ REYES"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-104",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "JUAN DAVID LÓPEZ AMAYA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-104",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "JUAN DAVID LÓPEZ AMAYA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-104",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "ZAIR VALENTÍN BARRETO TORRES"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-104",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "ZAIR VALENTÍN BARRETO TORRES"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "LABORATORIO DE MECANICA - SF",
        "salon": "404-102",
        "edificio": "404 - Yu Takeuchi",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Medellín (Farmacia)",
      "codigoGrupo": "MED_01",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "LABORATORIO FÍSICA MECÁNICA",
        "salon": "21-403",
        "edificio": "BLOQUE 21",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000024": {
  "cod": "1000024",
  "codigoSIA": "1000024-B",
  "nombre": "Principios de química",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "Suministrar a los estudiantes los conceptos básicos de la Química que le permitan la interpretación de fenómenos involucrados en diferentes procesos químicos. La asignatura se desarrollará mediante exposiciones orales por parte del profesor. Se propondrán actividades de reforzamiento y repaso (talleres y lecturas complementarias).\n\nOBJETIVOS:\n1. Preparar al estudiante para la interpretación de fenómenos involucrados en diferentes procesos químicos.\n2. Promover el aprendizaje y comprensión del lenguaje básico de la Química como herramienta indispensable para su desarrollo profesional, el trabajo interdisciplinario y para que entienda la vida cotidiana desde la óptica de los procesos químicos.\n3. Aumentar el interés en los estudiantes por la comprensión de la materia a nivel atómico y molecular.\n4. Potencializar competencias interpretativas, propositivas y argumentativas fundamentadas en el lenguaje químico.\n5. Fomentar la integración de los conceptos de materia y energía de creciente relevancia en el presente siglo, en todas las actividades del quehacer cotidiano.\n6. Desarrollar habilidades y destrezas para la resolución de ejercicios y problemas que requieran de conocimientos de Química.\n7. Promover en el estudiante el uso responsable de los conocimientos de química en su entorno, especialmente en lo que tiene que ver con el cuidado del medio ambiente.\n\nConceptos Previos: Considerando que es un curso para los ciclos de fundamentación de diferentes programas académicos de la Universidad Nacional de Colombia no se requieren conocimientos previos",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000024)",
    "grupos": [
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Juan Alberto Torres Luna"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "10:00",
        "lugar": "SALON 105",
        "salon": "564-105",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 105",
        "salon": "564-105",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 105",
        "salon": "564-105",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Carlos Enrique Daza Velasquez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 39,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "08:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Adriana Milena Sanchez Martinez"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 14,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Adriana Milena Sanchez Martinez"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 14,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2A",
        "salon": "A-2A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama- Caribe grupo1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "David Alexander Figueroa Millan"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "CAPILLA",
        "salon": "01",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "CAPILLA",
        "salon": "01",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "Luis Gonzalo Zuluaga Ramirez"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Jhon Jairo Aragón Arias"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA DE CLASE ORINOQUIA 5",
        "salon": "AULA 5",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "Jhon Jairo Aragón Arias"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA DE CLASE ORINOQUIA 6",
        "salon": "AULA 6",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000025": {
  "cod": "1000025",
  "codigoSIA": "1000025-B",
  "nombre": "Laboratorio tecnicas básicas en química",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "OBJETIVOS:\n1.Introducir al estudiante en las técnicas que usualmente se emplean en un laboratorio de química.\n2.Educar y desarrollar capacidad de observación.\n3. Conocer y emplear el nombre del material y equipos usados en las prácticas.\n4.Conocer y saber utilizar las técnicas básicas empleadas en un laboratorio de química.\n5.Aprender a preparar y utilizar el cuaderno de laboratorio.\n6.Entender la posibilidad de que se presenten errores experimentales, entender sus causas y saber corregirlos.\nMETODOLOGÍA\nEste curso de laboratorio ha sido diseñado de forma tal, que al inicio, se introduce lentamente al estudiante en el trabajo práctico de manera inductiva con la implementación de PRÁCTICAS GUIADAS. Este tipo de prácticas tienen una guía muy detallada en la que son explícitos el problema a abordar, los objetivos y el marco conceptual básico. El estudiante sigue un procedimiento preestablecido y tiene ayudas (tablas, cuadros) para el reporte de datos. Para encaminar el análisis de los resultados obtenidos, se hacen preguntas adicionales, se piden cálculos específicos y se sugieren otras búsquedas y complementos.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (21000025)",
    "grupos": [
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "Manuel Fredy Molina Caballero"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "LABORATORIO QUIMICA GENERAL",
        "salon": "451-241",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Juan Alberto Torres Luna"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "LABORATORIO QUIMICA GENERAL",
        "salon": "451-151",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama- Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "David Alexander Figueroa Millan"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "15:00",
        "fin": "18:00",
        "lugar": "LABORATORIO 1 (JB)",
        "salon": "400",
        "edificio": "AULAS - JARDIN BOTANICO SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "Luis Gonzalo Zuluaga Ramirez"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "LABORATORIO LIMNOLOGIA",
        "salon": "04",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Jhon Jairo Aragón Arias"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 7,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "LABORATORIO DE QUIMICA",
        "salon": "LABORATORIO1",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000030": {
  "cod": "1000030",
  "codigoSIA": "1000030-B",
  "nombre": "Principios de química orgánica",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "METODOLOGÍA\nEl curso se desarrolla mediante la exposición de los temas a tratar, actividades de mecanización y repaso (talleres, tareas, lecturas complementarias) que el estudiante deberá desarrollar a su propio juicio y necesidad soportados en la consulta bibliográfica sugerida, y finalmente se realizan actividades de evaluación (exámenes y talleres).\nOBJETIVOS: Al finalizar el curso, el estudiante debe estar en capacidad de:\n1. Identificar las clases más comunes de compuestos orgánicos según su función química.\n2. Predecir el comportamiento de los distintos tipos de moléculas orgánicas más comunes en función de sus características estructurales,\n3. Emplear las reglas más generales de la nomenclatura IUPAC para denominar compuestos orgánicos incluyendo los descriptores estereoquímicos, y reconocer nombres comunes de estos compuestos\n4. Conocer los principales mecanismos por los cuales se explican las reacciones orgánicas",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000030)",
    "grupos": [
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Patricia Martinez Muñoz"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 206",
        "salon": "451-206",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 206",
        "salon": "451-206",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Patricia Martinez Muñoz"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 39,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE - SALÓN CON LLAVE",
        "salon": "451-201",
        "edificio": "451 - Antonio García Banús",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE - SALÓN CON LLAVE",
        "salon": "451-201",
        "edificio": "451 - Antonio García Banús",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000031": {
  "cod": "1000031",
  "codigoSIA": "1000031-B",
  "nombre": "Laboratorio principios de química orgánica",
  "creditos": 2,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "METODOLOGÍA\nEl curso se desarrollará mediante sesiones prácticas de tres horas semanales y trabajo por parejas. Al iniciar cada práctica el profesor hará una breve explicación de los objetivos de cada experimento y aclarará o ampliará la metodología propu",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (21000031)",
    "grupos": [
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Carlos Alberto Guerrero Fajardo",
       "Humberto Mayorga Wandurraga"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 29,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "LABORATORIO QUIMICA ORGANICA",
        "salon": "451-343",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Carlos Edwin Gonzalez Guilombo",
       "Carlos Alberto Guerrero Fajardo"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "LABORATORIO QUIMICA ORGANICA",
        "salon": "451-343",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000037": {
  "cod": "1000037",
  "codigoSIA": "1000037-B",
  "nombre": "Fisicoquímica I",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "Es un curso de termodinámica orientado a estudiantes de pregrado de las carreras de Farmacia y Química que tiene como propósito dar los conceptos y métodos necesarios para: a) caracterizar los estados de un sistema, b) evaluar los cambios energéticos en un sistema después de un proceso físico o químico y c) analizar la factibilidad de un proceso o transformación a partir de criterios de espontaneidad (direccionalidad termodinámica de un proceso). El curso tiene para su desarrollo la teoría de la termodinámica clásica, que incluye los conceptos de potenciales termodinámicos, la termodinámica de soluciones y del equilibrio de fases. Este se desarrolla mediante la exposición, por parte del profesor, de los temas programados para cada semana.\nDebido a que el estudiante debe asimilar una gran cantidad de conocimiento en un lapso de tiempo muy corto, el buen desarrollo del curso requiere de un estudio repetido y constante de los temas tratados, basado en el cuaderno de apuntes y complementado con la consulta del texto guía o de cualquiera de los libros recomendados en la bibliografía. Además, el estudiante tendrá la oportunidad de resolver una serie de cuestionarios con una gran cantidad de preguntas y ejercicios propuestos que le permitirá afianzar los conocimientos durante todo el desarrollo del curso.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000037)",
    "grupos": [
     {
      "grupo": "PAET - Medellín (Farmacia)",
      "codigoGrupo": "MED-01",
      "profesores": [
       "Daniel Alberto Barragan Ramirez"
      ],
      "facultad": "FACULTAD DE CIENCIAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA - PREFERENCIAL ARQUITECTURA",
        "salon": "25-204",
        "edificio": "BLOQUE 25",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA - PREFERENCIAL ARQUITECTURA",
        "salon": "25-204",
        "edificio": "BLOQUE 25",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000044": {
  "cod": "1000044",
  "codigoSIA": "1000044-B",
  "nombre": "Inglés I- Semestral",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de inglés, puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y que además, puedan expresar de manera oral y escrita información de tipo personal. Con base en un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante a partir del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué información le sirve, por qué y cómo usarla.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000044)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Yaneli Niño Osorio"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Liliana Marcela Guzman Aricapa"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "JOSE JONATHAN MAESTRE HERRERA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Beymar Leonardo Solorzano Alviz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Edwin Yesid Leon Silva"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-07",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 3B",
        "salon": "15",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 4A",
        "salon": "11",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-08",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 3",
      "codigoGrupo": "AMAZ-09",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 4",
      "codigoGrupo": "AMAZ-10",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "TIC 4C",
        "salon": "16",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "TIC 4C",
        "salon": "16",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 5",
      "codigoGrupo": "AMAZ-11",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 6",
      "codigoGrupo": "AMAZ-12",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET Caribe Grupo 01 (Enfermería)",
      "codigoGrupo": "CARI-02",
      "profesores": [
       "Keshia Hilary Howard Livingston"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA DE INNOVACION Y PENSAMIENTO CRITICO",
        "salon": "06",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA DE INNOVACION Y PENSAMIENTO CRITICO",
        "salon": "06",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Gruoo 6",
      "codigoGrupo": "AMAZ-06",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 3B",
        "salon": "15",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 4A",
        "salon": "11",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 2",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "TIC 5C",
        "salon": "19",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 3",
      "codigoGrupo": "AMAZ-03",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 3A",
        "salon": "14",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 4",
      "codigoGrupo": "AMAZ-04",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "TIC 4C",
        "salon": "16",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "TIC 4C",
        "salon": "16",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 5",
      "codigoGrupo": "AMAZ-05",
      "profesores": [
       "MARIA JOSE BANQUETH GONZALEZ"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Celson Alexis Quiñones Montaño"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Michael Antoni Quiñones Angulo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA CEP",
        "salon": "C-1A",
        "edificio": "EDIFICIO ADMINISTRATIVO (IEP)",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 3",
      "codigoGrupo": "TUMA-03",
      "profesores": [
       "Michael Antoni Quiñones Angulo"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 4",
      "codigoGrupo": "TUMA-04",
      "profesores": [
       "Celson Alexis Quiñones Montaño"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 3B",
        "salon": "A-3B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Keshia Hilary Howard Livingston"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 2 (Presencial)",
      "codigoGrupo": "ORIN-02",
      "profesores": [
       "Claudia Marcela Arevalo Gomez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 7,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO",
        "salon": "AUDITORIO",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO",
        "salon": "AUDITORIO",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000045": {
  "cod": "1000045",
  "codigoSIA": "1000045-B",
  "nombre": "Inglés II - Semestral",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos y narrativos relacionados con temáticas de tipo académico y de cultura general. Se espera que en términos de comprensión escrita, el estudiante pueda identificar relaciones de temporalidad y secuencia, de contraste y de causa y efecto. Además se espera que puedan expresar de manera oral y escrita información relacionada con la descripción detallada de lugares, de estados de salud, eventos del pasado y planes. A partir de un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante, a través del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué le sirve, por qué y cómo usarlo. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñanza y aprendizaje de la lengua.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000045)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Monica Alexandra Riaño Orjuela"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 Peama Orinoquia (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Claudia Marcela Arevalo Gomez"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO",
        "salon": "AUDITORIO",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AUDITORIO",
        "salon": "AUDITORIO",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Jesica paola Rendon Alfonso"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "JOSE JONATHAN MAESTRE HERRERA"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "LINDA JOHANA RUIZ GOMEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "Narly Yadira Pardo Cadena"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Narly Yadira Pardo Cadena"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Jesica paola Rendon Alfonso"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Adriana Marlen Sanchez Riaño"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Sara Elisa Monsalve Patino"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Johnatan Martinez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Sara Elisa Monsalve Patino"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET - Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 1",
      "codigoGrupo": "AMAZ-02",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 1",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 1A",
        "salon": "A-1A",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA MODULAR 2B",
        "salon": "A-2B",
        "edificio": "AULAS MODULARES",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Maureen Elizabeth Hooker Oneill"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000046": {
  "cod": "1000046",
  "codigoSIA": "1000046-B",
  "nombre": "Inglés III - Semestral",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo periodístico, se explique el desarrollo de un fenómeno a través de una línea de realaciones de causa y efecto o se presente de manera sustentada un determinado punto de vista. Además se espera que puedan expresar de manera oral y escrita información relacionada con los conceptos trabajados a partir de la comprensión de lectura, que puedan sustentar su punto de vista y hacer reporte de la información queotraspersonaslestransmitan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000046)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Johnatan Martinez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Jennly Angelica Gomez Rodriguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "Liliana Marcela Guzman Aricapa"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "ALBA LUCIA RIAÑO RODRIGUEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/10/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Olga Lucia Ruiz Convers"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [
       "Luis Gabriel Peña Ortiz"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18",
      "codigoGrupo": "18",
      "profesores": [
       "Narly Yadira Pardo Cadena"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Jesica paola Rendon Alfonso"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "JESUS DAVID TORRES RODRIGUEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Claudia Patricia Cortes Lora"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Johnatan Martinez Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Johnatan Martinez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Jesica paola Rendon Alfonso"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Amazonia Grupo 1 - Antropologia",
      "codigoGrupo": "AMAZ-01",
      "profesores": [
       "ADRIANA AGUILAR CASTRO"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 5A",
        "salon": "17",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TIC 5A",
        "salon": "17",
        "edificio": "EDIFICIO AULAS DE CLASE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama - Tumaco - Grupo 2 (REMOTO)",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Celson Alexis Quiñones Montaño"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-02",
      "profesores": [
       "Maureen Elizabeth Hooker Oneill"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000047": {
  "cod": "1000047",
  "codigoSIA": "1000047-B",
  "nombre": "Inglés IV- Semestral",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "El objetivo general de los cuatro niveles de lengua en el Programa ALEX es desarrollar la competencia comunicativa en la lengua extranjera elegida por el estudiante (con énfasis en comprensión de lectura) y, paralelamente, su capacidad para tomar decisiones con respecto al proceso de aprendizaje. Se espera que los estudiantes, al término del cuarto nivel puedan leer y comprender textos auténticos de tipo académico con mayor énfasis en reportes de tipo investigativo y argumentativo. Identifican, por lo tanto, los principales aspectos en un reporte de investigación y los argumentos y contra argumentos que aparecen en un ensayo. También participan de manera oral en debates en torno a situaciones de tipo académico y cultural y redactan textos con el rigor que se requiere para expresar su punto de vista con respecto a un tema específico y los diferentes argumentos que lo sustentan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua y que se relacionan directamente con los contenidos que el curso plantea.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000047)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10",
      "codigoGrupo": "10",
      "profesores": [
       "Monica Alexandra Riaño Orjuela"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11",
      "codigoGrupo": "11",
      "profesores": [
       "Jennly Angelica Gomez Rodriguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12",
      "codigoGrupo": "12",
      "profesores": [
       "Claudia Patricia Cortes Lora"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13",
      "codigoGrupo": "13",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14",
      "codigoGrupo": "14",
      "profesores": [
       "LINDA JOHANA RUIZ GOMEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15",
      "codigoGrupo": "15",
      "profesores": [
       "Claudia Patricia Cortes Lora"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Narly Yadira Pardo Cadena"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17",
      "codigoGrupo": "17",
      "profesores": [
       "Angelica Saenz Fonseca"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18",
      "codigoGrupo": "18",
      "profesores": [
       "ALBA LUCIA RIAÑO RODRIGUEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 19",
      "codigoGrupo": "19",
      "profesores": [
       "Aida Elena Monsalve Solorzano"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Yaneli Niño Osorio"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 20",
      "codigoGrupo": "20",
      "profesores": [
       "ALBA LUCIA RIAÑO RODRIGUEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 21",
      "codigoGrupo": "21",
      "profesores": [
       "Edwin Yesid Leon Silva"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 22",
      "codigoGrupo": "22",
      "profesores": [
       "LINDA JOHANA RUIZ GOMEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Monica Alexandra Riaño Orjuela"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Claudia Patricia Cortes Lora"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Olga Lucia Ruiz Convers"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Monica Alexandra Riaño Orjuela"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Cesar Augusto Romero "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Beatriz Elena Urrutia Sanchez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9",
      "codigoGrupo": "9",
      "profesores": [
       "Sara Elisa Monsalve Patino"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET CARIBE Grupo 02 (Enfermería)",
      "codigoGrupo": "CARI-02",
      "profesores": [
       "Maureen Elizabeth Hooker Oneill"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA MULTIPLE",
        "salon": "299",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA MULTIPLE",
        "salon": "299",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET Tumaco Grupo 2 (Enfermeria - Remoto)",
      "codigoGrupo": "TUMA-02",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "PAET Tumaco Grupo 3 (Derecho - Remoto)",
      "codigoGrupo": "TUMA-03",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "FACULTAD DE DERECHO, CIENCIAS POLÍTICAS Y SOCIALES (Admisión PAET)",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama Tumaco Grupo 1 (Remoto)",
      "codigoGrupo": "TUMA-01",
      "profesores": [
       "Yarley Gisela Sanchez Quinto"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 5,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Keshia Hilary Howard Livingston"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA MULTIPLE",
        "salon": "299",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "17:00",
        "fin": "19:00",
        "lugar": "AULA MULTIPLE",
        "salon": "299",
        "edificio": "EDIFICIO PRINCIPAL SEDE CARIBE",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000048": {
  "cod": "1000048",
  "codigoSIA": "1000048-B",
  "nombre": "Inglés I- Virtual",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de inglés, puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y que además, puedan expresar de manera oral y escrita información de tipo personal. Con base en un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante a partir del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué información le sirve, por qué y cómo usarla.Este curso está dirigido a estudiantes de la Sede Bogotá, interesados en aprender o en avanzar en el aprendizaje del inglés, apoyándose en medios virtuales. El entorno virtual lo conforman los espacios proporcionados por la plataforma Blackboard ( a través de la página web de la Universidad) y las herramientas que ésta brinda (curso, foros, chats, etc.). En el entorno virtual se presentan explicaciones y contextos para comprender aspectos de la lengua y practicar conocimientos adquiridos. El entorno virtual es el eje del programa y requiere del estudiante disciplina para concentrarse en el aprendizaje y práctica del idioma.",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000048-B)",
    "grupos": []
   }
  ]
 },
 "1000050": {
  "cod": "1000050",
  "codigoSIA": "1000050-B",
  "nombre": "Inglés III- Virtual",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo periodístico, se explique el desarrollo de un fenómeno a través de una línea de realaciones de causa y efecto o se presente de manera sustentada un determinado punto de vista. Además se espera que puedan expresar de manera oral y escrita información relacionada con los conceptos trabajados a partir de la comprensión de lectura, que puedan sustentar su punto de vista y hacer reporte de la información queotraspersonaslestransmitan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua. Este curso está dirigido a estudiantes de la Sede Bogotá, interesados en aprender o en avanzar en el aprendizaje del inglés, apoyándose en medios virtuales. El entorno virtual lo conforman los espacios proporcionados por la plataforma Blackboard ( a través de la página web de la Universidad) y las herramientas que ésta brind (curso, foros, chats, etc.). En el entorno virtual se presentan explicaciones y contextos para comprender aspectos de la lengua y practicar conocimientos adquiridos. El entorno virtual es el eje del programa y requiere del estudiante disciplina para concentrarse en el aprendizaje y práctica del idioma.",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000050-B)",
    "grupos": []
   }
  ]
 },
 "1000051": {
  "cod": "1000051",
  "codigoSIA": "1000051-B",
  "nombre": "Inglés IV- Virtual",
  "creditos": 3,
  "tipologia": "NIVELACIÓN",
  "descripcion": "El objetivo general de los cuatro niveles de lengua en el Programa ALEX es desarrollar la competencia comunicativa en la lengua extranjera elegida por el estudiante (con énfasis en comprensión de lectura) y, paralelamente, su capacidad para tomar decisiones con respecto al proceso de aprendizaje. Se espera que los estudiantes, al término del cuarto nivel puedan leer y comprender textos auténticos de tipo académico con mayor énfasis en reportes de tipo investigativo y argumentativo. Identifican, por lo tanto, los principales aspectos en un reporte de investigación y los argumentos y contra argumentos que aparecen en un ensayo. También participan de manera oral en debates en torno a situaciones de tipo académico y cultural y redactan textos con el rigor que se requiere para expresar su punto de vista con respecto a un tema específico y los diferentes argumentos que lo sustentan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua y que se relacionan directamente con los contenidos que el curso plantea. Este curso está dirigido a estudiantes de la Sede Bogotá, interesados en aprender o en avanzar en el aprendizaje del inglés, apoyándose en medios virtuales. El entorno virtual lo conforman los espacios proporcionados por la plataforma Blackboard ( a través de la página web de la Universidad) y las herramientas que ésta brind (curso, foros, chats, etc.). En el entorno virtual se presentan explicaciones y contextos para comprender aspectos de la lengua y practicar conocimientos adquiridos. El entorno virtual es el eje del programa y requiere del estudiante disciplina para concentrarse en el aprendizaje y práctica del idioma.",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000051-B)",
    "grupos": []
   }
  ]
 },
 "1000052": {
  "cod": "1000052",
  "codigoSIA": "1000052-B",
  "nombre": "Inglés Intensivo I y II",
  "creditos": 6,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes al término de los niveles I y II puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y pueda identificar relaciones de temporalidad ysecuencia, de contraste y de causa y efecto. Los estudiantes pueden expresar de manera oral y escrita información de tipo personal e información relacionada con la descripción detallada de lugares, de estados de salud, eventos del pasado y planes. Con base en un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante a partir del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué información le sirve, por qué y cómo usarla.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000052-B)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Liliana Marcela Guzman Aricapa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "JOSE JONATHAN MAESTRE HERRERA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Aida Elena Monsalve Solorzano"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000053": {
  "cod": "1000053",
  "codigoSIA": "1000053-B",
  "nombre": "Inglés Intensivo III y IV",
  "creditos": 6,
  "tipologia": "NIVELACIÓN",
  "descripcion": "Se espera que los estudiantes, al término de este curso intesivo puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo periodístico, se explique el desarrollo de un fenómeno a través de una línea de realaciones de causa y efecto o se presente de manera sustentada un determinado punto de vista. Se espera además que los estudiantes puedan leer y comprender textos auténticos de tipo académico con mayor énfasis en reportes de tipo investigativo y argumentativo. Identifican, por lo tanto, los principales aspectos en un reporte de investigación y los argumentos y contra argumentos que aparecen en un ensayo. Además se espera que puedan expresar de manera oral y escrita información relacionada con los conceptos trabajados a partir de la comprensión de lectura, que puedan sustentar su punto de vista y hacer reporte de la información queotraspersonaslestransmitan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua. También participan de manera oral en debates en torno a situaciones de tipo académico y cultural y redactan textos con el rigor que se requiere para expresar su punto de vista con respecto a un tema específico y los diferentes argumentos que lo sustentan. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua y que se relacionan directamente con los contenidos que el curso plantea. Tambien participan de manera oral en debates.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (21000053)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jennly Angelica Gomez Rodriguez"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Yaneli Niño Osorio"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Javier Rodriguez Gomez"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Javier Rodriguez Gomez"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "LINDA JOHANA RUIZ GOMEZ"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Olga Lucia Ruiz Convers"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000089": {
  "cod": "1000089",
  "codigoSIA": "1000089-B",
  "nombre": "Cátedra nacional de inducción y preparación para la vida universitaria",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura de orden nacional tiene el propósito de que los estudiantes admitidos estén en capacidad de:\n1. Identificar la estructura académico-administrativa institucional y el marco normativo que rige su quehacer académico y de convivencia en la Universidad.\n2. Reconocer la importancia de las competencias académicas, emocionales y sociales para fortalecer su desempeño académico a través de los medios ofrecidos por la Universidad.\n3. Reconocer y valorar el patrimonio, símbolos institucionales y principios que conforman la identidad institucional de la Universidad.\n\nEste curso estará dirigido a estudiantes que cursan el primer periodo académico de pregrado y a los estudiantes que han ingresado por el Programa Especial de Admisión y Movilidad Académica PEAMA. Es importante que antes de inscribir el curso revise si usted cumple con este requerimiento, en caso contrario, por favor abstenerse de hacer la inscripción dado que le será eliminada.\n\nMetodología: El curso se desarrollará de forma virtual con actividades asincrónicas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000089)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Virtual",
      "codigoGrupo": "1",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10 - Clase Virtual",
      "codigoGrupo": "10",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11 - Clase Virtual",
      "codigoGrupo": "11",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12 - Clase Virtual",
      "codigoGrupo": "12",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13 - Clase Virtual",
      "codigoGrupo": "13",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14 - Clase Virtual",
      "codigoGrupo": "14",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15 - Clase Virtual",
      "codigoGrupo": "15",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16 - Clase Virtual",
      "codigoGrupo": "16",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17 - Clase Virtual",
      "codigoGrupo": "17",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18 - Clase Virtual",
      "codigoGrupo": "18",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 19 - Clase Virtual",
      "codigoGrupo": "19",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase Virtual",
      "codigoGrupo": "2",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 20 - Clase Virtual",
      "codigoGrupo": "20",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 21 - Clase Virtual",
      "codigoGrupo": "21",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Clase Virtual",
      "codigoGrupo": "3",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4 - Clase Virtual",
      "codigoGrupo": "4",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5 - Clase Virtual",
      "codigoGrupo": "5",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6 - Clase Virtual",
      "codigoGrupo": "6",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7 - Clase Virtual",
      "codigoGrupo": "7",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9 - Clase Virtual",
      "codigoGrupo": "9",
      "profesores": [
       "Jasmin Garcia Pineros"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000128": {
  "cod": "1000128",
  "codigoSIA": "1000128-B",
  "nombre": "Cátedra nacional: Juntas, juntes y juntos. Apuestas desde los estudios feministas y de género",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra Juntas, juntes y juntos. Apuestas desde los estudios feministas y de género se construye para generar espacios de aprendizaje significativo que promuevan el desarrollo de capacidades de reflexión teórica, ética y práctica sobre las relaciones de género y las políticas que se generan para garantizar la equidad en la vida universitaria y a nivel nacional, desde una perspectiva situada que reconozca las diferencias por clase, raza y género. El curso propone procesos formativos con un enfoque crítico de la construcción de conocimientos, una aproximación a los conceptos y teorías vinculadas al campo de los estudios de género y feministas, y la promulgación e implementación de instrumentos pedagógicos, artÍsticos y normativos para propiciar la transformación de las relaciones asimétricas de género en la universidad y en el país.\n\nMetodología: La cátedra se desarrollará de manera virtual y/o presencial según la planeación. Cada sede tendrá un sitio de recepción de una conferencia pregrabada y los participantes estarán acompañados por un tutor, que responderá las preguntas y desarrollará actividades que enriquezcan el tema de la sesión. Los y las estudiantes deberán realizar las lecturas obligatorias del programa para cada sesión y, de ser posible, las lecturas y el material multimedia complementario. Para la evaluación se realizarán actividades multimedia y cuestionarios que deberán completar los y las participantes en alguna de las plataformas virtuales habilitadas por la Universidad que se determinará al iniciar el curso.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000128-B)",
    "grupos": []
   }
  ]
 },
 "1000129": {
  "cod": "1000129",
  "codigoSIA": "1000129-B",
  "nombre": "Cátedra Colombiana: Ciudadanía, integridad y lucha contra la corrupción",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La corrupción constituye, para la sociedad colombiana y latinoamericana, un grave problema que reclama de manera urgente estrategias que permitan su superación. A pesar de los grandes esfuerzos normativos y de gestión que han puesto en marcha muchas instituciones, la problemática persiste y en algunos espacios se profundiza. Por tanto, resulta necesario avanzar en i) una mejor comprensión del papel que deben jugar los ciudadanos en la construcción pública de la integridad y la transparencia en los más diversos ámbitos, así como en ii) una adecuada apropiación pública de las herramientas disponibles para asegurar, en todos los niveles y escenarios de acción pública, la honra de la democracia y de los derechos fundamentales. En el marco de estas necesidades, la Cátedra colombiana permanente ¿Ciudadanía, integridad y lucha contra la corrupción¿ ofrece un espacio para apropiar los fundamentos, dimensiones, estrategias y dinámicas que contribuyan a construir integridad y transparencia en todos los espacios de la vida nacional, y a potenciar sus roles en el aseguramiento del Estado social de Derecho.\nEl foco de la Cátedra se ubica en el examen INTERDISCIPLINARIO de los fundamentos, condiciones y herramientas necesarias para potenciar, sobre bases éticas robustas, la ciudadanía y, junto con ello, la cultura de la integridad y la cultura democrática. Como es bien conocido, la normatividad legal parece haber sido insuficiente para promover ambas: ciudadanía e integridad. Por ello, la Cátedra articula reflexiones que, a la vez con y más allá de lo jurídico, exploran las bases éticas, las esferas de acción social, las herramientas pedagógicas y comunicativas, y las herramientas procedurales y simbólicas necesarias para avanzar en la apropiación progresiva de la ciudadanía y de la integridad como bases de la cooperación social y el bien común.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000129-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Alexander Garzon Alvarado",
       "EDUARDO ALFONSO RUEDA BARRERA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 500,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000134": {
  "cod": "1000134",
  "codigoSIA": "1000134-B",
  "nombre": "Cátedra Nacional - Enarmonía: Anclajes imprescindibles para la educación inclusiva en la Universidad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso se plantea como una caja de herramientas para comprender, en qué consiste la educación inclusiva especialmente en la universidad, como educación que transforma vidas reafirmando el desafío de una ¿Educación para todos y para todas¿, considerando la inclusión como un punto fundamental de la educación para el desarrollo de cara a los desafíos del presente.\n\nEl curso está basado en el marco de la educación superior en los llamados actuales en los que se exhorta a poner en el centro de la reflexión la necesidad de la inclusión. Desde los marcos internacionales, el objetivo 4 de desarrollo sostenible (ODS) plantea como fundamental ¿Garantizar una educación inclusiva, equitativa y de calidad que promueva la oportunidad de aprendizaje durante toda la vida y para todos¿; en los objetivos propios de la Universidad Nacional de Colombia, desde el Plan Global de Desarrollo, con la creación de la cátedra se busca aportar en la armonización de las funciones misionales para la formación integral, especialmente en el hecho de aportar a la formación de ciudadanos creativos, con responsabilidad social y pensamiento crítico, desde la base del reconocimiento de la diferencia en los espacios académicos, de investigación y extensión y en los territorios, otorgando reflexiones que incorporan elementos para la reconceptualización del Bienestar universitario, componente central del eje 4 del plan global de desarrollo.\n\nPor ello como parte de los contenidos del curso se animará a comprender desde los marcos de la educación inclusiva las diferentes dimensiones de acción que contiene, en función de situar los límites actuales y oportunidades futuras de mejoras en el contexto nacional, además de promover en los asistentes su desarrollo humano integral.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000134-B)",
    "grupos": []
   }
  ]
 },
 "1000141": {
  "cod": "1000141",
  "codigoSIA": "1000141-B",
  "nombre": "Cátedra Nacional Colombia bioazul, dos mares un país",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Cerca del 45% del territorio colombiano corresponde a áreas marinas, distribuidas tanto en el océano Pacífico como en el mar Caribe. En Colombia contamos con dos extensas líneas costeras y sistemas insulares de gran importancia, que se caracterizan por tener ecosistemas estratégicos, tales como man-glares, arrecifes de coral, costas rocosas, estuarios, lagunas costeras, playas, pastos marinos, entre otros, que albergan una gran biodiversidad y son sustento para las comunidades costeras. Pese a la riqueza, diversidad e importancia del territorio marino costero del país, los mares no tienen centralidad en los procesos de desarrollo.\nPara las diferentes versiones de la cátedra nacional \"Colombia Bioazul, Dos Mares Un País\" se plantean temas de vanguardia y discusión global concernientes a la investigación de los océanos, su protección y aprovechamiento de los recursos marinos. Las conferencias magistrales y conversatorios con la participación de profesiona-les de las diversas disciplinas de las ciencias oceánicas están pensados para que los estudiantes de to-dos los programas curriculares puedan interiorizar conocimientos y saberes que les permitan compren-der la importancia global de los océanos, conocer los ecosistemas marino-costeros de nuestro país, conocer la biodiversidad marina y reconocer su importancia, generando así sentido de pertenencia por los territorios marino-costeros e insulares de Colombia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000141-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Nestor Hernando Campos Campos",
       "Jose Ernesto Mancera Pineda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000145": {
  "cod": "1000145",
  "codigoSIA": "1000145-B",
  "nombre": "Cátedra Nacional Gestión a la Adaptación y Cambio Climático en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El sistema climático es uno de los sistemas más complejos de la tierra y es el principal fenómeno que mantiene la vida. Según el panel gubernamental del Cambio Climático (IPCC), en su Quinto Informe de evaluación confirma que el CC es una realidad y sus impactos están siendo experimentados a lo largo y ancho del planeta. El CC es un problema político, económico, social y ambiental. Colombia se caracteriza por ser un país altamente vulnerable a fenomenos de CC, pese a ser un país con bajos niveles de Gases Efecto Invernadero (GEI), gases causantes del calentamiento global. Debido a su ubicación geográfica Colombia se caracteriza por ser un país altamente vulnerable a fenomenos de CC y variabilidad climática (VC), con impactos negativos entre los que se encuentran: i) aumentos de temperaturas que implican cambios significativos en la agricultura, la salud, los recursos hídricos y los ecosistemas, entre otros, ii) cambios enpatrones de precipitacion, que implican peligro para la estabilidad del agua potable, la producción energetica, la producción agrícola, con posibilidad de deslizamientos e inundaciones y iii) pérdida de biodiversidad y ecosistemas, con alteraciones en hábitats y desplazamiento de especies y disminución de los servicios ecosistémicos. Por lo anterior, dada la importancia y relavancia del tema de CC y adaptación climática (AC)para el país, la Universidad Nacional de Colombia, debe abordar permanentemente este tema y socializarlo a los diversos programas de pregrado de la misma. Los temas de CC y AC son fundamentales en la formación de los actuales y futuros profesionales del país.\nOBJETIVOS:\nI) Preparar a estudiantes para conocer los desafios del cambio climático en diversos sectores, presentando conocimientos teóricos y prácticos. ii) Promover la sensibilización sobre la importancia de la acción climática entre estudiantes y la comunidad en general.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000145-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Viviana Vargas Franco"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "1000151": {
  "cod": "1000151",
  "codigoSIA": "1000151-B",
  "nombre": "Glaciares: dimensiones y vínculos con la criósfera colombiana",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El tiempo apremia para reconocer señales contundentes de cambios climáticos en la actualidad y en el pasado reciente, siendo los glaciares óptimos modelos. Precisamente en diciembre de 2022, la Asamblea General de las Naciones Unidas adoptó la resolución para declarar el año 2025 como el ¿Año Internacional de la Preservación de los Glaciares¿2. Se destaca así la urgente necesidad de crear conciencia sobre el conocimiento y la conservación de los glaciares, y lograr promover acciones y medidas sostenibles para su preservación. La Cátedra atenderá a las preguntas ¿a quién importan y por qué nuestros glaciares?. Los temas de cada sesión se enmarcan en los 13 mensajes claves elaborados por los organismos de las Naciones Unidas encargados del Año Internacional de la Preservación de los Glaciares en los que se destacan la importancia de los glaciares en todo el mundo. La metodología de evaluación incluye la posibilidad de realizar diferentes procesos de creación y/o investigación, por lo que se propone la realización de proyectos finales que motiven a brindar una mirada holística que tenga en cuenta los diferentes saberes, sentires, habilidades y preferencias por parte de participantes y por parte del público general. Por esto las propuestas de trabajo final se plantea que pueden ser: 1) apuesta estética grupal para una exposición para ser presentados en exposiciones de arte itinerantes o 2) generar mejoras de contenidos con información relacionada con los glaciares en plataformas de Wikimedia (p. e. wikidata, wikipedia, wikimedia commons, etc.), priorizando así el fomento de la ciencia abierta y de la libre circulación de ideas, resaltando la realidad de los distintos territorios, protegiendo el medio ambiente mediante el intercambio de conocimientos, la buena conducta y el respeto por la biodiversidad.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000151-B)",
    "grupos": []
   }
  ]
 },
 "1000152": {
  "cod": "1000152",
  "codigoSIA": "1000152-B",
  "nombre": "Salud mental, bienestar emocional y herramientas para la vida - un enfoque interprofesional.",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra Salud mental, bienestar emocional y herramientas para la vida es un espacio académico interdisciplinario que busca fomentar el reconocimiento de la diversidad cultural y el desarrollo integral de la comunidad universitaria. A través de un enfoque basado en la evidencia, esta asignatura aborda la salud mental desde una perspectiva integral, incluyendo dimensiones psicoafectivas, intelectuales y sociales.\nUno de los ejes principales de la cátedra es fortalecer las habilidades de los estudiantes para formar redes de apoyo y colaboración, entendiendo que nos construimos en lo individual desde el colectivo. En este proceso, el reconocimiento de la diversidad y de los saberes ancestrales juega un papel fundamental, ya que permite generar espacios de diálogo, integración y aprendizaje mutuo. Al tejer estas redes, no solo se enriquecen las experiencias personales y profesionales de los estudiantes, sino que también se fortalece el proyecto de universidad como un reflejo del proyecto nación, en el que la comunidad se construye desde la pluralidad y el reconocimiento de las distintas realidades que nos conforman.\nA lo largo del curso, los estudiantes analizarán problemáticas de salud mental en el contexto universitario, explorarán estrategias de afrontamiento y conocerán experiencias interprofesionales que han desarrollado acciones en diferentes ámbitos. La metodología incluirá clases magistrales, talleres y actividades experienciales diseñadas para generar reflexiones críticas y proponer soluciones aplicables a las realidades estudiantiles en las distintas sedes.\nEsta cátedra no solo busca sensibilizar sobre la importancia del bienestar mental, sino también dotar a los estudiantes de herramientas prácticas para la gestión del estrés, la promoción de hábitos saludables y el fortalecimiento del tejido social dentro de la universidad.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000152-B)",
    "grupos": []
   }
  ]
 },
 "1000157": {
  "cod": "1000157",
  "codigoSIA": "1000157-B",
  "nombre": "Cátedra Proceso Constituyente Universitario en la UNAL: perspectiva histórica, comparada y situada",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra \"Proceso Constituyente Universitario en la Universidad Nacional de Colombia: perspectiva histórica, comparada y situada\" se concibe como un espacio académico, político y pedagógico para el análisis crítico de los procesos constituyentes que han marcado las universidades públicas y privadas, articulando experiencias internacionales, nacionales y territoriales, para aterrizarlas en la realidad concreta del Proceso Constitutente Universitario actualmente en curso en la UNAL. Está orientada a fortalecer las capacidades deliberativas, analíticas y propositivas de la comunidad universitaria mediante el estudio comparado de procesos democráticos, el aprendizaje situado y la producción colaborativa de propuestas de transformación universitaria. Esta cátedra tiene como objetivo constituirse en un espacios participativos aútonomos para generar propuestas para el Proceso Constituyente Universitario actualmente en curso dentro de la UNAL.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000157-B)",
    "grupos": []
   }
  ]
 },
 "1000158": {
  "cod": "1000158",
  "codigoSIA": "1000158-B",
  "nombre": "Cátedra nacional ambiental",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Nacional Ambiental está dirigida a estudiantes de pregrado de todas las sedes de la Universidad Nacional de Colombia. Su propósito es responder a la necesidad de fortalecer la comprensión y el conocimiento sobre lo ambiental, abordando los problemas y conflictos ambientales desde un enfoque crítico, territorial y complejo, que aporte a la construcción de la sustentabilidad.\nLa Cátedra se desarrollará a través de módulos que combinan fundamentos epistemológicos con el análisis de casos prácticos, tanto en contextos universitarios como en interacción directa con comunidades en diversos territorios.\nEsta iniciativa será liderada por los Institutos de Estudios Ambientales (IDEA) de las sedes Bogotá, Medellín, Manizales y Palmira, y contará con la participación de las sedes de Tumaco, La Paz, Amazonas y San Andrés, así como del Sistema de Gestión Ambiental de la Universidad.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000158-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Del Rosario Rojas Robles"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000159": {
  "cod": "1000159",
  "codigoSIA": "1000159-B",
  "nombre": "Cátedra nacional acciones por la sustentabilidad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Colombia enfrenta una profunda crisis ambiental que se manifiesta en la pérdida de biodiversidad, el deterioro de los recursos naturales, la contaminación creciente y el aumento de la desigualdad socioambiental. En este contexto, surge la necesidad urgente de formar profesionales capaces de comprender la complejidad de los desafíos actuales y actuar de manera propositiva desde sus disciplinas y territorios.\nEn este marco, la cátedra ¿Acciones por la Sustentabilidad¿ se propone como un espacio formativo e interdisciplinario impulsado por la Red de Valorización de Residuos (REDVAR), en articulación con la Coordinación Nacional de Gestión Ambiental de la Universidad Nacional de Colombia. Esta cátedra tiene como propósito fundamental fortalecer una conciencia crítica y transformadora frente a la sustentabilidad, promoviendo la reflexión, la participación activa y la implementación de acciones concretas que contribuyan a la transición hacia sociedades más justas, resilientes y en equilibrio con la naturaleza.\nA lo largo de 16 semanas, la cátedra combina sesiones magistrales con invitados expertos en los componentes (agua, aire, biodiversidad, suelo, residuos, energía, ciudades sostenibles, Impacto social en las comunidades, Empresas sostenibles e impacto económico, Política ambiental), con espacios de acción asincrónica donde los estudiantes diseñan y desarrollan propuestas prácticas alineadas con los componentes de la conferencia y los Objetivos de Desarrollo Sostenible (ODS).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000159-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "LUZ MARINA OCAMPO CARMONA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000160": {
  "cod": "1000160",
  "codigoSIA": "1000160-B",
  "nombre": "Cátedra Nacional de Prompt Engineering",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso introduce a los estudiantes en Prompt Engineering, la disciplina de diseñar instrucciones efectivas para interactuar con modelos de inteligencia artificial generativa. A través de un enfoque teórico-práctico, los participantes aprenderán a crear prompts optimizados, evaluar respuestas de producidas por la Inteligencia\nArtificial (IA) y aplicar estas habilidades en contextos académicos, profesionales e investigativos. El curso es interdisciplinario, útil para estudiantes de todas las áreas del conocimiento que ofrece la Universidad Nacional de Colombia.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000160-B)",
    "grupos": []
   }
  ]
 },
 "1000161": {
  "cod": "1000161",
  "codigoSIA": "1000161-B",
  "nombre": "Cátedra Pedro Nel Gómez: centros de pensamiento en ingeniería para la vida",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura propone una mirada transformadora del rol de la ingeniería en diálogo permanente con los territorios, las comunidades y los desafíos del siglo XXI. A través de una integración multidisciplinar, los estudiantes explorarán cómo la ingeniería puede contribuir activamente al desarrollo sostenible, a la innovación con sentido social y a la construcción de soluciones que respondan a las realidades locales y globales.\n\nEl curso se estructura en torno a experiencias reales, estudios de caso, metodologías participativas y herramientas tecnológicas emergentes, que permiten a los futuros ingenieros comprender el territorio no solo como un espacio físico, sino como un entramado complejo de saberes, culturas, desafíos ambientales y oportunidades de cambio.\nSe abordan temas clave como la observación del territorio para el diseño de soluciones contextualizadas, el trabajo colaborativo con comunidades, la planificación del transporte como determinante de salud pública, la transición energética desde las ciencias de la tierra, y el papel de la nanotecnología en la industria geoenergética. Además, se incorpora una perspectiva innovadora mediante el uso de inteligencia artificial (Prompt Engineering) y el enfoque de innovación transformativa para el desarrollo responsable.\n\nLa asignatura también se articula con los centros de pensamiento en medios de vida sostenibles y responsabilidad minera, fortaleciendo el vínculo entre academia, territorio e industria. Finalmente, se incorporan herramientas de neuroeducación para potenciar el aprendizaje significativo y el pensamiento crítico de los estudiantes, preparando profesionales con competencias éticas, técnicas y humanas para actuar en contextos complejos y diversos.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000161-B)",
    "grupos": []
   }
  ]
 },
 "1000162": {
  "cod": "1000162",
  "codigoSIA": "1000162-B",
  "nombre": "Cátedra Nacional: Innovación digital resiliente en la educación superior",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra de Innovación Digital Resiliente en la Universidad Nacional de Colombia (UNAL) surge como una respuesta estratégica y académicamente rigurosa a los desafíos contemporáneos que enfrenta la educación superior frente a la acelerada transformación digital. En un entorno caracterizado por la complejidad, la incertidumbre y la creciente dependencia de tecnologías emergentes, es fundamental que las instituciones universitarias no solo adopten soluciones tecnológicas, sino que desarrollen capacidades internas para liderar, adaptar y transformar de manera ética y sostenible sus procesos institucionales, pedagógicos y administrativos. En este sentido, la cátedra se consolida como un espacio de formación, reflexión crítica y creación colectiva que articula el conocimiento técnico, el análisis contextual y la acción transformadora desde un enfoque institucional.\n\nSu importancia radica en la necesidad urgente de consolidar una cultura de innovación digital con enfoque resiliente; es decir, una cultura capaz de anticiparse, adaptarse y recuperarse ante los cambios disruptivos del entorno, garantizando la continuidad educativa, la equidad digital y el fortalecimiento del bienestar universitario. La resiliencia, en este marco, no se comprende únicamente como resistencia ante la adversidad, sino como una capacidad estratégica para aprender de los desafíos, incorporar tecnologías pertinentes, rediseñar estructuras institucionales y promover una transformación con sentido humano y responsabilidad pública. En este contexto, la cátedra contribuye de manera directa a la actualización de las capacidades del estudiantado en temas como gobernanza digital, diseño ético de tecnologías, inteligencia artificial educativa, arquitectura organizacional de TI, gestión de la información, identidad digital, infraestructura tecnológica y cultura de adopción tecnológica.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000162-B)",
    "grupos": []
   }
  ]
 },
 "1000163": {
  "cod": "1000163",
  "codigoSIA": "1000163-B",
  "nombre": "Catedra Nacional: Procesos expresivos contemporáneos en América Latina",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra nacional Gerardo Molina \"Procesos expresivos contemporáneos en América Latina\" sigue el espíritu amplio y abarcador que el maestro nos señaló, reune el pensamiento de punta alrededor para reflexionar sobre los procesos expresivos, que, en la actualidad, tienen múltiples formas que están dentro y fuera de las esferas de las Artes, porque también se tocan con las ciencias y las técnicas y producen una multiplicidad de formas tangibles.\nPara la discusión reflexiva se propone que los debates giren en torno a aspectos cruciales sobre los procesos cognitivos, sensoriales y perceptivos, que difuminan las fronteras de las Artes, las entrecruza y las contaminan. Planteando desafíos que implican la crisis ambiental y la integración de alteridades (incluidas las no humanas), además de las múltiples y complejas relaciones con la tecnología digital que nos convocan como sociedad.\nEsta construcción reflexiva es pertinente porque examina, dentro de la universidad, lo que pasa hoy en día con los procesos expresivos artísticos en nuestro continente, ante los grandes retos del siglo XXI, y supone una provocación transversal que permitirá sondear planteamientos de frontera de lo que, de manera simplificada, suele llamarse creatividad.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000162-B)",
    "grupos": []
   }
  ]
 },
 "1000164": {
  "cod": "1000164",
  "codigoSIA": "1000164-B",
  "nombre": "Cátedra Nacional: Cátedra sobre la felicidad",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra de la Felicidad se ha venido desarrollando de manera presencial en la Universidad, consolidándose como un espacio valioso de reflexión y diálogo en torno al bienestar integral. La experiencia acumulada demuestra que este curso es necesario y oportuno para promover la salud mental en el contexto universitario, especialmente en un momento en que los estudiantes enfrentan múltiples desafíos emocionales, académicos y sociales.\n\nEn un mundo marcado por la ansiedad, el estrés académico, la soledad y el vacío existencial, la cátedra responde a la creciente necesidad de abrir espacios de reflexión crítica y construcción colectiva de sentido frente a los desafíos de la salud mental. Se convierte así en un escenario académico y vivencial para resignificar la vida cotidiana, fortalecer vínculos y cultivar prácticas de autocuidado.\n\nSu pertinencia radica en que integra las dimensiones personal, relacional y académica, promoviendo un bienestar integral que impacta directamente en la formación de estudiantes más conscientes, resilientes y comprometidos con su proyecto de vida.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000164-B)",
    "grupos": []
   }
  ]
 },
 "1000165": {
  "cod": "1000165",
  "codigoSIA": "1000165-B",
  "nombre": "Cátedra Nacional: Ingeniería humanitaria y otras ingenierías comprometidas con la paz el desarrollo",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Al igual que en otras disciplinas, la concepción sobre la práctica y educación en ingeniería se encuentra en constante evolución. Desde sus orígenes, la ingeniería ha estado fuertemente vinculada a los más profundos cambios en las sociedades humanas en ambos hemisferios planetarios. De hecho, es la ingeniería misma la que ha agenciado varias de esas transformaciones. La ingeniería como la hemos conocido en occidente es esa que emergió en el contexto bélico de finales del siglo XIX y principios del siglo XX, y su formalización como profesión se estructuró y justificó para el desarrollo de capacidades militares. Terminada la primera mitad del siglo XX, en los contextos de la posguerra y la Guerra Fría, la ingeniería tuvo que reformularse para responder y ser motor de los ideales de un desarrollo internacional anclado en la infraestructura, la productividad industrial, el crecimiento económico y la expansión empresarial. A pesar de este alineamiento con el desarrollo a partir de los 1950s y la formulación del desarrollo sostenible a comienzos de los 1990s, la ingeniería no ha atendido igualmente las necesidades de todos los sectores de la sociedad. Es por esto que actualmente a la ingeniería se le demanda redefinirse para satisfacer los ideales de la sostenibilidad, la paz y la justicia social.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000165-B)",
    "grupos": []
   }
  ]
 },
 "1000167": {
  "cod": "1000167",
  "codigoSIA": "1000167-B",
  "nombre": "Cátedra Nacional: Ética en Investigación",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Nacional de Ética en Investigación es un espacio académico interdisciplinario y permanente, dirigido a estudiantes de pregrado, cuyo propósito fundamental es promover la reflexión crítica, el debate y la formación integral en torno a los principios éticos que orientan la investigación científica y académica. A través de conferencias, talleres, análisis de casos y discusiones colaborativas, tambien, busca fortalecer la cultura ética en la comunidad universitaria, garantizando que la investigación se realice con responsabilidad, transparencia y respeto por la dignidad y los derechos de todos los actores involucrados, incluyendo seres humanos, animales y el medio ambiente.\n\nLa Cátedra se constituye como un referente nacional para la formación avanzada en ética de la investigación, articulando los principios y normas internacionales y nacionales, y fomentando el diálogo entre las diferentes áreas del conocimiento. Asimismo, contribuye a la consolidación de una red de investigadores y académicos comprometidos con la excelencia y la integridad científica.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000167-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Alberto Sanchez Alfaro"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 156,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000168": {
  "cod": "1000168",
  "codigoSIA": "1000168-B",
  "nombre": "Cátedra Nacional: Energía y Sociedad: Generación Energi en el contexto social, cultural y ambiental",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura aborda la relación entre la energía y la sociedad desde una perspectiva interdisciplinaria, integrando dimensiones científicas, tecnológicas, económicas, ambientales, geopolíticas y sociales. Su propósito es analizar los procesos de generación y uso de la energía, las transformaciones de las matrices energéticas a lo largo de la historia y su impacto en los territorios, las comunidades y los ecosistemas.\n\nEl curso se estructura en cuatro módulos temáticos. El primero estudia los fundamentos conceptuales de la energía y su relación con el trabajo humano, los ciclos naturales y los procesos de producción social. El segundo examina la generación de energía en el contexto de la geopolítica mundial, analizando las transiciones energéticas desde diferentes regiones y perspectivas históricas. El tercero se enfoca en la organización social, la soberanía energética y el papel de diversos actores sociales en la apropiación y gestión de los recursos energéticos, incluyendo reflexiones sobre conflictos asociados a la explotación de recursos naturales. Finalmente, el cuarto módulo aborda la responsabilidad social y ética de los Estados, las comunidades, la ciencia, la tecnología y la educación frente a los procesos de generación y acceso a la energía.\n\nA través de seminarios, talleres y proyectos colaborativos, la asignatura promueve la construcción de propuestas de generación energética contextualizadas, orientadas a fortalecer la comprensión de los desafíos de la transición energética y la búsqueda de modelos de desarrollo más equitativos, sostenibles y socialmente responsables.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000168-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Adriana Isabel Orjuela Martinez",
       "SANDRA PATRICIA DAZA CAICEDO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000169": {
  "cod": "1000169",
  "codigoSIA": "1000169-B",
  "nombre": "Cátedra Nacional: UNESCO. 15 años del paisaje cultural cafetero como patrimonio de la Humanidad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Nacional \"Conmemoración de los 15 años de la Declaratoria del Paisaje Cultural Cafetero como Patrimonio Mundial\" constituye una propuesta académica interdisciplinaria orientada a fortalecer la formación integral de los estudiantes mediante el análisis crítico de las relaciones entre patrimonio cultural, patrimonio natural, sostenibilidad, memoria, identidad, desarrollo territorial y políticas públicas.\nLa propuesta responde a la necesidad de generar espacios permanentes de reflexión sobre uno de los patrimonios culturales más importantes del país, promoviendo una comprensión amplia del territorio cafetero como escenario donde convergen procesos históricos, ambientales, económicos, sociales y culturales que inciden directamente en el bienestar de millones de colombianos.\nLa Cátedra desarrollará un modelo pedagógico basado en el aprendizaje activo, el trabajo colaborativo, la resolución de problemas, la interdisciplinariedad y la apropiación social del conocimiento. Las actividades combinarán conferencias magistrales, estudios de caso, análisis documental, trabajo con comunidades, ejercicios de cartografía participativa y producción de materiales de divulgación científica y cultural.\nUno de los principales valores agregados de la propuesta consiste en la articulación entre las diferentes sedes de la Universidad Nacional de Colombia, permitiendo conformar grupos interdisciplinarios integrados por estudiantes de diversas regiones y programas académicos. Esta estrategia favorecerá el intercambio de experiencias territoriales y el reconocimiento de la diversidad cultural del país.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000169-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Julian Alejandro Osorio Osorio"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000170": {
  "cod": "1000170",
  "codigoSIA": "1000170-B",
  "nombre": "Cátedra Nacional: A diez años del acuerdo de paz: realidades, debates y pendientes",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En 2026 se cumplen diez años de la firma del Acuerdo Final de Paz entre el Estado colombiano y las FARC-EP. Esta efeméride constituye una oportunidad pedagógica excepcional para que la Universidad Nacional de Colombia reflexione colectivamente sobre los alcances, los límites y los pendientes de este proceso histórico.\n\nLa Cátedra Nacional «A diez años del acuerdo de paz: realidades, debates y pendientes» propone una lectura crítica, intersedes e interdisciplinar del conflicto colombiano y de la implementación del Acuerdo de La Habana. Organizada por la Dirección Nacional de Bienestar Universitario y la Vicerrectoría Académica, convoca a docentes, estudiantes e invitados especializados de las ocho sedes de la UNAL para construir juntos una comprensión del conflicto armado, de los avances y rezagos del Acuerdo, y de las posibilidades futuras de una paz duradera, justa y emancipatoria.\n\nLa Cátedra aborda tres grandes ejes temáticos: (I) el conflicto armado y sus factores estructurales, actores y territorios (semanas 1¿5); (II) la implementación del Acuerdo entre la promesa y los territorios (semanas 6¿11); y (III) el futuro de la paz, las economías territoriales y los horizontes emancipatorios (semanas 12¿16). A lo largo de 16 sesiones semanales de tres horas cada una, con sede anfitriona rotativa entre las ocho sedes de la UNAL, la Cátedra construye una perspectiva territorial, intergeneracional e interdisciplinar sobre la paz en Colombia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000170-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "ALVARO RIVAS GUZMAN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000171": {
  "cod": "1000171",
  "codigoSIA": "1000171-B",
  "nombre": "Cátedra Nacional: Liderazgo en ingeniería para el desarrollo de los territorios",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra está concebida como un laboratorio vivo para el empoderamiento social y la gestión del cambio. En un contexto global e institucional caracterizado por la hipercomplejidad y la aceleración digital, este curso trasciende la visión tradicional del liderazgo individual y centralizado, posicionándolo como un proceso colectivo, relacional y en red.\nLa asignatura se fundamenta en un enfoque práctico, experiencial y transformador, diseñado específicamente para que los ingenieros y profesionales actúen como puentes, mediadores y movilizadores en sus entornos. A través de un \"diálogo de saberes\" y un ambiente de expresión libre que valora la diversidad de perspectivas, la cátedra fomenta la construcción de alianzas estratégicas intersectoriales. De este modo, se prepara a los participantes para abordar los desafíos públicos y corporativos de la sociedad, transformando problemas sistémicos aislados en soluciones organizacionales y territoriales legítimas, viables y sostenibles.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000171-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "María Luisa Villalba Morales"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000172": {
  "cod": "1000172",
  "codigoSIA": "1000172-B",
  "nombre": "Cátedra Nacional: Formación en voluntariado universitario",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso Formación en Voluntariado Universitario constituye una propuesta de formación humanística orientada al fortalecimiento del compromiso ético, ciudadano y social de la comunidad universitaria mediante la articulación de fundamentos conceptuales, normativos y metodológicos del voluntariado con experiencias de aprendizaje en contextos comunitarios. El curso contribuye a la formación integral de los participantes al promover la integración entre el conocimiento académico, la reflexión crítica y la acción solidaria, en concordancia con los principios misionales de la Universidad Nacional de Colombia y con su responsabilidad de contribuir al desarrollo humano, social, cultural, científico y ambiental del país.\nEn el marco de las funciones de docencia, investigación y extensión, la Universidad desarrolla múltiples iniciativas de interacción con la sociedad dirigidas a atender necesidades y problemáticas de diversos territorios. Estas iniciativas involucran la participación de estudiantes, docentes, egresados y personal administrativo en procesos de acompañamiento, trabajo comunitario y servicio social que constituyen expresiones del voluntariado universitario. Sin embargo, dichas experiencias suelen desarrollarse de manera dispersa y con diferentes niveles de formación en aspectos conceptuales, éticos, organizativos y metodológicos del voluntariado.\nEn este contexto, el curso busca consolidar un espacio académico que fortalezca las capacidades institucionales para la formación de voluntarios universitarios, promoviendo prácticas fundamentadas en la responsabilidad social universitaria, el diálogo de saberes, la participación, la corresponsabilidad y el reconocimiento de la diversidad territorial y cultural del país.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000172-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Monica Reinartz Estrada"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000173": {
  "cod": "1000173",
  "codigoSIA": "1000173-B",
  "nombre": "Catedra Nacional: Ingeniería y paz en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura Ingeniería y Paz en Colombia es una apuesta interdisciplinaria que busca poner en discusión el rol de la ciencia, la tecnología y la ingeniería tanto en la promoción de conflictos como en la búsqueda de paz, de manera que aporte a la construcción de pensamiento crítico entre estudiantes de ingeniería y otras áreas mediante la reflexión/acción, es decir, mediante la lectura, la escritura, la discusión grupal y el prototipado de soluciones.\nPara ello, la asignatura tiene un componente histórico que permita contextualizar y comprender el papel de la ingeniería en el diseño y construcción de artefactos para la guerra, el desarrollo tecnológico a partir de ella, así como el rol que ha jugado en otro tipo de conflictos sociales, ambientales y políticos, en el entendido de que la tecnología no es neutral, por lo que la praxis de la disciplina ha sido históricamente parte de la actual crisis civilizatoria que está poniendo en riesgo la vida humana en el planeta.\nEl equipo de la asignatura está compuesto por un(a) docente a cargo del curso, un(a) monitor(a), además de estudiantes, docentes y miembros de comunidades interesados en aportar y nutrir el proceso.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000173-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "MONICA AYDE VALLEJO VELASQUEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000174": {
  "cod": "1000174",
  "codigoSIA": "1000174-B",
  "nombre": "Cátedra Nacional: Transiciones colombianas hacia la vida en común",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Colombia atraviesa un momento histórico definido por la urgencia de transformar sus estructuras productivas, sociales y ecológicas. Las recientes políticas públicas alrededor de la Reforma Agraria, el sistema de cuidados y la equidad de género y la reindustrialización trazan la hoja de ruta del Estado para la próxima década. En este escenario, la academia debe asumir el compromiso científico de abordar esta complejidad institucional para construir rutas efectivas para la territorialización de este conjunto de políticas, a través de la enseñanza, la investigación y la extensión hacia las comunidades.\n\nSobre este horizonte, esta cátedra resulta pertinente porque busca articular diferentes campos disciplinares con el ánimo de comprender las ¿transiciones¿ como procesos políticos, técnicos y socioecológicos que tiene el potencial transformador en los niveles de organización local, regional y nacional. Desde la perspectiva de economías diversas, la cátedra busca responder a la pregunta por la ¿vida en común¿, articulando la justicia territorial (reforma agraria), la sostenibilidad de la vida (cuidado y equidad) y los nuevos paradigmas productivos (reindustrialización, trabajo e Inteligencia Artificial), reconociendo los derechos humanos y la participación de las comunidades como ejes transversales para la construcción de un país más justo y democrático.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000174-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000175": {
  "cod": "1000175",
  "codigoSIA": "1000175-B",
  "nombre": "Cátedra Nacional: Cátedra de Estudios del Pacífico: ¿de qué vive la gente?",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra de Estudios del Pacífico: ¿de qué vive la gente? es una asignatura de carácter interdisciplinar, interinstitucional e intersedes, orientada al análisis crítico de las condiciones históricas, económicas, políticas, sociales, culturales y territoriales que configuran las formas de sostenimiento y reproducción de la vida en el Pacífico colombiano.\n\nLa asignatura parte de una pregunta central ¿¿de qué vive la gente en el Pacífico colombiano?¿ que no se limita a identificar ocupaciones, empleos o fuentes de ingreso. Su alcance comprende el estudio de los entramados económicos, familiares, comunitarios, políticos y territoriales mediante los cuales las personas y colectivos producen, intercambian, distribuyen y movilizan recursos, sostienen sus hogares y enfrentan contextos persistentes de desigualdad, precarización, racismo estructural, extractivismo y violencia armada.\n\nDesde esta perspectiva, la economía se entiende como una dimensión constitutiva de la vida social y no como un ámbito separado de la cultura, la política o el territorio. En consecuencia, la asignatura examina las economías campesinas y rurales, las actividades extractivas, las configuraciones empresariales, el rentismo, el rebusque, el trabajo informal, las economías ilegalizadas, las redes clientelares, los programas estatales, la cooperación internacional, los mercados culturales y étnicos, las economías religiosas, los circuitos transfronterizos, la bancarización y el endeudamiento.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000175-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Eduardo Antonio Restrepo Uribe"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "1000176": {
  "cod": "1000176",
  "codigoSIA": "1000176-B",
  "nombre": "Cátedra Nacional: Pensamiento negro, territorio y autonomía",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Nacional Pensamiento Negro, Territorios y Autonomía es un espacio académico, creado para la formación, reflexión y el diálogo de los saberes. Su propósito es abordar las raíces históricas, el recorrido jurídico y cultural de las comunidades negras, afrocolombianas, raizales y palenqueras en Colombia. Tomando como pilar la Ley 70 de 1993, la cátedra expande su mirada hacia todo el sistema político, las estructuras de gobernanza y autoridades tradicionales que configuran su autonomía a través de un enfoque participativo e interdisciplinario. Este espacio fomenta un intercambio real entre la Universidad Nacional de Colombia y los distintos actores de las regiones. El objetivo es construir una lectura crítica sobre los desafíos de la legislación actual, la defensa de los derechos colectivos y las estrategias de resistencia. Busca promover la apropiación social del conocimiento como una herramienta para la toma de decisiones, el bienestar y la transformación de las realidades territoriales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (1000176-B)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Harold Enrique Tenorio Quiñones"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "Aula Virtual Asignaturas Nacionales",
        "salon": "NAL-1001",
        "edificio": "Aula Virtual Nacional",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2011183": {
  "cod": "2011183",
  "codigoSIA": "2011183",
  "nombre": "Intercambio academico internacional",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "DEBE ESTAR AUTORIZADO POR LA ORI PARA LA INSCRIPCIÓN DE ESTA ASIGNATURA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2011183)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2011283": {
  "cod": "2011283",
  "codigoSIA": "2011283",
  "nombre": "Intercambio Académico Nacional estudiante de PREGRADO",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "DEBE ESTAR AUTORIZADO POR LA ORI PARA LA INSCRIPCIÓN DE ESTA ASIGNATURA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2011283)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2011302": {
  "cod": "2011302",
  "codigoSIA": "2011302",
  "nombre": "Asignatura por convenio con Universidad de los Andes I - PREGRADO",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Gestión Acaddémica de este Convenio es cordinada por la División de Registro",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2011302)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Derecho "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2011303": {
  "cod": "2011303",
  "codigoSIA": "2011303",
  "nombre": "Convenio sigueme",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "DEBE ESTAR AUTORIZADO POR LA ORI PARA LA INSCRIPCIÓN DE ESTA ASIGNATURA",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2011303)",
    "grupos": []
   }
  ]
 },
 "2012698": {
  "cod": "2012698",
  "codigoSIA": "2012698",
  "nombre": "Asignatura por convenio con Universidad de los Andes II - PREGRADO",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Gestión Acaddémica de este Convenio es cordinada por la División de Registro",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2012698)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Derecho "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2014269": {
  "cod": "2014269",
  "codigoSIA": "2014269",
  "nombre": "Intercambio academico internacional prorroga",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "DEBE ESTAR AUTORIZADO POR LA ORI PARA LA INSCRIPCIÓN DE ESTA ASIGNATURA",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2014269)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2015233": {
  "cod": "2015233",
  "codigoSIA": "2015233",
  "nombre": "Fotointerpretación",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La interpretación de imágenes es una técnica o procedimiento que consiste en examinar las imágenes de los objetos registrados por los sensores remotos, con el fin de identificar, deducir su significado, clasificarlos y valorarlos según el objetivo que se busca alcanzar.\n\nLa interpretación no puede considerarse una ciencia independiente y autosuficiente, sino una técnica al servicio de las diferentes disciplinas y debe ser complementada con el trabajo de campo. Funciona como parte y no como un todo en el proceso de adquirir y recopilar información dentro del desarrollo de un proyecto específico. Por tanto, es importante el entrenamiento y la experiencia específica del intérprete, quien debe poseer o adquirir un nivel de referencia o de conocimiento del área o zona a estudiar y del medio en relación con la imagen, a fin de aumentar la calidad de la interpretación temática.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015233)",
    "grupos": []
   }
  ]
 },
 "2015238": {
  "cod": "2015238",
  "codigoSIA": "2015238",
  "nombre": "Geografía física",
  "creditos": 4,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "La geografía física es un componente fundamental en la formación de los estudiantes de geografía. Los diferentes elementos de tipo teórico y conceptual constituyen una base que permite la comprensión, análisis y explicación de los procesos, dinámicas y fenómenos de los sistemas físico-naturales en el planeta Tierra.\nEste curso puede entenderse como un acercamiento a los fundamentos de la geografía física y es de carácter exploratorio y descriptivo.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015238)",
    "grupos": []
   }
  ]
 },
 "2015250": {
  "cod": "2015250",
  "codigoSIA": "2015250",
  "nombre": "Introducción al trabajo científico",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "La geografía es una ciencia interdisciplinar y a diferencia de otras ciencias, no ha dejado de cuestionarse sobre su objeto de estudio, lo que la hace una disciplina en constante evolución que ofrece todo un mundo de posibilidades para quienes desean acercarse al conocimiento de las relaciones entre las sociedades y la naturaleza desde cualquiera que sea el punto de partida. La geografía es una disciplina ligada directamente con la investigación, entendida ésta como el proceso de generación y difusión de conocimiento. El curso de Introducción al Trabajo Científico se concibe como un espacio introductorio para los estudiantes de pregrado en el apasionante mundo de la geografía presentando elementos básicos de la teoría, herramientas, métodos y técnicas necesarias para la formulación de un proyecto de investigación.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015250)",
    "grupos": []
   }
  ]
 },
 "2015345": {
  "cod": "2015345",
  "codigoSIA": "2015345",
  "nombre": "Derecho Ambiental",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Objetivos\n- Abordar la problemática ambiental desde una perspectiva transdisciplinar, con base en las disciplinas jurídico-políticas y ambientales.\n- Fundamentar la reinvindación, consagración y protección jurídica de los `derechos ambientales¿.\n- Formula",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015345)",
    "grupos": []
   }
  ]
 },
 "2015446": {
  "cod": "2015446",
  "codigoSIA": "2015446",
  "nombre": "Derecho constitucional colombiano",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "Este curso busca adentrar al estudiante en el estudio sistemático de la Constitución Política de Colombia, con el fin de que obtenga los elementos necesarios para comprender el concepto de primacía constitucional dentro del ordenamiento jurídico colombian",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015446)",
    "grupos": []
   }
  ]
 },
 "2015516": {
  "cod": "2015516",
  "codigoSIA": "2015516",
  "nombre": "Climatología",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "Para el geólogo que trata la dinámica espacial de las múltiples interrelaciones de la atmósfera con la litosfera, son de gran importancia los conocimientos acerca del comportamiento espacio-temporal de los diferentes factores ambientales que influyen en e",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase Magistral T-P (2015516)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Emel Enrique Vega Rodriguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 46,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015542": {
  "cod": "2015542",
  "codigoSIA": "2015542",
  "nombre": "Introducción a la economía",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "Brindar a los estudiantes las capacidades para dar cuenta del desarrollo de la teoria economica y sus tendencias, asi como de los mas relevantes principios y conceptos que hacen parte del instrumental analitico de la economia capitalista contemporanea, y",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015542)",
    "grupos": [
     {
      "grupo": "Grupo 1- Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Adriana Francisca Salinas Esteban"
      ],
      "facultad": "FACULTAD DE DERECHO, CIENCIAS POLÍTICAS Y SOCIALES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AULA 108",
        "salon": "610-108",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 201B",
        "salon": "610-201B",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Caribe Grupo 1",
      "codigoGrupo": "CARI-01",
      "profesores": [
       "Johannie Lucia James Cruz"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015633": {
  "cod": "2015633",
  "codigoSIA": "2015633",
  "nombre": "El oscuro objeto del deseo en la perversión y en la histeria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En el surgimiento y desarrollo del psicoanálisis tienen un lugar sobresaliente la histeria y la perversión, por ello no es de extrañar la afirmación de que son las histéricas quienes inventan el Psicoanálisis y los perversos la sexualidad. Eso puede hacer pensar los efectos de este encuentro en un solo sentido, pero no es así, el Psicoanálisis altera de forma radical la comprensión y tratamiento de esas dos antiquísimas entidades. Hay entonces un trabajo de mutua influencia.\n\nFreud nos deja conceptos como  la neurósis es una perversión negativa,  el niño es un perverso polimorfo y consideraciones según las cuáles las fantasías histéricas guardan relación con realizaciones perversas, también nos señala al fetichismo como paradigma de perversión, ese legado es un esfuerzo por diferenciar e indicar cercanías. Existen distintos momentos en estas y otras elaboraciones freudianas, igualmente hay hitos como la diferencia de los sexos y la feminidad sobre los cuales gira la labor clínica y la teoría psicoanalítica. Hacer un recorrido por esos momentos con miras a situar las cuestiones que aquí interesan es una pretensión central en este curso.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015633)",
    "grupos": [
     {
      "grupo": "Grupo 1 - 2015633",
      "codigoGrupo": "1",
      "profesores": [
       "Alvaro Daniel Reyes Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015705": {
  "cod": "2015705",
  "codigoSIA": "2015705",
  "nombre": "Farsi I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso busca motivar el aprendizaje de idioma farsi, a través de procesos pedagógicos que le permitan al estudiante desde aprender nociones morfosintácticas y fonético fonológicas básicas, hasta desarrollar su competencia comunicativa en dicho idioma. Se trata asimismo, de promover la relación entre lengua y cultura y de acercamiento a otros pueblos. El desarrollo de este curso permitirá a la comunidad universitaria la opción de cursar una lengua distinta a las nueve que el Programa ALEX viene ofreciendo: Inglés, Frances, Alemán, Portugués, Italiano, Chino, Japonés, Ruso y Farsi. Además, el contacto con nuevas culturas como la de Irán permitirá el fortalecimiento en las relaciones internacionales tanto de la Universidad como del país y un mayor acercamiento y conocimiento entre las culturas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015705)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 205",
        "salon": "205-205",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase presencial",
      "codigoGrupo": "2",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 102",
        "salon": "205-102",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015706": {
  "cod": "2015706",
  "codigoSIA": "2015706",
  "nombre": "Farsi II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso busca motivar el aprendizaje de idioma farsu a través de procesos pedagógicos que le permitan al estudiante desde aprender nociones morfosintácticas y fonético fonológicas básicas, hasta desarrollar su competencia comunicativa en dicho idioma. Se trata asimismo, de promover la relación entre lengua y cultura y de acercamiento a otros pueblos. Al igual que en el nivel I, el desarrollo del presente curso permitirá a la comunidad universitaria continuar como el aprendizaje de esta lengua. Además, el contacto más profundo y contextualizado con la cultura de Irán.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015706)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA 210",
        "salon": "212-210",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 104",
        "salon": "225-104",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015725": {
  "cod": "2015725",
  "codigoSIA": "2015725",
  "nombre": "Turco I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso busca motivar el aprendizaje de idioma turco, a través de procesos pedagógicos que le permitan al estudiante desde aprender nociones morfosintácticas y fonético fonológicas básicas, hasta desarrollar su competencia comunicativa en dicho idioma. Se trata asimismo de promover la relación entre lengua y cultura y de acercamiento a otros pueblos. El desarrollo de este curso permitirá a la comunidad universitaria la opción de cursar una lengua distinta a las nueve que el Programa ALEX viene ofreciendo: Inglés, Francés, Alemán, Portugués, Italiano, Chino, Japonés, Ruso y Farsi. Además, el contacto con nuevas culturas como la de Turquía permitirá el fortalecimiento en las relaciones internacionales tanto de la Universidad como del país, y un mayor acercamiento y conocimiento entre las culturas. Se realizarán dos exámenes orales, cada uno de estos equivale a un 15% de la nota final. Además, se realizará un examen escrito dividido en cuatro áreas: escuchar, escribir, leer y hablar. Este equivale al 25%. La asistencia representa 15% en la nota final.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015725)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "NEZAKET BAYKAL "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 206",
        "salon": "225-206",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase Presencial",
      "codigoGrupo": "2",
      "profesores": [
       "NEZAKET BAYKAL "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 205",
        "salon": "205-205",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 203",
        "salon": "225-203",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Clase Presencial",
      "codigoGrupo": "3",
      "profesores": [
       "Betul Ozen "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 206",
        "salon": "225-206",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015732": {
  "cod": "2015732",
  "codigoSIA": "2015732",
  "nombre": "Turco II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso busca motivar el aprendizaje de idioma turco, a través de procesos pedagógicos que le permitan al estudiante desde aprender nociones morfosintácticas y fonético fonológicas básicas, hasta desarrollar su competencia comunicativa en dicho idioma. Se trata asimismo de promover la relación entre lengua y cultura y de acercamiento a otros pueblos. El desarrollo de este curso permitirá a la comunidad universitaria la opción de cursar una lengua distinta a las nueve que el Programa ALEX viene ofreciendo: Inglés, Francés, Alemán, Portugués, Italiano, Chino, Japonés, Ruso y Farsi. Además, el contacto con nuevas culturas como la de Turquía permitirá el fortalecimiento en las relaciones internacionales tanto de la Universidad como del país, y un mayor acercamiento y conocimiento entre las culturas. Se realizarán dos exámenes orales, cada uno de estos equivale a un 15% de la nota final. Además, se realizará un examen escrito dividido en cuatro áreas: escuchar, escribir, leer y hablar. Este equivale al 25%. La asistencia representa 15% en la nota final.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015732)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "NEZAKET BAYKAL "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 107",
        "salon": "225-107",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase presencial",
      "codigoGrupo": "2",
      "profesores": [
       "Betul Ozen "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 410",
        "salon": "212-410",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 102",
        "salon": "225-102",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2015877": {
  "cod": "2015877",
  "codigoSIA": "2015877",
  "nombre": "Biología de plantas",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "El objetivo del curso es brindar al estudiante, mediante clases magistrales, talleres y seminarios, un panorama lo más completo posible de la vida vegetal, enfocado en aspectos como morfología, fisiología, nomenclatura, sistemática, relaciones de las plantas con el suelo, botánica económica y las relaciones del hombre con las plantas.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Biología evolutiva con código 2017774.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2015877)",
    "grupos": [
     {
      "grupo": "Grupo 1 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "Diego Fernando Casallas Pabon"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": []
     },
     {
      "grupo": "Grupo 1 -Jose C. Murillo - Orlando Rivera - Viviana Motat - Janice E. Vale",
      "codigoGrupo": "1",
      "profesores": [
       "Janice Esmid Valencia Duarte",
       "Orlando Rivera Diaz",
       "Jose Carmelo Murillo Aldana",
       "Viviana Motato Vasquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 5,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "AUDITORIO ENRIQUE PEREZ ARBELAEZ",
        "salon": "425-100",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - MA Gamboa",
      "codigoGrupo": "2",
      "profesores": [
       "Miguel Angel Gamboa Gaitan"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 75,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-02",
      "profesores": [],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 3 - Angelica Plata",
      "codigoGrupo": "3",
      "profesores": [
       "Rosa Angélica Plata Rueda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA TEORICA",
        "salon": "421-142B",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE PRACTICA (2015877)",
    "grupos": [
     {
      "grupo": "Grupo 2 -José C. Murillo - Orlando Rivera -Viviana Motato",
      "codigoGrupo": "2",
      "profesores": [
       "Janice Esmid Valencia Duarte",
       "Orlando Rivera Diaz",
       "Jose Carmelo Murillo Aldana",
       "Viviana Motato Vasquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE MORFOLOGIA ANIMAL",
        "salon": "421-152",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 -José C. Murillo - Orlando Rivera - -Viviana Motato",
      "codigoGrupo": "3",
      "profesores": [
       "Janice Esmid Valencia Duarte",
       "Orlando Rivera Diaz",
       "Jose Carmelo Murillo Aldana",
       "Viviana Motato Vasquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE MORFOLOGIA VEGETAL",
        "salon": "421-101",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4 - MA Gamboa",
      "codigoGrupo": "4",
      "profesores": [
       "Miguel Angel Gamboa Gaitan"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "LABORATORIO DE MORFOLOGIA ANIMAL",
        "salon": "421-152",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5 - MA Gamboa",
      "codigoGrupo": "5",
      "profesores": [
       "Miguel Angel Gamboa Gaitan"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "LABORATORIO DE MORFOLOGIA ANIMAL",
        "salon": "421-152",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6 - MA Gamboa",
      "codigoGrupo": "6",
      "profesores": [
       "Miguel Angel Gamboa Gaitan"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "14:00",
        "lugar": "LABORATORIO DE MORFOLOGIA ANIMAL",
        "salon": "421-152",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7 - Angelica Plata",
      "codigoGrupo": "7",
      "profesores": [
       "Rosa Angélica Plata Rueda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "LABORATORIO DE MORFOLOGIA VEGETAL",
        "salon": "421-101",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2016133": {
  "cod": "2016133",
  "codigoSIA": "2016133",
  "nombre": "Ciudad, hábitat y vivienda",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso de contexto asume el territorio como campo relacional que vincula múltiples procesos espaciales y temporales, de orden material, humano y ambiental, dentro del contexto de la problemática contemporánea, en este caso la relación entre habitat y",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2016133)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Alvaro Ibata Ceballos"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 100,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2016197": {
  "cod": "2016197",
  "codigoSIA": "2016197",
  "nombre": "VENTILACIÓN Y AIRE ACONDICIONADO",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Capacitar al estudiante en la solución de problemas relacionados con el suministro y/o extracción de aire de un espacio por medios mecánicos con el objeto de disponer de un ambiente con una aceptable calidad de aire interior. Selección de elementos y diseño de sistemas de ventilación. Tratamiento del aire mediante procesos psicrométricosa fin de modificar sus propiedades psicrométricas. Diseño de un sistema de acondicionamiento de aire que permita manejar una determinada carga de calor a fin de proporcionar unas condiciones ambientales establecidas para un espacio contralado.Selección de los equipos necesarios.Sistemas de Control.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2016197 (2016197)",
    "grupos": [
     {
      "grupo": "2016197-1 VENTILACIÓN Y AIRE ACONDICIONADO",
      "codigoGrupo": "1",
      "profesores": [
       "Juan Gustavo Mahecha Bautista"
      ],
      "facultad": "FACULTAD DE INGENIERÍA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-203",
        "salon": "454-203",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2016253": {
  "cod": "2016253",
  "codigoSIA": "2016253",
  "nombre": "Lingüística Italiana",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "A nivel general, el curso se propone: Sensibilizar a los estudiantes sobre la lengua y la cultura italiana; Ofrecer elementos para la descripción de la lengua italiana tanto a nivel sincrónico como diacrónico. A nivel específico: Presentar las principales características de la lengua italiana desde los aspectos fonético-fonológico, morfológico, sintáctico, pragmático y sociolingüístico;\nIndicar los principales factores que han participado en el desarrollo de la lengua italiana; Presentar las principales etapas de la historia de la lengua italiana.\nMetodología: Exposiciones del profesor y de los estudiantes;\nTalleres sobre algunas de las temáticas;\nDurante el curso se analizarán textos y temáticas culturales representativas de acuerdo con cada capítulo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2016253 (2016253)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Lingüística Italiana",
      "codigoGrupo": "1",
      "profesores": [
       "Rodolfo Suarez Ortega"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEO 2",
        "salon": "229-105",
        "edificio": "229 - Howard Rochester",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2016343": {
  "cod": "2016343",
  "codigoSIA": "2016343",
  "nombre": "Español funcional",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2016343)",
    "grupos": []
   }
  ]
 },
 "2016365": {
  "cod": "2016365",
  "codigoSIA": "2016365",
  "nombre": "Estadística descriptiva multivariada",
  "creditos": 4,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2016365 (2016365)",
    "grupos": []
   }
  ]
 },
 "2017010": {
  "cod": "2017010",
  "codigoSIA": "2017010",
  "nombre": "Laboratorio principios de bioquímica",
  "creditos": 2,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "Mediante sesiones prácticas , sesiones de discusión y consulta bibliográfica, al finalizar esta asignatura el estudiante:\n1- Debe conocer y comprender los fundamentos de algunas técnicas y métodos de laboratorio que se utilizan en la investigación bioquí",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017010 (2017010)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Ruth Elizabeth Garzon Fernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 22,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO BIOQUIMICA (332)",
        "salon": "451-330",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Milena Maya Hoyos",
       "José Miguel Villareal Ascencio"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 21,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "LABORATORIO BIOQUIMICA (332)",
        "salon": "451-330",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "José Miguel Villareal Ascencio",
       "Lizeth Manuela Avellaneda Torres"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 22,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO BIOQUIMICA (332)",
        "salon": "451-330",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017516": {
  "cod": "2017516",
  "codigoSIA": "2017516",
  "nombre": "Artrópodos",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La asignatura consiste en una introducción a la biología, evolución y sistemática de los artrópodos. Además de la definición del grupo, se presentará su ubicación dentro del marco general de la evolución animal, propuestas de evolución interna y relació",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017516)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jimmy Jair Cabra Garcia"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 305",
        "salon": "564-305",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017517": {
  "cod": "2017517",
  "codigoSIA": "2017517",
  "nombre": "Fisiología animal",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El curso le brinda al estudiante la oportunidad de consolidar bases de Física, Química, Bioquímica y Biología Celular y aplicarlas al entendimiento de los mecanismos funcionales en los distintos sistemas biológicos. El estudiante tendrá la oportunidad de aprender a nivel celular acerca del funcionamiento de la membrana y las bases de la excitabilidad en células del sistema nervioso y células musculares. A nivel de órganos se familiarizará con la fisiología cardiovascular, respiratoria, renal y con los sistemas hormonales. Habra sesiones de laboratorio en las cuales estos conceptos podrán ser aplicados al análisis de los principios y mecanismos fisiológicos básicos, así como a las estrategias que han desarrollado los animales, dentro de los límites químicos y las posibilidades físicas, para adaptarse al medio ambiente. A través del método científico se le orienta y facilitan herramientas para plantear y resolver algunos problemas biológicos. La asignatura exige la preparación de un capítulo del libro de texto guía que deberá estudiar, junto con la lectura de al menos un manuscrito científico sobre cada uno de los temas revisados y la preparación de notas de clase, guía de laboratorio y manuscrito científico del laboratorio que exigen por parte del estudiante muchas horas de preparación.\n\nConceptos Previos: Organización celular eucariota animal\nTráfico vesicular\nConceptos básicos de electricidad (ley de Ohm, corriente, voltaje, capacitancia)\nMetabolismo primario\nFunciones matemáticas básicas",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2017517)",
    "grupos": [
     {
      "grupo": "Fisiología Animal (2017517) Biología",
      "codigoGrupo": "1",
      "profesores": [
       "Edgar Cristancho ",
       "Juan Manuel Carvajalino Fernandez",
       "Maria Del Pilar Gomez Correa",
       "Julieta Troncoso ",
       "Maria Marcela Camacho Navarro"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "LABORATORIO FISIOLOGIA ANIMAL",
        "salon": "421-120",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "LABORATORIO FISIOLOGIA ANIMAL",
        "salon": "421-120",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017518": {
  "cod": "2017518",
  "codigoSIA": "2017518",
  "nombre": "Taxonomía animal",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El objetivo principal de la asignatura es el reconocimiento taxonómico de los grandes grupos de animales terrestres: artrópodos, peces, anfibios, reptiles, aves y mamíferos.La asignatura presenta los conocimientos básicos en el reconocimienro de estos grupos, uniendo aspectos teóricos con una salida de campo paar métodos de captura y curación.\n\nConceptos Previos: Anatomia y morfología Vertebrados Biologia evolutiva",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017518)",
    "grupos": []
   }
  ]
 },
 "2017519": {
  "cod": "2017519",
  "codigoSIA": "2017519",
  "nombre": "Vertebrados",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Este curso es una oportunidad para que los estudiantes adquieran una noción clara de uno de los conceptos más básicos en biología: descendencia con modificación. El estudio comparado de la morfología brinda la oportunidad de ver que la evolución procede, en su mayor parte, mediante la modificación de modelos básicos y no mediante la construcción de estructuras completamente nuevas.\n\nObjetivos: 1) Aprender los aspectos del desarrollo embrionario, morfología, función, significado ecológico y evolución de los diferentes sistemas anatómicos en vertebrados. 2) Entender la interdependencia estructural, funcional y evolutiva de los diferentes sistemas anatómicos. 3) Al final del curso se espera que los estudiantes pasen de la comprensión de la biología de grupos de vertebrados aislados y adquieran un entendimiento de cómo estos grupos están relacionados desde el punto de vista morfológico, funcional, ecológico y evolutivo. 4) Se espera que durante el desarrollo del curso los estudiantes adquirirán una noción clara de conceptos básicos tales como forma, función, adaptación, descendencia con modificación, homología, analogía y homoplasia.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Biología animal con código 2017772 y Biología evolutiva con código 2017774.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017519)",
    "grupos": [
     {
      "grupo": "Grupo 01",
      "codigoGrupo": "1",
      "profesores": [
       "Edwin Acosta Virguez",
       "ADRIANA ROCIO JEREZ MARTINEZ",
       "MARIO ARMANDO MONROY LOPEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017522": {
  "cod": "2017522",
  "codigoSIA": "2017522",
  "nombre": "Biología celular",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Objetivos: Desarrollar en el estudiante las siguientes competencias:1. Autonomía de estudio, 2. Capacidad de análisis, síntesis y argumentación con respecto a los conceptso básicos de la disciplina de Biología Celular, 3. Capacidad para explorar, comprender y analizar la literatura científica que cubre esta disciplina, 4. Capacidad para desarrollar trabajo en equipo.\n\nConceptos Previos: Se recomiemda cursar previamente las asignaturas: Fundamentos de bioqu&igrave;mica () y biología molecular de la célula (2017775)",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017522)",
    "grupos": [
     {
      "grupo": "Grupo 1- Carlos Clavijo",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Arturo Clavijo Ramirez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Maria H. Ramirez",
      "codigoGrupo": "2",
      "profesores": [
       "Maria Helena Ramirez Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 204",
        "salon": "564-204",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "14:00",
        "lugar": "SALON 204",
        "salon": "564-204",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017523": {
  "cod": "2017523",
  "codigoSIA": "2017523",
  "nombre": "Biología Molecular",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "A través de este curso se busca identificar la morfología, componentes primarios, organización, función y origen de la variación del material genético.\nDiscutir y resolver problemas sobre, mutagénesis, anatomía del gen, expresión de genes, código genético, expresión genica e ingeniería genética.\nIlustrar sobre las diferentes hipótesis y modelos propuestos para explicar las principales funciones del material hereditario, sobre las técnicas comúnmente empleadas en la investigación genética, principalmente a nivel molecular.\n\nConceptos Previos\nSe recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos genética con código 2017779 y bioquímica con código 2023214.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Biología Molecular (2017523)",
    "grupos": [
     {
      "grupo": "Biología Molecular",
      "codigoGrupo": "GRUPO1",
      "profesores": [
       "FELIPE SARMIENTO SALAZAR"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "AULA TEORICA",
        "salon": "421-142B",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "AULA TEORICA",
        "salon": "421-142B",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017524": {
  "cod": "2017524",
  "codigoSIA": "2017524",
  "nombre": "Biología del Desarrollo",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "A partir de la segunda mitad del S. XX, la genética del desarrollo permitió una integración teórica y experimental de la biología del desarrollo y la biología evolutiva, lo cual se le denomina \"evo-devo\"; se comenzaron a explorar en detalle los postulados de De Beer respecto a si los caracteres controlados por genes idénticos son necesariamente homólogos o a si la homología de los fenotipos implica similitud de los genotipos.\nLos estudios en Biología del Desarrollo tienen, además, la utilidad inmediata en la detección directa de procesos de supresión temprana de órganos y de estructuras vestigiales, así como de modificaciones tempranas que cambian drásticamente la morfología floral, procesos que de otra forma no pueden ser reconocidos al estudiar únicamente estructuras adultas.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Biología celular y molecular con código 2015882.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA PRÁCTICA",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Edwin Acosta Virguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017527": {
  "cod": "2017527",
  "codigoSIA": "2017527",
  "nombre": "Ecología regional continental",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La ecología moderna es un campo de amplio espectro de intereses en diferentes niveles de organización y en diferentes escalas espacio ¿ temporales, haciendo énfasis en el estudio de las consecuencias de las actividades humanas sobre cada uno de los niveles de organización y la aplicación de sus teorías para la conservación, restauración y manejo de los sistemas naturales y sus sistemas de reemplazo ¿agroecosistemas-. De esta forma, la ecología es una ciencia que trata de integrar los sistemas naturales y los sistemas socioeconómicos para la comprensión de todos los sistemas que conforman una región. Los estudios regionales, en consecuencia, deben atender a la comprensión de dinámicas que incluyen los componentes bióticos, abióticos y culturales de los sistemas ecológicos en el paisaje.\n\nEl curso se divide en fase pre-campo, fase de campo y fase post-campo. La fase pre-campo se refiere a las actividades académicas y logísticas necesarias para la preparación de la salida al área de trabajo. Durante la fase de campo se colectará información primaria sobre preguntas ecológicas planteadas. Durante la fase de post-campo se procesará e identificará el material colectado, se analizarán estadísticamente los datos y se escribirá un artículo científico de cada tema. Finalmente un comité editor organizará la información para su presentación en el informe final.\n\nMétodos: clase magistral, seminarios, salida de campo de 15 días.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Ecología con código 2017777 y Bioestadística fundamental con código 1000012.",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017527)",
    "grupos": []
   },
   {
    "nombre": "CLASE PRÁCTICA SALIDA DE CAMPO (2017527)",
    "grupos": []
   }
  ]
 },
 "2017528": {
  "cod": "2017528",
  "codigoSIA": "2017528",
  "nombre": "Evolución",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El curso busca familiarizar al estudiante con principios básicos de la teoría evolutiva y ejercitar en el ejercicio básico de la lectura de material científico, la discusión de temas en evolución, y la escritura de ensayos críticos sobre temas en evolución. El curso está dividido en cuatro modulos que integran la teoría evolutiva. Se inicia con una introducción a las teorias predarwinistas hasta el neodarwinismo, los conceptos que enmarcan la microevolución y el cambio microevolutivo, un componente de los principios de la reconstrucción e inferencia evolutiva. Posteriormente se hablará de selección natural (incluyendo la selección sexual) y adaptación como fuerzas importantes en el proceso evolutivo. El tercer modulo incluirá el componente macroevolutivo e incluye el fenomeno de especiación y concepto de especies. Finalmente se detallará sobre la evolución humana desde la historia de los primates en general hasta la formación de los linajes de los hominidos, incluyendo el hombre.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Biología evolutiva con código 2017774 y Genética con código 2017779.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Grupo 1 (Evolución)",
    "grupos": [
     {
      "grupo": "Evolución (2017528)",
      "codigoGrupo": "1",
      "profesores": [
       "Joao Victor Muñoz Duran",
       "Andrea Tonolli Thomaz"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 27,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017529": {
  "cod": "2017529",
  "codigoSIA": "2017529",
  "nombre": "Fundamentos de biología y ecología marina",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La asignatura permite relacionar al estudiante de Biología con el medio marino desde la perspectiva de los sistemas ecológicos tomando como niveles de referencia los paisajes, ecosistemas y comunidades; aplica metodologías sobre diferentes biotopos y comunidades, y enseña a interpretar los factores bióticos y abióticos que inciden sobre estas.\n\nEl curso es exigente, y consta de una parte teórica, dictada por los docentes, conformada por clases magistrales; y una parte práctica, que consta de una salida de campo de 15 días a la costa, en donde los estudiantes tendrán un acercamiento a los principales ecosistemas marinos, y podrán realizar unos muestreos ecológicos para caracterizar los biotopos.\n\nLas muestras, una vez regresados a Bogotá, se procesarán y analizarán durante las clases y en horario extracurriculares. Los resultados serán entregados en un informe final en forma de articulo científico.\n\nEs importante que el estudiante que planee tomar esta asignatura cuente con el tiempo necesario para desarrollar todas las actividades previstas. Se sugiere no tomar, en el mismo semestre, otras asignaturas con salidas de campo de más de dos días de duración, ya que esto afecta negativamente el desempeño del estudiante.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017529)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Ernesto Mancera Pineda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "LABORATORIO BIOLOGIA MOLECULAR",
        "salon": "421-118",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE PRACTICA SALIDA DE CAMPO (2017529)",
    "grupos": [
     {
      "grupo": "Grupo 1 Salida de campo",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Ernesto Mancera Pineda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2017530": {
  "cod": "2017530",
  "codigoSIA": "2017530",
  "nombre": "Genética de poblaciones",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Objetivos:\n- Profundizar en las bases teóricas de la genética de poblaciones.\n- Familiarizar al estudiante con las propuestas de modelos teórico-matemáticos más relevantes que forman la base de los estudio evolutivos, conservacionistas, etc, en las poblaciones naturales.\n- Integrar los conceptos teóricos con datos experimentales.\n\nMetodología: Conferencias magistrales, seminarios y talleres.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Bioestadística fundamental con código 1000012 y Génetica con código 2017779.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2017530)",
    "grupos": [
     {
      "grupo": "Genética de Poblaciones (2017530)",
      "codigoGrupo": "1",
      "profesores": [
       "Andrea Tonolli Thomaz",
       "Gustavo Adolfo Silva Arias"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017531": {
  "cod": "2017531",
  "codigoSIA": "2017531",
  "nombre": "Inmunología celular y molecular",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La inmunología es un campo creciente de la ciencia que abarca tópicos tan diversos como la regulación de la expresión génica, la patogenia de enfermedades infecciosas, cáncer y autoinmunidad, sus aplicaciones en inmunoterapia, inmunotoxicología e inmunología clínica hacen de este campo del conocimiento un apasionante recorrido entre aplicaciones de biología celular, genética y biología molecular. En este curso se busca describir los conceptos más relevantes de la inmunología vegetal y animal, que permitirán realizar un análisis comparativo de elementos de respuesta celular y molecular de un organismo frente a un agente agresor.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Principios de Bioquímica con código 2023214 y Biología molecular y celular con código 2017775.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO (2017531)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Fernando Cadavid Gutierrez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO - Espacio restringido por seguridad - solo se utiliza para Ins. Genética",
        "salon": "426-102",
        "edificio": "426 - Instituto de Genética",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO - Espacio restringido por seguridad - solo se utiliza para Ins. Genética",
        "salon": "426-102",
        "edificio": "426 - Instituto de Genética",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017532": {
  "cod": "2017532",
  "codigoSIA": "2017532",
  "nombre": "Limnología",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El curso busca profundizar en diferentes aspectos de la ecología de las aguas epicontinentales con especial referencia a los ecosistemas tropicales y al caso colombiano.\n\nMétodos:\nClases magistrales, seminario, lecturas dirigidas y laboratorio con salida de campo.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Ecología con código 2017777.",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017532)",
    "grupos": []
   },
   {
    "nombre": "CLASE PRACTICA SALIDA DE CAMPO(2017532)",
    "grupos": []
   }
  ]
 },
 "2017533": {
  "cod": "2017533",
  "codigoSIA": "2017533",
  "nombre": "Biología de hongos y líquenes",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Biología de Hongos y Líquenes es una asignatura teórico-práctica de pregrado, de carácter disciplinar y optativa, que introduce al estudiante en el mundo del Reino Fungi y de los organismos asociados. Su propósito es construir una comprensión sólida y actualizada de la biología, la ecología, la fisiología, la diversidad y los campos de aplicación de estos organismos, cuya relevancia para el funcionamiento de los ecosistemas terrestres y acuáticos suele subestimarse en la formación biológica convencional.\nLa asignatura responde a una necesidad concreta: la micología es una disciplina estratégica para abordar problemas contemporáneos como la pérdida de biodiversidad, el desarrollo de biotecnologías sostenibles, el control biológico de patógenos y la conservación de ecosistemas. El estudiante fortalecerá habilidades analíticas en fisiología de los hongos, manejo de la microscopía, interpretación de la literatura científica especializada y comunicación científica. Asimismo, desarrollará actitudes críticas ante el impacto humano en la funga y sus implicaciones ambientales.\nLa asignatura está dirigida a estudiantes de pregrado con un avance académico que les permita haber cursado Biología de Microorganismos (2017773), requisito formal del curso. Se recomienda que el estudiante cuente con un avance de 40¿50% en su carrera para aprovechar plenamente los contenidos. Aunque concebida desde las ciencias biológicas, su carácter interdisciplinar la hace pertinente para estudiantes de agronomía, ingeniería agronómica, diseño y ciencias con enfoques ambientales, dado que los hongos tienen aplicaciones directas en la industria alimentaria, la salud humana, la agricultura y la biorremediación.\nLos contenidos son aplicables tanto en investigación básica como en contextos profesionales que demanden conocimiento sobre interacciones simbióticas, diversidad microbiana y estrategias de conservación de la biodiversidad.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017533)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Viviana Motato Vasquez",
       "Yih Wen Fung "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "08:00",
        "fin": "12:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017534": {
  "cod": "2017534",
  "codigoSIA": "2017534",
  "nombre": "Biología de protistos y algas",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Objetivos: Conocer la diversidad de protistas y algas.\nConocer los niveles de complejidad estructural y funcional de protistas y algas.\nConocer sus implicaciones ambientales y sociales.\n\nJustificación: Dentro de la formación de un profesional en Biología",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017534)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Carlos Montenegro Ruiz",
       "Angie Daniela Gonzalez Galindo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "13:00",
        "lugar": "LABORATORIO DE MORFOLOGIA VEGETAL",
        "salon": "421-101",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017535": {
  "cod": "2017535",
  "codigoSIA": "2017535",
  "nombre": "Diseño Experimental",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El objetivo del curso es que el estudiante adquiera los elementos básicos del diseño de expermientos y el uso de técnicas estadísticas por medio del manejo de paquetes estadísticos en el computador en ejercicios prácticos. Se expondrá la teoría acompañada de ejemplos prácticos con el fin de apreciar su aplicación de manera directa. Se verán aplicaciones y se dará ayuda en el manejo de paquetes estadísticos.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Bioestadística Fundamental con código 1000012.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017535 (2017535)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Camilo Bernardo Garcia Ramirez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "SALA DE POSGRADO FRANCISCO JOSE DE CALDAS SALA TIC",
        "salon": "421-213",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017536": {
  "cod": "2017536",
  "codigoSIA": "2017536",
  "nombre": "Embriófitos basales",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Las asignaturas embriófitos basales y espermatófitos buscan familiarizar al estudiante con el reino Plantae (¿Streptophyta¿), su origen, evolución y diversidad; el curso esta organizado siguiendo las hipótesis filogenéticas actuales; subordinado a esta organización filogenética se tratarán temas de organización estructural morfológica y anatómica de las plantas. La asignatura es teórico-práctica, las horas semanales están repartidas en clases presenciales teóricas y prácticas de laboratorio y campo. Los estudiantes tendrán una relación directa con ejemplares representativos de los principales grupos, de los cuales estudiarán la morfología y taxonomía de una manera integral, siempre dentro de un contexto filogenético. La asignatura también tiene programada una salida de campo de seis (6) días de duración, la cual es de obligatoria participación por parte del estudiante.\n\nConceptos Previos: Biología celular vegetal Tejidos vegetales Biología evolutiva",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017536)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Laura Victoria Campos Salazar",
       "Jaime Aguirre Ceballos",
       "Jose Carmelo Murillo Aldana"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-101",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017537": {
  "cod": "2017537",
  "codigoSIA": "2017537",
  "nombre": "Espermatófitos",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Esta asignatura complementa la asignatura Embriófitos basales, presentando un panorama de la biología evolutiva del reino vegetal en su componente de espermatófitos, plantas con semilla, en cuanto a su morfología, anatomía, y sendas evolutivas, en un contexto filogenético. Los estudiantes tendrán una relación directa con ejemplares representativos de los distintos grupos de plantas y además desarrollarán seminarios con base en artículos científicos sobre diversos temas de la evolución del reino Plantae. La asignatura contará con un componente histológico y organográfico importante que permita al estudiante comprender la diversidad estructural de los espermatófitos en un contexto evolutivo, pero también dará las bases para que el estudiante pueda abordar mas adelante aspectos taxonómicos (descriptivos), de estructura-función (morfofisiológicos) y de índole ecológica (polinización, dispersión de semillas, adaptación morfológica a hábitats extremos, etc.)\n\nConceptos Previos: Tejidos vegetales Biología celular vegetal Biología evolutiva",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017537)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Fagua Virginia Alvarez Florez",
       "Xavier Marquinez Casas"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE MORFOLOGIA VEGETAL",
        "salon": "421-101",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE MORFOLOGIA VEGETAL",
        "salon": "421-101",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017538": {
  "cod": "2017538",
  "codigoSIA": "2017538",
  "nombre": "Fisiología vegetal",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Este es un curso introductorio a la Fisiología Vegetal, hace parte del programa básico del plan curricular de la carrera de Biología, se dictará en 16 semanas durante el transcurso del semestre. Para ayudar al desarrollo del curso se realizarán actividades como lecturas de capítulos de libros, seminarios, prácticas de laboratorio y evaluaciones. Durante el curso se va a - analizar el funcionamiento de las plantas a partir de los principios de la física y la química.- orientar hacia la observación, formulación, aplicación y solución de problemas relacionados con los diferentes tópicos de la fisiología vegetal.- realizar ensayos prácticos destinados a cuantificar y analizar diferentes aspectos relacionados con la fisiología de los vegetales. - interpretar la interacción de los comportamientos fisiológicos de los vegetales con el medio ambiente.isiologicos de los vegetales con el medio ambiente\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Principios de Bioquímica con código 2023214 y Biología de plantas con código 2015877.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017538)",
    "grupos": [
     {
      "grupo": "Grupo 1 -Luz Marina Melgarejo - Kriss Pantoja - Edison Cardona",
      "codigoGrupo": "1",
      "profesores": [
       "Edison Cardona Medina",
       "Kriss Dayana Pantoja Pulido",
       "Luz Marina Melgarejo Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "12:00",
        "lugar": "LABORATORIO FISIOLOGIA VEGETAL",
        "salon": "421-116",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Luz Marina Melgarejo - Kriss Pantoja - Edison Cardona",
      "codigoGrupo": "2",
      "profesores": [
       "Kriss Dayana Pantoja Pulido",
       "Edison Cardona Medina",
       "Luz Marina Melgarejo Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "18:00",
        "lugar": "LABORATORIO FISIOLOGIA VEGETAL",
        "salon": "421-116",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Luz Marina Melgarejo - Kriss Pantoja - Edison Cardona",
      "codigoGrupo": "3",
      "profesores": [
       "Kriss Dayana Pantoja Pulido",
       "Edison Cardona Medina",
       "Luz Marina Melgarejo Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "18:00",
        "lugar": "LABORATORIO FISIOLOGIA VEGETAL",
        "salon": "421-116",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4 - Luz Marina Melgarejo - Kriss Pantoja - Edison Cardona",
      "codigoGrupo": "4",
      "profesores": [
       "Kriss Dayana Pantoja Pulido",
       "Edison Cardona Medina",
       "Luz Marina Melgarejo Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "18:00",
        "lugar": "LABORATORIO FISIOLOGIA VEGETAL",
        "salon": "421-116",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017540": {
  "cod": "2017540",
  "codigoSIA": "2017540",
  "nombre": "Gestión de proyectos",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La tematica que a continuacion se presenta, asi como los delineamientos generales hacen parte de la preparacion para la elaboracion de trabajo de grado de los futuros profesionales de las ciencias naturales. La tematica comprende, en general, la presentacion y discusion de los elementos intelectuales, tecnicos y formales de la ciencia y la investigacion, el desarrollo operativo de un trabajo de investigacion y las formalidades para el manejo en la elaboracion y presentacion del proyecto. Objetivo General: Abordar el tema de Inversión, tanto privada como social a través de la formulación y evaluación de proyectos, tema que busca consolidar la gestión de los recursos propios, financiados, asignados o condonados; implementando el concepto de planificación estratégica, coincidiendo con los procesos estables, crecientes y continuos de desarrollo sostenible, con el fin de aumentar la eficiencia de los recursos escasos provenientes de las transferencias, las regalías, la Cooperación internacional entre otras, mejorando la focalización del gasto para que esos proyectos junto con sus recursos lleguen a solucionar las necesidades identificadas en las comunidades.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura haber cursado el 100% de materias del Fundamentación.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2017540)",
    "grupos": [
     {
      "grupo": "Gestión de Proyectos",
      "codigoGrupo": "1",
      "profesores": [
       "Luz Marina Melgarejo Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017541": {
  "cod": "2017541",
  "codigoSIA": "2017541",
  "nombre": "Introducción a la biología de la conservación",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La biología de la conservación examina los principales desafíos a los cuales el Biólogo debe enfrentarse para lograr la preservación de la biota nativa de Colombia, en especial de las especies que presentan algún tipo de deterioro de sus poblaciones. El principal propósito de la biología de la conservación es el estudio de los impactos humanos sobre la biodiversidad. Se hace énfasis en los procesos de manejo para prevenir la extinción de especies y para aminorar o reparar los daños antropogénicos a los ecosistemas. Se busca la cconservación y restauración de la biodiversidad, la integridad ecológica y la salud ecológica.\n\nMétodos:\nClases magistrales, seminario, lecturas dirigidas.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Ecología de Poblaciones y comunidades con código 2017526.",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017541)",
    "grupos": []
   }
  ]
 },
 "2017543": {
  "cod": "2017543",
  "codigoSIA": "2017543",
  "nombre": "Microbiología",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El desarrollo de la asignatura permitirá la adquisición de nociones fundamentales para el trabajo con microorganismos y el aprovechamiento de la biodiversidad microbiana. Así mismo, los estudiantes se ejercitarán en el uso de técnicas básicas para el manejo aséptico, reconocimiento y caracterización de microorganismos. Adquiriendo de esta forma fundamentos estructurales, fisiológicos y bioquímicos, y nociones de relaciones ecológicas; con especial atención en bacterias y hongos.\nEl curso se desarrollara mediante clases magistrales, talleres, elaboración y ejecución de proyecto de investigación y desarrollo de prácticas generales de laboratorio.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos de Biología de microorganismos con código 2017773 y Principios de bioquímica con código 2023214.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "teorica (2017543)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Catalina Arevalo Ferro"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE POSGRADO FRANCISCO JOSE DE CALDAS SALA TIC",
        "salon": "421-213",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "LABORATORIO DE MICROBIOLOGIA",
        "salon": "421-215",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "13:00",
        "fin": "14:00",
        "lugar": "LABORATORIO DE MICROBIOLOGIA",
        "salon": "421-215",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017545": {
  "cod": "2017545",
  "codigoSIA": "2017545",
  "nombre": "Sistemática Biológica",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La sistemática biológica es una de las áreas más interesantes de la biología por las preguntas que intenta responder, el amplio espectro de fundamentos teóricos y técnicas, el uso de herramientas de otras disciplinas y un largo historial de naturalistas y biólogos que han construido los cimientos de la disciplina que estudia las relaciones de parentesco de la diversidad biológica. La sistemática es la disciplina central en las respuestas históricas que se dan a los fenómenos biológicos y es por esto que ésta debe impartirse como una asignatura completa en el plan curricular de biología.\n\nEl objetivo de ¿Sistemática Biológica¿ es ofrecer a los estudiantes los principios teóricos y prácticos para el estudio de las relaciones de parentesco entre taxones. Se busca además que el estudiante esté en capacidad de: 1. estudiar el proceso histórico de construcción de los conceptos modernos de la sistemática filogenética, 2. comprender la información básica incluida en un cladograma, 3. las implicaciones de métodos y descriptores básicos del análisis filogenético, y 4. caracterizar los criterios de escogencia de los procedimientos para un análisis filogenético. La asignatura comprenderá clases magistrales y sesiones prácticas de análisis de datos.\n\nConceptos Previos: Especiación Adaptación Coevolución Covarianza",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017545)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Tiago Pinto Carvalho",
       "Favio Antonio Gonzalez Garavito",
       "Gustavo Adolfo Silva Arias",
       "Jimmy Jair Cabra Garcia"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 305",
        "salon": "564-305",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 305",
        "salon": "564-305",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017546": {
  "cod": "2017546",
  "codigoSIA": "2017546",
  "nombre": "Taxonomía de angiospermas",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Con esta asignatura el estudiante adquirirá los elementos necesarios para el trabajo taxonómico y sistemático con las angiospermas. El estudiante reconocerá los principales grupos de angiospermas representados en la flora colombiana, así como su composición, distribución y usos más importantes. Además, obtendrá adiestramiento en las técnicas de recolección, procesamiento, almacenaje y determinación de material vegetal. La asignatura se organiza de acuerdo a la concepción que actualmente se tiene para las Angiospermas, para lo cual se adopta el sistema de clasificación propuestro por el APG II en 2003 (Grupo para la Filogenía de las Angiospermas). El curso tendrá sendos componentes teórico y práctico (trabajo de campo y de laboratorio) y al final el estudiante podrá además obtener destreza en la búsqueda de información taxonómica y en la presentación de los resultados obtenidos a través de sus investigaciones.\n\nConceptos Previos: Morfología vegetal Tejidos y órganos vegetales",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017546)",
    "grupos": []
   }
  ]
 },
 "2017564": {
  "cod": "2017564",
  "codigoSIA": "2017564",
  "nombre": "Contratacion estatal",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "PRINCIPIOS DE LA CONTRATACIÓN ESTATAL, De la función administrativa, Constitucionales, De la Contratación Estatal, Transparencia.\n- Economía - Responsabilidad. - Equilibrio Contractual.\nDurante el curso se acopiará pronunciamientos jurisprudenciales qu",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2017564)",
    "grupos": []
   }
  ]
 },
 "2017771": {
  "cod": "2017771",
  "codigoSIA": "2017771",
  "nombre": "Análisis y modelación de sistemas biológicos",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "El enfoque de sistemas es una estrategia de análisis que de manera progresiva ha ido mostrando sus pontencialidades para la comprensión y solución de problemas que se pueden plantear como sistemas complejos. Un problema básico que se enfrenta es la insuficiente comprensión de la estructura y los procesos implicados en un sistema biológico de cualquier nivel de complejidad, y de sus patrones de cambio espacio temporal (dinámica); este limitante no puede ser superado aplicando tan solo enfoques analíticos reduccionistas. El análisis de sistemas y las técnicas de modelación aplicadas son una herramienta útil para integrar la información que se tiene de un sistema biológico, ecológico, socioeconómico o ambiental que se pretenda comprender, manejar o administrar, asi mismo sirve como herramienta generadora de hipótesis a ser probada mediante enfoques correlacionales o experimentales convencionales. El objetivo de este curso es entonces proporcionar fundamentos teóricos y prácticos para la aplicación del enfoque sistémico y de las técnicas de modelación a los sistemas biológicos de diferentes niveles de organización.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017771)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Gabriel H. Guillot",
      "codigoGrupo": "1",
      "profesores": [
       "Gabriel Hernando Guillot Monroy"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017772": {
  "cod": "2017772",
  "codigoSIA": "2017772",
  "nombre": "Biología animal",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "Estrategia pedagógica: clases magistrales, conferencia-taller, estudio de caso, práctica de campo, monografía individual (al comienzo del curso cada estudiante debe asumir el estudio teorico o teórico-práctico de un animal en los diferentes aspectos que se abordan en el curso.)\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos de biología evolutiva con el código 2017774.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2017772)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "ADRIANA ROCIO JEREZ MARTINEZ",
       "MARIO ARMANDO MONROY LOPEZ",
       "Rodulfo Ospina Torres",
       "Edgar Ernesto Camero Rubio",
       "Edwin Acosta Virguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "ADRIANA ROCIO JEREZ MARTINEZ",
       "MARIO ARMANDO MONROY LOPEZ",
       "Rodulfo Ospina Torres",
       "Edgar Ernesto Camero Rubio",
       "Edwin Acosta Virguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE TEORICA (2017772)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Edwin Acosta Virguez",
       "Edgar Ernesto Camero Rubio",
       "MARIO ARMANDO MONROY LOPEZ",
       "ADRIANA ROCIO JEREZ MARTINEZ",
       "Rodulfo Ospina Torres"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017773": {
  "cod": "2017773",
  "codigoSIA": "2017773",
  "nombre": "Biología de microorganismos",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "El desarrollo de la asignatura permitirá introducir las nociones fundamentales sobre microorganismos y organismos que no pertenecen al reino vegetal o animal, utilizando temas actuales de interés y aprovechamiento de la biodiversidad microbiana entre otros. El curso se desarrollará mediante clases magistrales, y estudios de caso manejados por el profesor y desarrollados por los estudiantes. En cada módulo de la asignatura se tendrá una sesión de práctica.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Biología celular y molecular con código 2017531.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017773)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Yih Wen Fung ",
       "Luis Carlos Montenegro Ruiz",
       "Angie Daniela Gonzalez Galindo",
       "Alejandro Caro Quintero"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE PRACTICA (2017773)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Yih Wen Fung ",
       "Luis Carlos Montenegro Ruiz",
       "Angie Daniela Gonzalez Galindo",
       "Alejandro Caro Quintero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "LABORATORIO DE MORFOLOGIA ANIMAL",
        "salon": "421-152",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 - PEAMA Sumapaz",
      "codigoGrupo": "SUMA-01",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Yih Wen Fung ",
       "Luis Carlos Montenegro Ruiz",
       "Angie Daniela Gonzalez Galindo",
       "Alejandro Caro Quintero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "LABORATORIO DE MORFOLOGIA ANIMAL",
        "salon": "421-152",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017774": {
  "cod": "2017774",
  "codigoSIA": "2017774",
  "nombre": "Biología evolutiva",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "La asignatura ofrecerá una introducción a las principales ideas, conceptos y mecanismos del proceso evolutivo. También se hará un recorrido por algunas de las principales innovaciones evolutivas que moldearon la diversidad de formas y modos de vida que se observan en la historia de la vida en nuestro planeta. Además de la clase magistral se realizarán talleres y se promoverá la lectura de publicaciones científicas.\n\nConceptos Previos: Se recomienda que los estudiantes tengan conocimiento sobre filogenetica.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017774)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Joao Victor Muñoz Duran",
       "Carlos Alberto Parra Osorio",
       "Carlos Eduardo Sarmiento Monroy",
       "Fernando Fernandez Castiblanco"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 80,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "AUDITORIO ENRIQUE PEREZ ARBELAEZ",
        "salon": "425-100",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO ENRIQUE PEREZ ARBELAEZ",
        "salon": "425-100",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017775": {
  "cod": "2017775",
  "codigoSIA": "2017775",
  "nombre": "Biologia molecular de la célula",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "El Curso Biologia Molecular de la Célula presentará los elementos moleculares básicos que componen las células (con énfasis en las células eucariotes). Se estudiará la función de estos elementos y su conexión para el adecuado desarrollo y función de las células. Se presentará igualmente la célula en su contexto social (comunicación con otras células) y los elementos básicos de la divisón que permitirán comprender los mecanismos celulares básicos del desarrollo. Cada uno de los conceptos se contextualizarán con el desarrollo científico y tecnológico y el impacto en la sociedad.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Biología celular y molecular con código 2017531.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017775)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Helena Ramirez Hernandez",
       "Maria Del Pilar Gomez Correa",
       "MARYAM CHAIB DE MARES "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2- Clavijo",
      "codigoGrupo": "2",
      "profesores": [
       "Carlos Arturo Clavijo Ramirez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 45,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017776": {
  "cod": "2017776",
  "codigoSIA": "2017776",
  "nombre": "Ciencias de la tierra",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "Objetivos: Ofrecer un panorama general y unas bases conceptuales sobre las Ciencias de la Tierra con un contenido básico sobre geociencias y geografía, incluyendo biogeografía. Este curso pretende sentar las bases para los estudios de la distribución geográfica de los organismos desde un punto de vista histórico del desarrollo de la ciencia y las ideas y métodos que la han sustentado y la aplicación de tecnologías y herramientas espaciales para su análisis.\nSe pretende que el alumno se introduzca en:\na) Los fundamentos básicos de las ciencias de la tierra\nb) La terminología y conceptos básicos en biogeografía.\nc) Los procesos climáticos y atmosféricos a diferentes escalas.\nd) Los procesos de formación de suelos\ne) Los métodos de análisis biogeográficos más usuales.\na) Se familiarice con la literatura de esta disciplina.\nf) Introducción a la aplicación de métodos y herramientas de carácter espacial (Sistemas de Información Geográfica)\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Biología evolutiva con código 2017774.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017776)",
    "grupos": [
     {
      "grupo": "Grupo 1 - BIOLOGIA",
      "codigoGrupo": "1",
      "profesores": [
       "Gabriel Hernando Guillot Monroy",
       "Jose Camilo Fagua Gonzalez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 11,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA CLASE ORINOQUIA 9",
        "salon": "AULA 9",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA CLASE ORINOQUIA 9",
        "salon": "AULA 9",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017777": {
  "cod": "2017777",
  "codigoSIA": "2017777",
  "nombre": "Ecología",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "La asignatura ECOLOGIA busca dar las bases fundamentales del funcionamiento de los sistemas ecológicos a sus diferentes escalas y hacer visible las relaciones entre estos sistemas de organización a escala ecológica. El curso también pretende mostrar los tipos de relaciones ecológicas que se dan dentro de cada nivel de organización y entre los niveles.\n\nSe emplearán estrategias pedagógicas como: sustentaciones orales, revisiones de literatura actualizada, presentación de informes sobre temáticas complementarias, trabajos individuales y en grupo durante las clases y seminarios de investigación\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Ciencias de la Tierra con código 2017776.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017777)",
    "grupos": [
     {
      "grupo": "Grupo 1 - BIOLOGIA",
      "codigoGrupo": "1",
      "profesores": [
       "Nelly Rodriguez Erazo",
       "Maria Argenis Bonilla Gomez",
       "Beatriz Eugenia Salgado Negret"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 6,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Biologia",
      "codigoGrupo": "GRUPO2",
      "profesores": [
       "LAURA KATHERINE RODRÍGUEZ SÁNCHEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE SEMINARIOS",
        "salon": "421-120F",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALA DE POSGRADO FRANCISCO JOSE DE CALDAS SALA TIC",
        "salon": "421-213",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama Sumapaz - Grupo 1",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "Juliana Zuluaga Carrero"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": []
     },
     {
      "grupo": "Peama-Orinoquia Grupo 1 (Presencial)",
      "codigoGrupo": "ORIN-01",
      "profesores": [
       "Néstor Fernando Perez Buitrago"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 14,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 4",
        "salon": "AULA 4",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA DE CLASE ORINOQUIA 4",
        "salon": "AULA 4",
        "edificio": "AULAS DE CLASE ORINOQUIA",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017778": {
  "cod": "2017778",
  "codigoSIA": "2017778",
  "nombre": "Fundamentos de investigación",
  "creditos": 2,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "Enfoque y propósito: Fundamentos de Investigación es una asignatura que introduce a los y las estudiantes de pregrado en la lógica y práctica del método científico aplicado a las ciencias naturales. Su propósito es dotar al estudiante de las herramientas conceptuales y metodológicas necesarias para formular preguntas de investigación, construir hipótesis, diseñar experimentos, recolectar y analizar datos, e interpretar y comunicar resultados de forma oral y escrita.\nConocimientos por desarrollar: El curso fortalece el pensamiento crítico y analítico, la capacidad de síntesis de literatura científica, el diseño experimental (métodos cuantitativos y cualitativos), el análisis estadístico básico, y las competencias de comunicación científica. Los estudiantes aprenderán a identificar vacíos de conocimiento, construir marcos teóricos sólidos y elaborar escritos en formato de artículo científico, habilidades esenciales para cualquier perfil profesional en ciencias.\nCarácter interdisciplinar: Aunque está orientada a la biología, la asignatura conecta explícitamente con áreas como estadística, filosofía de la ciencia, ciencias ambientales y gestión del conocimiento. Estudiantes de carreras afines a las ciencias naturales, salud o ingeniería ambiental pueden beneficiarse significativamente de sus contenidos.\nAplicabilidad práctica: Las competencias desarrolladas son transferibles a la investigación académica, la docencia, la gestión ambiental y la participación en proyectos colaborativos nacionales e internacionales.\nConocimientos previos: No se requieren conocimientos previos en investigación formal. Se recomienda que el estudiante cuente con al menos un 20¿30 % de avance en su carrera, de modo que tenga familiaridad básica con conceptos biológicos que sirvan de contexto para formular sus preguntas de investigación.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017778)",
    "grupos": [
     {
      "grupo": "Grupo 1 - BIOLOGIA",
      "codigoGrupo": "GRUPO1",
      "profesores": [
       "Swanni Tatiana Alvarado Romero",
       "Beatriz Eugenia Salgado Negret",
       "Juan David Gonzalez Trujillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "SALON 107",
        "salon": "564-107",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017779": {
  "cod": "2017779",
  "codigoSIA": "2017779",
  "nombre": "Genética",
  "creditos": 4,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "El curso está encaminado para que el estudiante conozca y entienda las bases de la herencia, desde el nivel molecular. Se identificará al gen, su ubicación, estructura, la susceptibilidad al cambio y reparaciones de daños en el genoma, cómo se segrega, las leyes que rigen esa segregación, patrón de segregación vertical y horizontal, influencias del microambiente donde se expresa, y cómo esta herencia se segrega en las poblaciones base fundamental de la evolución.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Biología evolutiva con código 2017774.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017779 (2017779)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Nubia Estella Matta Camacho",
       "Luis Fernando Garcia Pinzon"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 36,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 207",
        "salon": "564-207",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "CLASE PRACTICA (2017779)",
    "grupos": [
     {
      "grupo": "Grupo 1 Lab.",
      "codigoGrupo": "1",
      "profesores": [
       "Nubia Estella Matta Camacho"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "LABORATORIO CITOGENETICA",
        "salon": "421-117",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 Lab.",
      "codigoGrupo": "2",
      "profesores": [
       "Clara Isabel Bermudez Santana"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO CITOGENETICA",
        "salon": "421-117",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017780": {
  "cod": "2017780",
  "codigoSIA": "2017780",
  "nombre": "Historia del pensamiento biológico",
  "creditos": 2,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "El curso tiene como objetivos:\n1. Introducir al estudiante en una visión del método científico a través de algunos hitos relevantes en la historia del pensamiento biológico.\n2. Mostrar algunos puntos de conexión entre el pensamiento biológico, la epistemo",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Historia del pensamiento",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Joao Victor Muñoz Duran",
       "Xavier Marquinez Casas"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017783": {
  "cod": "2017783",
  "codigoSIA": "2017783",
  "nombre": "Biogeografía",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "OBJETIVO\nProporcionar a los estudiantes los elementos básicos de la Biogeografía, de tal forma que éstos puedan comprender los diferentes procesos y mecanismos involucrados en los patrones de distribución de las especies en la biosfera, tanto en el momento actual como en el pasado. Se espera que los estudiantes adquieran elementos para analizar e interpretar de una manera general e integral, los diferentes mecanismos involucrados en los patrones de distribución histórica y actual de las especies.\n\nConceptos Previos: Se recomienda cursar previamente la asignatura Ciencias de la Tierra (2017776)",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017783)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Rodulfo Ospina Torres",
       "Gustavo Adolfo Silva Arias",
       "Andrea Tonolli Thomaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017785": {
  "cod": "2017785",
  "codigoSIA": "2017785",
  "nombre": "Biología de briófitos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura presentará a los estudiantes un panorama muy completo de la Biología de este importante grupo de plantas terrestres, desde una perspectiva de su diversidad en Colombia.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso de embriofitos basales con código 2017536.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2017785)",
    "grupos": [
     {
      "grupo": "Grupo 1 B. de Briofitos",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Carlos Montenegro Ruiz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "LABORATORIO DE MORFOLOGIA ANIMAL",
        "salon": "421-152",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017788": {
  "cod": "2017788",
  "codigoSIA": "2017788",
  "nombre": "Biología de la polinización",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El Objetivo del curso es dar a conocer los fundamentos teóricos de los temas presentados sobre la biología de la polinización, elaborar predicciones y someterlas a prueba mediante las prácticas de laboratorio o en ejercicios desarrollados independientemente por los estudiantes como parte de la actividad autónoma. El estudiante apropiará técnicas y protocolos de investigación, los cuales se constituyen en herramientas fundamentales para hacer investigación en esta área del conocimiento. El objetivo último del curso es contribuir con una formación académica orientada a la resolución de problemas, desarrollando en los estudiantes la capacidad de aplicar conocimiento de la biología de la polinización a la resolución de problemas agrícolas y de seguridad alimentaria. Cada semana se desarrollará un tópico. El maestro dará a conocer la teoría y en la práctica se desarrollará el problema de investigación planteado. Las prácticas irán acompañadas de lecturas escogidas.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos biología de plantas con código 2015877 y ecología con código 2017777.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TOERICO PRACTICA (2017788)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Marisol Amaya Marquez",
       "JUAN PABLO BOTERO RODRIGUEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE MORFOLOGIA ANIMAL",
        "salon": "421-152",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 305",
        "salon": "564-305",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017792": {
  "cod": "2017792",
  "codigoSIA": "2017792",
  "nombre": "Conservación genética",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La diversidad biológica en el planeta esta siendo perdida rápidamente por las acciones directas o indirectas del hombre. La transformación de los hábitats y ecosistemas naturales, la deforestación por políticas inadecuadas de ocupación y utilización del territorio, y la construcción de obras de infraestructura y desarrollo vial sin las debidas consideraciones ambientales han sido algunas de las principales causas que han conducido a esta situación.\nLa importancia de la biodiversidad, así como la adopción de medidas para su conservación, uso sostenible y distribución de beneficios que se deriven de su utilización se consignan en el convenio sobre la diversidad Biológica, ratificado por Colombia mediante la ley 165 de 1994. La Política Nacional de biodiversidad en Colombia se fundamenta en tres estrategias: Conservación, conocimiento y utilización sostenible de la biodiversidad.\nPara los biólogos que esperen ser parte importante en la planeación de políticas futuras para la conservación y manejo de las especies, es importante tener una formación adecuada en las herramientas que se pueden obtener a partir de los datos moleculares.\nUna visión integral de los programas de conservación, requiere el uso de datos ecológicos, demográficos y genéticos (particularmente moleculares), con el fin de lograr la preservación de suficiente cantidad de diversidad evolutiva.\n\nConceptos Previos: Los estudiante deben contar con conocimientos de Biología molecular. Se recomienda cursar previamente la asignatura Biología molecular (2017523)",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017792",
    "grupos": [
     {
      "grupo": "Grupo 1 - Conservación Genética (Prof Mario Vargas R.)",
      "codigoGrupo": "1",
      "profesores": [
       "MARIO ALFONSO VARGAS RAMIREZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE",
        "salon": "426-202",
        "edificio": "426 - Instituto de Genética",
        "desde": "24/08/2026",
        "hasta": "11/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE BIOINFORMATICA (NO USAR)",
        "salon": "426-212",
        "edificio": "426 - Instituto de Genética",
        "desde": "24/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017794": {
  "cod": "2017794",
  "codigoSIA": "2017794",
  "nombre": "Cultivo de tejidos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "OBJETIVOS:\nSuministrar y familiarizar al estudiante con las metodologías y los fundamentos científicos así como también presentar las aplicaciones del Cultivo de Tejidos Vegetales.\n\nDiscutir los métodos adecuados para resolver problemas de importancia científica y económica.\n\nContribuir de manera eficaz a la formación profesional del estudiante y presentar las bases para la comprensión en el mejoramiento de plantas.\n\n\nMETODOLOGÍA:\nEl curso comprende: Conferencias, Seminarios, Trabajos prácticos, Demostraciones, Películas y Consulta Bibliográfica.\n\nIgualmente se programarán visitas a laboratorios y cultivos de producción de flores, además de otras visitas a laboratorios de investigación.\n\nConceptos Previos: Los estudiante deben contar con los conocimientos adquiridos en la asignatura Fisiología Vegetal (2017538)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2017794)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Xavier Marquinez Casas",
       "Fagua Virginia Alvarez Florez",
       "Rosa Angélica Plata Rueda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA TEORICA",
        "salon": "421-142B",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   },
   {
    "nombre": "Clase Practica",
    "grupos": [
     {
      "grupo": "Grupo 2 (Plata)",
      "codigoGrupo": "2",
      "profesores": [
       "Rosa Angélica Plata Rueda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 6,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE CULTIVOS DE TEJIDOS VEGETALES",
        "salon": "421-112",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo1 (Alvarez)",
      "codigoGrupo": "1",
      "profesores": [
       "Fagua Virginia Alvarez Florez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 6,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "LABORATORIO DE CULTIVOS DE TEJIDOS VEGETALES",
        "salon": "421-112",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017798": {
  "cod": "2017798",
  "codigoSIA": "2017798",
  "nombre": "Ecología de la restauración",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La mayoría de los sistemas ecológicos de la biosfera han sido transformados por el ser humano como resultado de actividades como la deforestación, producción agropecuaria, minería, desarrollo industrial, urbanización, introducción de especies exóticas. Como resultado del desarrollo no planeado o indebido de dichas actividades se han generado serios problemas ambientales tales como la pérdida de biodiversidad, contaminación, la reducción o pérdida total de la capacidad de dichos ecosistemas de prestar servicios ambientales (agua, suelo, productividad, recursos vegetales y animales, fijación de CO2), y en general una reducción de la integridad y salud de los ecosistemas, con graves consecuencias para la sostenibilidad de las sociedades humanas presentes y futuras.\n\nConceptos Previos: Los estudiantes deben contar con los conocimientos básicos de Ecología. Para ello sae recomienda cursar la asignatura Ecología (2017777)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017798 (2017798)",
    "grupos": [
     {
      "grupo": "Ecología de la restauración (2017798)",
      "codigoGrupo": "GRUPO1",
      "profesores": [
       "Swanni Tatiana Alvarado Romero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "AULA TEORICA",
        "salon": "421-142B",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017799": {
  "cod": "2017799",
  "codigoSIA": "2017799",
  "nombre": "Ecología de la reproducción de plantas tropicales",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso aborda el estudio de los factores ecológicos que determinan la reproducción en las plantas tropicales, con énfasis en las inetracciones planta-animal que garantizan la dispersión del polen, los frutos y las semillas y la germinación de las semillas y el establecimiento de las plántulas. Tanto la polinización como la dispersión son procesos básicos en los ecosistemas que proporcionan servicios ambientales fundamentales para las sociedades humanas relacionados con la seguridad alimentaria, por tanto su conocimiento es fundamental para el desarrollo de la ecología aplicada en áreas como la conservación, la restauración y el manejo de especies nativas e invasoras.\nEl objetivo de este curso es brindar a los estudiantes elementos conceptuales y metodológicos que les permitan desarrollar investigaciones en diversos aspectos de la ecología de la reproducción de las plantas de interés, desde plantas nativas de los ecosistemas naturales, hasta plantas cultivadas de interés económico en los agroecosistemas. Este es un curso teórico- práctico en el cual los estudiantes realizarán prácticas de laboratorio, invernadero y campo y prepararán la discusión de artículos recientes sobre los temas del curso. A lo largo del semestre los estudiantes desarrollarán un proyecto cuyos resultados deben presentarse en formato de la revista Acta Biológica Colombiana.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase teórica (2017530)",
    "grupos": [
     {
      "grupo": "Ecologia de la reproducción de plantas tropicales",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Argenis Bonilla Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON 204",
        "salon": "564-204",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017802": {
  "cod": "2017802",
  "codigoSIA": "2017802",
  "nombre": "Estudios de caso en anfibios",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Objetivo: Estudio de las bases y criterios de clasificación de los Anfibios.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Taxonomía animal con código 2017518.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA(2017802)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Aldemar Alberto Acevedo Rincon",
       "Juan Manuel Carvajalino Fernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 11,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-101",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017803": {
  "cod": "2017803",
  "codigoSIA": "2017803",
  "nombre": "Etnobotánica",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura, en su concepción más amplia, comprende todas las actividades que tienen que ver con los usos pasados y presentes de las plantas por parte del hombre, con énfasis en la investigación etnobotánica contemporánea en un país que como Colombia es pluriétnico, pluricultural y megadiverso. La interrrelación hombre-planta, eje del curso, se aborda desde la cultura, el tiempo y el espacio, para definir criterios de investigación y valoración del conocimiento tradicional. Igualmente, se abordan aspectos relacionados con la importancia de la vegetación para el mantenimiento de bancos de genes in situ de plantas útiles, restringidas a procesos culturales locales o subregionales, que constituyen oportunidades de riqueza, pero que se pierden por la destrucción de los ecosistemas y de los grupos culturales (sociedades indígenas y campesinas) detentadoras del conocimiento. En este marco, se proporcionan los elementos básicos, conceptuales y metodológicos, que se requieren para estudiar la vegetación en Colombia, a la luz de su importancia cultural, política y económica.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos de Taxonomía de angiospermas con código 2017546 y Biología de plantas con código 2015877.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017803)",
    "grupos": []
   }
  ]
 },
 "2017804": {
  "cod": "2017804",
  "codigoSIA": "2017804",
  "nombre": "Etología",
  "creditos": 3,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "Proporcionar la información básica que capacite a los participantes para interpretar y analizar el comportamiento animal. Formar a los participantes para que interpreten la investigación científica a la luz de la Etología y adquiera un espíritu crítico an",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017804)",
    "grupos": []
   }
  ]
 },
 "2017806": {
  "cod": "2017806",
  "codigoSIA": "2017806",
  "nombre": "Fisiología del crecimiento y desarrollo vegetal",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "En este curso se busca interpretar y analizar los procesos fundamentales del crecimiento y diferenciación de las plantas. mediante conferencias dictadas por el profesor sobre los aspectos más relevantes de la fisiología del desarrollo, seminarios dictados por los estudiantes basándose en la revisión bibliográfica sobre temas específico señalado por el profesor. se realizaran ensayos biológicos que permitan evaluar la acción que ejercen los factores externos como internos en el crecimiento y desarrollo. Este curso se enfocará en los procesos del desarrollo de la planta desde un punto de vista organísmico y estructural. Al concluir el curso el estudiante deberá comprender los procesos de desarrollo durante el ciclo de una planta y cómo factores ambientales pueden afectar el crecimiento y desarrollo; así como la regulación molecular de los fenómenos del crecimiento y desarrollo de las plantas.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Fisiología vegetal básica con código 2015892 y principios de bioquímica con código 2023214.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Fisiología del crecimiento y desarrollo vegetal",
    "grupos": [
     {
      "grupo": "Fisiología del crecimiento y desarrollo vegetal",
      "codigoGrupo": "GRUPO1",
      "profesores": [
       "Xavier Marquinez Casas",
       "Kriss Dayana Pantoja Pulido"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 14,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "LABORATORIO DE MORFOLOGIA VEGETAL",
        "salon": "421-101",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017808": {
  "cod": "2017808",
  "codigoSIA": "2017808",
  "nombre": "Floristica y fitogeografía",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La asignatura es teórico-práctica con lecturas previas realizadas por el estudiante. El estudiante desarrollará de manera individual un trabajo práctico para un grupo vegetal o región de su interés empleando las colecciones del Herbario Nacional Colombiano. Se hará una salida de campo de cinco días donde el estudiante aprenderá las técnicas de muestreo florístico. El estudiante lograrán perfeccionar las técnicas de colección botánica mediante recolección, organización, identificación, descripción y preservación de material vegetal, que sean útiles desde el punto de vista florístico, taxonómico, sistemático y ecológico. Todo esto se logrará mediante el manejo de claves y fuentes de información, identificación de material vegetal, asignación correcta de nombres, entre otras actividades. Categorizar especies vegetales para establecer su nivel de riesgo y plantear medidas de protección adecuadas.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Taxonomía de angiospermas con código 2017546 y sistemática biológica con código 2017545.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase teorica (2017808)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Orlando Adolfo Jara Muñoz",
       "Orlando Rivera Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-101",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-101",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017810": {
  "cod": "2017810",
  "codigoSIA": "2017810",
  "nombre": "Fundamentos de palinología básica y aplicada",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se pretende transmitir al estudiante lo fundamental de los aspectos principales de la morfología de los granos de polen y las esporas y su aplicación en campos diferentes a la biología. Se hará una fase de introducción a la biología de la polinización. El alcance global es despertar el interés en la utilización de la Palinología como herramienta auxiliar en trabajos de investigación en áreas de la taxonomía, ecología y fisiología. Se plantea un programa teórico-práctico.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso Biología de plantas con código 2015877.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017810)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jesus Orlando Rangel Churio",
       "Marisol Amaya Marquez",
       "ALEXIS JARAMILLO JUSTINICO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017813": {
  "cod": "2017813",
  "codigoSIA": "2017813",
  "nombre": "Genética molecular bacteriana",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los conceptos de la bioquímica y la biología molecular adquiridos por el estudiante en la etapa de fundamentación son puestos en juego para explicar los mecanismos de la expresión genética en microorganimos. La asignatura presenta los contenidos que permiten comprender las bases de gran parte de los trabajos y avances en la investigación microbiológica.\n\nConceptos Previos: Se recomienda cursar previamente las asignaturas: Biología de los microorganismos (2017773) y Principios de Bioquímica (2023214)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017813)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Genética Molecular Bacteriana",
      "codigoGrupo": "1",
      "profesores": [
       "Alejandro Caro Quintero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017817": {
  "cod": "2017817",
  "codigoSIA": "2017817",
  "nombre": "Histología animal",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Este curso está concebido para que los estudiantes adquieran un conocimiento sólido de la estructura microscocópica y submicroscópica de los tejidos y órganos representativos de los diferentes sistemas animales, con énfasis en histofisiología en cada caso. Los tejidos y órganos se estudian y analizan de acuerdo con la tendencia actual que exige un enfoque biomolecular. Los temas se complementan con literatura científica que capacite a los estudiantes para abordar el estudio histológico de prácticamente todos los organismos. Siendo un área de conocimiento de enlace con la fisiología y la biología celular uno de los objetivos es proyectar hacia el estudiante la importancia de la histología para entender en distintos niveles la estrecha relación con otras ciencias. La metodología convencional se combina con metodologías intensivas. Los temas básicos son expuestos por el profesor, utilizando un material de microfotografías y electromicrografías especialmente preparado y seleccionado para el curso. En la componente práctica se utilizan micropreparados de secciones representativas de modelos animales. Los estudiantes dispondrán de electromicrografías para el análisis correspondiente. La participación activa de los estudiantes durante el desarrollo del curso se complementa con discusión en seminario de literatura especializada, y planteamiento de problemas que serán analizados con asesoría del profesor.\n\nConceptos Previos: Se recomienda a los estudiantes cursar previamente la asignatura Biología molecular de la célula (2017775)",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017817 (2017817)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Edwin Acosta Virguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-122",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017819": {
  "cod": "2017819",
  "codigoSIA": "2017819",
  "nombre": "Ictiologia: la biología de los peces",
  "creditos": 2,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El curso imparte conocimientos sobre los aspectos fundamentales de la biología de los peces, su taxonomía, ecología, biogeografía, uso y conservación. El objetivo central es el aprendizaje de los atributos biológicos más importantes de los peces, desde una perspectiva ecológica y con enfasis particular en la ictiofauna dulceacuícola de Colombia.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso de Taxonomía animal con código 2017518.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TORICOPRACTICA (2017819)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Tiago Pinto Carvalho"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 12,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "OFICINA DE PROFESOR",
        "salon": "425-211-C",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017830": {
  "cod": "2017830",
  "codigoSIA": "2017830",
  "nombre": "Mamíferos suramericanos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso de Mamíferos Suramericanos tiene como objetivo dar los conocimientos básicos sobre la morfología, la filogenia y la historia biogeográfica de los mamíferos, con énfasis en los órdenes presentes en el Neotrópico. El curso es de modalidad teórico - práctica, son siete horas presénciales donde el profesor o el conferencista invitado expondrá el tema a tratar con lecturas previas por parte de los estudiantes. En el bloque de tres horas se desarrollarán los laboratorios cuando sea pertinente, de lo contrario lo empleará en la realización de lecturas del tema. Cuando sea viable se realizará una práctica de campo la cual tendrá la modalidad de los cursos de la OTS, es decir preguntas individuales de investigación.\n\nLos Objetivos planteados son:\n1. Dar los conocimientos básicos sobre la morfología y la filogenia de los mamíferos, con énfasis en los órdenes presentes en Colombia.\n2. Dar las bases para que el estudiante plantee preguntas y diseñe investigaciones en Mamíferos.\n3. Capacitar a los estudiantes en el análisis, evaluación, síntesis, escritura de informes, artículos científicos y en la realización de exposiciones.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Taxonomía animal con código 2017518 y Biología animal con código 2017772.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017830)",
    "grupos": []
   }
  ]
 },
 "2017831": {
  "cod": "2017831",
  "codigoSIA": "2017831",
  "nombre": "Mariposas de Colombia",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura consiste en una introducción a la sistematica y nomenclatura de las mariposas así como su biología, su evolución, su distribución en Colombia y su biogeografía y sistemática de las hormigas.\nAdemás de la definición del grupo, se presentará su ubicación dentro del marco general de los Lepidopteros a nivel neotropical y global, propuestas de evolución interna y relación de las estrategias de vida y diversidad de aspectos biológicos.\nLa clase consistirá de conferencias magistrales intercaladas, seminarios y laboratorios de identificación de material, bien de docencia, bien de salida de campo.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento del curso de Biología animal con código 2017772.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2017833": {
  "cod": "2017833",
  "codigoSIA": "2017833",
  "nombre": "Métodos en conservación y manejo de vida silvestre",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "OBJETIVOS\n1. Suministrar herramientas y técnicas prácticas para abordar la investigación de la fauna silvestre y sus hábitats\n2. Generar espacios de discusión con base en estudios de caso sobre la pertinencia y viabilidad de algunas técnicas para la investigación de la fauna silvestre y sus hábitats.\n3. Entrenar a los estudiantes en el diseño de prácticas que permitan asimilar conceptos aplicados en conservación y manejo de vida silvestre.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos de Ecología de poblaciones y comunidades con código 2017526 y Introducción a la biología de la conservación con código 2017541.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICOPRACTICA (2017833)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Hugo Fernando Lopez Arevalo",
       "Olga Lucia Montenegro Diaz",
       "Pedro Sanchez Palomino",
       "Aldemar Alberto Acevedo Rincon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON 305",
        "salon": "564-305",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017834": {
  "cod": "2017834",
  "codigoSIA": "2017834",
  "nombre": "Microbiología del suelo",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Desarrollo en módulos sobre fundamentos y principios de la microbiología del suelo complementados con prácticas básicas y desarrollo de seminario investigativo:\nI. Indicadores de la calidad del suelo. Transformaciones microbianas en ciclos biogeoquímicos.\nII. Microbiología edáfica.\nIII. Interacciones ecológicas entre los componentes Suelo-Microorganismos-plantas\nAgroecología. Aplicaciones biotecnológicas\n\nConceptos Previos: Se recomienda a los estudiantes cursar previamente la asignatura Biología de los microorganismos (2017775)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (20178349)",
    "grupos": [
     {
      "grupo": "Microbiologia del suelo (2017834) pregrado",
      "codigoGrupo": "1",
      "profesores": [
       "Alejandro Caro Quintero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE SEMINARIOS",
        "salon": "421-120F",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017837": {
  "cod": "2017837",
  "codigoSIA": "2017837",
  "nombre": "Ornitología",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El curso pretende dar al estudiante un conocimiento amplio sobre la biología de las aves, suficiente para permitirle profundizar sobre varios aspectos de la ornitología en trabajos de tesis u otros. La parte teórica del curso incluye conferencias sobre los siguientes temas: taxonomía y sistemática de las aves, distribución y diversidad de las aves, plumaje, muda y coloración, anatomía y fisiología, órganos de los sentidos y capacidades sensoriales, aspectos del comportamiento, cantos y reclamos, vuelo, migracion y navegación, biología reproductiva y desarrollo, ecología y conservación. Los laboratorios tratan temas de familias de aves colombianas y sus características, anatomía externa e interna, técnicas taxonómicas, plumajes y mudas y preparción de especímenes de aves utilizando la colección de aves del Instituto de Ciencias Naturales y técnicas de observación e identificación de aves y de censos e inventarios que se desarrollan en tres salidas de campo a diferentes zonas del país. Se asignarán lecturas de la literatura ornitológica moderna sobre cada tema y cada estudiante debe realizar un proyecto en la colección y un proyecto en el campo (individual o en pareja), de los cuales se presentarán informes. La nota del curso se basará en dos exámenes parciales, quices breves sobre diferentes temas de teoría y laboratorio y los informes de los proyectos.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos Biología animal con código 2017772 y Taxonomía animal con código 2017518.",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2017837)",
    "grupos": []
   }
  ]
 },
 "2017842": {
  "cod": "2017842",
  "codigoSIA": "2017842",
  "nombre": "Relaciones ecofisiológicas planta suelo agua",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Objetivos: 1) examinar los diferentes mecanismos moleculares, bioquímicos, celulares, morfofisiológicos y organísmicos que le permiten a las plantas responder a las variaciones del medio ambiente. 2) Estudiar las variaciones en los diferentes procesos fisiológicos de las plantas en respuesta a cambios en el medio ambiente y las adaptaciones de las plantas que les permiten sobrevivir en un ambiente determinado. 3) Familiarizar al estudiante con diferentes tecnologías modernas que permiten a nalizar la respuesta de las plantas las variaciones del medio ambiente. Metodología: En cada unidad del curso el profesro suministrará con anterioridad bibliografía pertinente de cada uno de los temas. En la semana correspondiente el profesor presentará el tema a tratar a manera de clase magistral, luego se discutirá lo leido en plenaria. Este trabajo será complementado con sesiones prácticas. Se seleccionará un aespecie de ciclo corto y de clima frío y se escogerá un tipo de estrés para aplicar a las plantas, a las cuales se les realizará seguimiento. Los estudiantes presentarán un informe teniendo en cuenta las instrucciones para los autores de la revista Acta biológica Colombiana. Igualmente presentarán un seminario especial de un tópico asignado y se dejarán algunas actividades o resolución de problemas para desarrollar fuera de clase.\n\nConceptos Previos: Se recomienda a los estudiante que inscriban esta asignatura contar con los conocimiento de los cursos de Principios de bioquímica y Fisiología vegetal básica con código 2015892.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase teórica - práctica",
    "grupos": [
     {
      "grupo": "Relaciones ecofisiológicas planta suelo agua (2017842)",
      "codigoGrupo": "1",
      "profesores": [
       "Luz Marina Melgarejo Muñoz",
       "Fagua Virginia Alvarez Florez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "08:00",
        "fin": "12:00",
        "lugar": "LABORATORIO FISIOLOGIA VEGETAL",
        "salon": "421-116",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017845": {
  "cod": "2017845",
  "codigoSIA": "2017845",
  "nombre": "Tecnicas en biologia molecular",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La biología molecular ha tenido un impresionante desarrollo en la biología contemporánea. La mayoría de las subdisciplinas de la Biología hacen uso de las técnicas de Biología Molecular para el desarrollo de sus proyectos de investigación e incluyen las más diversas aplicaciones y enfoques (valoración y cuantificación de la diversidad genética de la biodiversidad en plantas, animales y microorganismos, epidemiología, filogenética, genomica entre otras). Este curso busca orientar al estudiante en las técnicas básicas utilizadas en Biología Molecular mediante el desarrollo de practicas específicas en las técnicas más utilizadas y se trabajarán estrategias para entender las dificultades asociadas a su implementación.\n\nConceptos Previos: Se recomienda a los estudiantes que deseen tomar este curso contar con los conocimientos adquiridos en las asignaturas: Biología Molecular de la célula (2017775)y Biología Molecular (2017523)",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2017845 (2017845)",
    "grupos": [
     {
      "grupo": "GRUPO1",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Fernando Garcia Pinzon",
       "Camilo Ernesto Lopez Carrascal"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "08:00",
        "fin": "13:00",
        "lugar": "LABORATORIO CITOGENETICA",
        "salon": "421-117",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2017949": {
  "cod": "2017949",
  "codigoSIA": "2017949",
  "nombre": "Jurisprudencia constitucional",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es un lugar común en la enseñanza del Derecho en Colombia el situar a nuestro país como auténtico representante continental o romano germánica. La asignatura va dirigida a suministrar elementos teoricos que permitan al profesional justificar adecuadamente",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2017949)",
    "grupos": []
   }
  ]
 },
 "2020994": {
  "cod": "2020994",
  "codigoSIA": "2020994",
  "nombre": "Genetica de insectos de interes economico",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El manejo integrado de plagas y la definición de estra tegias de control biológico son aspectos críticos en todo sistema agrícola. De su éxito, depende la reduc ción en los costos de producción, la apertura de nuevos mercados a partir del mejoramiento en la calidad de los productos que se comercializan, y del cumplimiento de las normas fitosanitarias establecidas relacionadas con trazabilidad. La asignatura \"Genética de Insectos\" que aquí se propone es complementaria a las asignaturas de fundamentación \"Entomología\" y \"Manejo integrado de plagas\". Pretende que los estudiantes de Ingeniería Agronómica conozcan como es la organización genética de un insecto, tanto en su genoma nuclear como extranu clear; y establecer las implicaciones de su composición genética en la biología y comportamiento, particular mente en lo que tiene que ver con el manejo integrado de plagas. Los estudiantes comprenderán como las carac terísticas genéticas de los insectos determinan su res puesta al control (químico/biológico), a la presión por factores ambientales o antrópicos, a la distribución espacio temporal de las especies en sistemas de culti vos, entre otros. Se dictarán clases magistrales donde se abordarán temas básicos y a partir de éstos, se ha rán seminarios con artículos científicos relacionados donde se aborde la temática con insectos de interés económico. Se realizarán ensayos, trabajos y talleres rela cionados con el tema.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2020994)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Elena Luisa Margarita Brochero "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE 130",
        "salon": "500-130",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021140": {
  "cod": "2021140",
  "codigoSIA": "2021140",
  "nombre": "Astronomía para todos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En este curso el estudiante ve conceptos básicos de la astronomía que empiezan con las concepciones de la esfera celeste, haciendo énfasis en la astronomía de posición, viendo coordenadas horizontales, ecuatoriales horarias, geocéntricas y heliocéntricas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2021140)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Leonardo Castañeda Colorado"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 117",
        "salon": "413-117",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 117",
        "salon": "413-117",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Clase Presencial",
      "codigoGrupo": "2",
      "profesores": [
       "Giovanni Alejandro Pinzon Estrada"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Clase Presencial",
      "codigoGrupo": "3",
      "profesores": [
       "SANTIAGO VARGAS DOMINGUEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021146": {
  "cod": "2021146",
  "codigoSIA": "2021146",
  "nombre": "Biología del comportamiento animal y humano",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Proporcionar a los estudiantes la información básica que los capacite para interpretar y analizar el comportamiento animal y humano. Al mismo tiempo suministrar a los participantes la información básica sobre temas fundamentales de la investigación del co",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021146)",
    "grupos": []
   }
  ]
 },
 "2021147": {
  "cod": "2021147",
  "codigoSIA": "2021147",
  "nombre": "Biotecnologia para no biotecnologos",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "OBJETIVO:\nConstruir un escenario interdisciplinario que adopte como objeto de estudio, la biotecnología y los recursos genéticos, abordando los aspectos de bioseguridad, normas éticas, normas legales y percepción social.\n\nMETODOLOGIA\nEn la primera medi",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021147)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Nubia Carmenza Moreno Sarmiento"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO MULTIPLE DE POSGRADO- INST. DE BIOTECNOLOGIA",
        "salon": "224-2146",
        "edificio": "224 - Manuel Ancizar",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021149": {
  "cod": "2021149",
  "codigoSIA": "2021149",
  "nombre": "Galileo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Asignatura de contexto sobre los orígenes de la Ciencia Moderna y, particularmente sobre la obra de Galileo Galilei. Se examinan las relaciones entre ciencias y arte, ciencia y filosofía,ciencia y tecnología y ciencia y poder. Se trabaja la relacion entre las matematicas y el mundo de los fenómenos. Las discusiones epistemologiacas se realizan paralelamente al estudio de los acontecimientos historicos. En terminos genrales se construye el escenario del cambio radical de pensamiento que hace posible la aparcion de la ciencia experimental y abre el camino a la tecnologia moderna.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021149)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Augusto Hernandez Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 90,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "AUDITORIO JUAN HERKRATH MÜLLER",
        "salon": "476-109",
        "edificio": "476 - Juan Herkrath Muller",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021152": {
  "cod": "2021152",
  "codigoSIA": "2021152",
  "nombre": "Cuántica para todos y para todo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso de conta de dos partes centrales:\n\nA. Historia y Fundamentos.\nB. Aplicaciones y Controversias\n\nSe hará en sesiones de dos horas a la que sigue una actividad práctica. La primera tematica (dividad por comodidad en 2) se abordará en las primeras c",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021152)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Jairo Giraldo Gallo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "17:00",
        "fin": "20:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021154": {
  "cod": "2021154",
  "codigoSIA": "2021154",
  "nombre": "Espacio y poder en América Latina",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "RASTREAR LA CONSTRUCCION DE LOS ESTADOS Y MERCADOS CAPITALISTAS DE ENCLAVE, QUE EXPLICAN LA SUBORDINACION AL MERCADO MUNDIAL Y LA FRAGMENTACION SOCIAL Y TERRITORIAL INTERNAS, EN LOS SIGLOS XVIII, XIX Y XX.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORÍCA (2021154)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Dario Indalecio Restrepo Botero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 150,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO PRINCIPAL",
        "salon": "310-113",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO PRINCIPAL",
        "salon": "310-113",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021160": {
  "cod": "2021160",
  "codigoSIA": "2021160",
  "nombre": "Partículas y cosmología",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Presentar de una manera divulgativa la frontera de la física de partículas y de la cosmología. Para ello presentamos un marco conceptual basado en la relatividad especial y la mecánica cuántica para luego construir los conceptos e ideas más relevantes en",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021160)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Jairo Alexis Rodriguez Lopez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021471": {
  "cod": "2021471",
  "codigoSIA": "2021471",
  "nombre": "Japonés I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de japonés, puedan comprender textos cortos relacionados con temáticas de tipo personal (nombre, ocupación) y que además, puedan expresar de manera oral y escrita información de tipo personal.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021471)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Japonés Electivo I",
      "codigoGrupo": "1",
      "profesores": [
       "Yeny Mireya Echeverria Barajas"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 27,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 105",
        "salon": "225-105",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 104",
        "salon": "225-104",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021472": {
  "cod": "2021472",
  "codigoSIA": "2021472",
  "nombre": "Japonés II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos y narrativos relacionados con temáticas de tipo académico y de cultura general.Se espera que en términos de comprensión escrita, el estudiante pueda identifi",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021472)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Japonés Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "Yeny Mireya Echeverria Barajas"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 103",
        "salon": "225-103",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021473": {
  "cod": "2021473",
  "codigoSIA": "2021473",
  "nombre": "Japonés III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021473)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Japonés Electivo III",
      "codigoGrupo": "1",
      "profesores": [
       "Yeny Mireya Echeverria Barajas"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 108",
        "salon": "225-108",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021478": {
  "cod": "2021478",
  "codigoSIA": "2021478",
  "nombre": "Portugues I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo es desarrollar integralmente la competencia comunicativa de lengua portuguesa a nivel de principiantes e introducir al aprendiente en aspectos de la cultura brasileña y portuguesa. Se enfatiza el aprendizaje del idioma modalidad brasileña. Se",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021478)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Portugués Electivo I",
      "codigoGrupo": "1",
      "profesores": [
       "Lina Lucia Oliveira Da Silva"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 28,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 204",
        "salon": "205-204",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021479": {
  "cod": "2021479",
  "codigoSIA": "2021479",
  "nombre": "Portugues II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo del nivel 2 es también desarrollar integralmente la competencia comunicativa de lengua portuguesa en un nivel básico e seguir llevando al aprendiente a interesarse por los aspectos de la cultura brasileña y portuguesa. Se sigue enfatizando el",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021479)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Portugués Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "Lina Lucia Oliveira Da Silva"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 210",
        "salon": "212-210",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA DE VIDEO 2",
        "salon": "229-105",
        "edificio": "229 - Howard Rochester",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021480": {
  "cod": "2021480",
  "codigoSIA": "2021480",
  "nombre": "Portugués III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En el nivel 3 se busca la competencia comunicativa de lengua portuguesa en un nivel intermedio para seguir llevando al aprendiente a interesarse y a sumergirse en la cultura brasileña y portuguesa. Se continúa enfatizando el aprendizaje del idioma en la m",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021480)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 9,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021483": {
  "cod": "2021483",
  "codigoSIA": "2021483",
  "nombre": "Psicoanálisis y cultura",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La pregunta por el hombre tiene asidero desde la objetividad, lo cual permite la apertura de campos como lo es la antropología, la lingüística, la sociología, la historia, la geografía,... etc. En el campo de las ciencias humanas, campos que giran alrededor del hombre, más no por la pregunta que lo esencia, es decirlo singular.\n\nEn su seminario Jacques Lacan, acuña un concepto que introduce una dimensión más allá del campo de la objetividad de la ciencia y al que dio por llamar campo del sujeto, en el cual introduce la dimensión de lo singular, como campo de investigación propiamente psicoanalítica, clínica. Cabe anotar que tanto el estatuto del sujeto como el del objeto, cambian para el psicoanálisis, lo cual lo lleva a reordenar los que introdujo la filosofía y la ciencia-, puesto que el primero, el sujeto, es disímil al sujeto de la conciencia y de la razón, pues es efecto del lenguaje y es inconsciente, asimismo el del objeto, el cual escapa a cualquier representación de la objetividad científica, puesto que es ubicado por fuera de ésta, ya que es un objeto agalmático, mítico que escapa a la objetividad de la percepción, incluso, del cogitar de la razón, empero, no por estar por fuera del campo de lo objetivable deja de funcionar, por el contrario retorna y actúa con vehemencia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021483)",
    "grupos": [
     {
      "grupo": "Grupo 1 (2021483)",
      "codigoGrupo": "1",
      "profesores": [
       "Beatriz Eugenia Ramos Gonzalez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021485": {
  "cod": "2021485",
  "codigoSIA": "2021485",
  "nombre": "Psicoanálisis y psicoterápias",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "¿Cómo cura el psicoanálisis? ¿Cuáles son los principios que sostienen la conducción de un tratamiento? ¿Qué implica el trabajo analítico? Son unos de los interrogantes que dinamizan esta asignatura para reconocer elementos fundamentales de su ética y de la lógica y estructura de su técnica, con el presupuesto básico del poder de la palabra y de la transferencia. El curso busca acercarse a las coordenadas que permiten determinar la peculiaridad del psicoanálisis como terapéutica y como experiencia singular que convoca al sujeto a una indagación sobre los determinantes inconscientes que conducen sus elecciones. Frente a las otras psicoterapias se planteará, en ciertos puntos, su contraste.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021485)",
    "grupos": [
     {
      "grupo": "Grupo 1 - (Psioanálisis y psicoterapias - 2021485)",
      "codigoGrupo": "1",
      "profesores": [
       "Carmen Lucia Diaz Leguizamon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "08:00",
        "fin": "11:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021514": {
  "cod": "2021514",
  "codigoSIA": "2021514",
  "nombre": "Amenaza, riesgo y desarrollo",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los efectos socioeconómicos y las pérdidas humanas como consecuencia de los desastres causados por eventos naturales o antrópicos (fenómenos originados en la intervención humana), siguen aumentando en nuestros países, provocando impactos negativos en las",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021514)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Omar Joaquin Agudelo Suarez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 80,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021758": {
  "cod": "2021758",
  "codigoSIA": "2021758",
  "nombre": "Chino I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los estudiantes deben aprender y aplicar en el habla una correcta pronunciación, acentuación y entonación acorde con la fonética de la lengua china. Igualmente aprenderán las estructuras gramaticales básicas para el primer nivel. El estudiante de ruso deb",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2021758)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Chino Electivo I",
      "codigoGrupo": "1",
      "profesores": [
       "JESSICA LUCIA MORENO NOVOA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Chino Electivo I",
      "codigoGrupo": "2",
      "profesores": [
       "JESSICA LUCIA MORENO NOVOA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021760": {
  "cod": "2021760",
  "codigoSIA": "2021760",
  "nombre": "Chino II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En el nivel II, el curso se enfoca en los caracteres chinos aunque apoyados en el alfabeto piyin. El aprendiente puede construir oraciones simples. A nivel oral, es aprendiente se desenvuelve en situaciones de la vida cotidiana.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CHINO II(2021760)",
    "grupos": [
     {
      "grupo": "Chino Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "JESSICA LUCIA MORENO NOVOA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2021770": {
  "cod": "2021770",
  "codigoSIA": "2021770",
  "nombre": "Cátedra de derecho para estudiantes de otras carreras",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Objetivo:\nDar una visión global de los conceptos mínimos fundamentales del derecho, para contribuir a que los profesionales logren mejor comprensión de la importancia de las relaciones jurídicas y en consecuencia del ejercicio consciente de los deberes y",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Eulises Torres "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "20:00",
        "lugar": "AUDITORIO 101",
        "salon": "610-101",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2021849": {
  "cod": "2021849",
  "codigoSIA": "2021849",
  "nombre": "Filosofía de la Mente",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en tema",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2021849 (2021849)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "AULA 203",
        "salon": "205-203",
        "edificio": "205 - Orlando Fals Borda",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022180": {
  "cod": "2022180",
  "codigoSIA": "2022180",
  "nombre": "Diseño, arte e ideología",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Definición pendiente",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2022180)",
    "grupos": []
   }
  ]
 },
 "2022188": {
  "cod": "2022188",
  "codigoSIA": "2022188",
  "nombre": "Electiva de Grabado en Linóleo- El ying yang de la imagen",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El grabado en linóleo es una técnica para producir imagen estampada y seriada a partir de una matriz blanda. Esta técnica, a pesar de lo sencilla, es de resultados altamente expresivos por las características de la matriz y por las posibilidades experimentales que ofrece tanto en negro como en color.\n\nLa creación de la imagen en linóleo, igual que en madera, requiere entender la estampa como una operación de representación visual basada en el concepto del Yin-Yang: un juego armónico donde lo oscuro contiene lo claro y lo claro contiene el oscuro. Este concepto oriental es el canon mediante el cual se penetra al mundo de la representación de las formas, especialmente al de la grafica.El objetivo del curso es experimentar y producir estampa seriada desde matrices de linóleo.\nEl taller entrega las estrategias del oficio de la construcción de matrices y copiado de la estampa sobre papel y otras diferentes superficies. Se harán experimentos con varios tipos de tintas y colorantes. Las imágenes finales están dirigidas a la creación un proyecto personal de libro de artista, con diseño, imágenes y texto del autor, impreso manualmente en el taller de la Escuela.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022188)",
    "grupos": []
   }
  ]
 },
 "2022221": {
  "cod": "2022221",
  "codigoSIA": "2022221",
  "nombre": "Literatura y cinematografia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022221)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Juan Diego Antonio Pablo Caicedo Gonzalez"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 90,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022225": {
  "cod": "2022225",
  "codigoSIA": "2022225",
  "nombre": "Movilidad y transporte urbano",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El presente curso busca comprender las dinámicas de movilidad y transporte, observando las distintas tecnologías existentes en el contexto de algunas ciudades e intentando evaluar en cada una de ellas los impactos ambientales, sociales y económicos que es",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022225)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Ricardo Montezuma Enriquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 100,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022229": {
  "cod": "2022229",
  "codigoSIA": "2022229",
  "nombre": "Narración gráfica",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Definición pendiente",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2022229)",
    "grupos": []
   }
  ]
 },
 "2022240": {
  "cod": "2022240",
  "codigoSIA": "2022240",
  "nombre": "Promoci&ograve;n de la vida frente al uso indebido de drogas",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "ASIGNATURA QUE TIENE COMO PROPOSITO BRINDAR UN ESPACIO DE DISCUSI&Ograve;N Y ANALISIS SOBRE EL FENOMENO DEL USO DE DROGRAS. EL DESARROLLO DE LA ASIGNATURA COMTEMPLA LA FORMULACI&Ograve;N DE PROPUESTAS EN EL CAMPO DE LA PREVENCI&Ograve;N Y LA SALUD PUBLICA COMO PARTE DEL EJERC",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022240)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "NELLY ESTHER CALIZ ROMERO"
      ],
      "facultad": "FACULTAD DE ENFERMERÍA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 206",
        "salon": "228-206",
        "edificio": "228 - Nelly Garzón Alarcón",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022287": {
  "cod": "2022287",
  "codigoSIA": "2022287",
  "nombre": "Cátedra Augusto Ángel Maya",
  "creditos": 1,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "motivar y concienciar a los estudiantes sobre la importancia del medio ambiente e inducirlos a la reflexión sobre la relación existente entre la disciplina de estudio y la problemática ambiental. despertar en interés por trabajos de investigación. dar las",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORÍCA (2022287)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Liven Fernando Martinez Bernal"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 76,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO - Espacio restringido por seguridad - solo se utiliza para Ins. Genética",
        "salon": "426-102",
        "edificio": "426 - Instituto de Genética",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022362": {
  "cod": "2022362",
  "codigoSIA": "2022362",
  "nombre": "Práctica de Investigación",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura tiene como objetivo permitir a los estudiantes la realización de prácticas de investigación bajo la supervisión de un profesor, en el marco de un proyecto de investigación. El estudiante podrá familiarizarse con los métodos y técnicas de in",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE PRACTICA (2022362)",
    "grupos": [
     {
      "grupo": "Grupo Orlando Adolfo Jara",
      "codigoGrupo": "20",
      "profesores": [
       "Orlando Adolfo Jara Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 1 - Fagua Alvarez",
      "codigoGrupo": "1",
      "profesores": [
       "Fagua Virginia Alvarez Florez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "LABORATORIO DE CULTIVOS DE TEJIDOS VEGETALES",
        "salon": "421-112",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10 - Juan Manuel Carvajalino",
      "codigoGrupo": "10",
      "profesores": [
       "Juan Manuel Carvajalino Fernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12 - Juan David Gonzalez",
      "codigoGrupo": "12",
      "profesores": [
       "Juan David Gonzalez Trujillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13 - Yih Wen Fung",
      "codigoGrupo": "13",
      "profesores": [
       "Yih Wen Fung "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 146",
        "salon": "421-146",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 14 - Adriana Jerez",
      "codigoGrupo": "14",
      "profesores": [
       "ADRIANA ROCIO JEREZ MARTINEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16 - Luis Carlos Montenegro",
      "codigoGrupo": "16",
      "profesores": [
       "Luis Carlos Montenegro Ruiz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "OFICINA DE PROFESOR",
        "salon": "421-125",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17 - Luis Carlos Montenegro",
      "codigoGrupo": "17",
      "profesores": [
       "Luis Carlos Montenegro Ruiz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 18 Martha Calderón",
      "codigoGrupo": "18",
      "profesores": [
       "MARTHA LUCIA CALDERON ESPINOSA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 19 - Alejandro Caro Quintero",
      "codigoGrupo": "19",
      "profesores": [
       "Alejandro Caro Quintero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Luz Marina Melgarejo",
      "codigoGrupo": "2",
      "profesores": [
       "Luz Marina Melgarejo Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "LABORATORIO DE CULTIVOS DE TEJIDOS VEGETALES",
        "salon": "421-112",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 22 Orlando Rivera",
      "codigoGrupo": "22",
      "profesores": [
       "Orlando Rivera Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 23 Aldemar Acevedo",
      "codigoGrupo": "23",
      "profesores": [
       "Aldemar Alberto Acevedo Rincon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Grupo 24 Diego Giraldo",
      "codigoGrupo": "24",
      "profesores": [
       "Diego Alonso Giraldo Cañas"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 26 - Hugo Fernando Lopez",
      "codigoGrupo": "26",
      "profesores": [
       "Hugo Fernando Lopez Arevalo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 28 - William Usaquen (Ancestrabiidad y diversidad genética de la pobl",
      "codigoGrupo": "28",
      "profesores": [
       "William Usaquen Martinez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE",
        "salon": "426-201",
        "edificio": "426 - Instituto de Genética",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Angélica Plata",
      "codigoGrupo": "3",
      "profesores": [
       "Rosa Angélica Plata Rueda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 4,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 30 Olga Luicia Montenegro",
      "codigoGrupo": "30",
      "profesores": [
       "Olga Lucia Montenegro Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "OFICINA DE PROFESOR",
        "salon": "425-108",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 32 - Mario Vargas Ramirez",
      "codigoGrupo": "32",
      "profesores": [
       "MARIO ALFONSO VARGAS RAMIREZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": []
     },
     {
      "grupo": "Grupo 33 Viviana Motato",
      "codigoGrupo": "33",
      "profesores": [
       "Viviana Motato Vasquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4 - Maria Helena Ramirez",
      "codigoGrupo": "4",
      "profesores": [
       "Maria Helena Ramirez Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5 - Alejandro Caro Quintero",
      "codigoGrupo": "5",
      "profesores": [
       "Alejandro Caro Quintero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "18:00",
        "fin": "19:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6 - Maria del Pilar Gómez - Enrico Nassi",
      "codigoGrupo": "6",
      "profesores": [
       "Maria Del Pilar Gomez Correa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 4,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "LABORATORIO DE BIOFISICA - CIF",
        "salon": "224-1050",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7 - Edwin Acosta",
      "codigoGrupo": "7",
      "profesores": [
       "Edwin Acosta Virguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8 Carlos Clavijo",
      "codigoGrupo": "8",
      "profesores": [
       "Carlos Arturo Clavijo Ramirez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "13:00",
        "lugar": "LABORATORIO BIOLOGIA GENERAL",
        "salon": "421-119",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 9 - Brigitte Gavio",
      "codigoGrupo": "9",
      "profesores": [
       "Brigitte Gavio "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022615": {
  "cod": "2022615",
  "codigoSIA": "2022615",
  "nombre": "Alemán I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de alemán, puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y que además, puedan expresar de manera oral y escrita información de tipo personal. Con base en un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante a partir del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué información le sirve, por qué y cómo usarla.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022615)",
    "grupos": [
     {
      "grupo": "Aleman Electivo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Paola Andrea Murillo Serrano"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022616": {
  "cod": "2022616",
  "codigoSIA": "2022616",
  "nombre": "Alemán II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos y narrativos relacionados con temáticas de tipo académico y de cultura general. Con respecto a la comprensión escrita, el estudiante podrá identificar relaciones de temporalidad y secuencia, de contraste y de causa y efecto. Además se espera que puedan expresar de manera oral y escrita información relacionada con la descripción detallada de lugares, de estados de salud, eventos del pasado y planes. A partir de un listado de descriptores predeterminados, el profesor selecciona el material que puede utilizar y ayuda al estudiante, a través del uso de estrategias de aprendizaje, para que poco a poco sea él o ella quien tenga el criterio para saber qué le sirve, por qué y cómo usarlo. Se cuenta con un Centro de Recursos que le brinda tanto a profesores como estudiantes un buen número de recursos para la enseñana y aprendizaje de la lengua.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022616)",
    "grupos": [
     {
      "grupo": "Alemán Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Gonzalez Gonzalez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022617": {
  "cod": "2022617",
  "codigoSIA": "2022617",
  "nombre": "Alemán III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022617)",
    "grupos": [
     {
      "grupo": "Alemán Electivo III",
      "codigoGrupo": "1",
      "profesores": [
       "Daniel Uriel Ventura Caceres"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 102",
        "salon": "225-102",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 104",
        "salon": "225-104",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022625": {
  "cod": "2022625",
  "codigoSIA": "2022625",
  "nombre": "Francés I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes al término de este primer nivel de francés, puedan comprender textos expositivos cortos relacionados con temáticas de tipo académico y que además, puedan expresar de manera oral y escrita información de tipo personal. Con bas",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022625)",
    "grupos": [
     {
      "grupo": "Francés Electivo I",
      "codigoGrupo": "1",
      "profesores": [
       "Ceymy De Los Angeles Rodriguez Forero"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 110",
        "salon": "212-110",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 103",
        "salon": "225-103",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022626": {
  "cod": "2022626",
  "codigoSIA": "2022626",
  "nombre": "Francés II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del segundo nivel, puedan comprender textos expositivos de tipo académico y de cultura general. Además los estudiantes expresan de manera oral y escrita información relacionada con la descripción detallada de luga",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022626)",
    "grupos": [
     {
      "grupo": "Francés Electivo II",
      "codigoGrupo": "1",
      "profesores": [
       "Nadid Hernandez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022627": {
  "cod": "2022627",
  "codigoSIA": "2022627",
  "nombre": "Francés III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que los estudiantes, al término del tercer nivel, puedan leer y comprender textos auténticos de tipo académico y cultural, en los que, por ejemplo, se narren eventos o se describa un concepto a través del tiempo, se presente información de tipo",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022627)",
    "grupos": [
     {
      "grupo": "Francés Electivo III",
      "codigoGrupo": "1",
      "profesores": [
       "Fabio Alejandro Pulido Sandoval"
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 102",
        "salon": "225-102",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALA DE VIDEO 1",
        "salon": "229-104",
        "edificio": "229 - Howard Rochester",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2022630": {
  "cod": "2022630",
  "codigoSIA": "2022630",
  "nombre": "Italiano I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Su objetivo es desarrollar integralmente la competencia comunicativa de lengua italiana a nivel de principiantes e introducir al aprendiente en aspectos de la cultura italiana. Se abordan las cuatro habilidades constitutivas de la competencia comunicativa",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022630)",
    "grupos": []
   }
  ]
 },
 "2022631": {
  "cod": "2022631",
  "codigoSIA": "2022631",
  "nombre": "Italiano II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Su objetivo es continuar el desarrollo integral de la competencia comunicativa de lengua italiana a nivel de principiantes y avanzar en aspectos de la cultura italiana. Se abordan las cuatro habilidades constitutivas de la competencia comunicativa (compr",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022631)",
    "grupos": [
     {
      "grupo": "Grupo 2 - Italiano Electivo II",
      "codigoGrupo": "2",
      "profesores": [
       "Pablo Reyes Pozzi"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 22,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2022698": {
  "cod": "2022698",
  "codigoSIA": "2022698",
  "nombre": "Cuantificacion de proteínas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura favorece la interrelación de las ciencias básicas con la practica en diferentas carreras y así mismo porque se requiere de una fácil interpretación de la, literatura científica .\n\nEl desarrollo de la asignatura cuantificación de proteín",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2022733": {
  "cod": "2022733",
  "codigoSIA": "2022733",
  "nombre": "Iniciacion a estudios feministas y de género",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Con este curso introductorio se busca iniciar a las y los estudiantes en algunos de los principales debates feministas acerca de la construcción cultural de las identidades de género. Analizar los vínculos que existen entre la teória feminista y la diver",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2022733)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "LIZETH CAMILA BAUTISTA TORRES"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023028": {
  "cod": "2023028",
  "codigoSIA": "2023028",
  "nombre": "Trabajo de Grado",
  "creditos": 8,
  "tipologia": "TRABAJO DE GRADO",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023028)",
    "grupos": [
     {
      "grupo": "Grupo 1 - José Ernesto Mancera",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Ernesto Mancera Pineda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "01/09/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 10 - Beatriz Salgado",
      "codigoGrupo": "10",
      "profesores": [
       "Beatriz Eugenia Salgado Negret"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "12:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 11 - Adriana Jerez",
      "codigoGrupo": "11",
      "profesores": [
       "ADRIANA ROCIO JEREZ MARTINEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 12 - Swanni Alvarado",
      "codigoGrupo": "12",
      "profesores": [
       "Swanni Tatiana Alvarado Romero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 4,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 13 Marisol Amaya",
      "codigoGrupo": "13",
      "profesores": [
       "Marisol Amaya Marquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 15 -Laura Vibiana Clavijo",
      "codigoGrupo": "15",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "16/11/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 16 - Olga Lucia Montenegro",
      "codigoGrupo": "16",
      "profesores": [
       "Olga Lucia Montenegro Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "13:00",
        "fin": "14:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "12/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 17 - Yaneth Muñoz",
      "codigoGrupo": "17",
      "profesores": [
       "Yaneth Del Socorro Muñoz Saba"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "12:00",
        "fin": "14:00",
        "lugar": "CENTRO DE INFORMATICA",
        "salon": "425-213",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "12/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 19 - Luz Marina Melgarejo",
      "codigoGrupo": "19",
      "profesores": [
       "Luz Marina Melgarejo Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "LABORATORIO DE FISIOLOGIA VEGETAL",
        "salon": "421-139",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "27/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2 - Luis Carlos Montenegro",
      "codigoGrupo": "2",
      "profesores": [
       "Luis Carlos Montenegro Ruiz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "17:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 21 Carlos Eduardo Sarmiento",
      "codigoGrupo": "21",
      "profesores": [
       "Carlos Eduardo Sarmiento Monroy"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 22 Andres Cuervo",
      "codigoGrupo": "22",
      "profesores": [
       "Andres Mauricio Cuervo Maya"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "15:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "12/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 23 Hugo Lopez",
      "codigoGrupo": "23",
      "profesores": [
       "Hugo Fernando Lopez Arevalo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "15:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 24 Lauren Raz",
      "codigoGrupo": "24",
      "profesores": [
       "Lauren Raz "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "16/11/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 25 - Manuel Alfonso Patarroyo Gutiérrez",
      "codigoGrupo": "25",
      "profesores": [
       "Manuel Alfonso Patarroyo Gutierrez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 26 - Francisco A. Munera G.",
      "codigoGrupo": "26",
      "profesores": [
       "Francisco Alejandro Munera Galarza"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "17:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 27 Sven Zea",
      "codigoGrupo": "27",
      "profesores": [
       "Sven Eloy Zea Sjoberg"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 28 Igor Dimitri",
      "codigoGrupo": "28",
      "profesores": [
       "Igor Dimitri Forero Fuentes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "10:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 29- Orlando Rivera",
      "codigoGrupo": "29",
      "profesores": [
       "Orlando Rivera Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3 - Fagua Alvarez Flórez",
      "codigoGrupo": "3",
      "profesores": [
       "Fagua Virginia Alvarez Florez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "12/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 30 - Litta Samari Perico",
      "codigoGrupo": "30",
      "profesores": [
       "Litta Samari Perico Franco"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 3,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "08:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "26/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 31 Dimitri Forero",
      "codigoGrupo": "31",
      "profesores": [
       "Igor Dimitri Forero Fuentes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "08:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 32 - Juan David Gonzalez",
      "codigoGrupo": "32",
      "profesores": [
       "Juan David Gonzalez Trujillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 34 - Maryam Chaid",
      "codigoGrupo": "34",
      "profesores": [
       "MARYAM CHAIB DE MARES "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 35 -Viviana Motato",
      "codigoGrupo": "35",
      "profesores": [
       "Viviana Motato Vasquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 36 - Edgar Camero",
      "codigoGrupo": "36",
      "profesores": [
       "Edgar Ernesto Camero Rubio"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "19:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "25/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 39 Gustavo Silva",
      "codigoGrupo": "39",
      "profesores": [
       "Gustavo Adolfo Silva Arias"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4 - Angélica Plata",
      "codigoGrupo": "4",
      "profesores": [
       "Rosa Angélica Plata Rueda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "12/10/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 40 - Federico Roda",
      "codigoGrupo": "40",
      "profesores": [
       "Federico Roda Fornaguera"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 42 - Claudia Isabel Brieva Rico,",
      "codigoGrupo": "42",
      "profesores": [
       "Claudia Isabel Brieva Rico"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 43 - Johan Fabian Galindo",
      "codigoGrupo": "43",
      "profesores": [
       "Johan Fabian Galindo Cruz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 44 - Zulma Yaneth Dueñas",
      "codigoGrupo": "44",
      "profesores": [
       "Zulma Janeth Dueñas Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "15:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "11/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 45 - Jairo Humberto Medina",
      "codigoGrupo": "45",
      "profesores": [
       "Jairo Humberto Medina Calderon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5 Brigitte Gavio",
      "codigoGrupo": "5",
      "profesores": [
       "Brigitte Gavio "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 4,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6 - Andrea Tonolli",
      "codigoGrupo": "6",
      "profesores": [
       "Andrea Tonolli Thomaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7 - Edgar Cristancho",
      "codigoGrupo": "7",
      "profesores": [
       "Edgar Cristancho "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8 - Luis Fernando García",
      "codigoGrupo": "8",
      "profesores": [
       "Luis Fernando Garcia Pinzon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 1,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "17:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "14/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023029": {
  "cod": "2023029",
  "codigoSIA": "2023029",
  "nombre": "Trabajo de Grado - Asignaturas de Posgrado",
  "creditos": 8,
  "tipologia": "TRABAJO DE GRADO",
  "descripcion": "",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023029)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Edgar Ernesto Camero Rubio"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "14:00",
        "fin": "15:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023212": {
  "cod": "2023212",
  "codigoSIA": "2023212",
  "nombre": "Análisis y diseño de experimentos",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Objetivo de formación: Proseguir el desarrollo del pensamiento estadístico en la formación profesional del estudiante ofreciéndole una sintaxis especializada referente a la experimentación controlada, con el fin de inducir competencias en la planeación y",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023212)",
    "grupos": [
     {
      "grupo": "Peama Sumapaz - Grupo 1",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "JHONIER SEBASTIAN RANGEL GUTIERREZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2023214": {
  "cod": "2023214",
  "codigoSIA": "2023214",
  "nombre": "Principios de bioquímica",
  "creditos": 3,
  "tipologia": "FUND. OBLIGATORIA",
  "descripcion": "Mediante clase magistral, talleres y lecturas complementarias, al finalizar esta asignatura el estudiante debe conocer y comprender:\n1- Los principios generales de la organización y funcionamiento de los seres vivos y su relación con el entorno.\n2- La est",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023214)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Luis Ernesto Contreras Rodriguez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 39,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 339",
        "salon": "451-339",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 339",
        "salon": "451-339",
        "edificio": "451 - Antonio García Banús",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     },
     {
      "grupo": "Peama Sumapaz - Grupo 1",
      "codigoGrupo": "SUMA-01",
      "profesores": [
       "Laura Katherine Guasca Pineda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2023215": {
  "cod": "2023215",
  "codigoSIA": "2023215",
  "nombre": "Geología general",
  "creditos": 4,
  "tipologia": "FUND. OPTATIVA",
  "descripcion": "El curso ofrece a los estudiantes de biología, geografía o carreras afines los fundamentos básicos de la geología. Los estudiantes adquieren un conocimiento general de los procesos geológicos que ocurren en la naturaleza, que han modelado el paisaje y que",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase Magistral T-P (2023215)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "CRISTIAN DAVID BENAVIDES CABRA"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 46,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "Sala Computo SALON VIDEOCONFERENCIA",
        "salon": "224-110D",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023216": {
  "cod": "2023216",
  "codigoSIA": "2023216",
  "nombre": "Introducción a la astronomía",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Estudio básico de la astronomía de posición, por tanto es necesario empezar por el estudio de la astronomía esférica para relacionar las direcciones cambiantes de los cuerpos celestes con sus posiciones sobre la superficie de la denominada esfera celeste",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023216)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Eduard Alexis Larrañaga Rubio",
       "DAVID FELIPE BAMBAGUE SICHACA"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Eduard Alexis Larrañaga Rubio",
       "DAVID FELIPE BAMBAGUE SICHACA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023217": {
  "cod": "2023217",
  "codigoSIA": "2023217",
  "nombre": "Objetos astrofísicos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Estudio básico de los objetos astrofísicos relevantes que se encuentran en el estudio del espacio profundo, tales como estrellas, nebulosas, cúmulos estelares (galácticos, globulares) y galaxias. Al final introduciremos algunos observables astrofísicos de",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2023217 (2023217)",
    "grupos": [
     {
      "grupo": "Grupo 01",
      "codigoGrupo": "1",
      "profesores": [
       "Benjamin Calvo Mozo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023218": {
  "cod": "2023218",
  "codigoSIA": "2023218",
  "nombre": "Mecánica celeste",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso constituye una introducción a los principios de la mecánica celeste clásica. El objetivo es visualizar la forma de resolver problemas dinámicos con fuerte inclinación hacia el movimiento de objetos que conforman el sistema solar. Hay un énfas",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2023218 (2023218)",
    "grupos": []
   }
  ]
 },
 "2023240": {
  "cod": "2023240",
  "codigoSIA": "2023240",
  "nombre": "Lengua Inga",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Dar a conocer la existencia de los pueblos indígenas dentro del contexto de diversidad sociocultural de nuestro país, y su importancia histórica y permanencia actual. Desarrollar habilidades comunicativas de los estudiantes en Relación a la lengua indígen",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023240)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Francelina Muchavisoy Becerra"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 406",
        "salon": "212-406",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 406",
        "salon": "212-406",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023241": {
  "cod": "2023241",
  "codigoSIA": "2023241",
  "nombre": "Lengua y Cultura Wayuu I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El pueblo Wayuu, de ascendencia arawak. Localizado en la península de la Guajira. Históricamente, los españoles nunca lograron subyugar a este pueblo, que se mantuvo independiente, a pesar de haber sufrido el trabajo forzado en las explotaciones de bancos",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023241)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Rafael Segundo Mercado Epieyu"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023242": {
  "cod": "2023242",
  "codigoSIA": "2023242",
  "nombre": "Uitoto I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Dentro de los países del continente suramericano, Colombia ocupa una posición privilegiada por la gran variedad de lenguas indígenas que se hablan en su Territorio. El curso de uitoto I pretende ahondar tanto en conceptos de tipo lingüísticos, fonológicos",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023242)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Norberto Farekatde Maribba"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 406",
        "salon": "212-406",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Norberto Farekatde Maribba"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023243": {
  "cod": "2023243",
  "codigoSIA": "2023243",
  "nombre": "Uitoto II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso de Lengua Uitoto II es la continuación de la enseñanza impartida en el curso de Uitoto I. Se hace énfasis en los componentes lingüísticos, culturales y comunicativos. En este nivel, el estudio se sigue presentando a través de los pequeños textos",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023243)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Norberto Farekatde Maribba"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 112",
        "salon": "212-112",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 112",
        "salon": "212-112",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Norberto Farekatde Maribba"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA 212",
        "salon": "212-212",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023474": {
  "cod": "2023474",
  "codigoSIA": "2023474",
  "nombre": "Línea de Profundización GENÉTICA HUMANA I",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La profundización en los diferentes aspectos de la GENÉTICA es una necesidad y un imperativo en la formación del médico y de los profesionales de las diferentes áreas de la salud. Nuevos paradigmas se constituyen alrededor de los conocimientos de la moder",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRÁCTICA (2023474)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Humberto Arboleda Granados"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 8,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "13:00",
        "fin": "15:00",
        "lugar": "SALON DE CLASE",
        "salon": "426-203",
        "edificio": "426 - Instituto de Genética",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023541": {
  "cod": "2023541",
  "codigoSIA": "2023541",
  "nombre": "Analisis y procesamiento de alimentos i",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Asignatura que ofrece el Instituto de Ciencia y Tecnología de Alimentos - ICTA a estudiantes de las carreras de: Ingeniería Química, Ingeniería Agrícola, Ingeniería Industrial, Ingeniería Agronómica, Biología, Química, Farmacia y Nutrición y Dietética.\n\nCon los objetivos de:\n1. Revisar y conocer la composición química de los alimentos.\n2. Conocer parámetros químicos, físicos, microbiológicos y sensoriales para evaluar la calidad de los alimentos.\n3. Estudiar las diferentes técnicas de análisis fisicoquímicos y microbiológicos para evaluar la calidad de los alimentos.\n4. Conocer las operaciones básicas de procesamiento tecnológico de alimentos.\n\nConceptos Previos: 1. Conceptos básicos de química de alimentos.\n2. Metodologías de análisis y procesamiento de alimentos.\n3. Conceptos básicos de gestión de calidad en la Industria Agroalimentaria.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2023541",
    "grupos": []
   }
  ]
 },
 "2023542": {
  "cod": "2023542",
  "codigoSIA": "2023542",
  "nombre": "Analisis y procesamiento de alimentos ii",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este es el programa de la asignatura Análisis y Procesamiento de Alimentos II, que ofrece el ICTA a la Carrera de Nutrición y Dietética, dentro de la Línea de Profundización en Análisis y Procesamiento de Alimentos. El objetivo de esta línea es formar es",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2023542",
    "grupos": [
     {
      "grupo": "GRUPO 1 - 2023542",
      "codigoGrupo": "1",
      "profesores": [
       "Hector Suarez Mahecha"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023621": {
  "cod": "2023621",
  "codigoSIA": "2023621",
  "nombre": "Señalizacion intracelular i",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se dan unos conocimientos básicos sobre el funcionamiento del sistema inmune innato y adaptativo. Se estudian aspectos de la señalización intracelular en células del sistema inmune. Se hace especial énfasis en linfocitos T y B. Se estudian aspectos del re",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023621)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jean Paul Vernot Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE",
        "salon": "471-518",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023912": {
  "cod": "2023912",
  "codigoSIA": "2023912",
  "nombre": "Cambio Cultural y Desarrollo Social",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El punto de partida del curso será \"\"la deshumanización del ser humano\"\" y cómo la antropologíia (y la arqueología), llamada en sus orígenes a contribuir en su supresión para lograr de nuevo la humanización, al reducirse a etnografía y centrar su preocupaci",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "BTA -01 - HELEN HENDERSO",
    "grupos": []
   }
  ]
 },
 "2023915": {
  "cod": "2023915",
  "codigoSIA": "2023915",
  "nombre": "El niño, sus síntomas y el inconsciente",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso recorrerá diversos aspectos relacionados con el niño. A partir de la significación de la infancia en la historia social y subjetiva, situaremos su función en el entramado inconsciente, reconociendo las complejidades que ello implica. Por esa vía pasaremos luego a relacionar al niño y al inconsciente con el campo de sus actividades para virar luego a la dinámica de los síntomas, para reconocerlos como mensajes cifrados de sufrimientos acallados y de goces desplegados. Ubicar al niño en su cotidianidad, en sus diversos encuentros con el Otro, en sus experiencias vitales con sus múltiples formas de expresión, permitirá enriquecer el análisis y contextualizar el campo de los síntomas.\n\nFreud se encontró con el niño en sus pacientes adultos. Al dejarlos hablar surgió su infancia y sus relaciones iniciales, tomando prioridad la vida infantil en la organización inconsciente. El sentido del psicoanálisis es el inconsciente y éste, lo sabemos, es siempre niño, infantil. El psicoanálisis inicialmente quedó proscrito para los niños y aunque Freud vislumbró la posibilidad de utilizarlo en el trabajo con pequeños, al animar al padre de Juanito en el tratamiento a su hijo, fueron otros quienes abrieron esa vía y formalizaron su conceptualización.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023915)",
    "grupos": [
     {
      "grupo": "GRUPO 1 (2023915)",
      "codigoGrupo": "1",
      "profesores": [
       "Alvaro Daniel Reyes Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2023919": {
  "cod": "2023919",
  "codigoSIA": "2023919",
  "nombre": "La clínica del caso",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La clínica es siempre un encuentro con lo particular. Pero esta particularidad no es transmisible como lo pueden ser otras experiencias clínicas, porque no logra constituirse en saber articulado sin disolver en el intento dicha particularidad. Esto tiene una sola razón: se trata de una experiencia caracterizada por el hecho de que hay un sujeto que toma la palabra.\nEn este sentido, lo particular es lo que sustenta el edificio teórico pero al mismo tiempo y fundamentalmente es lo que objeta, cuestiona, interroga, lo universal. Lo cual es cierto para las ciencias en general [Puede leerse esto en Thomas Khun, La estructura de las revoluciones científicas].\nTambién en el psicoanálisis, el caso, es decir cada caso, se erige como objeción e interrogante de la teoría. Puede leerse esto al revisar los llamados Cinco grandes casos de Sigmund Freud (por algo se dice a veces que son cinco grandes fra-casos, aun cuando esto se afirme las más de las veces cuando se quiere salir rápido del molesto psicoanálisis sin conocerlo. Esto tiene que ver entonces con que cada uno de dichos casos se opone en un punto al menos a servir de ejemplo, a convertirse en el de mostrar y en la demostración.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2023919)",
    "grupos": [
     {
      "grupo": "Grupo 1 - 2023919",
      "codigoGrupo": "1",
      "profesores": [
       "Alvaro Daniel Reyes Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024006": {
  "cod": "2024006",
  "codigoSIA": "2024006",
  "nombre": "Muerte, duelo y venganza",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El ser Humano se constituye como tal en y por la muerte. Esta afirmación se sostiene a pesar de que para él la muerte constituye un límite, o más radicalmente, ella es el límite por excelencia. La paradoja es que si bien ella es el límite, también requiere de uno que la contenga, o mejor, que la bordee a ella misma. Todo el ejercicio de la cultura se podría resumir en su intento por poner límite a la muerte, desde el no matarás, (curiosamente solidario del origen del lenguaje a pesar de que la palabra, según Hegel, es la muerte de la cosa), hasta el no yacerás con tu padre o con tu madre, pasando por todas las modalidades del duelo, los rituales funerarios, el dolor de los deudos, y todos los esfuerzos y modalidades por mantener espacios para la inmortalidad.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024006)",
    "grupos": [
     {
      "grupo": "GRUPO 1 (Muerte, duelo y venganza - 2024006)",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Alejandra Tapia Millan"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 55,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024008": {
  "cod": "2024008",
  "codigoSIA": "2024008",
  "nombre": "Psicoanálisis, sujeto y problemáticas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo de esta asignatura es plantear un acercamiento a la articulación entre: Psicoanálisis, Sujeto, y problemáticas contemporáneas, partiendo de la lectura del concepto freudiano-lacaniano de goce, y su posible relación con lo que el mismo Lacan desarrollaría posteriormente con respecto a la formalización de su teoría de los discursos. La hipótesis, se centra, en la idea de que el cambio de un discurso a otro, implica, entre tantos otros aspectos, un viraje en el tratamiento del goce.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024008)",
    "grupos": []
   }
  ]
 },
 "2024124": {
  "cod": "2024124",
  "codigoSIA": "2024124",
  "nombre": "Sensibilidad y pensamiento cinematografico",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito es estudiar las relaciones de fondo existentes entre la reflexión, la crítica y la teoría cinematográficas con la creación, partiendo de planteamientos hechos por una serie de autores-directores, críticos y teóricos. Se analizarán estos plant",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024124)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Juan Diego Antonio Pablo Caicedo Gonzalez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 130,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "26/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024149": {
  "cod": "2024149",
  "codigoSIA": "2024149",
  "nombre": "Bioinvasiones",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las especies exóticas o invasoras, son especies introducidas en un hábitat no nativo como resultado de las actividades humanas.\nAlgunas de las especies exóticas se establecen en el nuevo ambiente y pueden causar cambios mayores en el ecosistema y su funcionamiento. Las especies exóticas son ahora consideradas la segunda amenaza más grave, después la destrucción de hábitat, a la biodiversidad.\nEste curso está basado en clases magistrales, dictadas por los docentes, y lecturas y revisión de temas relacionados por parte de los estudiantes, y fomentará en los estudiantes la investigación crítica sobre los aspectos ecológicos relacionados a las especies invasoras, incluyendo:\n1. Que son las especies invasoras\n2. Factores que influencian el proceso de invasión\n3. Vectores de invasión en ambientes terrestres y acuáticos\n4. Los impactos económicos y ecológicos de las invasiones biológicas\nEsto se logrará con discusiones de publicaciones selectas que enfatizan los aspectos ecológicos de las invasiones biológicas.\n\nLos objetivos de la asignatura son:\n1. Familiarizar al estudiante con el problema de las bioinvasiones\n2. Analizar los diferentes mecanismos de dispersión de las especies invasoras\n3. Analizar las características de las especies invasoras y de los hábitats que pueden facilitar una invasión.\n4. Sensibilizar los estudiantes en el tema de las bioinvasiones como problema de conservación de la biodiversidad.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2024149 (2024149)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Swanni Tatiana Alvarado Romero",
       "Brigitte Gavio ",
       "Carlos Eduardo Sarmiento Monroy"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "AULA TEORICA",
        "salon": "421-142B",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024221": {
  "cod": "2024221",
  "codigoSIA": "2024221",
  "nombre": "Nasa yuwe y pensamiento nasa",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"¿ Abordar las reglas básicas que tiene el nasa yuwe a fin de lograr un nivel básico para el diálogo.\n\n¿ Desarrollar un nivel básico de las competencias comunicativas básicas como: los saludos, descripción familiar y expresiones del espacio.\n\n¿ Comprender la importancia que tiene el nasa yuwe para el pueblo nasa en su propósito por fortalecerlo y recuperarlo.\n\n¿ Conocer los principales elementos que forman parte de la cosmovisión y cosmogonía del pueblo nasa a través de su lengua.\n\"",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024221)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "ISAAC QUILCUE PUMBA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 406",
        "salon": "212-406",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024279": {
  "cod": "2024279",
  "codigoSIA": "2024279",
  "nombre": "Agujeros negros y maquinas del tiempo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"Puede verse un agujero negro? Si se puede, como luce un agujero negro? Acaso es negro? Que se siente caer a un agujero negro? Que es un agujero de gusano? Es posible construir una maquina paraviajar en el tiempo? El curso ¿Agujeros Negros Maquinas dell Tiempo¿ permite contestar a estas y otras preguntas utilizando calculo elemental.\nA lo largo de este curso se presenta una imagen física y astronómica (pero casi sin matemáticas) de los trabajos de Relatividad de Einstein y sus aplicaciones a los agujeros negros, los agujeros de gusano y el viaje en el tiempo.\nDos objetivos principales se buscan con esta asignatura: primero, el desmistificar los agujeros negros y la naturaleza del espacio-tiempo, con el fin de que el estudiante evalúe críticamente la referencias frecuentes que se realizan acerca de estos conceptos en los medios audiovisuales y en la literatura de ciencia ficción. Segundo, se pretende dar al estudiante un vistazo a la forma en la que se conciben y desarrollan las teorías científicas.\n\"",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024279)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Eduard Alexis Larrañaga Rubio"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "413-116",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024401": {
  "cod": "2024401",
  "codigoSIA": "2024401",
  "nombre": "LE FILOSOFIA MODERNA",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024401)",
    "grupos": []
   }
  ]
 },
 "2024461": {
  "cod": "2024461",
  "codigoSIA": "2024461",
  "nombre": "Situación del derecho a la seguridad alimentaria y nutricional en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El análisis de la Seguridad Alimentaria y Nutricional, evolucionó desde el componente alimentario que comprendía la disponibilidad y el acceso de alimentos a una visión compleja de la SAN que incorpora el consumo, aprovechamiento biológico y la calidad e inocuidad de los alimentos actuando de manera sinérgica con factores económicos, sociales, culturales y del ambiente. Las Encuestas Nacionales de Demografía y Salud, ENDS, al igual que la Encuesta Nacional de Situación Nutricional, ENSIN, han logrado mostrar al país los diferenciales en SAN presentes en razón del área geográfica ocupada, la situación a nivel regional y/o departamental, el nivel educativo y de riqueza y la pertenencia étnica. Hoy, el concepto de Seguridad Alimentaria y Nutricional incorpora el enfoque de derechos puesto que parte de la ¿Declaración Universal de los Derechos Humanos¿(1948), donde se suscribe el derecho al alimento como eje central del bienestar humano y da cuenta de complejidades y nuevas dimensiones de la SAN (ambiental y humana).\nPor tanto, el curso aborda la conceptualización del enfoque de derechos, la seguridad alimentaria y nutricional, el sistema agroalimentario, sus componentes y los factores determinantes, las problemáticas que afectan cada componente y sus potencialidades, el desarrollo de la agroindustria, la relación con el ambiente, y otros aspectos que permiten comprender la permanente relación entre desarrollo, ambiente, agricultura y seguridad alimentaria y nutricional desde un enfoque sistémico. El conjunto de estos elementos permitirá adquirir habilidades para la reflexión y análisis del derecho a la seguridad alimentaria y nutricional en Colombia.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024461)",
    "grupos": []
   }
  ]
 },
 "2024476": {
  "cod": "2024476",
  "codigoSIA": "2024476",
  "nombre": "SEXUALIDAD HUMANA",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"Asignatura teórica que estudia la sexualidad como proceso integral, donde interactúan aspectos biológicos, psicológicos y sociales.\nComprende varias unidades que parten de una visión general de la Sexualidad Humana, e incluyen aspectos relacionados con desarrollo de comportamiento sexual, roles, anatomía, fisiología de los órganos sexuales y reproductivos, respuesta sexual y sus alteraciones, orientación sexual, variabilidad de la conducta sexual, participación de enfermería en sexualidad a nivel preventivo, algunos problemas sociales relacionados con la vivencia de la sexualidad.\nOBJETIVO GENERAL:Facilitar el conocimiento de la propia sexualidad y favorecer una actitud comprensiva y responsable frente a la propia sexualidad y a la de los demás.\nOBJETIVOS ESPECIFICOS.\n1. Incrementar la información y conocimientos de la sexualidad\n2. Reconocer los conocimientos aprendidos en las diferentes etapas del desarrollo\n3. Reforzar actitudes positivas que favorecen la salud sexual y mental\n5. Adoptar actitudes de respeto, comprensión y aceptación, que faciliten la comunicación de problemas sexuales.\nLa metodología se orienta básicamente, a favorecer el análisis de las actitudes y sentimientos de los estudiantes ante su propia sexualidad y a clarificar los valores que generan a fin de que la sexualidad pueda ser disfrutada responsablemente\n\n\"",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024476)",
    "grupos": []
   }
  ]
 },
 "2024990": {
  "cod": "2024990",
  "codigoSIA": "2024990",
  "nombre": "El sida como realidad del proceso vital humano",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta propuesta de curso de contexto tiene como objetivo aportar elementos que contribuyan a la comprensión de la infección VIH con motivo de cumplirse el aniversario número treinta de su aparición en el planeta y colaborar con la disminución de su incidencia formando a los jóvenes universitarios como multiplicadores de la propuesta. Se realiza de acuerdo a: Concepciones epistemológicas temáticas, metodológicas y didácticas; Análisis epidemiológico del contexto internacional, nacional y local en relación con el VIH/SIDA; Políticas de salud sexual y reproductiva; Políticas educativas con énfasis pedagógicos y Características de los jóvenes (intereses, necesidades y expectativas). Los ejes temáticos que conducen el curso son: la epidemiología (clásica, clínica y crítica); las teorías de género y las posturas pedagógicas que integran elementos de auto y heteroestructuración con la educación popular de origen latinoamericano. Se estructura como un curso de contexto de 15 sesiones de tres horas cada una y seis de trabajo autónomo semanal. Los temas son: Orígenes y evolución del VIH/SIDA; aspectos epidemiológicos; fisiopatología; identidades masculinas y femeninas; juventud y vulnerabilidad frente al VIH/SIDA; anticipación social del riesgo; estrategias de prevención; mujer y VIH/SIDA; interacción social con personas viviendo con VIH/SIDA, respuesta social frente a la epidemia, perspectivas futurasy escenarios de la epidemia de cara a las próximas décadas.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2024994": {
  "cod": "2024994",
  "codigoSIA": "2024994",
  "nombre": "Nanotecnología y Medicina",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura pretende mostrar una visión del impacto que tiene la nanotecnología en el diagnóstico y tratamiento médico. Los objetivos específicos son: 1. Introducir a los estudiantes en los fundamentos básicos que explican las propiedades de los nanomateriales. 2. Presentar una visión de conjunto sobre el impacto de la nanotecnología a nivel científico, tecnológico, ambiental, social, cultural, etc. 3. Dar una visión general de los tipos de nanodispositivos 4. Mostrar las aplicaciones de la nanotecnología en el diagnóstico y tratamiento médico. 5. Conocer los avances más relevantes de la nanomedicina (cáncer, nanomateriales, administración de medicamentos) . 6. Realizar la lectura, presentación y discusión crítica de un artículo científico. Se desarrollará mediante la realización de sesiones de cineforo, conferencias, conversatorios y clubes de revistas en donde un estudiante presentará un artículo científico y posteriormente se realizará una discusión acerca del mismo en la que participaran todos los estudiantes.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica 82024994)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Aleida Dianey Clavijo Grimaldo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2024999": {
  "cod": "2024999",
  "codigoSIA": "2024999",
  "nombre": "Fiestas populares, carnaval, sociedad y arte",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura busca la interacción entre la comunidad universitaria, y la representación cultural y tradiciones propias de las distintas regiones del país, en las cuales la alegría del pueblo colombiano se percibe en sus fiestas, ferias, carnavales y festivales culturales. Por ende se pretende abordar desde la academia la historia culrural tradicional que aun pervive y busca crear conciencia sobre el patrimonio inmaterial representado en las actividades culturales y tradicionales propias de cada región de nuestro país, teniendo como base principal la diversidad cultural y rituales carnavalescos existentes, ademas permite ¿ Fortalecer la identidad de país desde los aportes de la academia, la práctica cultural, la sana critica y la participación de los protagonistas de estos carnavales o rituales, siempre evocando sus raíces propias de cada región.\n¿ Permitir muestras artísticas propias de cada región y/o festividad de nuestro país en los espacios físicos y académicos de la Universidad Nacional.\n¿ Lograr la conexión en red entre la comunidad universitaria y las distintas entidades o personas comprometidas con el fortalecimiento de estas prácticas culturales.\n¿ Incentivar la participación constante de la academia en el análisis, fortalecimiento y rescate de cada uno de los carnavales objeto de la cátedra.\n¿ Abordar todos los ejes temáticos enfocados en la historia, transformación y pervivencia de los elementos esenciales en cada uno de las festividades y carnavales representativos en nuestro país.\n¿ Enmarcar las influencias extranjeras en el desarrollo y proyección de los carnavales desde sus orígenes hasta nuestros días.\n¿ Incentivar la participación de los diferentes estamentos universitarios en el CARNAVAL UN 2011",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2024999)",
    "grupos": []
   }
  ]
 },
 "2025053": {
  "cod": "2025053",
  "codigoSIA": "2025053",
  "nombre": "Introducción a la cultura coreana",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Sinopsis de la clase\nCorea es un país representativo del Este Asia, con una larga historia y tradiciones ancestrales. Comenzando por el Paleolítico que comenzo hace 700 mil años, y atravesando el Neolítico y la Edad del Bronce, el pueblo coreano fundó una Nación en la Peninsula Coreana y en Manchuria(noroeste de China), haciendo florecer su cultura única hasta el día de hoy. A través de este curso, trataremos la parte de la cultura coreana.\n\nSitio web referencial\nhttp://www.ikorea.ac.kr/\n\nEvaluaciones:\n*Examen medio (30%)\n*Examen final (40%)\n*Asistencia (30%)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2025053 (2025053)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 207",
        "salon": "225-207",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA 104",
        "salon": "212-104",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025063": {
  "cod": "2025063",
  "codigoSIA": "2025063",
  "nombre": "Introducción al viaje espacial",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso Brinda al estudiante un adecuado acercamiento hacia diversidad de aspectos relacionados con la tecnología astronáutica, en particular hacia el desarrollo histórico y los conceptos básicos en física y matemáticas que ayuden a entender el estado actual de desarrollo en ese campo. Se expondrán conceptos básicos de mecánica orbital y de propulsión, a uni nivel en el que se pueda llegar a un mayor número de estudiantes pero sin perder el concepto básico que hay detrás. Estarán invitados algunos conferencistas que han trabajado en distintos tópicos relacionados y se hará uso de recursos extensivos multimedia.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025063)",
    "grupos": []
   }
  ]
 },
 "2025196": {
  "cod": "2025196",
  "codigoSIA": "2025196",
  "nombre": "Introducción a la biología computacional",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La asignatura es de carácter interdisciplinario. Se introducen fundamentos de la ciencias de la computación, las matemáticas aplicadas, la química y la estadística dirigidos hacia el modelamiento y solución de problemas biológicos. Los temas estudiados permiten el desarrollo de competencias básicas en el biocomputo y sus fundamentos. Como usuarios activos, los estudiantes desarrollan habilidades para el diseño y procesamiento de datos biológicos a gran escala. El curso se compone de una parte teórica y de aplicaciones. Los ejemplos utilizados pretenden fortalecer competencias en el manejo de laboratorio in situ y la compresión de sus fundamentos; éstos corresponden a tópicos de genética, evolución, modelaje molecular y ecología entre otros campos de aplicación del biocomputo y las matemáticas aplicadas en la ciencia. Objetivos. 1. Desarrollar habilidades para el trabajo y comprensión de la biología computacional in situ por medio del uso del sistema operativo de redes, algoritmos, programación básica y herramientas computacionales. 2. El enfoque de manejo de datos biológicos y trabajo interdisciplinar pretende fortalecer las destrezas de los estudiantes para comprender preguntas de la biología básica y de punta. Las principaples unidades de estudio son: 1. Introducción a la biología computacional 2. El laboratorio de biocomputo 3. Fundamentos de algoritmos y aplicaciones en bioinformática 4. Fundamentos de programación.\n\nConceptos Previos: Matemáticas básicas",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2025196)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Andrea Tonolli Thomaz",
       "MARYAM CHAIB DE MARES ",
       "Juan David Gonzalez Trujillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025336": {
  "cod": "2025336",
  "codigoSIA": "2025336",
  "nombre": "Electiva en lengua Coreana I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Sinopsis de la clase\nCon la globalización, el mundo se hace más pequeño. En esta época tan rápido, de intercambio de información, tecnología y cultura el entendimiento mutuo entre los países se vuelve crucial para la sobrevivencia en la comunidad internacional. El coreano ha llegado a ser una lengua más que requiere la comunidad internacional. El papel de Corea se extiende más en el foro de la política internacional, la economía internacional y la cultura, de tal manera que la necesidad del coreano ha crecido notablemente. Este curso es bueno para el estudiante que va a empezar el estudio del coreano por primera vez.\n\nLibro didáctico New -1A, 2012 (Sogang Korean New Series 1A)\n\nEvaluaciones:*Examen medio (30%)\n*Examen final (30%)\n*Escritura 1,2 (20%)\n*Asistencia (20%)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025336)",
    "grupos": [
     {
      "grupo": "Grupo 2 - Clase Presencial",
      "codigoGrupo": "2",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AULA 112",
        "salon": "212-112",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 102",
        "salon": "225-102",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025406": {
  "cod": "2025406",
  "codigoSIA": "2025406",
  "nombre": "Apreciación e historia del arte",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso tiene como objeto ofrecer al estudiante un panorama introductorio del arte occidental. En cada sesión y a partir de la interpretación de una o varias obras paradigmáticas del canon del arte occidental, el estudiante tendrá la oportunidad de entrar en contacto con los principales elementos formales y valores estéticos de los diferentes períodos históricos y movimientos artísticos en el ámbito europeo y americano. La discusión se centrará en el por qué, el cómo y el cuando la pintura, escultura, video-arte, etc., al igual que la arquitectura, la fotografia, el cine y la cultura material adquireron y conservaron el estatus de obra artística, al igual que motivaron la toma de posturas y discusiones estéticas aún vigentes,",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025406)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Joanita Jimena Barbosa Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2025419": {
  "cod": "2025419",
  "codigoSIA": "2025419",
  "nombre": "Resistencia a insecticidas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La resistencia a insecticidas es una limitante importante en el manejo integrado de insectos de interés económico. Esta aparece por factores genéticos, biológico/ecológicos y operacionales. El conocimiento del tipo de moléculas, modo de acción, mecanismos de resistencia, vigilancia de la resistencia a insecticidas en poblaciones naturales, entre otros, son aspectos fundamentales para el control de insectos. Esta asignatura se propone como complementaria a \"Genética de Insectos de Interes Económico\" y a las básicas del plan de Ingeniería Agronómica como son Manejo Integrado e Plagas y Ciclo II: Ejecución de un proyecto productivo. Este curso es fundamental para un uso racional de insecticidas en el contexto de las buenas prácticas agrícolas y la mitigación de su impacto en el ambiente. La asignatura puede ser tomada por estudiantes de biología, veterinaria y otras áreas afines. La asignatura es teórica enfocada a definir conceptos enmarcados en estudios de caso a través de la revisión de literatura (Revistas científicas indexadas), seminarios, talleres, etc.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA(202419)",
    "grupos": []
   }
  ]
 },
 "2025432": {
  "cod": "2025432",
  "codigoSIA": "2025432",
  "nombre": "Biología de reptiles escamados",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "En Colombia la diversidad de los lagartos escamados, es decir lagartijas, serpientes y anfisbénidos, es muy alta al igual que el desconocimiento de sus características biológicas. Este curso tiene como objetivo explicar los conceptos básicos sobre la biología de este grupo y profundizar en los temas actuales de discusión sobre los Squamata. Al finalizar el curso el estudiante podrá reconocer los principales grupos taxonómicos dentro de Squamata, entender su evolución, y finalmente interpretar aspectos relacionados con su morfología, historia de vida, biología reproductiva, ecología y comportamiento. La dinámica del curso involucra la lectura, exposición y discusión de artículos y sesiones prácticas de laboratorio, así como el planteamiento y desarrollo de una pregunta de investigación relacionada con la temática del curso.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025432)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "ADRIANA ROCIO JEREZ MARTINEZ",
       "MARTHA LUCIA CALDERON ESPINOSA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025434": {
  "cod": "2025434",
  "codigoSIA": "2025434",
  "nombre": "Mastozoología general",
  "creditos": 3,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Proporcionar los conocimientos básicos acerca de la evolución y biogeografía de mamíferos.\n Proporcionar los conocimientos básicos de la taxonomía, sistemática, distribución y biología de los mamíferos colombianos.\n Proporcionar al estudiante los conocimientos teóricos y prácticos básicos para el trabajo en campo con mamíferos.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025434)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Hugo Fernando Lopez Arevalo",
       "Olga Lucia Montenegro Diaz",
       "Pedro Sanchez Palomino"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 17,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025665": {
  "cod": "2025665",
  "codigoSIA": "2025665",
  "nombre": "Pensamiento fotográfico",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El seminario se propone analizar algunos textos críticos sobre fotografía, antropología y sociología contemporánea, que le ayuden al estudiante a entender la fotografía como una herramienta reflexiva en el mundo de hoy. El estudiante vinculará sus vivencias con la teoría y la historia partir de tres álbumes: familiar, de recorridos y colectivo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025665)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Natalia Gutierrez Echeverry"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON 205 EDIFICIO SINDU",
        "salon": "314-205",
        "edificio": "314 - CINVA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025691": {
  "cod": "2025691",
  "codigoSIA": "2025691",
  "nombre": "Recursos genéticos: aspectos técnicos y jurídicos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los desarrollos científicos y tecnológicos contemporáneos, particularmente en las ciencias biológicas plantean nuevos retos para el análisis y comprensión de procesos que afectan la organización de la vida natural, las nociones básicas de propiedad, contratos, los derechos esenciales de las personas y en general la organización social. Las tecnologías actuales de intervención sobre la materia viva han convertido la biodiversidad y el conocimiento asociado en un insumo de primer orden para el desarrollo de numerosos compuestos utilizados en diferentes procesos por las industrias farmacéuticas y alimentarias.\nLa riqueza biológica y cultural de Colombia impone estudiar detenidamente las instituciones y mecanismos de protección, al igual que examinar los mecanismos de distribución y administración de beneficios de manera que su utilización sostenible redunde en un mayor bienestar social.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025691)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Oscar Andres Lizarazo Cortes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "AUDITORIO 101",
        "salon": "610-101",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025814": {
  "cod": "2025814",
  "codigoSIA": "2025814",
  "nombre": "Electiva en lengua Coreana II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se recomienda haber cursado la asignatura \"Electiva en lengua Coreana I - 2025336\" o tener bases de lenguaje coreano, ya que la presente asignatura se ofrece para afianzar los conocimientos en esta lengua.\n\nLa asignatura Coreano Elemental presenta los aspectos básicos de la conversación y la gramática del lenguaje coreano, está orientada a los estudiantes que desean aumentar sus conocimientos en este idioma. Con este curso se espera que el estudiante adquiera las competencias y herramientas lingüísticas sobre el idioma para desenvolverese en espacios y situaciones cotidianas.\n\nA tráves de esta asignatura, se abordarán temas que permitan al estudiante expresarse haciendo uso del tiempo futuro, expresar sus deseos y voluntades, generar sugerencias y proposiciones, entre otras cosas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025814)",
    "grupos": [
     {
      "grupo": "Electiva en Lengua Coreana II",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON 205",
        "salon": "225-205",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025976": {
  "cod": "2025976",
  "codigoSIA": "2025976",
  "nombre": "Desarrollo de la ingeniería en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Para los estudiantes de la Universidad Nacional - y en especial para los estudiantes de la Facultad de Ingeniería - es muy importante tener un panorama histórico de lo que ha sido el desarrollo de la tecnología y de la ingeniería en el mundo y dentro de él ubicar el desarrollo que han tenido la ingeniería y la tecnología en nuestro país. Este curso presenta la Historia de la Tecnología y de la Ingeniería de una forma general y sucinta a estudiantes en los cuales no se presupone ninguna formación de nivel universitario anterior. Se busca que a través de lecturas, discusiones, trabajos escritos, exposiciones y asistencia a conferencias  acerca de lo que ha sido la Historia de la Tecnología y la Ingeniería - el estudiante clarifique sus conceptos con respecto a lo que son ciencia, tecnología e ingeniería, en un contexto general y particularmente en el contexto nacional. Esta clarificación irá pareja con una ampliación y estructuración de su conocimiento sobre la historia del desarrollo social, económico, cultural y político de Colombia, vista desde el desarrollo de la tecnología. Se hará un especial énfasis en el proceso de conformación del conocimiento en ingeniería en el país, especialmente a través de los primeros 150 años de historia de la Facultad de Ingeniería de la Universidad Nacional en Bogotá.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025976)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Antonio Jose Mejia Umaña"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-305",
        "salon": "454-305",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-305",
        "salon": "454-305",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2025981": {
  "cod": "2025981",
  "codigoSIA": "2025981",
  "nombre": "Introducción a la cultura contemporánea de alemania",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso ofrece una introducción a la cultura contemporánea alemana. Se presentan debates actuales de la cultura (literatura, cine, arte, etc.), de la política y de la vida social en Alemania. Se enfocan los importantes temas de la actualidad que se presentan en las discusiones públicas en cultura, política y medios alemanes.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025981)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Introducción a la cultura Contemporanea Alemana",
      "codigoGrupo": "1",
      "profesores": [
       "Mathias Diederich "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": []
     },
     {
      "grupo": "Grupo 2 - Introducción a la cultura Contemporanea Alemana",
      "codigoGrupo": "2",
      "profesores": [
       "Mathias Diederich "
      ],
      "facultad": "FACULTAD DE CIENCIAS HUMANAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2025997": {
  "cod": "2025997",
  "codigoSIA": "2025997",
  "nombre": "Filosofía contemporánea II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025997)",
    "grupos": []
   }
  ]
 },
 "2025999": {
  "cod": "2025999",
  "codigoSIA": "2025999",
  "nombre": "Filosofía contemporánea I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La filosofía de la mente es una de las líneas principales en la filosofía contemporánea, alrededor de ésta se han dado diversas discusiones en torno a su comprensión y estudio. En el curso se presentarán debates respecto del tema, con especial atención al fenómeno de la conciencia, teniendo en consideración algunas de las propuestas y críticas por tarde de dos ramas representativas de la filosofía contemporánea: postura analítica y fenomenológica. Se presentará inicialmente teorías de la ciencia cognitiva (conductismo lógico, reduccionismo, computacionalismo, monismo anómalo, emergentismo, etc), y se mostrarán algunas razones por las cualespartidarios de una fenomenología de corte husserliana consideran que el tratamiento tradicional dado al fenómeno de la conciencia no es satisfactoria, resaltando la importancia de una conciencia subjetiva, corporizada y animada.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2025999)",
    "grupos": []
   }
  ]
 },
 "2026000": {
  "cod": "2026000",
  "codigoSIA": "2026000",
  "nombre": "Filosofía antigua II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026000)",
    "grupos": []
   }
  ]
 },
 "2026001": {
  "cod": "2026001",
  "codigoSIA": "2026001",
  "nombre": "Filosofía moderna I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026001)",
    "grupos": []
   }
  ]
 },
 "2026002": {
  "cod": "2026002",
  "codigoSIA": "2026002",
  "nombre": "Filosofía moderna II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito de esta asignatura es acercar al estudiante al conocimiento del autor o un tema, sus desarrollos y teorías y la forma en la cual inciden en la reflexión filosófica. El curso podrá enfocarse en aspectos puntuales, en obras específicas, en temas particulares o en el detalle de discusiones sostenidas del autor en cuestión con otros autores, o de varios autores con relación al tema de estudio. En general, el profesor estará a cargo de la exposición de los temas, pero otras metodologías serán introducidas dependiendo de los objetivos que se proponga el profesor. El desarrollo del curso provee al estudiante de un conocimiento de primera mano del autor o tema del curso.Los estudiantes recibirán el programa específico de la asignatura al inicio del semestre.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026002)",
    "grupos": []
   }
  ]
 },
 "2026053": {
  "cod": "2026053",
  "codigoSIA": "2026053",
  "nombre": "Fran&ccedil;ais Intensif I - Internationalisation",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Comprendo las ideas principales cuando el discurso es claro y normal y se tratan asuntos cotidianos que tienen lugar en el trabajo, en la escuela, durante el tiempo de ocio, etc. Comprendo la idea principal de muchos programas de radio o televisión que tratan temas actuales o asuntos de interés personal o profesional, cuando la articulación es relativamente lenta y clara. Comprendo textos redactados en una lengua de uso habitual y cotidiano o relacionada con el trabajo. Comprendo la descripción de acontecimientos, sentimientos y deseos en cartas personales.Sé desenvolverme en casi todas las situaciones que se me presentan cuando viajo donde se habla esa lengua. Puedo participar espontáneamente en una conversación que trate temas cotidianos de interés personal o que sean pertinentes para la vida diaria (por ejemplo, familia, aficiones, trabajo, viajes y acontecimientos actuales).Sé enlazar frases de forma sencilla con el fin de describir experiencias y hechos, mis sueños, esperanzas y ambiciones. Puedo explicar y justificar brevemente mis opiniones y proyectos. Sé narrar una historia o relato, la trama de un libro o película y puedo describir mis reacciones.Soy capaz de escribir textos sencillos y bien enlazados sobre temas que me son conocidos o de interés personal. Puedo escribir cartas personales que describen experiencias e impresiones. Al finalizar el programa el estudiante presenta el Examen DALF C1.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026053)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Yenny Esperanza Rodríguez González"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Luz Angela Segura Barrero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA",
        "salon": "311-304",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 406-227",
        "salon": "406-227",
        "edificio": "406 - Carlos Alfonso Cortés Amador",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-407",
        "salon": "453-407",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON 301",
        "salon": "564-301",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "MARYURY USECHE LEÓN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE",
        "salon": "401-105",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON 303",
        "salon": "564-303",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026054": {
  "cod": "2026054",
  "codigoSIA": "2026054",
  "nombre": "Inglés Intensivo I (Intensive English I)",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Entender las ideas principales de textos complejos de su campo de especialización. Relacionarse con hablantes nativos con cierto grado de fluidez y naturalidad.Producir textos claros y detallados sobre temas diversos. Defender su punto de vista sobre temas generales. Al finalizar el curso el estudiante presenta el (PET) Preliminary English Test que corresponde al nivel intermedio B1 del CEFR.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026054)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Jenny Alejandra Acosta Reyes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "PROG. DE EDUC.CONTINUADA",
        "salon": "310-201",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Jenny Alejandra Acosta Reyes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-202",
        "salon": "454-202",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Karen Dayana Rodriguez Castaneda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-307",
        "salon": "454-307",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-202",
        "salon": "454-202",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Karen Dayana Rodriguez Castaneda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "SENDA VALENTINA MARÍA GARCÍA CASTAÑO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-202",
        "salon": "401-202",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-306",
        "salon": "401-306",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "ADRIANA DE LOS ANGELES QUINTERO ORJUELA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-102",
        "salon": "401-102",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "SENDA VALENTINA MARÍA GARCÍA CASTAÑO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-407",
        "salon": "453-407",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "ADRIANA DE LOS ANGELES QUINTERO ORJUELA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE",
        "salon": "401-105",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-202",
        "salon": "401-202",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026055": {
  "cod": "2026055",
  "codigoSIA": "2026055",
  "nombre": "Inglés Intensivo II (Intensive English II)",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Entender textos complejos relacionados con temas tanto concretos como abstractos, de carácter técnico en su campo especialización. Relacionarse con hablantes nativos con grado suficiente de fluidez y naturalidad, de modo que la comunicación se realice sin esfuerzo por parte de los interlocutores. Producir textos claros y detallados sobre temas diversos. Defender su punto de vista sobre temas generales, indicando pros y contras. Al finalizar el curso el estudiante presenta el (FCE) First Certificate in English que corresponde al nivel intermedio alto B2 del CEFR.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026055)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Roger Barragan Fonseca"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "OLGA INES GOMEZ VILLEGAS"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-208",
        "salon": "454-208",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Laura Alejandra Guerrero Calderon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-202",
        "salon": "454-202",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AULA TEORICA",
        "salon": "471-222B",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 453-307 (SALA TIC)",
        "salon": "453-307",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Gustavo Garzon Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA",
        "salon": "311-201",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALÓN DE CLASE",
        "salon": "401-105",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Juan Diego Galvez Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA",
        "salon": "311-102",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-313",
        "salon": "453-313",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 7",
      "codigoGrupo": "7",
      "profesores": [
       "Laura Alejandra Guerrero Calderon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE - NO DISPONIBLE PARA EL RESTO DE LA UNIVERSIDAD",
        "salon": "471-116",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE",
        "salon": "401-105",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 8",
      "codigoGrupo": "8",
      "profesores": [
       "Juan Diego Galvez Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-202",
        "salon": "401-202",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "31/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "31/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "31/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-206",
        "salon": "401-206",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "31/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026056": {
  "cod": "2026056",
  "codigoSIA": "2026056",
  "nombre": "Inglés Intensivo III (Intensive English III)",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Comprender variedad de textos extensos, con cierto nivel de exigencia, reconocer sentidos implícitos. Expresarse fluida y espontáneamente y con expresión adecuada. Hacer uso flexible y efectivo del idioma para fines sociales, académicos y profesionales. Puede producir textos claros, estructurados y detallados sobre temas complejos mostrando correcto uso de mecanismos de organización, articulación y cohesión del texto. Al finalizar el curso el estudiante presenta el (CAE) Certificate of Advanced English que corresponde al nivel avanzado C1 del CEFR.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026056)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "MARTIN FELIPE SUAREZ GUARIN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-307",
        "salon": "454-307",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-208",
        "salon": "454-208",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "MARTIN FELIPE SUAREZ GUARIN"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON",
        "salon": "471-112",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE 303",
        "salon": "500-303",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE - GEOCIENCIAS",
        "salon": "224-216",
        "edificio": "224 - Manuel Ancizar",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Camilo Andres Saldaña Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-311",
        "salon": "453-311",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 5",
      "codigoGrupo": "5",
      "profesores": [
       "Camilo Andres Saldaña Diaz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 6",
      "codigoGrupo": "6",
      "profesores": [
       "Lina Beatríz Barrero Molina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-103",
        "salon": "453-103",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-307 (SALA TIC)",
        "salon": "453-307",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026057": {
  "cod": "2026057",
  "codigoSIA": "2026057",
  "nombre": "Intensive english I - Internationalization",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Comprender variedad de textos extensos, con cierto nivel de exigencia, reconocer sentidos implícitos. Expresarse fluida y espontáneamente y con expresión adecuada. Hacer uso flexible y efectivo del idioma para fines sociales, académicos y profesionales. Puede producir textos claros, estructurados y detallados sobre temas complejos mostrando correcto uso de mecanismos de organización, articulación y cohesión del texto. Al finalizar el curso el estudiante presenta el (CAE) Certificate of Advanced English que corresponde al nivel avanzado C1 del CEFR",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026057)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Andres Felipe Mican Castiblanco"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-206",
        "salon": "454-206",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Diego Andres Rincón Beltrán"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-313",
        "salon": "453-313",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-101",
        "salon": "401-101",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-303",
        "salon": "453-303",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE",
        "salon": "471-507",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026058": {
  "cod": "2026058",
  "codigoSIA": "2026058",
  "nombre": "Intensivkurs Deutsch I - Internationalisierung",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Comprendo las ideas principales cuando el discurso es claro y normal y se tratan asuntos cotidianos que tienen lugar en el trabajo, en la escuela, durante el tiempo de ocio, etc. Comprendo la idea principal de muchos programas de radio o televisión que tratan temas actuales o asuntos de interés personal o profesional, cuando la articulación es relativamente lenta y clara. Comprendo textos redactados en una lengua de uso habitual y cotidiano o relacionada con el trabajo. Comprendo la descripción de acontecimientos, sentimientos y deseos en cartas personales.Sé desenvolverme en casi todas las situaciones que se me presentan cuando viajo donde se habla esa lengua. Puedo participar espontáneamente en una conversación que trate temas cotidianos de interés personal o que sean pertinentes para la vida diaria (por ejemplo, familia, aficiones, trabajo, viajes y acontecimientos actuales).Sé enlazar frases de forma sencilla con el fin de describir experiencias y hechos, mis sueños, esperanzas y ambiciones. Puedo explicar y justificar brevemente mis opiniones y proyectos. Sé narrar una historia o relato, la trama de un libro o película y puedo describir mis reacciones.Soy capaz de escribir textos sencillos y bien enlazados sobre temas que me son conocidos o de interés personal. Puedo escribir cartas personales que describen experiencias e impresiones. Al finalizar el programa el estudiante presenta el Zentrale Mittelstufen-prüfung (ZMP)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026058)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Lina Marcela Marañon Zuluaga"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE VIDEO CONFERENCIAS 454-302",
        "salon": "454-302",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Diana Melissa Ospina Beltran"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE - NO DISPONIBLE PARA EL RESTO DE LA UNIVERSIDAD",
        "salon": "471-116",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Oscar David Perdomo Bossa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-305",
        "salon": "401-305",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-317 (SALA TIC)",
        "salon": "453-317",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 130",
        "salon": "500-130",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Nelly Andrea Sanchez Torres"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON SEMICIRCULAR 1",
        "salon": "225-111",
        "edificio": "225 - Rogelio Salmona",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE PARA MAESTRIAS - NO DISPONIBLE PARA EL RESTO DE LA UNIVERSIDAD",
        "salon": "471-431",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 103",
        "salon": "225-103",
        "edificio": "225 - Rogelio Salmona",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-309 (SALA TIC)",
        "salon": "453-309",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-202",
        "salon": "401-202",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "31/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026065": {
  "cod": "2026065",
  "codigoSIA": "2026065",
  "nombre": "Portugu&ecirc;s Intensivo I - Internacionaliza&ccedil;&atilde;o",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Objetivos: Entender textos complejos relacionados con temas tanto concretos como abstractos, de carácter técnico en su campo especialización. Relacionarse con hablantes nativos con grado suficiente de fluidez y naturalidad, de modo que la comunicación se realice sin esfuerzo por parte de los interlocutores. Producir textos claros y detallados sobre temas diversos. Defender su punto de vista sobre temas generales, indicando pros y contras. Al finalizar el curso el estudiante presenta el CELPE-BRAS, Certificado de Profici&ecirc;ncia em Língua Portuguesa para Estrangeiros, desarrollado por el Ministerio de Educación de Brasil y es el único certificado de suficiencia en portugués reconocido oficialmente por el Gobierno de Brasil. Mide las habilidades de escucha, habla, lectura y escritura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026065)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Laura Vivian Gutierrez Perez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-305",
        "salon": "454-305",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-113",
        "salon": "453-113",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Daniela Viola "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "AULA",
        "salon": "311-103",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026204": {
  "cod": "2026204",
  "codigoSIA": "2026204",
  "nombre": "Comunicación, arte y educación",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Nos permitiremos en el transcurso de esta asignatura visualizar una sensibilidad cambiante y las distintas formas de acceso al saber, además todo lo que anuncie prácticas sociales nuevas y así mismo diferentes modos de pensar, esta realidad nos aboca a reconocer la presencia y el reconocimiento de nuevas subjetividades. Desarrollaremos una temática relacionada con la comunicación, el arte y la educación, analizando los problemas y las transformaciones que auspician en el panorama actual.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE SEMINARIO (2026204)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Ramon Elberto Uribe Galves"
      ],
      "facultad": "FACULTAD DE ARTES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TALLER PINTURA EN EL ESPACIO",
        "salon": "301-103",
        "edificio": "301 - Bellas Artes",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "TALLER PINTURA EN EL ESPACIO",
        "salon": "301-103",
        "edificio": "301 - Bellas Artes",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026205": {
  "cod": "2026205",
  "codigoSIA": "2026205",
  "nombre": "Derecho urbanistico colombiano",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se orienta a la comprensión desde el derecho, de la dinámica urbana (vivienda, medio ambiente, espacio público, suelo, propiedad, movilidad) y el análisis e identificación de las aspiraciones del sistema urbanístico colombiano, a través de las herramientas de planeación el uso y gestión del suelo y el control urbanístico; sus rasgos y complejidades a partir del ciudadano con su entorno.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Isaías Peña Porras"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "Salon 610-313",
        "salon": "610-313",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026274": {
  "cod": "2026274",
  "codigoSIA": "2026274",
  "nombre": "Bogotá musical internacional",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La música, el arte por excelencia, es de gran importancia no sólo a nivel cultural, sino también social . Ésta brinda al individuo herramientas que fomentan la creatividad, la disciplina, el pensamiento lógico, la coordinación, la concentración y el trabajo en equipo entre otros; elementos que son parte fundamental en la formación de personas productivas capacitadas para aportar en la construcción continua de una mejor sociedad.\n\nLa cátedra Bogotá Musical Internacional estará integrada por 12 sesiones cada una de ellas compuesta por una conferencia y un concierto; este último forma parte de la programación propia del Conservatorio.\nLos conferencistas -invitados internacionales y docentes- tratarán el contexto cultural e histórico del repertorio desarrollado y actuarán como solistas o formarán parte de una agrupación musical junto con los estudiantes del Conservatorio, interpretando las obras musicales según la temática de la sesión.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026274)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Angela Ines Simbaqueba Gutierrez",
       "GUERASSIM VORONKOV "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "17:00",
        "fin": "20:00",
        "lugar": "AUDITORIO LEON DE GREFF",
        "salon": "104-100",
        "edificio": "104 - Auditorio Leon de Greiff",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026433": {
  "cod": "2026433",
  "codigoSIA": "2026433",
  "nombre": "Apreciación e historia del arte: Del barroco al impresionismo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Introducción a las artes visuales (pintura, escultura) y arquitectura del periodo comprendido entre comienzos del siglo XVII y finales del siglo XIX. En e curso se examinarán obras representativas del arte barroco, neoclasico, romantico y las tendencias de fin de siglo surgidas en Europa. se tratará tambien de las repercusiones de estas tendencia en America latina y su desarrollo. Se incluirán tambien los antecedentes del surgimiento de nuevas formas artisticas como el diseño, la fotografía y el cine.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026433)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Joanita Jimena Barbosa Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 125,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "AUDITORIO 2",
        "salon": "303C-422",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026501": {
  "cod": "2026501",
  "codigoSIA": "2026501",
  "nombre": "Física las grandes ideas que cambiaron al mundo",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es indiscutible la profunda relación entre los avances científicos y el avance de la humanidad hacia niveles de vida nunca observados en la historia de la misma. Este exito ha generado un aislamiento entre la comunidad científica de física y las personas con formación en áreas de ciencias humanas y artes. En este curso se propone la exploración de las grandes ideas que la física ha aportado al conocimiento general de la humanidad, y como estas ideas han cambiado desde nuestra forma de vida, hasta la percepción que tenemos del universo que nos rodea. El curso está dirigido especialmente a estudiantes de las áreas de ciencias humanas y artes, que tengan interés profundizar y actualizar sus conocimientos en física general, haciendo énfasis en mostrar la forma como el mundo, y nuestra visión acerca de él, ha sido transformado de manera radical. El curso hará un uso de matemática básicas, nivel pre-universitario, para su desarrollo.\n\nResumen El curso tendrá una duración de 16 semanas, y estará dirigido principalmente a alumnos de la Universidad Nacional de Colombia que deseen tener conocimientos de los adelantos de la física que han modificado la humanidad. Durante las exposiciones se realizarán experimentos demostrativos para complementar la información dada en el curso, y para algunas secciones se invitarán a expertos en los temas a desarrollar.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA",
    "grupos": [
     {
      "grupo": "Grupo 1 - (VIRTUAL)",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Alejandro Torres Galindo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 500,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026533": {
  "cod": "2026533",
  "codigoSIA": "2026533",
  "nombre": "Beatles y algo más: música, cultura y sociedad (1960-75)",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El objetivo de este curso es examinar desde el punto de vista musicologico el repertorio de música popular producido durante las décadas de los años sesenta y setenta del siglo XX. Dentro del contexto social, cultural y político de este momento se examinarán obras musicales (y de teatro musical) fundamentales para entender el gran impacto que tuvo en su momento y mantiene hasta la actualidad. Los Beatles, Bob Dylan, Juan M. Serrat, Chico Buarque, Sandro y Emerson Lake and Palmer entre muchos otros son los artistas cuyas canciones se considerarán en el curso.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026533)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Egberto Bermudez Cujar"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026611": {
  "cod": "2026611",
  "codigoSIA": "2026611",
  "nombre": "Las industrias creativas y su visión desde el derecho de autor y los derechos conexos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El desarrollo del mundo moderno ha estado enmarcado por el reconocimiento y la importancia de las creaciones del intelecto humano. Dichas creaciones sin duda han sido el motor de la rápida evolución de nuestra sociedad, de ellas devienen fenómenos tan importantes como la divulgación universal de las ideas, la socialización de fenómenos culturales, la industrialización, la automatización, la robotización, etc., razón por la cual desde hace varios siglos los sistemas legales les han brindando una protección jurídica.\n\nLa historia muestra una vertiginosa evolución de esta nueva propiedad, conocida como inmaterial o intelectual, una de cuyas primeras piedras data del estatuto de la Reina Ana en el siglo XVII en el Reino Unido, en virtud del cual se otorgó ciertos derechos a los creadores de las obras literarias como titular sobre creaciones. Rápidamente se logró un mayor nivel de protección a través de la introducción de nuevas formas de transmitir las creaciones artísticas y literarias como con las obras musicales, los mapas, los dibujos, las obras cinematográficas, los diseños e, inclusive, los programas de software.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2026611)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "German Dario Florez Acero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "21:00",
        "lugar": "AULA 208",
        "salon": "610-208",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026630": {
  "cod": "2026630",
  "codigoSIA": "2026630",
  "nombre": "Intercambio académico internacional - II",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se crea código por solicitud de la Vicerrectoría Académica, debe estar autorizado por la Dirección de Relaciones Exteriores DRE para la inscripción de esta asignatura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026630 (2026630)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2026631": {
  "cod": "2026631",
  "codigoSIA": "2026631",
  "nombre": "Intercambio académico internacional - II prórroga",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se crea código por solicitud de la Vicerrectoría Académica, debe estar autorizado por la Dirección de Relaciones Exteriores DRE para la inscripción de esta asignatura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026631 (2026631)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2026688": {
  "cod": "2026688",
  "codigoSIA": "2026688",
  "nombre": "Movimientos juveniles estudiantiles actuales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura busca acercar a los estudiantes a los debates contemporáneos sobre los movimientos juveniles estudiantiles actuales, en el contexto nacional y latinoamericano.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026688 (2026688)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Fabian Rodolfo Acosta Sanchez"
      ],
      "facultad": "FACULTAD DE DERECHO, CIENCIAS POLÍTICAS Y SOCIALES",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 109",
        "salon": "610-109",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 109",
        "salon": "610-109",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026702": {
  "cod": "2026702",
  "codigoSIA": "2026702",
  "nombre": "Derecho agrario",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El Derecho agrario se fundamenta en el estudio de la normatividad que sobre la tenencia de la tierra ha existido en el país desde la colonia aunque haciendo énfasis en la fase modernizante que se inició con la crisis internacional de 1930 la cual abrió paso al llamado modelo de desarrollo basado en la sustitución de importaciones. La ley 200 de 1936 surgió como resultado de las tensiones sociales que acompañaron las transformaciones económicas y políticas asociadas al modelo sustitutivo . Puede decirse que esta norma dio origen al derecho agrario en el país. Pero, significo, tan solo el comienzo de un trasegar normativo oscilante que acompañó los cambios en las políticas agrarias , las cuales, a su vez, eran parte de modificaciones sustanciales en el régimen político. La llamada violencia posterior al magnicidio de Jorge Eliécer Gaitán, el ¿Pacto del Chicoral¿ que cerró las escasas intentonas reformistas de sectores del bipartidismo en los orígenes del Frente Nacional y las transformaciones de la ruralidad asociadas al paramilitarismo con sus secuelas de desesperanza y deplazamiento de las últimas décadas han terminado por producir un derecho agrario fragmentado y una juridicción agraria frágil e ineficaz en muchas regiones del país.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2026702)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Daniel Alberto Libreros Caicedo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AULA 110",
        "salon": "610-110",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026739": {
  "cod": "2026739",
  "codigoSIA": "2026739",
  "nombre": "Fundamentos de gobierno urbano",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Analizar la relación entre la política y las políticas se constituye en un reto para articular teorías y métodos para los estudios urbanos. Se pretende a través de este curso sugerir herramientas teóricas y metodológicas para articular los enfoques sobre la competencia política, los determinantes de los sistemas electoral y de partidos, las características de las formas de gobierno con las explicaciones sobre qué hace el Estado (a través de su aparato y sus representantes gubernamentales), cómo lo hace (a través de qué mecanismos), y a quiénes atiende.\n\nOfrecerá herramientas teóricas y prácticas para entender la interacción dinámica entre los niveles de gobierno (competencias territoriales), los actores e intereses que encarnan las decisiones de gobierno (individuos o grupos), las reglas (formales e informales), así como los mecanismos de intermediación en la definición y resultados de la gestión urbana.\n\nEl curso se estructura en tres grandes bloques: (1) Conceptos de estado y gobierno (aparato gubernamental); (2) Estructura de competencias y distribución territorial del gobierno, con énfasis en Colombia y sus municipios y, (3) Problemas y dilemas de la acción pública municipal: el ejercicio de gobierno urbano.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026739)",
    "grupos": []
   }
  ]
 },
 "2026822": {
  "cod": "2026822",
  "codigoSIA": "2026822",
  "nombre": "Fundamentos de ecologia de ecosistemas",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El ecosistema es un concepto básico en la ecología que ha sido usado de diversas maneras, reconociéndose que son sistemas complejos, que varían de acuerdo a sus componentes, que se organizan jerárquicamente y que son auto-regulados por un gran número de mecanismos de retroalimentación; igualmente el hombre es parte importante de ecosistema por ser su actividad la que ocasiona muchos de sus cambios. Desde la ecología de ecosistemas se ha avanzado en la comprensión de los mecanismos que subyacen a muchos procesos ecológicos y su dinámica temporal (flujos de materia y energía, cadena trófica, productividad, etc.) y el curso introduce al estudiante a los avances en este sentido..\nEl objetivo de este curso es lograr transmitir la importancia de la visión crítica de los sistemas complejos y el uso correcto del concepto de ecosistemas. El curso quiere obtener un mayor entendimiento de los sistemas ecológicos para proporcionar información sobre los problemas ambientales a nivel local, regional y mundial que actualmente se presentan.\nEste curso pretende familiarizar al estudiante con los conceptos y componentes básicos de la ecología de ecosistemas, así como algunos enfoques y aplicaciones de interés actual y ampliar su capacidad de análisis de a partir de una aproximación ecosistémica de los sistemas ecológicos.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2026822)",
    "grupos": [
     {
      "grupo": "Fundamentos de Ecología de ecosistemas",
      "codigoGrupo": "1",
      "profesores": [
       "Swanni Tatiana Alvarado Romero",
       "Jose Camilo Fagua Gonzalez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "13:00",
        "fin": "17:00",
        "lugar": "AULA TEORICA",
        "salon": "421-142B",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026823": {
  "cod": "2026823",
  "codigoSIA": "2026823",
  "nombre": "Fundamentos de ecologia de poblaciones",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Esta asignatura busca ofrecer a los estudiantes conocimientos básicos relacionados con factores que determinan la dinámica de las poblaciones biológicas. Así mismo, implementar el uso de modelos matemáticos y simulaciones para analizar el efecto de diversos factores sobre la dinámica de las poblaciones.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA PRÁCTICA (2026823)",
    "grupos": [
     {
      "grupo": "Grupo 1 - teorica - práctica (salida de campo)",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Argenis Bonilla Gomez",
       "Juan David Gonzalez Trujillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "08:00",
        "fin": "12:00",
        "lugar": "SALON 101",
        "salon": "564-101",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026824": {
  "cod": "2026824",
  "codigoSIA": "2026824",
  "nombre": "Fundamentos de ecologia del paisaje",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "El entendimiento de los patrones, causas y consecuencias de la heterogeneidad espacial es hoy en día uno de los pilares fundamentales para comprender el funcionamiento dinámico del planeta y aportar conocimiento y elementos prácticos para la gestión de los paisajes naturales y antrópicos. La ecología del paisaje se centra en la importancia de la configuración espacial en los procesos ecológicos, el entendimiento de cómo ocurren las relaciones entre patrones y procesos y como estos se modifican con la escala. El objetivo general de este curso es lograr transmitir la importancia de la visión crítica de los sistemas complejos y el uso correcto del concepto de paisaje. El curso proporciona información sobre los problemas ambientales a nivel local, regional y mundial que actualmente se presentan desde una visión de paisaje.\n\nLos objetivos específicos son:\n1.Familiarizar al estudiante con las teorías y marcos conceptuales de la Ecología del Paisaje y la evolución en el concepto de paisaje\n2. Dar a conocer los principales enfoques y aplicaciones de interés actual\n3. Fortalecer y ampliar la capacidad analítica del estudiante desde una perspectiva de análisis espacial de los sistemas ecológicos bajo los conceptos de la ecología del paisaje\n4. Introducir al estudiante al uso básico de técnicas, herramientas y modelos de la ecología del paisaje.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2026824)",
    "grupos": [
     {
      "grupo": "Fundamentos de Ecología del Paisaje",
      "codigoGrupo": "GRUPO1",
      "profesores": [
       "Nelly Rodriguez Erazo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 301",
        "salon": "564-301",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON 301",
        "salon": "564-301",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026834": {
  "cod": "2026834",
  "codigoSIA": "2026834",
  "nombre": "Seminario: Ciudades, industrias y cadenas mercantiles globales",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El propósito más inmediato del curso es el de ofrecer a los estudiantes de las Facultades de la Sede, un conjunto estructurado de instrumentos (mediciones), conceptos y desarrollos teóricos que les posibiliten entender el panorama global de las políticas públicas proindustializantes, tanto las históricas como las actuales. Se analizará el papel del espacio urbano en dichas dinámicas, en especial para algunos sectores sensibles desde la perspectiva de la industria nacional.\n\nEn efecto, los alumnos aprendan: a) a medir las variables a estudiar en un programa de política industrial; b) conocer los centros de pensamientos élites en materia de análisis industrial; c) revisar críticamente la producción de esos centros; d) poder realizar análisis de las ramas industriales, utilizando el método tradicional como también el de Cadenas Mercantiles Globales; e) adelantar investigaciones con rigor matemático sobre el tema en mención.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2026834 (2026834)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Moises Ildefonso Cetre Castillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "10:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026908": {
  "cod": "2026908",
  "codigoSIA": "2026908",
  "nombre": "Construyendo el paisaje",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se trata de una asignatura de libre elección participativa abierta a todos los estudiantes de pregrado de la Universidad Nacional interesados en la reflexión y creación poética en torno a las nociones de paisaje.\nCon un deseo vivo de participar desde el arte, por un estado de conciencia más sensible con nuestro entorno, este curso ofrece una introducción a los principios de observación, análisis y aproximación plástica sobre las ideas en torno al paisaje, primero desde la disciplina del estudiante, seguida por una exploración individual o colectiva sustentada en las prácticas artísticas.\nUna aproximación al término del paisaje, desde distintas perspectivas y con una aproximación sobre distintas problemáticas contemporáneas en torno a él, y sus formas de representación, será implementada en esta asignatura. A través de revisiones de la historia del arte, lecturas y discusiones, presentaciones, salidas de campo, visitas a talleres de artistas y galerías, profesores invitados de la carrera de artes plásticas que han abordado el paisaje en sus obras o de distintas disciplinas como la geografía y la antropología, así como el ejercicio plástico creativo.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRACTICA (2026908)",
    "grupos": []
   }
  ]
 },
 "2026941": {
  "cod": "2026941",
  "codigoSIA": "2026941",
  "nombre": "Mercadeo agrario y alimentario",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura mercadeo agroalimentario pretende capacitar a los estudiantes para soportar la adecuada gestión comercial de las empresas dedicadas a la producción agro-alimentaria, proporcionando a los futuros decisores una visión general de los principales aspectos a tener en cuenta en lo que refiere al marketing, tanto desde la perspectiva del consumidor como desde las decisiones que se deben tomar en las empresas para afrontar los problemas comerciales con racionalidad limitada. Se pretende desarrollar competencias para que el futuro profesional sea capaz de analizar el entorno relativo a los mercados agroalimentarios en que pretende participar, competente para diseñar y aplicar estrategias, elaborar planes de mercado y realizar estudios de rentabilidad de las inversiones agrarias.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2026941)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Yesid Vicente Aranda Camacho"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 305",
        "salon": "500-305",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2026987": {
  "cod": "2026987",
  "codigoSIA": "2026987",
  "nombre": "Investigación social aplicada, perspectivas y prácticas interdisciplinarias.",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Desde una perspectiva crítica, se busca presentar un panorama general de los debates conceptuales, los enfoques metodológicos y las problemáticas contemporáneas de la investigación social aplicada relacionadas con sus posibilidades de desarrollo en Colombia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA ( 2026987)",
    "grupos": []
   }
  ]
 },
 "2027041": {
  "cod": "2027041",
  "codigoSIA": "2027041",
  "nombre": "La esquizofrenia:del trastorno a la estructura",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "la esquizofrenia aparece en la psiquiatría a mediados del xix, bajo la categoría de la «demencia precoz» de morel. más tarde, kraepelin delimitará dentro de la «demencia precoz» varios fenómenos como la hebefrenia y la catatonia. precisamente, debido a las múltiples combinaciones sintomáticas posibles de la misma, se ha considerado que en la esquizofrenia se trata de varios trastornos y no de uno solo, razón por la cual bleuler utilizó el plural schizophrenias para referirla, cuando acuñó su nombre en 1911.\n\nen relación la esquizofrenia, entre kraepelin y bleuler se ubica freud y el psicoanálisis. en su origen, la invención del término schizophrenias por parte de bleuler constituyó el punto de articulación entre la psiquiatría clásica y el psicoanálisis. la originalidad de su concepción de este grupo de fenómenos (perturbaciones en el curso del pensamiento como de su contenido, extrañezas afectivas y/o volitivas, síntomas catatónicos, delirios y alucinaciones, etc.,) se debe al enfoque psicoanalítico: por ejemplo, dichos fenómenos encuentran el sentido, en los complejos y mecanismos (condensación y desplazamiento) descubiertos por freud en el estudio de los sueños y los actos fallidos.\n\nConceptos Previos\nEs muy recomendable que el estudiante haya cursado previamente por lo menos TRES asignaturas de fundamentación y contenido clínico, ofrecidas por la Escuela de Estudios en Psicoanálisis y Cultura (vgr. Fundamentos de psicoanálisis, La clínica del caso, Autor: Freud, Psicoanálisis y Psicoterapias, Enfermedades del alma, Cuerpo e inconsciente, El niño, sus síntomas y el inconsciente, Cuerpo y marcas de goce, etc.), sin lo cual el estudiante inscrito solamente podrá tomar el contenido teórico y no podrá asistir a las entrevistas de pacientes hospitalizados",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027041)",
    "grupos": []
   }
  ]
 },
 "2027096": {
  "cod": "2027096",
  "codigoSIA": "2027096",
  "nombre": "Fran&ccedil;ais intensif II - internationalisation",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en segunda lengua que busca promover el fortalecimiento de las competencias comunicativas en el idioma francés, dirigido a estudiantes los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el programa el estudiante presenta el Examen DELF B1.\n\nConceptos Previos: Haber cursado los 4 niveles del PLE o haber cumplido con el requisito de lengua extranjera.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027096 (2027096)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Carol Ivonne Villamil Bernal"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALA DE VIDEOCONFERENCIAS",
        "salon": "454-303",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Carlos Efren Villamizar Mogollon"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-413",
        "salon": "453-413",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-407",
        "salon": "453-407",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 454-201",
        "salon": "454-201",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON 203",
        "salon": "564-203",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Ana Milena Ladino Rojas"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-313",
        "salon": "453-313",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027100": {
  "cod": "2027100",
  "codigoSIA": "2027100",
  "nombre": "Intensive english II - internationalization",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en segunda lengua que busca promover el fortalecimiento de las competencias comunicativas en el idioma inglés, dirigido a estudiantes los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el curso el estudiante presenta el (CAE) Certificate of Advanced English que corresponde al nivel avanzado C1 del CEFR.\n\nConceptos Previos: Haber cursado los 4 niveles del PLE o haber cumplido con el requisito de lengua extranjera.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027100 (2027100)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "FRANCISCO JAVIER HERNÁNDEZ SÁNCHEZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-407",
        "salon": "453-407",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-206",
        "salon": "401-206",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Gustavo Garzon Gomez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-409",
        "salon": "453-409",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027101": {
  "cod": "2027101",
  "codigoSIA": "2027101",
  "nombre": "Intensivkurs deutsch II - internationalisierung",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en segunda lengua que busca promover el fortalecimiento de las competencias comunicativas en idioma alemán, dirigido a estudiantes los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia.Al finalizar el programa el estudiante presenta el Goethe Zertifikat Deutsch B1.\n\nConceptos Previos: Haber cursado los 4 niveles del PLE o haber cumplido con el requisito de lengua extranjera.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027101)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Brillyth Rohincen Ramirez Basurto"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-204",
        "salon": "454-204",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-207",
        "salon": "454-207",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 3",
      "codigoGrupo": "3",
      "profesores": [
       "Fabio Briceño Vargas"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-405",
        "salon": "453-405",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALÓN DE CLASE 401-207",
        "salon": "401-207",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "AULA",
        "salon": "311-104",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 4",
      "codigoGrupo": "4",
      "profesores": [
       "Sandra Patricia Rodriguez Castañeda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-101",
        "salon": "401-101",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-105",
        "salon": "453-105",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-415",
        "salon": "453-415",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "AULA",
        "salon": "311-301",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027119": {
  "cod": "2027119",
  "codigoSIA": "2027119",
  "nombre": "Portugu&ecirc;s intensivo II - internacionaliza&ccedil;&atilde;o",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en segunda lengua que busca promover el fortalecimiento de las competencias comunicativas en el idioma portugués, dirigido a estudiantes de los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el curso el estudiante presenta el CELPE-BRAS, Certificado de Profici&ecirc;ncia em Língua Portuguesa para Estrangeiros, desarrollado por el Ministerio de Educación de Brasil y es el único certificado de suficiencia en portugués reconocido oficialmente por el Gobierno de Brasil. Mide las habilidades de escucha, habla, lectura y escritura.\n\nConceptos Previos: Haber cursado los 4 niveles del PLE o haber cumplido con el requisito de lengua extranjera.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027119 (2027119)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "JACINEIDE DA CRUZ CONCEI&Ccedil;&Atilde;O"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-411",
        "salon": "453-411",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-202",
        "salon": "454-202",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON 207",
        "salon": "225-207",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON",
        "salon": "471-112",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "JANIO VASCONCELOS PEREIRA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALÓN DE CLASE 401-203",
        "salon": "401-203",
        "edificio": "401 - Julio Garavito Armero",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-409",
        "salon": "453-409",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-315",
        "salon": "453-315",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "11:00",
        "lugar": "SALON 305",
        "salon": "564-305",
        "edificio": "564 - Gloria Amparo Galeano Garcés",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027134": {
  "cod": "2027134",
  "codigoSIA": "2027134",
  "nombre": "Turquía: historia, cultura y sociedad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "RESUMEN Y PROPÓSITOS DE FORMACIÓN DEL CURSO:\n\nDentro de un marco de apertura en las relaciones entre Colombia y Turquía, el curso tiene como fin formar a los estudiantes sobre este país euro-asiático, dando a conocer a Turquía en una coyuntura de importante posicionamiento tanto político como económico a nivel internacional.\n\nRESULTADOS DE APRENDIZAJE ESPERADOS (RAE)\n\nOBJETIVO GENERAL:\nAmpliar la visión del estudiante sobre Turquía, como un país que cada vez cobra mayor relevancia en el ámbito político, social y económico dentro del marco de las relaciones internacionales contemporáneas.\n\nOBJETIVOS ESPECÍFICOS:\n* Promover un ambiente de investigación sobre la historia, la cultura y la sociedad turca.\n\n* Brindar a los estudiantes las herramientas necesarias de conocimiento para llegar a entender el papel de Turquía en el sistema internacional.\n\n* Familiarizar al estudiante con las distintas temáticas tanto históricas como coyunturales, que lo ayuden a comprender la importancia de Turquía en la actualidad.\n\nACTIVIDADES DE APRENDIZAJE_:\n\n* Exposiciones y reseñas sobre las lecturas\n* Organizar tertulias\n* Programación de viajes académicos\n\nACTIVIDADES DE EVALUACIÓN:\n\nPrimer corte (35%)\nSegundo corte (35%)\nTercer corte (30%)\n\nACUERDOS DE FUNCIONAMIENTO:\n\nEs requisito de la asignatura la asistencia de forma presencial en los horarios de clase, por esta razón se llevará control de ella en cada una de las sesiones.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027134)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027191": {
  "cod": "2027191",
  "codigoSIA": "2027191",
  "nombre": "Medios de comunicación, política criminal y justicia penal",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El presente curso de profundización tiene como propósito evaluar y reconstruir los discursos mediáticos sobre la cuestión criminal, la reacción social frente a conductas desviadas y la política criminal en Colombia. Para el efecto se plantea como punto de partida el problema de la incidencia de los medios masivos de comunicación en la investigación criminológica, en los proyectos de ley, y finalmente, la presión que implica la noticia frente a las decisiones judiciales cuando de administrar justicia se trata, en especial en aquellos casos que han marcado la agenda o pauta noticiosa, que han sido ampliamente difundidos y explotados en los diversos medios de comunicación.\nEl estado del arte da cuenta que cuando se trata del análisis de los delitos y su divulgación, ha existido una estrecha relación entre lo que muestran los medios y la forma cómo reacciona la sociedad y las instituciones. No se trata, en consecuencia, de una relación nueva, sino que de antaño ha existido una fuerte correspondencia entre la divulgación de la noticia criminal, la reacción social informal (la de la gente) y la reacción social formal (la de las instituciones).\nEn la actualidad existen fuertes campañas publicitarias sobre el delito, el aumento desproporcionado de las penas, la creación de nuevos delitos (tipos penales), de nuevos bienes jurídicos (generales y abstractos), de disminución de las garantías procesales y el aumento de la privación de la libertad de manera preventiva.\n\nConceptos Previos: Criminología\nSociología del conflicto\nPolítica criminal\nDerecho Penal General\nControl social",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2027191)",
    "grupos": [
     {
      "grupo": "Grupo 1 (2026-2S)",
      "codigoGrupo": "1",
      "profesores": [
       "MIGUEL ANTONIO MORÓN CAMPOS"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "21:00",
        "lugar": "SALON DE CLASE",
        "salon": "201-119",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027218": {
  "cod": "2027218",
  "codigoSIA": "2027218",
  "nombre": "Biología de macroalgas marinas",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "Las macroalgas son, con el fitoplancton, los productores primarios que soportan la cadena trófica en los océanos.Ocupan el sustrato desde la región supralitoral hasta el límite inferior de la zona fótica. Proveen estructura a los ecosistemas, consolidan los arrecifes de coral, juegan un papel importante en el ciclo de carbono, ya que muchas especies depositan carbonato de calcio, y proveen alimento y refugio a una gran variedad de organismos. Del punto de vista evolutivo, las macroalgas pertenecen a tres phyla distintas: Rhodophyta, Phaeophyceae, y Chlorophyta.Además, algunas cianobacterias pueden formar talos conspicuos y ser consideradas macroalgas.Las macroalgas tienen importancia comercial considerable:la industria que las involucra provee una gran variedad de productos con un valor estimado anual de 6 billones de dólares. Gran parte del mercado es para alimento humano y extracción de compuestos coloidales.\nEl curso pretende acercar el estudiante al conocimiento de las macroalgas marinas.\nEl curso se desarrollará en dos partes: una parte teórica, en donde, mediante ponencias magistrales, se brindarán al estudiante las herramientas para el conocimiento y la identificación de las macroalgas, además de su papel ecológicos en varios ecosistemas costeros; y una parte práctica, que incluye una salida de campo a la costa, para la observación directa de las macroalgas, análisis de parámetros que influyen sobre la distribución de especies y colecta de muestras para identificación.",
  "sinProgramar": true,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRÁCTICA (2027218)",
    "grupos": []
   },
   {
    "nombre": "CLASE PRÁCTICA SALIDA DE CAMPO (2027218)",
    "grupos": []
   }
  ]
 },
 "2027223": {
  "cod": "2027223",
  "codigoSIA": "2027223",
  "nombre": "Corso intensivo di lingua italiana i internazionalizzazione",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en lengua extranjera que busca promover el fortalecimiento de las competencias comunicativas en idioma italiano, dirigido a estudiantes de los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el programa el estudiante estará en la capacidad de presentar el examen que certifica su conocimiento de la lengua en el nivel B1 del CEFR (CELI2, CILS Uno B1, ele.IT o PLIDA B1).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027223 (2027223)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Irene Castilla Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-303",
        "salon": "453-303",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 454-301",
        "salon": "454-301",
        "edificio": "454 - Luis Carlos Sarmiento Angulo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 453-303",
        "salon": "453-303",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Luis Enrique Pardo Granados"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-111",
        "salon": "453-111",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-109",
        "salon": "453-109",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "SALON DE CLASE 453-107",
        "salon": "453-107",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027224": {
  "cod": "2027224",
  "codigoSIA": "2027224",
  "nombre": "Corso intensivo di lingua italiana ii internazionalizzazione",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es una asignatura de formación en lengua extranjera que busca promover el fortalecimiento de las competencias comunicativas en idioma italiano, dirigido a estudiantes de los diferentes programas académicos la Sede Bogotá de la Universidad Nacional de Colombia. Al finalizar el programa el estudiante estará en la capacidad de presentar el examen que certifica su conocimiento de la lengua en el nivel B1 del CEFR (CELI2, CILS Uno B1, ele.IT o PLIDA B1).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027224 (2027224)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Sergio Cuadros Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA TEORICA",
        "salon": "471-222B",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-405",
        "salon": "453-405",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-311",
        "salon": "453-311",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "SALON DE CLASE 453-115",
        "salon": "453-115",
        "edificio": "453 - Guillermina Uribe Bone",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "AUDITORIO",
        "salon": "311-305",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Sergio Cuadros Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "18:00",
        "fin": "20:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO",
        "salon": "311-305",
        "edificio": "311 - Lauchlin Currie",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027248": {
  "cod": "2027248",
  "codigoSIA": "2027248",
  "nombre": "Antonio Gramsci: Subalternidad, hegemonía y autonomía",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso Antonio Gramsci: hegemonía, autonomía y subalternidad. Ciclo II, propone una reflexión orgánica sobre este pensador marxista italiano en una interlocución directa con la obra de Carlos Marx que es fundamental tanto para el estudio de lo político y la política del siglo XX, como para la comprensión de la significación y alcances de la Crítica de la Economía Política Capitalista que nutre la propuesta y el debate del Comunismo del Siglo XXI.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027248)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Miguel Angel Herrera Zgaib"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE",
        "salon": "201-114",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027394": {
  "cod": "2027394",
  "codigoSIA": "2027394",
  "nombre": "Música y política",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Al ser la música un constructo cultural se da por sentado su interacción con lo político. Pero las aristas en esta relación no son pocas y se complejizan, entre otras cosas, dependiendo del momento histórico y de las dinámicas de poder que las motivan. En este curso se pretende explorar las intersecciones que surgen en la relación música-política; comprender la influencia que las realidades sociales y políticas ejercieron sobre estas creaciones y analizar la manera en que estas últimas reaccionaron ante estas influencias. Se abordará lo político desde dos perspectivas: según la corriente que considera lo político como un ejercicio de poder y también a partir de los postulados de Ranciére quien ve lo político como la porción antagónica de la institucionalidad, la emancipación.\n\nLos ejes temáticos de este curso se estructuran teniendo en cuenta por un lado el análisis de algunos fenómenos musicales que se relacionan con la institucionalidad y por el otro, considerando productos musicales dentro del espacio de la contracultura; en otras palabras, reparando tanto en la música que se da en el marco del ejercicio de poder como en aquella que se opone, que subvierte el control. Es así como hablaremos de censura, propaganda, protesta, sumisión y alienación en la música.\n\nLas clases combinarán la cátedra, la discusión de lecturas y el análisis musical entorno a creaciones musicales que se adhieren a algunos ejercicios de poder en la historia.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027394 (2027394)",
    "grupos": []
   }
  ]
 },
 "2027525": {
  "cod": "2027525",
  "codigoSIA": "2027525",
  "nombre": "Práctica de investigación en ciencias-química",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura permitirá a los estudiantes del pregrado de química desarrollar actividades teóricas y experimentales bajo la supervisión de un profesor, en el marco del quehacer propio de un grupo de investigación. El estudiante podrá familiarizarse con los métodos y técnicas propias de las áreas disciplinares de la Química. Dentro del alcance de esta asignatura, no están permitidas las pasantías empresariales.\nEn el curso se adquieren las bases para el trabajo investigativo. Los RESULTADOS DE APRENDIZAJE ESPERADOS al terminar el curso son: Tener una mejor capacidad de observación durante la realización de experimentos. Emplear correctamente equipos y material de laboratorio. Reconocer y saber utilizar las técnicas experimentales relacionadas con la investigación planteada. Presentar resultados de investigación de manera clara y coherente. Demostrar sus habilidades para analizar y discutir resultados, así como su capacidad para trabajar en equipo. Reportar y divulgar los resultados mediante informes y exposiciones orales, ser capaz de sustentarlos públicamente.\nActividades de formación teórica: se desarrollarán mediante la programación de seminarios. Actividades de formación experimental: ejecución de un trabajo práctico orientado por el docente, permitirá al estudiante familiarizarse con las actividades del grupo y le dará la posibilidad de formarse para su trabajo de grado. Se creará un grupo de actividad para el profesor que manifieste su intención de dictar la asignatura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2027525 (2027525)",
    "grupos": [
     {
      "grupo": "Grupo 16",
      "codigoGrupo": "16",
      "profesores": [
       "Harold Duban Ardila Barrantes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 2",
      "codigoGrupo": "2",
      "profesores": [
       "Milena Maya Hoyos"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 4,
      "sesiones": [
       {
        "dia": 6,
        "diaTexto": "SÁBADO",
        "inicio": "13:00",
        "fin": "16:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     },
     {
      "grupo": "Grupo 28",
      "codigoGrupo": "28",
      "profesores": [
       "Maria Helena Ramirez Hernandez"
      ],
      "facultad": "FACULTAD DE CIENCIAS",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "NO NECESITA SALON",
        "salon": "EXT-BOG",
        "edificio": "ESPACIOS EXTERNOS DE LA UNIVERSIDAD",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027595": {
  "cod": "2027595",
  "codigoSIA": "2027595",
  "nombre": "Semillero de investigación neurociencias",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Fortalecer las habilidades de los estudiantes de pregrado en diferentes áreas de las neurociencias, a través del desarrollo de labores de investigación. Los estudiantes involucrados tendrán la oportunidad de participar en el desarrollo de proyectos de investigación mediante la participación en clubes de revistas y prácticas de laboratorio relacionadas con las neurociencias.\n\nConceptos Previos: Se tendrá en cuenta conceptos básicos de las neurociencias, particularmente en aspectos de genética, biología molecular y celular, modelos biológicos, así como de diferentes metodologías empleadas para la investigación en neurociencias.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorico Práctica (2027595)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Humberto Arboleda Granados"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE",
        "salon": "426-203",
        "edificio": "426 - Instituto de Genética",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027716": {
  "cod": "2027716",
  "codigoSIA": "2027716",
  "nombre": "Filosofia del derecho en colombia",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En Colombia pasamos de una sociedad tradicional, hasta 1930, donde imperaba el iusnaturalismo neoescolástico y toda teoría diferente era estigmatizada y perseguida como herejía, a una sociedad en transición a la modernidad (que se quedó más bien en la modernización sin modernidad) donde, más que el iuspositivismo, lo que se ambienta es un iusnaturalismo racional moderno con trazos de positivismo. Esa combinación se amalgama durante el Frente Nacional en una peculiar conjunción de formalismo jurídico donde convergen, a la sombra del bipartidismo liberal-conservador, el iusnaturalismo y el positivismo, haciendo del formalismo el habitus dominante de creación de derecho en nuestro país, particularmente.\n\nA partir de la Constitución del 91, por la presión inicial de lo que se autodenominó el nuevo derecho, se impone una problematización de los paradigmas convencionales (iusnaturalista y positivista, básicamente) y empieza a consolidarse una tendencia paradigmática que podríamos denominar postkelseniana, pospositivista y, en últimas, posformalista en diferentes vertientes, identificada en cuestionar el formalismo jurídico hegemónico, histórica y estructuralmente, de nuestra identidad iusfilosófica y teórico-jurídica que ha intentado renovar, a veces infructuosamente, nuestro campo jurídico. Este curso busca dar cuenta de este proceso.\n\nConceptos Previos: Curso de Filosofía y Teoría del Derecho",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2027937": {
  "cod": "2027937",
  "codigoSIA": "2027937",
  "nombre": "Cátedra de Ingeniería Julio Garavito Armero",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El científico colombiano Julio Garavito Armero, graduado en 1891 de la Facultad de Ingeniería de la Universidad Nacional de Colombia sede Bogotá, ingeniero civil, profesor de Matemáticas y astrónomo, es, sin duda, el egresado más destacado y representativo de la Facultad, la cual, en su homenaje, ofrece a la comunidad académica de la UN y el país la Cátedra, como un espacio para conocer, desde la perspectiva más amplia y transversal, el pasado, presente y futuro de la ingeniería colombiana y su ejercicio, siempre ligados a la construcción de Nación, y factor clave para el desarrollo de Colombia. En mínimo 8 sesiones con invitados, se examinará el conjunto de conocimientos y logros que han influido en la formación de la ingeniería nacional y su ejercicio. Al final de cada una, habrá un espacio para preguntas y comentarios. En las sesiones restantes, se tendrán discusiones sobre la metodología y el avance del curso. La evaluación conlleva pruebas intermedias individuales escritas (60%), un trabajo grupal (30%) y asistencia (10%).",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2027937)",
    "grupos": [
     {
      "grupo": "Grupo Amazonía",
      "codigoGrupo": "6",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "SEDE AMAZONIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Grupo Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 285,
      "sesiones": []
     },
     {
      "grupo": "Grupo Caribe",
      "codigoGrupo": "5",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "SEDE CARIBE",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Grupo Medellín",
      "codigoGrupo": "2",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": []
     },
     {
      "grupo": "Grupo Orinoquía",
      "codigoGrupo": "7",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "SEDE ORINOQUIA",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     },
     {
      "grupo": "Grupo Tumaco",
      "codigoGrupo": "8",
      "profesores": [
       "Fernando José Rodríguez Mesa"
      ],
      "facultad": "SEDE TUMACO",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 15,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2027941": {
  "cod": "2027941",
  "codigoSIA": "2027941",
  "nombre": "En el interregno de la ilustración y romanticismo. los ecos de frankenstein",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "\"En el interregno de la ilustración y el romanticismo: los ecos de Frankenstein\" es una asignatura que parte de la implementación en el 2017-II de la Cátedra de Sede Gabriel García Márquez \"Frankenstein de Mary Shelley: Nuevas miradas políticas y estéticas\" que trató de acercarse a la obra literaria de Frankenstein (publicada en 1818) como un mito matriz de la modernidad.\n\nComo ficción literaria, Frankenstein abre y conjuga, a nivel estético, social y académico, una agenda de temas que todavía puede considerarse vigente (el dominio tecnológico de la naturaleza, la ética del reconocimiento, la conformación de una identidad de género...). En este sentido, la asignatura explora un universo de posibilidades de interpretación de la novela de Mary Shelley alrededor la constitución de la identidad social e individual en un mundo de representaciones específicamente moderno (Burdiel, 2016: 55)\n\nLa intersección entre artes-ciencias-humanidades que plantea el curso permite aprehender y dimensionar, de una forma más compleja y profunda, que el conocimiento, la política y la estética son espacios interdependientes. En este sentido, la asignatura aspira a propiciar una lectura crítica de obras estéticas y legados cientifico-patrimoniales del peeríodo social, científico y cultural en el que se desarrolló la obra de Mary Shelley y que nos adentran al \"interregno\" de la ilustración y el romanticismo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027941)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "EDMON CASTELL GINOVART"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "12:00",
        "fin": "14:00",
        "lugar": "TEATRO NUEVOS ESPACIOS DE LAS ARTES",
        "salon": "303C-004",
        "edificio": "303 - EDIFICIO DE LAS ARTES SEDE BOGOTA",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027967": {
  "cod": "2027967",
  "codigoSIA": "2027967",
  "nombre": "Biologia y control de vectores en enfermedades tropicales",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las enfermedades transmitidas por vectores (ETV) provocan cada año más de 700.000 muertes en el mundo. Enfermedades como malaria y dengue causan alrededor de 212 y 100 millones de casos respectivamente cada año. Otras como leishmaniasis y enfermedad de Chagas afectan a cientos de millones de personas.\nDada la situación geográfica de nuestro país, y junto con condicionantes sociales, económicos y políticos, en cerca del 80% del territorio nacional se presentan estas ETV. En los últimos años, nuevas ETV como chikungunya y zika han hecho su aparición en el territorio nacional causando importantes epidemias y dejando secuelas en la población afectada.\nLas ETV son causadas por parásitos, virus y bacterias transmitidos por insectos como mosquitos, flebótomos, triatomíneos, simúlidos, garrapatas, ácaros, piojos, entre otros. No hay hasta el momento vacunas que permitan la prevención de éstas enfermedades, a excepción de la fiebre amarilla, y es sólo a través del control de sus vectores como se previene la transmisión de las ETV.\nEste curso brindará a los estudiantes los conocimientos básicos sobre la transmisión de éstas enfermedades, haciendo énfasis en aspectos de la biología de sus vectores, ciclos de transmisión de las principales ETV en Colombia, métodos de recolección, aspectos necesarios para la vigilancia entomológica y brindará a los estudiantes conceptos importantes sobre los métodos para la prevención de éstas enfermedades, a través del control de vectores.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027967)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Martha Lucia Quiñonez Pinzon "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "AULA TEORICA",
        "salon": "471-308",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2027992": {
  "cod": "2027992",
  "codigoSIA": "2027992",
  "nombre": "Cátedra de gestión y organizaciones",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura tiene como propósito abordar temas relevantes en la gestión empresarial, por lo tanto su contenido puede variar de semestre a semestre. La asignatura será conducida por un docente invitado que puede ser un directivo de alguna organización o un profesor nacional o internacional experto en un tema particular.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2027992)",
    "grupos": []
   }
  ]
 },
 "2028022": {
  "cod": "2028022",
  "codigoSIA": "2028022",
  "nombre": "La astronomía en la historia",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso expondrá la relación entre los eventos históricos humanos de los últimos miles de años con el conocimiento que tenemos del universo en el que estamos. Ello se logrará estudiando las principales etapas de evolución histórica y examinando la correspondencia con los descubrimientos e invenciones que han permitido acercarnos a una visión más clara y entendible del universo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028022)",
    "grupos": [
     {
      "grupo": "Grupo 01",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Gregorio Portilla Barbosa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 117",
        "salon": "413-117",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 117",
        "salon": "413-117",
        "edificio": "413 - Belisario Ruiz Wilches",
        "desde": "27/08/2026",
        "hasta": "12/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028036": {
  "cod": "2028036",
  "codigoSIA": "2028036",
  "nombre": "La dimensión espacial del capital: la economía política de la tenencia de la tierra",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Estudiar los tópicos (del griego &#964;&#959;&#960;&#953;&#954;&#972;&#962;) y discusiones en la economía política del control de la tierra, revisando el origen social de la apropiación del espacio y del ordenamiento territorial, la historia de la propiedad de la tierra, y las consecuencias de tipos de tenencia sobre la dirección del cambio técnico y la inversión, y al fin, sobre la democracia. Desde esta perspectiva se ve la tenencia de la tierra como (i) un proceso histórico de mutuas relaciones con la distribución del poder, con cierta concepción del desarrollo y con las democracias tanto auténticas como aparentes (o simuladas), y (ii) también como la base de control de los elementos naturales en general, y no solo como suelos productivos. A lo largo del curso los estudiantes analizarán algunas aproximaciones hechas a este tema a través de las nociones económicas de escasez, relatividad y distribución",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028036)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "WILLIAM CHAVARRO ROJAS"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 46,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO AUXILIAR 1",
        "salon": "310-121",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "AUDITORIO AUXILIAR 1",
        "salon": "310-121",
        "edificio": "310 - Antonio García Nossa",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028288": {
  "cod": "2028288",
  "codigoSIA": "2028288",
  "nombre": "Nasa Yuwe y pensamiento Nasa II",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso está dirigido a integrantes de la comunidad académica en general, interesados en el conocimiento y la conservación del patrimonio inmaterial, y especialmente en sensibilizarse con respecto a la realidad lingüística y cultural de los indígenas nasa desde un entorno urbano. Para esto, no será necesario que los estudiantes tengan conocimientos o prerrequisitos en lingüística, pues el profesor, que es integrante de la comunidad, contribuirá al aprendizaje de los contenidos pertinentes, presentándolos de forma sencilla y contextualizada.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028288)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "ISAAC QUILCUE PUMBA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 18,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028300": {
  "cod": "2028300",
  "codigoSIA": "2028300",
  "nombre": "Seminario sobre economía del cambio climático, áreas metropolitanas y desastres naturales.",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El cambio climático es una realidad evidente, muy a pesar de que un grupo reducido políticos sigan dudando de su existencia. El impacto de este fenómeno tiene serias repercusiones en diferentes frentes de la vida diaria. En este seminario se abordará el tema desde la perspectiva económica y social.\n\"Ya no hay ninguna duda de que el clima está cambiando\", aseguró el secretario de la Organización Mundial de Meteorología (OMM), Michel Jarraud y añadió que \"el 95 % de este cambio se debe a la actividad humana\".",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028300)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Moises Ildefonso Cetre Castillo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 40,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "16:00",
        "fin": "18:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028448": {
  "cod": "2028448",
  "codigoSIA": "2028448",
  "nombre": "Agrobiodiversidad",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La agrobiodiversidad es la parte de la diversidad biológica que atañe a la alimentación y la agricultura. Esta asignatura introduce al estudiante en los diferentes componentes de la agrobiodiversidad, donde se hace un repaso al origen, principales conceptos, metodologías y estrategias de conservación, estudio y utilización de la agrobiodiversidad, cubriendo los componentes agrícola, forestal, pecuario, entomológico, acuático y microbiano.\nEn el abordaje de cada componente, la atención se focaliza en Colombia, sin olvidar su rol en Latinoamerica y el contexto global, y en los retos que se deben afrontar para la preservación, conocimiento y el buen uso que se debe dar a estos valiosos recursos, los cuales son patrimonio de la nación y herencia para las siguientes generaciones.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028448)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Hector Mauricio Parra Quijano"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE 130",
        "salon": "500-130",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "07:00",
        "fin": "09:00",
        "lugar": "SALON DE CLASE 301",
        "salon": "500-301",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028465": {
  "cod": "2028465",
  "codigoSIA": "2028465",
  "nombre": "Para aficionados",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura tiene por objeto primordial permitir que los alumnos de la Universidad Nacional que hayan tenido alguna instrucción o practica musical y que no cursen un programa de música en la misma Universidad, puedan desarrollar sus habilidades en el canto o la música instrumental con el apoyo académico adecuado. Podrán inscribirse alumnos de todas las carreras de la Universidad Nacional para voces e instrumentos sinfónicos y de banda y alumnos del Conservatorio de Música para participar en un instrumento principal diferente al que cursan. Los cantantes en algún instrumento y los instrumentistas en canto o un instrumento diferente al instrumento que estudian.\n\nObjetivos: Permitir que los alumnos de la Universidad Nacional que hayan tenido alguna instrucción o practica musical y que no cursen un programa de música en la misma Universidad, puedan desarrollar sus habilidades en el canto o la música instrumental con el apoyo académico adecuado\n\nMetodología: Los alumnos de posgrado se pueden inscribir tanto para participar como cantantes o instrumentistas o para realizar labores de ¿coaching¿ en el area de dirección orquestal, coral, bajo continuo, arreglos orquestales y corales, etc.\n\nConceptos Previos: Se requiere haber tenido un nivel aceptable de instrucción y de practica musical, (canto o instrumentos sinfónicos). Son estudiantes de posgrado en disciplinas musicales que han pasado por unas pruebas de admisión. Se realizará una entrevista-audición después de la inscripción para asegurar la permanencia en el curso.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028465)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Egberto Bermudez Cujar"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 200,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028496": {
  "cod": "2028496",
  "codigoSIA": "2028496",
  "nombre": "Inteligencia artificial para médicos",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El uso de la Inteligencia Artificial (AI por sus siglas en inglés) en el trabajo diario del médico es una realidad cada vez más presente. En el curso se hará una breve introducción a las bases y los conceptos claves de la AI, así como a los desafíos técnicos y éticos, y su relación con los futuros profesionales de la salud.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028496)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "JUAN DAVID GARCIA ARTEAGA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2028569": {
  "cod": "2028569",
  "codigoSIA": "2028569",
  "nombre": "Constitución, democracia y paz",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El grupo de investigación REPENSAR el DERECHO ofrece: Analizar el proceso político jurídico y social de la convocatoria a una Asamblea Nacional Constituyente. Identificar los proyectos societales y concepciones de justicia incorporados en el texto constitucional y su desarrollo a casi 30 años de vigencia y aplicación, con énfasis en el talante populista de las reformas. Explorar los rasgos del proyecto autoritario que se ha cernido contra la Constitución del 91. Reconstruir el proceso de paz con las FARC, su estructura sistémica y normativa para dar cuenta de la estocada que ha sufrido en su desarrollo y en la defensa de una paz estable.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2028569)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Marcela Hincapie Cetina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "SALON DE CLASE",
        "salon": "201-120",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028571": {
  "cod": "2028571",
  "codigoSIA": "2028571",
  "nombre": "Clínica jurídica: litigio estratégico",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las clínicas jurídicas son un aspecto relevante en la formación de las capacidades para el litigio, la conciliación y el trabajo interdisciplinario en los futuros abogados. La Clínica Jurídica Litigio Estratégico está diseñada conscientemente para promover la aclaración, el respeto, la protección y la realización de los derechos. La idea es cambiar las leyes, políticas y prácticas, y obtener remedios o reparaciones tras violaciones de derechos humanos. El litigio estratégico también trata a menudo de concienciar a la población sobre una injusticia.\n\nEl Litigio estratégico es una herramienta para la protección y la prevención de vulneraciones de los derechos de las personas, que implica la planeación y ejecución de estrategias jurídicas, políticas, sociales y comunicacionales que permitan un impacto\npositivo en la sociedad. En este sentido la Clínica Jurídica tiene una visión amplia de esta herramienta, que permite el desarrollo de estrategias de alto impacto que no siempre requieren la fijación de un litigio para lograr la defensa de los derechos de los individuos.\n\nConceptos Previos\nDerecho Constitucional Colombiano; Derecho Administrativo I; Derechos Humanos Integrales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028571)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Carolina Florez Bayona"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 109",
        "salon": "610-109",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028610": {
  "cod": "2028610",
  "codigoSIA": "2028610",
  "nombre": "Museografía y escenografía",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso pretende indagar sobre los conceptos de museo y exposición museográfica.\n- A través de ejemplos y textos de referencia, se estudiarán las implicaciones científicas, culturales, educativas y políticas de estos conceptos. De igual manera se estudiarán los diferentes actores y las diferentes profesiones imbricadas en la creación de una exposición museográfica, en particular la relación entre curaduría y escenografía.\n- Se estudiaran ejemplos ilustrados de construcciones de exposiciones museográficas con problemáticas específicas y se indagará sobre los elementos que constituyen una experiencia de visita.\n- Se realizará una exposición en predios o espacios de la Universidad Nacional, Sede Bogotá, (curaduría, contenido, escenografía, grafismo, logística, publicación y comunicación), con el fin de fundir, gracias a una práctica, los conocimientos teóricos abordados en la primera parte del programa.\n\nConceptos Previos: Pensamiento Arqueología I y II",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Grupo 1",
    "grupos": []
   }
  ]
 },
 "2028615": {
  "cod": "2028615",
  "codigoSIA": "2028615",
  "nombre": "Derecho, ordenamiento del territorio y urbanismo",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Especialmente a partir de mediados del siglo XX fue posible distinguir en Colombia, y en general en América Latina, una tendencia dramática al incremento de la población y los asentamientos urbanos. Dicho fenómeno ha tenido repercusiones importantes en materia económica, social y política, y ha impactado de manera sustancial las formas de vida de los habitantes. Uno de los campos donde aquella situación ha tenido mayores impactos se relaciona justamente con la ocupación del espacio urbano, ámbito dentro del cual se presenta una disputa permanente determinada por las reglas que impone la ciudad capitalista. En ese marco, el derecho ocupa un papel fundamental como articulador activo o pasivo de las relaciones entre los diferentes agentes que intervienen en el territorio y el mercado del suelo. La asignatura propuesta ofrece un acercamiento al desenvolvimiento del derecho en el marco de esa disputa lo que implica reflexionar sobre la existencia del derecho al territorio urbano, los principales dilemas que ha generado el crecimiento urbano, las formas de intervención del gobierno frente a dichos dilemas y las vías jurídicas que adquiere el ordenamiento físico de la ciudad.\n\nConceptos Previos: Derecho Territorio Propiedad Ciudad",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA",
    "grupos": []
   }
  ]
 },
 "2028643": {
  "cod": "2028643",
  "codigoSIA": "2028643",
  "nombre": "Cátedra Pinsus Julio Carrizosa",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Sustentabilidad es un campo transdisciplinar en el que ingenieras e ingenieros cooperan con otras disciplinas. Cobra importancia la capacidad que tienen estos profesionales de comunicarse con otras áreas y con otros grupos de interés, sin perder la calidad disciplinaria. La ingeniería no ha pertenecido a la vanguardia de la sustentabilidad, pero ahora en diversas instituciones de ingeniería se están haciendo cambios este sentido. Una de las prioridades actuales es la necesidad de la integración del concepto de sustentabilidad en los programas de ingeniería, ya que, según la literatura académica, se puede prever un aumento de la demanda de ingenieros con altas competencias en tecnologías de producción limpia y gestión ambiental, mitigación del cambio climático y demás aspectos de la Sustentabilidad.\nEn la actualidad los países en el mundo se enfocan en aportar desde diferentes áreas del conocimiento para cumplir los Objetivos del Desarrollo Sostenible-ODS, que son un pilar fundamental para lograr la transición del planeta hacia la sustentabilidad.\nLa propuesta de la asignatura parte de cuestionarse ¿Qué deben aprender los ingenieros en el marco de la sustentabilidad? ¿Cuáles son los problemas para tratar y cómo resolverlos? Esto implica que un ingeniero debe comprender las complejidades del entorno social en el que se encuentra desarrollando soluciones y la complejidad de hacer mejoras a corto plazo que se ajusten en un camino a largo plazo de sustentabilidad.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA-Cátedra Pinsus Julio Carrizosa (2028643)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Virtual Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Jose Ismael Peña Reyes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 100,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "16:00",
        "fin": "19:00",
        "lugar": "Aula Virtual Bogotá",
        "salon": "B_AULAVIRTUAL",
        "edificio": "Bogotá - Edificio Virtual",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028646": {
  "cod": "2028646",
  "codigoSIA": "2028646",
  "nombre": "Gestión ambiental agropecuaria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura busca la formación del estudiante en la gestión ambiental de unidades productivas agropecuarias, incluyendo el diagnóstico, el manejo, la evaluación y la identificación de alternativas de solución integral a las problemáticas ambientales encontradas. Para este fin se estudian los conceptos y la utilización de diferentes instrumentos de la gestión ambiental, considerando las interacciones con las dimensiones social y económica en los espacios estudiados. La asignatura contempla el contexto territorial, que permite la interacción entre diferentes unidades productivas, y la visión espacial (apoyándose en sistemas de información geográfica) hacia la sostenibilidad rural. Esta asignatura de libre elección está orientada a estudiantes de las carreras de Ingeniería Agronómica, Ingeniería Agrícola, Medicina veterinaria, Zootecnia y Biología interesados en la producción agropecuaria.\n\nConceptos Previos: Se requieren conceptos básicos de producción agrícola o producción animal, administración agropecuaria, desarrollo rural, suelos, manejo de agua, fisiología, sanidad.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028646)",
    "grupos": []
   }
  ]
 },
 "2028647": {
  "cod": "2028647",
  "codigoSIA": "2028647",
  "nombre": "Ecologia numerica",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Una habilidad fundamental en las ciencias en general y por tanto en la ecología, es el pensamiento cuantitativo. Es decir, que mediante cantidades continuas o discretas que se relacionan unas con otras se logre encontrar la respuesta a un problema en términos de pruebas de hipótesis o inferencias en términos de detección de un patrón. En principio la herramienta para ello es la estadística. La necesidad de este tipo de competencias es mas aguda en la medida que se avanza en la carrera de Biología y sin ellas un estudio de posgrado a nivel de maestría y doctorado no tendrá éxito en general. En el pregrado de Biología es frecuente encontrar que la idea de los estudiantes sobre la estadística como herramienta en precaria. El curso disciplinar propuesto aquí pretende llenar el vacío detectado. Este curso se plantea como una aproximación eminentemente práctica a las preguntas, los métodos y las herramientas estadísticas útiles en ecología. Con esto se quiere decir que la teoría estadística se mantendrá al mínimo necesario para comprender el funcionamiento básico del método y la razón de su relevancia en responder la pregunta ecológica.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2028647 (2028647)",
    "grupos": [
     {
      "grupo": "Ecología Numérica (2028647)",
      "codigoGrupo": "1",
      "profesores": [
       "Camilo Bernardo Garcia Ramirez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "08:00",
        "fin": "10:00",
        "lugar": "SALA DE COMPUTO",
        "salon": "421-210",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2028674": {
  "cod": "2028674",
  "codigoSIA": "2028674",
  "nombre": "Biofísica para todos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La biofísica ha sido fundamental para comprender la mecánica de cómo se forman las moléculas de la vida, cómo se mueven y funcionan las diferentes partes de una célula, y cómo funcionan los sistemas complejos en nuestros cuerpos (el cerebro, la circulación, el sistema inmune y otros). La biofísica es un campo científico vibrante donde los científicos de muchos campos, incluyendo matemática, química, física, ingeniería, farmacología y ciencias de los materiales, utilizan sus habilidades para explorar y desarrollar nuevas herramientas para comprender cómo funciona la biología, toda la vida.\nEste curso introduce el uso de métodos físicos en el estudio de diversos sistemas biológicos desde diferentes puntos de vista y desde distintas disciplinas, incluyendo macromoléculas, proteínas, membranas celulares, simulaciones computacionales de sistemas biológicos, aplicaciones de la biofísica en la medicina pasando por sistemas simplificados de la célula hasta sistemas más complejos.\n\nConceptos Previos: El curso supone el conocimiento de conceptos de la física en sus niveles básicos (conceptos generales de la educación media) y conocimientos muy básicos de matemáticas. El curso no asume un conocimiento detallado de la química o la biología. Sin embargo, un conocimiento general temas biológicos será muy beneficioso para los estudiantes aunque no indispensable. Algunos temas específicos de biología y química serán introducidos en las clases.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028674)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Yuly Edith Sanchez Mendoza"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2028821": {
  "cod": "2028821",
  "codigoSIA": "2028821",
  "nombre": "Intercambio académico internacional - III",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se crea código por solicitud de la ORI Sede Bogotá enmarcada en la Resolución 105 de 2017 de la VRA, debe estar autorizado por la Dirección de Relaciones Exteriores DRE para la inscripción de esta asignatura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2028821)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2028822": {
  "cod": "2028822",
  "codigoSIA": "2028822",
  "nombre": "Intercambio académico internacional - III prórroga",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se crea código por solicitud de la ORI Sede Bogotá enmarcada en la Resolución 105 de 2017 de la VRA, debe estar autorizado por la Dirección de Relaciones Exteriores DRE para la inscripción de esta asignatura.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2028822)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Docente Ajuste Resto "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2028914": {
  "cod": "2028914",
  "codigoSIA": "2028914",
  "nombre": "Géneros, feminismos y diversidades UN",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta Cátedra de Género de Facultad debe comprenderse desde el proceso de construcción y diálogo que hubo previo a ella, que tuvo lugar en el espacio de trabajo Triestamentario de la Mesa de Género de Facultad. Allí, durante dos meses estudiantes, dirección de bienestar y algunes profes, trabajamos esta propuesta con dedicación y compromiso.\nEjes Transversales\n1. Conocimientos y Experiencias Situadas: diálogo cultural y de saberes\n&#9679; Es importante que a través del respeto, el debate , el cuestionamiento propio y amplio frente a las problemáticas, la cátedra de género de la facultad sea un espacio que potencie y reconozca la participación de saberes y experiencias diversas que permitan un diálogo cultural situado que enriquezca las perspectivas, debates y posibilite un abordaje integral de los mismos.\n\n2. Reflexividad: entre lo micro-macro político\n&#9679; Teniendo en cuenta que la cátedra está construida con el objetivo de que las y los participantes se permitan una interpelación personal y colectiva de los temas teórico-políticos tratados, la idea es que puedan hacer este ejercicio desde una reflexión constante frente a su posición respecto a factores como la clase, género y raza para de esa manera tener una mejor comprensión - tanto propia como hacia las/os demás- de los aportes que se realizan, los sesgos que puedan tener, pero también de las potencialidades de construcción conjunta, crítica y diversa.\n\n3. Participación SentiPensante: empatía, escucha, etc.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2028914)",
    "grupos": []
   }
  ]
 },
 "2029046": {
  "cod": "2029046",
  "codigoSIA": "2029046",
  "nombre": "La desaparición y búsqueda de personas en el contexto y en razón del conflicto armado en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Objetivo General\n: Promover un espacio para la discusión amplia y desde múltiples perspectivas sobre la desaparición de personas en el contexto y en razón del conflicto armado en Colombia, y de los procesos de búsqueda de las personas dadas por desaparecidas, tanto en su trámite mediante la justicia ordinaria, como en el marco de los procesos de justicia transicional y fundamentalmente en el marco del&#8203;&#8203;&#8203;&#8203;&#8203;&#8203; &#8203;&#8203;Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz Estable y Duradera.\n\nObjetivos específicos\n: i. Conocer los antecedentes y las dinámicas que caracterizan el proceso de la búsqueda de las personas dadas por desaparecidas realizado desde el Estado colombiano, incluyendo la búsqueda humanitaria y extrajudicial desarrollada por la UBPD en el marco del SIVJRNR creado por los acuerdos de paz.\n\nii. Evidenciar las necesidades, impactos, expectativas, particularidades, reivindicaciones, saberes, experiencias, y aprendizajes de las personas que buscan (familiares, allegados, organizaciones, comunidades) y la manera en que se concretiza su lucha por la verdad, la memoria, la justicia y la reparación.\n\niii. Debatir sobre los retos y desafíos que enfrenta la búsqueda de las personas dadas por desaparecidas en el contexto de la continuidad del conflicto armado en Colombia.\n\n\nConceptos previos: En la retórica de los familiares, allegados y organizaciones que buscan a las personas desaparecidas en contexto y razón del conflicto armado colmbiano, pero también otros buscadores en el mundo, está de manera muy constante la idea de abandono de la sociedad y del Estado",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029046)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Remota - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Clemencia Del Pilar Castro Vergara",
       "Sebastian Cuellar Sarmiento",
       "Claudia Patricia Sierra Pardo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 250,
      "sesiones": [
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029102": {
  "cod": "2029102",
  "codigoSIA": "2029102",
  "nombre": "Análisis crítico de medios de comunicación y redes digitales",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Ofrecer elementos teóricos y conceptuales para la comprensión del funcionamiento de los sistemas de medios de comunicación, sus interacciones mediáticas y su articulación con las redes sociales.\n\nConceptos Previos: Metodología: Clases magistrales, Ejercicios y talleres de recepción activa de medios, Trabajo colectivo sobre lecturas teóricas y metodológicas, Presentación y análisis de experiencias prácticas de recepción crítica y de producción alternativa de medios.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029283": {
  "cod": "2029283",
  "codigoSIA": "2029283",
  "nombre": "El arte, las terapias y el cuidado de la salud humana",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura elegible El arte, las terapias y el cuidado de la salud humana está orientada a ofrecer elementos teóricos para reconocer el aporte que hacen las terapias fundamentadas en la creación, la comunicación y las experiencias de expresión artística, dentro de las que se encuentran las tradicionales (dibujo, pintura, escultura) como las modernas (fotografía y video) y la música, en el contexto del cuidado de la salud humana. Este se pretende como un espacio para colocar en contexto el arte y sus diferentes expresiones como herramientas posibles terapéuticas en disciplinas como la enfermería y otras del area de la salud.\n\nConceptos Previos: Atención primaria en salud, psicología del ciclo vital, intervenciones en salud, ética de las profesiones en salud, salud mental.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029283)",
    "grupos": []
   }
  ]
 },
 "2029315": {
  "cod": "2029315",
  "codigoSIA": "2029315",
  "nombre": "Pedagogías y antipedagogías para potenciar el aprendizaje y bienestar de estudiantes universitarios",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Teorías, modelos y experiencias concretas sobre Pedagogías y antipedagogías para potenciar el aprendizaje y bienestar de las y los estudiantes universitarios. Estudiar trayectorias de aprendizaje y educación que permiten comprender aspectos fundamentales en la construcción del conocimiento. Dar herramientas para mejorar la capacidad de aprender en los estudiantes, que incrementen su nivel de satisfacción con la vida universitaria y su competencia en el proceso de formación profesional. Cómo las verdaderas motivaciones intrínsecas, los entusiasmos y las necesidades vitales concretas de conocimiento inciden directamente en el aprendizaje y la educación. Este curso contribuye explícitamente a entender y reducir la procrastinación - aplazamiento.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029321": {
  "cod": "2029321",
  "codigoSIA": "2029321",
  "nombre": "Derecho y transformaciones sociales",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El derecho como escenario de emancipación y cambio social se propone que la asignatura aborde desde un contexto histórico desde las visiones de statu quo, control social y el derecho como emancipación.\n\nConceptos Previos: Sociología Jurídica, bases de investigación.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2029321)",
    "grupos": []
   }
  ]
 },
 "2029331": {
  "cod": "2029331",
  "codigoSIA": "2029331",
  "nombre": "Teorías feministas y de género: ópticas interseccionales en teorías, investigación y praxis social",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las lógicas identitarias en el pensamiento u ópticas interseccionales se encuentran en la ambivalencia de perder su potencia transformadora de los esquemas de opresión de los regímenes de poder que se impone en la interseccionalidad operativa o funcional y por otro lado la posibilidad de seguir construyendo desde la diferencia afirmativa las estrategias de defensa situada y de deconstrucción de esos regímenes de poder. Así, «dadas sus fortalezas para conceptualizar la simultaneidad, la sistematicidad, la asimetría y las estrategias dependientes del contexto contra la opresión, descolonizar su reducción a teorías identitarias, la interseccionalidad es una importante herramienta analítica para desmontar la sistematicidad de la opresión que enfrentan las mujeres y niñas en el Sur global» (Ruiz, 2017, p. 345), estas apuestas y aportes los situaremos en la discusión sobre los feminismos descoloniales y la impronta en los análisis críticos de la raza y la clase que se desarrollaban desde la década de los 70 del siglo XX.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029352": {
  "cod": "2029352",
  "codigoSIA": "2029352",
  "nombre": "A luchar por la educación superior I: de servicio a derecho fundamental",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La política educativa en Colombia ha sido cimentada desde políticas neoliberales de privatización y mercantilización del conocimiento. El movimiento universitario se ha organizado para impulsar el desarrollo histórico de un nuevo modelo que reconfigure la educación como derecho fundamental y bien común. Esta reconfiguración en la política educativa requiere de la apertura de espacios académicos, políticos, culturales y artísticos de carácter colectivo, amplio, horizontal, contrahegemónico y de transformación para la reflexión del movimiento universitario y del conjunto de la sociedad colombiana.\nA partir de esta necesidad, el estamento estudiantil desde las distintas facultades de la UNAL Sede Bogotá, reconoció diferentes problemáticas estructurales que atraviesan a la comunidad universitaria y al modelo mismo de la Educación Superior, por lo que decide ejercer procesos de organización y cualificación internas que desencadenan en Paro Estudiantil. De este mecanismo, se exige una Mesa de Negociación con la Vicerrectoría, en la cual se socializa la propuesta Mesas de Trabajo por la Constituyente -METCO y se acuerda la implementación de seis Mesas de Trabajo de carácter multiestamentario: A. Democracia y Autonomía Universitaria, B. Modelo de Financiamiento, C. Política de Género, D. Bienestar Universitario, E. Seguridad y Derechos Humanos y, F. Relación I.E.S- Sociedad.\n\nObjetivo: Analizar críticamente el estado histórico y actual de los ejes: Democracia y Autonomía Universitaria, Modelo de Financiamiento, Política de Género, Bienestar Universitario, Seguridad y DDHH, Relación IES ¿ Sociedad; con el fin de aportar a la identificación de necesidades y problemáticas de la política educativa y del movimiento universitario en la configuración de la Educación Superior como derecho fundamental y bien común.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TALLER (2029352)",
    "grupos": [
     {
      "grupo": "Mesa: Bienestar universitario",
      "codigoGrupo": "4",
      "profesores": [
       "Andres Sicard Currea"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Mesa: Democracia y autonomía universitaria",
      "codigoGrupo": "1",
      "profesores": [
       "Andrea Carolina Jimenez Martin"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Mesa: Política de género",
      "codigoGrupo": "3",
      "profesores": [
       "Laura Espinosa Botero"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Mesa: Relación I.E.S - Sociedad",
      "codigoGrupo": "6",
      "profesores": [
       "Francisco Javier Toloza Fuentes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     },
     {
      "grupo": "Mesa: Seguridad y derechos humanos",
      "codigoGrupo": "5",
      "profesores": [
       "Erika Constanza Sabogal Muñoz"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029357": {
  "cod": "2029357",
  "codigoSIA": "2029357",
  "nombre": "Cuerpo y poder",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Hablar del cuerpo no solo es referirnos a un ente anatómico del cuál se ocupa la medicina, sino abordar la identidad de un yo que es sujeto de poder y objeto de las instituciones en que transita su existencia. Aunque se concibe que hablar del cuerpo es hablar de todo lo concerniente a los individuos, se hace indispensable cierta distancia para comprender su acaecer. Es por ello que, referirnos a la corporeidad, es pensar en las acciones que realizamos cuando dentro de los procesos de sociabilidad y socialización, tomamos decisiones sobre su hacer y parecer, por lo cual es importante abordarlo tanto fenomenológicamente como desde lo cultural y la simbología con que se lee, se significa y se controla. Para tal fin, escogimos los núcleos problémicos contemporáneos, en que entran en debate el género, la estética, y las concepciones de lo público y lo privado alrededor de la corporeidad. Intentaremos comprender los diversos paradigmas y discursos que se traducen en políticas, prejuicios, decisiones y conceptos, que le atañen a el habitáculo vital de los seres humanos, el cual no debe separarse de su ser, pero sí merece una reflexión profunda desde las ciencias políticas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029357)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Catalina Toro Perez",
       "Maria Clara Salive Puyana"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "07:00",
        "fin": "10:00",
        "lugar": "AULA 225",
        "salon": "610-225",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029371": {
  "cod": "2029371",
  "codigoSIA": "2029371",
  "nombre": "Estética de la vida",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso propone una aproximación selectiva de pensamiento, modos y prácticas sociales que constituyen pilares de una formación profesional integral, civilidad y ética desde referencias y contextos de una realidad y su cultura como bases privilegiadas de la ética e institucionalización en la educación-profesionalización universitaria. En este caso se abordan campos y temas relevantes con el propósito de reflexionar como los naturales y diversos modos del conocimiento y relaciones de prácticas sociales, definen la conciencia humana ante los desafíos trascendentes de sostenibilidad del espacio mundo, y en consecuencia de la vida.\n\nConceptos Previos: 1. Estudiantes de pregrado que constituyen todas las carreras y facultades de la universidad con prospectiva de extensión a todas las sedes. 2. Establecer la comprensión del fin pedagógico de los cursos electivos como fundamentales en la formación profesional e integral del profesional y ciudadano. 3. Evidenciar la realidad y emergencia universal de la humanidad con énfasis particular en Colombia, a través del contenido temático del curso. Objetivo General Accionar una reflexión y diálogo colectivo como medio y arbitrio de la enseñanza en el proceso de profesionalización en la educación superior en cuanto primicias de construcción de un juicio crítico sustantivo e inteligente con valor prospectivo de progreso y empatía social.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029371)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Aurelio Alberto Horta Mesa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 130,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO MARGARITA GONZALEZ",
        "salon": "225-AUD2",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029382": {
  "cod": "2029382",
  "codigoSIA": "2029382",
  "nombre": "Rebeldías y cárcel",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cárcel se constituye en un espacio de control y disciplinamiento social y político. Por su parte, las rebeldías, siguen siendo consideradas como espacios ajenos a la democracia, y la protesta está lejos de ser considerada un derecho. Nuestras miradas y comprensiones sobre estos dos procesos (cárcel y rebeldías) están enmarcadas en miradas hegemónicas que refuerzan una perspectiva punitivista y basada en la venganza de la cárcel; y una mirada sospechosa de las rebeldías. Este curso se propone retar estas perspectivas hegemónicas por medio de la discusión crítica de los aspectos conceptuales, históricos y vivenciales de las cárceles y las rebeldías desde una perspectiva abolicionista de la prisión y promotora de las desobediencias. Es así como este curso provee a las y los estudiantes reflexiones diversas y ancladas en las realidades vivenciales de prisioneras y prisioneros, y sus rebeldías y procesos de lucha.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029382)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Maria Teresa Pinto Ocampo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-2021",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029398": {
  "cod": "2029398",
  "codigoSIA": "2029398",
  "nombre": "El engaño y la política: aproximación histórica y comparada",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso presenta una selección de nuevas traducciones de textos clásicos tomados de varias tradiciones, principalmente la occidental, acerca del problema del engaño y la política. Estos textos invitan a una reflexión acerca de la mentira como método de lucha, equivalente a la perfidia en los conflictos armados; al uso del engaño como un medio legítimo para lograr la adhesión al orden por parte de los gobernados; así como a la distorsión de las fronteras entre la verdad y la mentira en los regímenes totalitarios, y también en los llamados democráticos. La última parte del curso presenta un panorama de la discusión actual acerca de la llamada posverdad, así como de la difusión de noticias falsas y teorías conspirativas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029398)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "JUAN GABRIEL GOMEZ ALBARELLO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-3030",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029408": {
  "cod": "2029408",
  "codigoSIA": "2029408",
  "nombre": "Introducción a la programación y ciencia de datos para el área de salud",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se espera que en los próximos 20 años el 90% de los trabajos del secto salud requiera algún tipo de habilidad tanto digitales como de manejo de datos. Bajo esta perspectiva, para las siguientes generaciones de personal de salud no entender los fundamentos de la programación será el equivalente a, hoy en día, no saber leer.\n\nEl presente curso busca introducir a los estudiantes a los conceptos básicos de programación y pensamiento algorítmico, sirviendo como fundamento de base tanto para aquellos que deseén ampliar sus conocimientos en áreas afines, e.g. la analítica de datos o el procesamiento de imágenes médicas, como para aquellos que deseén usar la algorítimica como una heramienta para lograr que un computador cumpla una tarea automatizable.\n\nEl curso usará el lenguaje de programación Python tanto por sus capacidades para generar secuencias de comando para la automatización de tareas (en inglés \"scripts\") como por su amplia variedad de librerías para análisis y visualización de datos.\n\nA lo largo del curso el estudiante desarrollará sus horas de trabajo autónomo mediante la elaboración de pequeños programas y proyectos entregables. Esta parte del trabajo es fundamental para que experimenten los errores comunes y facilmente corregibles que suceden al escribir código y así mismo mejoren sus habilidades de edición y depuración de software.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICO PRÁCTICA (2029408)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "JUAN DAVID GARCIA ARTEAGA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029414": {
  "cod": "2029414",
  "codigoSIA": "2029414",
  "nombre": "Semillero de investigación en artes",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El semillero de investigación es un espacio para acompañar las iniciativas, inquietudes e intereses de investigación de lxs estudiantes de la facultad de artes. Este semillero se reúne en torno al proyecto editorial estudiantil REVISTA ars 301 y las actividades relacionadas con ella.\nEl trabajo del semillero de investigación se organizará en función de las etapas previstas para la realización de la publicación: realización convocatoria, recepción de material, actividades de divulgación, lectura de material, organización conceptual, búsqueda de recursos, etc. El objetivo específico dependerá, en consecuencia, de la etapa de la publicación. Sin embargo, como semillero de investigación el resultado de la experiencia académica será la comprensión y adquisición de herramientas prácticas de investigación y trabajo en grupo. Para ello, cada actividad del semillero estará articulado con una serie de tareas prácticas orientadas y guiadas por la necesidad de reconocer en el horizonte la materialidad de una publicación estudiantil.\n\nConceptos Previos: Nos apoyaremos especialmente en la programación de actividades que ofrece regularme el Programa de Formación en Competencias Informacionales de la División de Bibliotecas de la Universidad Nacional de Colombia de la Sede Bogotá. Esta programación ofrece a lxs estudiantes una serie de recursos muy útiles para diferentes momentos de la investigación.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029414)",
    "grupos": []
   }
  ]
 },
 "2029421": {
  "cod": "2029421",
  "codigoSIA": "2029421",
  "nombre": "Construcción de paz y justicia transicional en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La firma del Acuerdo de Paz con las antiguas FARC-EP, sumado a pequeños avances anteriores que contribuyeron también en situar a las víctimas en el centro de la acción institucional, ha implicado para Colombia la apertura y desarrollo de un nuevo andamiaje institucional y el reto de profundizar la formación de ciudadanía critica capaz de comprender lo que estos cambios implican para las dinámicas socio-políticas del país.\nAsuntos como la construcción de verdad, la reparación integral, la justicia restaurativa y reparativa, las justicias propias, el perdón y la reconciliación, entre otros, inscritos en un contexto de diversidad étnica y territorial y atravesados por desafíos adicionales vinculados a los enfoques de género y diferenciales, son asuntos relevantes (JEP, 2023) que deben ser discutidos e incorporados en procesos de formación profesional.\nEsta cátedra busca generar espacios que permitan conocer, reflexionar, debatir sobre los fundamentos, sentidos y dilemas de la justicia transicional, sus desarrollos en Colombia y el trabajo específico de la JEP.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029421)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Jenniffer Vargas Reina"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 60,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "SALON OVAL DARIO MESA CHICA",
        "salon": "225-112",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029458": {
  "cod": "2029458",
  "codigoSIA": "2029458",
  "nombre": "Aprendizaje automático para científicos",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este es un curso introductorio al aprendizaje automático (AA) (machine learning - ML por sus siglas en inglés) pensado para estudiantes de ciencias naturales, en particular, estudiantes de todos los programas de pregrado de la Facultad de Ciencias, y enfocado al uso de estos nuevos métodos computacionales en problemas científicos. El curso introduce conceptos, técnicas y aplicaciones del AA desde una perspectiva de la modelación y la predicción en problemas científicos cubriendo un amplio espectro de disciplinas, y abordando desde temas básicos como clasificación y regresión lineal hasta enfoques más actuales como redes neuronales y acercamientos al aprendizaje profundo, con aplicaciones a imágenes, series temporales, catálogos, y en general bases de datos de relevancia científica. El curso ofrecerá al estudiante además de las ideas e intuición básica detrás del AA, un entendimiento formal del tema que le permitirá responder cuándo, cómo y por qué utilizar estos métodos en su trabajo científico.\nObjetivos\n- Comprender y explicar la formulación de problemas específicos del AA.\n- Identificar problemas en su disciplina científica que pueden ser abordados de forma eficiente con AA.\n- Aplicar métodos básicos de aprendizaje AA, no supervisado y de aprendizaje reforzado, en general bases de datos de relevancia científica.\n- Evaluar de forma crítica los alcances y limitaciones actuales del AA aplicado a problemas científicos.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA ( 2029458)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Leonardo Viviescas Ramirez",
       "William Fernando Oquendo Patiño"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 26,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029485": {
  "cod": "2029485",
  "codigoSIA": "2029485",
  "nombre": "Cátedra de género Luz Gabriela Arango Gaviria",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra de género Luz Gabriela Arango Gaviria se enmarca en las acciones emprendidas por la Sede Bogotá de la Universidad Nacional de Colombia, dirigidas al fortalecimiento de la prevención y atención de situaciones de violencias basadas en género. Se une al esfuerzo de fomentar más espacios académicos que brinden recursos teóricos y reflexivos para pensar los problemas de equidad de género en la sociedad y en la Universidad.\nEl nombre de esta cátedra se hace en memoria de Luz Gabriela Arango Gaviria, académica feminista y quien fuera profesora de la Escuela de Estudios de Género. La profesa Arango destacó por sus trabajos académicos sobre la situación de las mujeres trabajadoras y la economía del cuidado, además de participar activamente en la creación de políticas institucionales en torno a las mujeres y el género como el Acuerdo 035 de 2012.\nEsta asignatura busca crear aprendizaje significativo que promueva capacidades de reflexión teórica, ética y práctica sobre las relaciones de género y las políticas que se establecen para garantizar la equidad en la vida universitaria y a nivel nacional desde una perspectiva situada que reconozca las desigualdades de clase, raza, género, entre otras. El curso propone una aproximación a los conceptos y teorías vinculadas al campo de los estudios de género y feministas, y un análisis sobre los instrumentos normativos, pedagógicos y artísticos para propiciar la equidad de género.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029485)",
    "grupos": []
   }
  ]
 },
 "2029500": {
  "cod": "2029500",
  "codigoSIA": "2029500",
  "nombre": "Curso de contexto: Promoción de la salud y derecho humano a una alimentación saludable",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se propone con este curso de contexto abordar de manera amplia la promoción de la salud, como componente importante de la Salud Pública. En la etapa inicial del desarrollo del programa se abordarán aspectos relacionados con la conceptualización, líneas estratégicas y su diferencia con iniciativas de prevención de la enfermedad.\n\nLuego se concentrarán las estrategias de la Promoción de la Salud en el campo de la alimentación y la nutrición. En este sentido, se incentivará la investigación y el trabajo autónomo del estudiante en el estudio de estrategias nacionales que están en proceso para lograr su implementación y que buscan fomentar el derecho humano a una alimentación saludable, tales como: promoción de la lactancia materna y alimentación complementaria saludable, etiquetado frontal de advertencia para productos comestibles y bebibles ultraprocesados, regulación de la promoción y la publicidad de productos comestibles y bebibles ultraprocesados, impuestos a las bebidas endulzadas, estrategía para la reducción del consumo de sodio y entornos alimentarios escolares saludables.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORÍCA (2029500)",
    "grupos": []
   }
  ]
 },
 "2029505": {
  "cod": "2029505",
  "codigoSIA": "2029505",
  "nombre": "Hacia dónde vamos? Visiones sobre el futuro de la humanidad",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En un mundo caracterizado por una aceleración sin precedentes del cambio social y tecnológico, la reflexión sobre el futuro de la humanidad se vuelve más vital que nunca: la inteligencia artificial, la biotecnología, la digitalización y la conectividad global están transformando la forma en que la que vivimos, pensamos, trabajamos, sentimos y nos relacionamos. Entender cuidadosamente cómo estas fuerzas están dando forma al mañana nos permitirá estar mejor preparados para abordar los desafíos y aprovechar las oportunidades que se avecinan.\nNos embarcaremos en un viaje intelectual apasionante hacia el entendimiento de los retos, oportunidades y riesgos que conformarán la sociedad planetaria del siglo XXI y más allá. Esta experiencia ofrece una exploración de cuestiones de carácter global que abarcan desde el cambio climático y la inteligencia artificial, hasta la diversidad cultural y la ética, en un intento de comprender los principales impactos sociales, políticos y económicos de las transformaciones que estamos viviendo.\nEste seminario ofrece a los participantes las herramientas y el conocimiento relevante para abordar estos temas y participar en conversaciones críticas sobre el futuro de la humanidad; en este sentido, no solo promueve la adquisición de conocimientos, sino que también se centra en el desarrollo de habilidades críticas y fomenta un pensamiento proactivo en la construcción de un futuro sostenible y ético.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA 2029505",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Diana Marcela Rojas Rivera"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "10:00",
        "fin": "13:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-3030",
        "edificio": "224 - Manuel Ancizar",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029509": {
  "cod": "2029509",
  "codigoSIA": "2029509",
  "nombre": "Sistemas Agroalimentarios: vínculos entre ambiente, sociedad y desarrollo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Los sistemas agroalimentarios sustentables toman una mayor importancia frente a las evidencias empíricas y enfoques teóricos que no han conseguido dar soluciones viables a los desafíos actuales. Estos desafíos son múltiples y su comprensión requiere de análisis de procesos históricos complejos, interdisciplinares y transectoriales. Conocer los debates recientes y los diversos abordajes teóricos permitirán transcender la comprensión de las relaciones de los actores, grupos de interés e instituciones de los sistemas agroalimentarios.\n\nEl objetivo de aprendizaje general es identificar los desafíos actuales para los sistemas agroalimentarios sustentables a partir del análisis de contextos propios, para la formulación de propuestas efectivas y pertinentes, que contribuya con la solución de los problemas y desafíos identificados.\n\nLa asignatura Sistemas Agroalimentarios: vínculos entre ambiente, sociedad y desarrollo se organiza en módulos teórico-prácticos compuestos por la presentación de temas relevantes vinculados al desarrollo rural, la agricultura y la alimentación.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA(2029509)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Nathalia Valderrama Bohórquez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 305",
        "salon": "500-305",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON DE CLASE 304",
        "salon": "500-304",
        "edificio": "500 - Ciencias Agrarias",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029512": {
  "cod": "2029512",
  "codigoSIA": "2029512",
  "nombre": "Democracia para extraterrestres",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Esta asignatura está diseñada para un público muy amplio, por lo cual no requiere ningún conocimiento previo, especialmente tratándose de estudiantes universitarios. Está basada en el libro que acabo de publicar con la editorial planeta y el sello Ariel, ambos con el mismo nombre de la asignatura.\n\nEn ella se le va a enseñar a los estudiantes, basado, sobre todo en los capítulos de este mismo libro y en los vídeos del canal, cuáles son los mitos que hay en torno a la democracia y como se puede demostrar que no son basados en hechos, por lo cual puede perjudicarla si no se hacen estas aclaraciones para los ciudadanos. También analizamos los insultos que se le suelen hacer a los sistemas democráticos y los sentimientos negativos que generan, para dar explicaciones de porque se dan esas situaciones y como explicarlas desde la ciencia política y el sentido común, que en general son basadas en prejuicios y apreciaciones, no sensatas de la realidad.\n\nEn síntesis, tanto el Canal, como la asignatura como el libro, son una defensa de la democracia, en unos momentos en los qué incluso en latín barómetro está hablando de recesión democrática en América Latina, e incluso the Economist habla de retrocesos democráticos en el mundo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029512)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "David Alberto Roll Velez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AULA 209",
        "salon": "610-209",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029556": {
  "cod": "2029556",
  "codigoSIA": "2029556",
  "nombre": "Introducción a la cultura húngara",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura de \"Introducción a la Cultura Húngara\" se centra en proporcionar a los estudiantes un conocimiento introductorio y amplio sobre diversos aspectos culturales de Hungría. Esto suele incluir:\n\n1. *Contexto histórico:* Exploración de la historia de Hungría desde sus orígenes hasta el presente, abordando eventos significativos, períodos clave y figuras destacadas.\n\n2. *Literatura y arte:* Estudio de la literatura húngara, autores relevantes, obras destacadas y movimientos literarios. Además, se analiza el arte húngaro, incluyendo pintura, escultura y arquitectura representativos.\n\n3. *Música y danza:* Análisis de la música folclórica, tradicional y contemporánea de Hungría, así como las formas de danza y expresión cultural asociadas.\n\n4. *Costumbres y tradiciones:* Examinar las festividades, prácticas culturales, gastronomía típica y otras tradiciones arraigadas en la sociedad húngara.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clasee Teórica (2029556)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Zsoka Horvath "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 2",
        "salon": "225-AULA2",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029557": {
  "cod": "2029557",
  "codigoSIA": "2029557",
  "nombre": "Lengua húngara I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura de lengua húngara I se centra en los fundamentos básicos del idioma húngaro. Esta asignatura incluye el estudio de aspectos como la gramática elemental, vocabulario introductorio, pronunciación, escritura y comprensión básica del idioma. Los estudiantes aprenderán a formar oraciones simples, mantener conversaciones básicas y comprender textos sencillos en húngaro. Esta asignatura proporciona una introducción fundamental al idioma y la cultura húngara para principiantes.\n\n\nEvaluaciones:*Examen parcial (30%) *Examen final (30%) *Escritura 1,2 (20%) *Asistencia (20%)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teóric (2029557)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Zsoka Horvath "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "09:00",
        "fin": "11:00",
        "lugar": "SALON 106",
        "salon": "225-106",
        "edificio": "225 - Rogelio Salmona",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029589": {
  "cod": "2029589",
  "codigoSIA": "2029589",
  "nombre": "Física en la instrumentación en fisiología",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura de \"Física en la Instrumentación en Fisiología\" es un curso que combina los principios fundamentales de la física con la aplicación práctica de la instrumentación en el campo de la fisiología. Su objetivo principal es proporcionar a los estudiantes una comprensión profunda de cómo se utilizan los principios físicos en el diseño, desarrollo y funcionamiento de los instrumentos utilizados para medir y analizar diferentes aspectos del funcionamiento del cuerpo humano.\nDurante el curso, los estudiantes estudian conceptos de física básica, como mecánica, electricidad, magnetismo y ondas, luego exploran cómo estos conceptos se aplican en la creación de instrumentos fisiológicos. Esto puede incluir dispositivos como electrocardiógrafos, espirómetros y otros disponibles en el Laboratorio de Fisiología.\nAdemás de comprender cómo funcionan estos instrumentos, los estudiantes también aprenden sobre los principios de calibración, precisión y exactitud en la medición fisiológica, así como sobre los desafíos y limitaciones asociados con la instrumentación en el contexto de la fisiología humana y animal.\n\nConceptos Previos: Anatomía y fisiología.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029589)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Juan Carlos Lizarazo "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 16,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "SALON DE CLASE",
        "salon": "471-518",
        "edificio": "471 - José Félix Patiño Restrepo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029607": {
  "cod": "2029607",
  "codigoSIA": "2029607",
  "nombre": "Historia de las drogas",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Las drogas han sido usadas por el ser humano con fines medicinales y recreativos desde hace miles de años. Su producción, comercio y consumo se generalizó durante la \"revolución psicoactiva\", que es el nombre que el historiador David Courtwright dio al proceso de rápida difusión que tuvo lugar entre los siglos XVI-XVIII. Aunque la relación con las drogas ha sido en ocasiones ambivalente, más recientemente, desde fines del siglo XIX, se establecieron las bases de un régimen prohibicionista que ha tenido efectos no previstos, muchos de carácter negativo, que han afectado sobre todo a algunos grupos de consumidores y a ciertos países productores. En el presente parece haber ocurrido un aflojamiento de ese prohibicionismo. Colombia, como país productor, es protagonista de estos cambios. Varios de las lecturas a realizar son en inglés.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029607)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Andres Lopez Restrepo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "11:00",
        "fin": "14:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-3030",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029611": {
  "cod": "2029611",
  "codigoSIA": "2029611",
  "nombre": "Lengua inga II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso de Lengua Inga II es la prolongación de la formación impartida en el curso Lengua Inga I. Se hace énfasis en los constituyentes lingüísticos culturales y comunicativos. En este nivel de trabajo se presenta pequeños textos en forma de diálogos.\nVocabulario adicional, notas gramaticales y conjugación de algunos verbos.\nDurante el curso, la parte lingüística se complementa con la participación de hablantes y apreciación en algunos rituales del cabildo inga de Bogotá con los estudiantes. Esto sirve para profundizar el conocimiento, manejo, uso de la cultura y la cosmovisión.\n\nConceptos Previos: Haber cursado y aprobado el curso de Lengua Inga I.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase teórica (2029611)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Francelina Muchavisoy Becerra"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029626": {
  "cod": "2029626",
  "codigoSIA": "2029626",
  "nombre": "Intercambio académico internacional - IV",
  "creditos": 0,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Se crea codigo generico, teniendo en cuenta oficio el oficio B.1.015-097-24, de la Oficina de Relaciones Interinstitucionales, ORI-Sede Bogotá",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase teorica (2029626)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 10,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029639": {
  "cod": "2029639",
  "codigoSIA": "2029639",
  "nombre": "Historia y cultura Iraní.",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso \"Historia y cultura iraní\", cuyo objetivo es familiarizar a los estudiantes con diversos aspectos de la cultura y civilización iraníes desde la antigüedad hasta la actualidad, siempre ha sido un tema destacado en el mundo. El motivo de esta atención son los miles de años de historia y cultura de Irán.\nConocer e introducir las manifestaciones de la civilización y la cultura de Irán y su historia es el objetivo principal de esta unidad del curso, y tener conocimientos sobre Irán ayuda a saber cómo tratar a los diferentes grupos étnicos de Irán.\nEste curso cubre historia, arqueología, literatura, misticismo, lenguas antiguas, cultura y arte,\nantropología, subculturas, folclores locales, artesanía y todo lo que de alguna manera esté relacionado con el Irán cultural.\nDe hecho, \"Historia y cultura iraní\" es una puerta de entrada al vasto mundo de la historia, la cultura, la civilización y la lengua iraníes. En esta lección se presentan diferentes aspectos de la identidad iraní desde la antigüedad hasta la actualidad.\nEn cuanto a la importancia de este curso, se puede decir que los estudios culturales sobre Irán amplían el conocimiento general de los estudiantes y los introducen a una de las civilizaciones más antiguas del mundo.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teórica (2029639)",
    "grupos": []
   }
  ]
 },
 "2029650": {
  "cod": "2029650",
  "codigoSIA": "2029650",
  "nombre": "One Health: una visión integral en salud",
  "creditos": 1,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura proporciona una visión integral de los desafíos sanitarios a nivel global. Comenzando con una introducción a One Health y su importancia global, los estudiantes exploran la definición y evolución del enfoque integrado de One Health, con un énfasis en los principios de colaboración interdisciplinaria y comprensión de sistemas complejos. A lo largo del curso, se examinan los fundamentos de medicina humana y veterinaria en el contexto de One Health, así como las interconexiones entre los ecosistemas y la salud. Se enfatiza la necesidad de procesos transdisciplinarios para abordar los problemas de salud única, incluyendo el uso de tecnología y Big Data, el desarrollo de políticas públicas y la comunicación efectiva de riesgos. Además, se analizan los desafíos actuales y futuros en la implementación de enfoques de One Health, con énfasis en la colaboración y vigilancia integrada. Los estudiantes también participan en casos de estudio y proyectos prácticos para aplicar los conceptos aprendidos en situaciones del mundo real.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029650)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "CLAUDIA MARINA MUÑOZ DIAZ"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 50,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AUDITORIO MULTIPLE DE POSGRADO- INST. DE BIOTECNOLOGIA",
        "salon": "224-2146",
        "edificio": "224 - Manuel Ancizar",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029655": {
  "cod": "2029655",
  "codigoSIA": "2029655",
  "nombre": "Caminos de resistencia: Palestina en el contexto actual",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La catedra Caminos de resistencia: Palestina en el contexto actual tiene como objetivo visibilizar la historia más reciente del pueblo Palestino y su configuración institucional. La catedra se enfoca entre otros en: La identidad de Palestina; La ocupación como concepto y movimiento; subjetivación y orientalismo; &#8288;&#8288;Palestina de todas; Cisjordania, Jerusalén y los palestinos olvidados y La diáspora palestina; y, Gaza en el siglo XXI. Esta catedra permitirá comprender desde un análisis de la historia contemporánea del Estado de Palestina como sus diversas expresiones económicas, sociales, políticas y culturales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029655)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Andrea Carolina Jimenez Martin"
      ],
      "facultad": "SEDE BOGOTÁ",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 201,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AUDITORIO CAMILO TORRES - Facultad de Derecho, Ciencias Políticas y Sociales",
        "salon": "201-106",
        "edificio": "201 - Arturo Valencia Zea",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029656": {
  "cod": "2029656",
  "codigoSIA": "2029656",
  "nombre": "Cátedra de Sede Jorge Eliécer Gaitán: La educación en Colombia",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso tiene como propósito brindar a los estudiantes un espacio de reflexión y diálogo que les permita la comprensión del contexto en el que se desenvuelve el sistema educativo colombiano (primera infancia, básica, media y superior), su evolución en el tiempo y su estado actual desde aspectos esenciales de su funcionamiento, problemática y posibilidades.\n\nSe desarrollará en el marco de la Cátedra de Sede Jorge Eliécer Gaitán, la cual pretende constituir un espacio universitario de presentación y discusión de ideas, propuestas y reflexiones, en torno a la democracia, la ciudadanía, la educación, la convivencia, la paz, la pluralidad, la valoración de las diferencias, la promoción de los derechos humanos y la búsqueda de la equidad, la inclusión, el desarrollo social, político, económico, cultural y científico de la Nación Colombiana además de convertirse en medio para el diálogo entre la Comunidad Académica Universitaria y los ciudadanos.\n\nEl diseño pedagógico y didáctico del curso está orientado a que los estudiantes se sensibilicen sobre la realidad nacional y amplíen su comprensión de esta, especialmente sobre las problemáticas, los retos y las oportunidades del sector educativo en escenarios concretos.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": []
 },
 "2029726": {
  "cod": "2029726",
  "codigoSIA": "2029726",
  "nombre": "Menstruacion politicas corporales resistencias y emancipacion",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso se gesta a partir de la necesidad de crear espacios de diálogo, discusión y reflexión\ndentro de la academia en torno al ciclo hormonal, menstrual y ovulatorio, en tanto es un proceso\nfisiológico que se ha visto históricamente silenciado por las sociedades capitalistas y patriarcales\nen las que habitamos. Con ello, se propone explorar, a través un enfoque interdisciplinar guiado\npor la ciencia política, la sociología, la economía y las teorías feministas, los orígenes del\ndisciplinamiento de los cuerpos menstruantes y su marginalización en las sociedades capitalistas;\nlos debates que se han gestado en las últimas décadas tanto por actores estatales como no\nestatales respecto a la importancia de la salud menstrual dentro de la agenda pública\n(inter)nacional; y el rol de las instituciones en la formulación y/o implementación de políticas\npúblicas.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029726)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Nicolle Gonzalez Tuta"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 30,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029728": {
  "cod": "2029728",
  "codigoSIA": "2029728",
  "nombre": "Pensamiento Conservador Contemporáneo",
  "creditos": 2,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura pensamiento conservador contemporáneo, propone el análisis de los ejes trasversales del conservadurismo: providencialismo histórico, preferencia del prejuicio y la tradición, la convicción sobre una organización social jerárquica y desigual, la defensa de la propiedad privada, y las posiciones acerca de la reforma y el cambio social. Es importante superar las denominaciones generales que emplean el conservadurismo como sinónimo de derechismo, así como reconocer las raíces conservadoras, si las tiene, de los gobiernos de derecha actuales.\n\nEs necesario abrir los espacios de discusión y formación alrededor del pensamiento conservador en el programa de ciencia política de la Universidad Nacional de Colombia, aportando elementos para la comprensión de los fenómenos políticos actuales, teniendo en cuenta el auge de la derecha y la derecha radical en América y Europa, dado el peso político real de los gobiernos que hoy en día se inspiran en el conservadurismo o que hunden sus raíces en este pensamiento. Todo ello, con el propósito de que el estudiante pueda situar un pensamiento critico sobre los discursos de derecha y extrema derecha, reconociendo sus postulados teóricos de origen conservador y avanzando sobre aquellos que se asocian a ideologías o que carecen de fundamento.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029728)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Ivonne Patricia Leon Peñuela",
       "Julio Rafael Quiñones Paez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 35,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "AULA 225",
        "salon": "610-225",
        "edificio": "610 - CISU - Centro de Integración de Servicios Universitarios",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029730": {
  "cod": "2029730",
  "codigoSIA": "2029730",
  "nombre": "Cátedra de Sede - Manuel Ancízar: La justicia transicional de la jep aportes para la paz",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La cátedra ofrece un espacio de formación y debate sobre la justicia transicional en Colombia, con énfasis en el papel de la JEP en la construcción de paz. Se organiza en cuatro ejes temáticos. Primero, aborda el concepto, origen y evolución de la justicia transicional, profundizando en las diferencias entre justicia retributiva, transicional y restaurativa, así como en las tensiones entre verdad, justicia y paz. Luego, analiza la justicia transicional en Colombia y los esfuerzos para superar el conflicto armado, examinando sus causas y consecuencias, los procesos de negociación de paz y la evolución de la justicia transicional en el país con el aporte de expertas. El tercer eje se centra en el Acuerdo de Paz de 2016 y el Sistema Integral para la Paz, explorando su contexto, principales puntos, implementación y desafíos. Finalmente, el cuarto eje profundiza en los desarrollos, alcances y retos de la JEP, estudiando su estructura, metodología de macro casos, carácter restaurativo y centralidad de las víctimas, así como las acciones reparadoras. Se analizan los avances y desafíos en la investigación y juzgamiento de los máximos responsables. La cátedra concluye con la presentación de trabajos finales y una evaluación del curso.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029730)",
    "grupos": []
   }
  ]
 },
 "2029763": {
  "cod": "2029763",
  "codigoSIA": "2029763",
  "nombre": "Evolución y diversidad en insectos",
  "creditos": 4,
  "tipologia": "DISCIPLINAR OPTATIVA",
  "descripcion": "La asignatura desarrolla una introducción a la evolución y diversidad de los insectos. Los temas incluidos en la asignatura se enmarcarán en una serie de tópicos especiales que explican la evolución y diversificación de estrategias en la biología de los insectos, como son la filogenia de artrópodos y la posición de los hexápodos, origen del vuelo, tipos de metamorfosis y evolución de la holometabolia, relación planta e insectos pasada y presente, microbiota en insectos, estrategias de parasitoidismo, evolución de la sociabilidad, extinción y conservación. Además, se tendrá una historia de la entomología y sesiones de curaduría y manejo de colecciones.",
  "sinProgramar": false,
  "origen": [
   "plan 2513"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2029763)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Carlos Eduardo Sarmiento Monroy",
       "Fernando Fernandez Castiblanco",
       "JUAN PABLO BOTERO RODRIGUEZ",
       "Igor Dimitri Forero Fuentes",
       "Miguel Gonzalo Andrade Correa"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 24,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "11:00",
        "fin": "13:00",
        "lugar": "SALON DOCENTE",
        "salon": "425-102",
        "edificio": "425 - Instituto de Ciencias Naturales",
        "desde": "27/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029777": {
  "cod": "2029777",
  "codigoSIA": "2029777",
  "nombre": "Sánscrito I",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En el curso Sánscrito I forma parte de un plan de estudios formado por Sánscrito I y Sánscrito II. El propósito de estos dos cursos es darles a los estudiantes unas herramientas de léxico, morfología y sintaxis de sánscrito clásico tales, que en el curso Sánscrito III ya puedan empezar a leer el Ramayana en su versión original. El objetivo general de este curso es acercarse al devanagari, aprender léxico del sánscrito clásico, aprender morfología nominal y verbal. En este curso se busca familiarizarse con las peculiaridades sintácticas propias del sánscrito clásico.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2029777)",
    "grupos": []
   }
  ]
 },
 "2029778": {
  "cod": "2029778",
  "codigoSIA": "2029778",
  "nombre": "Sánscrito II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "En el curso Sánscrito II se continúa con el plan de estudios comenzado en Sánscrito I. El propósito de estos dos cursos es darle a los estudiantes unas herramientas de léxico, morfología y sintaxis de sánscrito clásico tales, que en el curso Sánscrito III ya puedan empezar a leer el Ramayana en su versión original. El objetivo general de este curso es consolidar el conocimiento del devanagari. Aprender léxico del sánscrito clásico. Aprender morfología nominal y verbal. Familiarizarse con las peculiaridades sintácticas propias del sánscrito clásico.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Clase Teorica (2029778)",
    "grupos": [
     {
      "grupo": "Grupo 1",
      "codigoGrupo": "1",
      "profesores": [
       "Juan Sebastian Paramo Rueda"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       },
       {
        "dia": 5,
        "diaTexto": "VIERNES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "AULA 208",
        "salon": "212-208",
        "edificio": "212 - José Agustín Blanco Barros",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029789": {
  "cod": "2029789",
  "codigoSIA": "2029789",
  "nombre": "El primer gobierno de izquierda en Colombia: elementos para un balance",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El triunfo del gobierno del presidente Gustavo Petro en las elecciones del año 2022 generó grandes expectativas. En un contexto caracterizado por los efectos de la pandemia, altos niveles de inconformismo y movilización social y limitaciones en la implementación del acuerdo de paz suscrito en el 2016 entre el gobierno nacional y la guerrilla de las FARC-EP, la posición como bandera y programa de gobierno de la narrativa del Cambio por la Vida, acompañado de la elección de una bancada importante del Pacto Histórico en el Congreso de la República y de la promesa del mandatario de buscar un gran acuerdo nacional, crearon emociones polarizadas que se expresaron entre la esperanza y el optimismo, por parte de sus votantes y seguidores, y el miedo y el pesimismo de los opositores.\nEl acceso al poder de Gustavo Petro y su bancada del Pacto Histórico, se reflejó también en diversos índices internacionales de medición de la democracia, como los de Freedom House o V-Dem, quienes valoraron positivamente la apertura del sistema político nacional a opciones diferentes a las que tradicionalmente habían gobernado el país. De igual forma, desde el contexto global se abrieron nuevas preguntas y perspectivas sobre lo que constituiría el primer gobierno que claramente puede considerarse como de izquierda en Colombia en términos de su política internacional, sus realizaciones en torno a la desigualdad social y la paz y su rol dentro de los gobiernos progresistas del continente.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029789)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase presencial",
      "codigoGrupo": "1",
      "profesores": [
       "CLARA ROCIO RODRIGUEZ PICO"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029790": {
  "cod": "2029790",
  "codigoSIA": "2029790",
  "nombre": "L amérique latine dans le monde",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Dirigé aux étudiantes de Sciences économiques, Sciences humaines et Droit et science politique, ce cours a pour objectif doffrir autant des connaissances empiriques que des outils conceptuels pour comprendre et analyser lAmérique latine dans la politique globale. Pour ce faire, tout dabord nous étudierons les fronti&egrave;res épistémologiques imposées par les principales théories des relations internationales aux études de lAmérique latine dans le monde et nous observerons lAmérique latine dans les dynamiques du processus socio-historique de la mondialisation. Ensuite, nous appréhenderons certains traits et acteurs dominants dans les politiques étrang&egrave;res des pays latino-américains ainsi que la participation latino-américaine dans la régulation multilatérale et régionale. Enfin, nous analyserons quelques-uns des faits transnationaux de la région Amérique latine et lexpression quy adoptent certains phénom&egrave;nes de portée universelle.\n\nSi les textes et les documents audio-visuels obligatoires des séminaires sont en fran&ccedil;ais, espagnol ou anglais, les fiches de lectures et les travaux académiques de fin du séminaire peuvent &ecirc;tre rédigés en fran&ccedil;ais ou espagnol. Les étudiant(es) sont invité(es) &agrave; préparer un document audio-visuel ou un exposé oral en fran&ccedil;ais sur un sujets des th&egrave;mes du séminaire.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029790)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "GIOVANNI MOLANO CRUZ"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE - IEPRI",
        "salon": "224-2021",
        "edificio": "224 - Manuel Ancizar",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029812": {
  "cod": "2029812",
  "codigoSIA": "2029812",
  "nombre": "Cátedra de Sede Manuel Ancízar: Centenario orlando fals borda: vida, obra y sentipensamiento",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La conmemoración del centenario del nacimiento de Orlando Fals Borda representa una oportunidad única para reconocer, actualizar y proyectar el legado de uno de los intelectuales más influyentes de Colombia y América Latina en el siglo XX. Su obra, profundamente comprometida con la transformación social, marcó hitos fundamentales en la historia de las ciencias sociales, la participación política y la construcción de conocimiento situado, comprometido y transformador.\nEsta Cátedra de Sede Centenario Orlando Fals Borda: vida, obra y sentipensamiento es una apuesta académica y política que, desde una perspectiva interdisciplinar, busca el estudio de su pensamiento, su trayectoria intelectual y vital, y la vigencia de su propuesta ético-política y metodológica en el contexto actual colombiano y latinoamericano.\nEsta propuesta se fundamenta en la experiencia acumulada por el Departamento de Sociología, que ha desarrollado diez versiones de la Cátedra de Facultad \"Orlando Fals Borda\" como un seminario práctico de formación crítica y participativa. En ella se ha promovido la articulación entre teoría, historia y práctica investigativa, con el propósito de reactivar el pensamiento falsbordiano en diálogo con los retos contemporáneos del país: la implementación del Acuerdo de Paz y las luchas territoriales por la vida.",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029812)",
    "grupos": []
   }
  ]
 },
 "2029813": {
  "cod": "2029813",
  "codigoSIA": "2029813",
  "nombre": "Cátedra de Sede José Celestino Mutis: Comunicación y Ambiente: Narrativas para las Transformaciones",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La propuesta de Cátedra de sede: Comunicación y Ambiente: narrativas para las transformaciones sociales y ecológicas nace del encuentro entre dos institutos con trayectorias complementarias y un profundo compromiso con la transformación social y ecológica (ambiental) desde la universidad pública: el Instituto de Estudios en Comunicación y Cultura (IECO) y el Instituto de Estudios Ambientales (IDEA).\n\nEn este sentido, la convergencia entre el IECO y el IDEA permite concebir esta cátedra como un espacio interdisciplinar, interinstitucional y transescalar donde se entrelazan las dimensiones simbólicas, políticas y ecológicas de la crisis civilizatoria contemporánea. Más allá de sumar saberes, esta articulación propone una lectura situada y compleja del vínculo entre comunicación, territorio y transformación ambiental, con el fin de incidir en la formación de ciudadanías críticas, creativas y comprometidas con la justicia ambiental (socioecológica).\n\nEsta propuesta se enmarca en las apuestas institucionales del Programa de Maestría en Medio Ambiente y Desarrollo (PMAD) y del Observatorio de Conflictos Ambientales (OCA), así como en las experiencias del Laboratorio de Comunicación Pública del IECO y la Cátedra de Culturas Cannábicas, donde se ha explorado la potencia de las narrativas, las pedagogías disruptivas y la articulación universidadcomunidad como motores de transformación",
  "sinProgramar": true,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029813)",
    "grupos": []
   }
  ]
 },
 "2029822": {
  "cod": "2029822",
  "codigoSIA": "2029822",
  "nombre": "Planificación del ecoturismo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El turismo fue considerado como una industria neutra para la que era innecesario estudiar sus impactos sobre el ambiente, lo social y lo cultural. En los años 70s sin embargo se empiezan a dar críticas sobre el sector con lo cual hacia los 90s ya era clara la preocupación por sus consecuencias. Se empiezan a reconocer esquemas de manejo del turismo que resultan benéficos a la lógica de conservación de los ecosistemas y la biodiversidad que le es inherente. La preocupación académica por el turismo data de hace por lo menos 15 años con un creciente número de publicaciones y el interés por conocer más acerca de sus impactos socioambientales. El ecoturismo es una actividad que, de acuerdo a sus principios y mediante la organización y aplicación de recursos pertinentes por parte de los entes públicos y privados podría constituir una fuente potencial de ingresos, de esquemas alternativos de trabajo y para fortalecer y difundir los valores culturales, mejorar la autoestima y autonomía de las comunidades. Permite el cuidado y gestión sostenible de los elementos recursos naturales y el medio ambiente, base del desarrollo ecoturístico. Las definiciones reconocen que este combina elementos de manera multidimensional: Reducción del impacto ambiental, Interacción con la naturaleza, Respeto e incorporación de la comunidad e interacción con las poblaciones locales, Actividades ambientales, Sostenibilidad económica.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "Grupo 1 (Planificación del ecoturismo)",
    "grupos": [
     {
      "grupo": "Grupo 1 ( Planificación del ecoturismo)",
      "codigoGrupo": "1",
      "profesores": [
       "Ernesto Javier Puertas Dellepianes"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 20,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALA DE POSGRADO FRANCISCO JOSE DE CALDAS SALA TIC",
        "salon": "421-213",
        "edificio": "421 - Luis Eduardo Mora-Osejo",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029844": {
  "cod": "2029844",
  "codigoSIA": "2029844",
  "nombre": "Lengua húngara II",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Este curso continúa el aprendizaje iniciado en Lengua húngara I. Su objetivo es profundizar en los conocimientos básicos de la lengua húngara, ampliar el vocabulario y mejorar la comunicación oral y escrita. A través de temas relacionados con la vida cotidiana como la vivienda, la ciudad, el transporte, el tiempo, los pasatiempos y los planes futuros los estudiantes desarrollarán sus habilidades para expresarse y comprender mejor el idioma en contextos reales. Evaluaciones:*Examen parcial (30%) *Examen final (30%) *Escritura 1,2 (20%) *Asistencia (20%)",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029844)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Zsoka Horvath "
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": [
       {
        "dia": 2,
        "diaTexto": "MARTES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       },
       {
        "dia": 4,
        "diaTexto": "JUEVES",
        "inicio": "14:00",
        "fin": "16:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029856": {
  "cod": "2029856",
  "codigoSIA": "2029856",
  "nombre": "Saberes y territorios: una perspectiva para el derecho a la alimentación en Colombia",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El análisis de la Seguridad y de la Soberanía Alimentaria y Nutricional, evolucionó desde el componente alimentario que comprendía la disponibilidad y el acceso de alimentos, a una visión compleja que incorpora el consumo, aprovechamiento biológico, la calidad e inocuidad de los alimentos, y el derecho de los pueblos a decidir su propio sistema alimentario teniendo así el control de la alimentación y nutrición.\nPor tanto, el curso profundiza en la conceptualización de las escalas de realización del derecho a la alimentación desde la soberanía, autonomías y la SAN, reconociendo la complejidad que abarca el derecho; por lo anterior se aborda el proceso de la alimentación desde el análisis del sistema alimentario, sus componentes y los factores determinantes, las problemáticas que afectan cada componente y sus potencialidades, la relación con el ambiente, y otros aspectos que permiten comprender la permanente relación entre desarrollo, ambiente, agricultura, seguridad alimentaria y nutricional y soberanía desde un enfoque sistémico y de derechos. Finalmente, el conjunto de estos elementos permitirá adquirir habilidades con enfoques inter y transdisciplinario para la reflexión y análisis de la situación del derecho a la alimentación en función de la SAN en Colombia.\nEs así como el presente curso de contexto desde su primera versión ha sido producto de los desarrollos teóricos del equipo de profesores, investigadores y estudiantes vinculados a los semilleros del OBSSAN.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029856)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Sara Eloisa Del Castillo Matamoros"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 64,
      "sesiones": [
       {
        "dia": 3,
        "diaTexto": "MIÉRCOLES",
        "inicio": "14:00",
        "fin": "17:00",
        "lugar": "SALON DE CLASE 202",
        "salon": "228-202",
        "edificio": "228 - Nelly Garzón Alarcón",
        "desde": "27/08/2026",
        "hasta": "16/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029864": {
  "cod": "2029864",
  "codigoSIA": "2029864",
  "nombre": "Chino electivo III",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso Chino Mandarín III constituye el tercer nivel del programa de formación en lengua y cultura china, diseñado en coherencia con los estándares internacionales del examen HSK (&#27721;&#35821;&#27700;&#24179;&#32771;&#35797;H&agrave;ny&#468; Shu&#464;píng K&#462;osh&igrave;), correspondiente al nivel 3, el cual abarca 600 caracteres de uso frecuente.\nDe estos 600 caracteres, 300 son nuevos en relación con los niveles anteriores: 150 aprendidos en el nivel 1 (HSK 1) y 150 adicionales en el nivel 2 (HSK 2), los cuales en conjunto suman los 600 caracteres totales exigidos para el nivel HSK 3.\nEl curso busca desarrollar la competencia comunicativa intermedia del estudiante en las cuatro habilidades lingüísticas (comprensión auditiva, comprensión lectora, producción oral y escrita), promoviendo un uso funcional y contextualizado del idioma en situaciones de la vida real. A través de actividades comunicativas, textos auténticos, material audiovisual y ejercicios de interacción, los estudiantes serán capaces de expresar opiniones, narrar experiencias, describir lugares, eventos y emociones, así como sostener conversaciones sobre temas personales, académicos y culturales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029864)",
    "grupos": [
     {
      "grupo": "Chino Electivo III",
      "codigoGrupo": "1",
      "profesores": [
       "JESSICA LUCIA MORENO NOVOA"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 25,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029900": {
  "cod": "2029900",
  "codigoSIA": "2029900",
  "nombre": "Colombia: afirmaciones, deformaciones y transformaciones de nuestra cultura nacional",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "El curso propone el estudio de los procesos y las prácticas, los conflictos y negociaciones, a través de los cuales se ha construido una cultura nacional gestada desde inicios fuertemente excluyentes pero forjada por sucesivos movimientos de resistencia y de inclusión.\nAsí, si bien el curso sigue una perspectiva diacrónica en su exposición su objetivo es complejizar la comprensión de nuestras cotidianidades económicas, políticas y simbólicas desde temas clave que evidencien estrategias y tácticas en la construcción de nuestra conflictiva y desigual identidad nacional y de esta manera trazar puentes con la actualidad y futuros posibles que se evidencien en la actividad profesional de los estudiantes y sus demás cotidianidades.\n\nOBJETIVOS\nAl finalizar el curso, se espera que los estudiantes sean capaces de:\n1. Identificar las más importantes líneas de fuerza que les permitan sumar argumentos en la reflexión sobre la actual realidad colombiana.\n2. Problematizar su cotidianidad desde diversas categorías de análisis social.\n3. Complejizar su quehacer profesional y personal a través del entendimiento de las condiciones generales que han dado mayor fuerza a los hechos que son objeto de atención en las agendas actuales.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029900)",
    "grupos": [
     {
      "grupo": "GRUPO 1",
      "codigoGrupo": "1",
      "profesores": [
       "Oscar Antonio Caballero Rodriguez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 19,
      "sesiones": [
       {
        "dia": 1,
        "diaTexto": "LUNES",
        "inicio": "09:00",
        "fin": "12:00",
        "lugar": "",
        "salon": "",
        "edificio": "",
        "desde": "24/08/2026",
        "hasta": "17/12/2026"
       }
      ]
     }
    ]
   }
  ]
 },
 "2029911": {
  "cod": "2029911",
  "codigoSIA": "2029911",
  "nombre": "Cátedra de Sede Gabriel García Márquez Carnaval y Cultura",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La Cátedra Gabriel García Márquez surge como respuesta a una necesidad académica, cultural y política consolidada tras más de una década de trabajo del Instituto de Estudios en Comunicación y Cultura, IECO. En el contexto colombiano actual, marcado por conflictos sociales y crisis de convivencia, las fiestas populares y los carnavales han demostrado ser espacios fundamentales de reconciliación, pedagogía social y construcción simbólica de la nación. No obstante, lo festivo ha sido históricamente marginado del pensamiento académico institucional, reducido al espectáculo o la nostalgia. Entre 2011 y 2025 se ha consolidado en Colombia un campo emergente de investigación sobre fiestas y carnaval, impulsado por académicos, artistas y gestores culturales. La Cátedra representa el paso necesario para institucionalizar esta experiencia, proyectarla como oferta semestral de alto impacto y asumir la fiesta como categoría epistemológica y metodología de construcción de nación, integrando teoría crítica, etnografía, creación artística y acción comunitaria. Más que un programa académico, se propone como una apuesta institucional y política para posicionar a la Universidad Nacional como referente latinoamericano en estudios de cultura festiva, pedagogías de convivencia y arte comunitario, afirmando la alegría como infraestructura emocional de la democracia.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029911)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial",
      "codigoGrupo": "1",
      "profesores": [
       "Jorge Enrique Londono Pinzón",
       "Jairo Danilo Moreno Hernandez"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "2029912": {
  "cod": "2029912",
  "codigoSIA": "2029912",
  "nombre": "Cátedra de Sede José Celestino Mutis Física: Las grandes ideas que cambiaron el mundo",
  "creditos": 3,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "Es indiscutible la profunda relación entre los avances científicos y el avance de la humanidad hacia niveles de vida nunca observados en la historia de la misma. Este éxito ha generado un aislamiento entre la comunidad científica de física y las personas con formación en áreas como ciencias humanas, las artes y paradójicamente hasta de las mismas ciencias aplicadas. En este curso se propone la exploración de las grandes ideas que la física ha aportado al conocimiento general de la humanidad, y como estas ideas han cambiado desde nuestra forma de vida, hasta la percepción que tenemos del universo que nos rodea. El curso está dirigido a estudiantes de todas las áreas del conocimiento que tengan interés profundizar y actualizar sus conocimientos en física general, haciendo énfasis en mostrar la forma como el mundo, y nuestra visión acerca de él, ha sido transformado de manera radical. El curso hará un uso de matemática básicas, nivel pre-universitario, para su desarrollo.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CLASE TEORICA (2029912)",
    "grupos": [
     {
      "grupo": "Grupo 1 - Clase Presencial - Sede Bogotá",
      "codigoGrupo": "1",
      "profesores": [
       "Diego Alejandro Torres Galindo"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 0,
      "sesiones": []
     }
    ]
   }
  ]
 },
 "7000293": {
  "cod": "7000293",
  "codigoSIA": "7000293-B",
  "nombre": "Cultura del cuidado de la salud",
  "creditos": 4,
  "tipologia": "LIBRE ELECCIÓN",
  "descripcion": "La asignatura CULTURA DEL CUIDADO DE LA SALUD surge como respuesta a la necesidad que tiene América Latina de abordar el cuidado de estas personas en un contexto epidemiológico que muestra la cronicidad como un problema prioritario de la salud pública. Retoma la experiencia del Programa con la Asignatura Cultura de la actividad física para el cuidado de la salud y la complementa para atender las nuevas tendencias del cuidado reflejadas en el Plan decenal de salud pública 2013. Da elementos a los estudiantes/profesionales de la salud para su propio cuidado y el de las personas con enfermedad crónica o en riesgo de esta. De manera sencilla y con acceso en línea guía al estudiante/profesional de la salud en la aplicación de conceptos para fomentar la cultura del cuidado. Inicia con una conceptualización básica sobre la cultura del cuidado de la salud y su relación con la disminución de situaciones de enfermedad crónica. Retoma los lineamientos del Plan Decenal de Salud Pública que incluyen: Cultura del cuidado, ejercicio, nutrición, evitar sustancias nocivas y psicoactivos, manejar el estrés y contar con un proyecto de vida.\nObjetivo: Cuidar a personas que modifican el estilo de vida para mejorar el pronóstico de vida.\nMetodologia: La asignatura CULTURA DEL CUIDADO DE LA SALUD , es ofrecida como curso en línea que da protagonismo al estudiante/profesional de la salud en su práctica de cuidado a personas en riesgo de tener una enfermedad crónica o con una enfermedad crónica establecida. El abordaje del curso da protagonismo al estudiante frente a su propio aprendizaje e incluye la utilización de videos, revisión de multimedias, búsqueda y revisión crítica de la bibliografía, conceptualización y preparación de documentos que demuestren análisis crítico, desarrollo de pruebas de autoevaluación y evaluación, abordaje de situaciones de cuidado de la salud y ejercicios de aplicación que deben iniciar por su autocuidado.",
  "sinProgramar": false,
  "origen": [
   "2CLE"
  ],
  "actividades": [
   {
    "nombre": "CALSE TEORICA (7000293-B)",
    "grupos": [
     {
      "grupo": "Grupo Amazonia",
      "codigoGrupo": "3",
      "profesores": [
       "Sonia Patricia Carreño Moreno"
      ],
      "facultad": "",
      "duracion": "Semestral",
      "jornada": "DIURNO",
      "cupos": 2,
      "sesiones": []
     }
    ]
   }
  ]
 }
};
