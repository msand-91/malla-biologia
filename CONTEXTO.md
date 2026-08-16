# Contexto del proyecto `malla-biologia`

Documento de traspaso para otra sesión de trabajo.
Ruta: `/home/msand91/proyectos/apps/malla-biologia`

## Qué es

Copia adaptada de `../malla-curricular` (Química) para el **pregrado de Biología, UNAL Bogotá,
plan 2513**. HTML + CSS + JS sin dependencias; el avance se guarda en `localStorage`
(clave `mallaBiologiaUNAL.v1`). Se creó el 2026-08-16.

## Qué es genérico y qué es de la carrera

- **Genérico** (igual que en Química, con pequeñas generalizaciones): `js/app.js`, `css/`,
  `herramientas/*`, `tests/*` (con ids de Biología). Cambios hechos aquí respecto a Química y que
  convendría llevar de vuelta: `CLAVE_LS`/nombre de archivo desde `js/carrera.js`; el requisito de
  Trabajo de grado se aplica a cualquier `comp: 'TG'` (antes al id 2015281); componentes con
  `noCuenta: true` (nivelación) no suman al total; los grupos del catálogo se generan desde
  `GRUPOS_CATALOGO`; el selector de un cupo con varios grupos usa optgroups; barra global tope 100 %;
  `catalogo-sia.js` lee la carrera de `js/carrera.js` y tiene los comandos `electivas` y `fichas`
  (derivan `js/electivas.js` y `js/sia.js` de `js/oferta.js`) y verifica que cada ficha abierta sea
  la esperada; `empaquetar.js` nombra la salida por `CARRERA.slug`.
- **De la carrera**: `js/carrera.js`, `js/datos.js`, textos de `index.html`, README.

## El plan en números (lo que se sabe)

163 créditos + 12 de inglés. Fundamentación obligatoria **60** (18 asignaturas, verificado con el
SIA), trabajo de grado **8** (verificado). Fundamentación optativa 8, disciplinar 55, libre elección
32: distribución publicada (68 / 63 / 32), **sin confirmar con el acuerdo**. Cupos en la malla:
3 optativas de fundamentación (una en el semestre I que la malla llama «Matemáticas Básicas u
Optativa Fundamental»), 14 disciplinares, 11 electivas. Biología no tiene disciplinares obligatorias:
las 44 disciplinares del SIA son todas optativas.

## Lo que falta y de dónde sale

**Los prerrequisitos.** No están en la malla oficial ni en el SIA. Están en el acuerdo del plan
(régimen legal UNAL, `https://legal.unal.edu.co/rlunal/home/doc.jsp?d_i=90037`, «modifica el plan
de estudios de Biología y deroga el Acuerdo 063 de 2015 del CFC»), que exige un reCAPTCHA: hay que
abrirlo en el navegador, resolverlo y guardar el texto/PDF (p. ej. en `datos/`). Luego se cargan en
`pre`/`co` de `js/datos.js`, se confirman los créditos por componente y se quita la primera nota de
`INCONSISTENCIAS`. Otras fuentes probadas sin éxito: PDF de diracad (es la misma malla), página de
la Facultad (solo créditos totales), scribd (503).

**Profesores.** `sincronizar-profesores.js` necesita Chrome headless (aquí faltan libnss3/libasound2
y no hay sudo). `verificar-losestudiantes.js` sí corrió: 76/87 códigos existen allí, sin
discrepancias de nombre.

**Fichas completas del SIA** (`herramientas/sia.js enriquecer`): el catálogo `siabog` daba 502; por
ahora `js/sia.js` viene de `catalogo-sia.js fichas` (créditos y descripción, sin temario).

## Datos generados (2026-08-16)

`js/oferta.js`: 334 asignaturas (93 del plan + 241 de libre elección 2CLE), 748 grupos, periodo
2026-2. `js/electivas.js`: 241. `js/sia.js`: 87 fichas.

## Herramientas

Las mismas de Química (ver README). Todo el acceso al SIA es anónimo; **nunca se piden
credenciales**.
