# Malla curricular interactiva — Pregrado en Biología, UNAL Bogotá

App web para planear el avance en el plan de estudios de Biología (plan 2513): marcar lo
aprobado, ver qué se puede inscribir, elegir optativas del catálogo, generar un plan de los
semestres que faltan y **armar el horario con la oferta real del SIA**.

Es la adaptación a Biología de la app de Química (`../malla-curricular`): mismo motor, mismas
herramientas; cambia `js/carrera.js`, `js/datos.js` y los datos generados. Si vienes de otro
proyecto, empieza por [CONTEXTO.md](CONTEXTO.md).

## Uso

Abre [index.html](index.html) directamente en el navegador (doble clic). No necesita servidor
ni conexión. El avance se guarda en `localStorage` del navegador; desde **Mi avance** puedes
exportarlo e importarlo como `.json`.

## Qué hace

| Pestaña | Para qué sirve |
|---|---|
| **Malla** | Las 51 casillas del plan en sus 10 semestres (18 obligatorias de fundamentación, 4 niveles de inglés, trabajo de grado y los cupos de optativas, disciplinares y electivas). Clic en una para marcarla *cursando* / *aprobada*, asignarle una optativa, ver su ficha y sus grupos del semestre. **✎ Editar malla** permite arrastrar asignaturas entre semestres, cambiar créditos, código o requisitos, y añadir o quitar asignaturas. |
| **Mi avance** | Créditos por componente contra los exigidos, cuántas asignaturas puedes inscribir ya y semestres restantes. La nivelación (inglés, matemáticas básicas) se muestra aparte y no cuenta en los 163. |
| **Plan sugerido** | Genera semestre a semestre lo que queda, con tope de créditos configurable. |
| **Optativas** | Las 18 optativas de fundamentación y las 44 disciplinares del plan según el SIA, con créditos reales y descripción, agrupadas por tema (botánica, zoología, ecología…). Búsqueda por tema dentro de las descripciones. |
| **Electivas** | Las 241 asignaturas de **libre elección** del componente 2CLE de la sede, con créditos y descripción. |
| **Horario** | Arma el horario del semestre con la **oferta real del SIA**: grupos, profesores, salones y cupos. Entran solas las asignaturas marcadas *cursando*; puedes añadir cualquier otra. Eliges grupo y la semana se pinta con los cruces en rojo. |
| **Notas y fuentes** | De dónde sale cada dato y qué falta por confirmar. |

## Estado de los datos (léelo)

- **Códigos y créditos**: del Catálogo de asignaturas del SIA (plan 2513), 93 asignaturas.
  Verificados además contra losestudiantes.com (76 de 87 códigos registrados allí, ninguna
  discrepancia de nombre).
- **Semestres y cupos**: de la malla oficial de la Facultad de Ciencias (`mallabiologia1.pdf`,
  `mallabiologia2.pdf`, que son el mismo diagrama).
- **Prerrequisitos y correquisitos: PENDIENTES.** La malla oficial no los trae; están en el
  acuerdo del plan de estudios (régimen legal de la UNAL, documento 90037), que exige resolver un
  captcha para descargarlo. Mientras tanto la app trata todo como disponible salvo la cadena de
  inglés. Cuando tengas el acuerdo, los prerrequisitos van en el campo `pre` de cada asignatura en
  [js/datos.js](js/datos.js).
- **Créditos por componente**: fundamentación obligatoria 60 y trabajo de grado 8 están
  verificados; fundamentación optativa 8, disciplinar 55 y libre elección 32 salen de la
  distribución publicada (68 / 63 / 32 = 163) y hay que confirmarlos con el acuerdo.
- **Profesores y reseñas**: `js/losestudiantes.js` solo trae el enlace de cada materia; la lista
  de profesores y reseñas necesita `sincronizar-profesores.js` con Chrome headless.

## Datos y herramientas

`js/datos.js` es el único archivo de datos escrito a mano. Los demás se generan:

```bash
node herramientas/catalogo-sia.js plan             # las 93 asignaturas del plan 2513 (sin libre elección)
node herramientas/catalogo-sia.js ver <código>     # grupos y horarios de una
node herramientas/catalogo-sia.js sincronizar      # oferta del semestre → js/oferta.js (~10 min)
node herramientas/catalogo-sia.js electivas        # js/electivas.js a partir de la libre elección de oferta.js
node herramientas/catalogo-sia.js fichas           # js/sia.js (créditos y descripción) a partir de oferta.js
node herramientas/verificar-losestudiantes.js --catalogo   # códigos y enlaces en losestudiantes.com
node herramientas/sincronizar-profesores.js        # profesores y reseñas (necesita Chrome)
node herramientas/sia.js enriquecer                # fichas completas (temario, horas) cuando «Contenido de asignaturas» responda
node herramientas/estado-sia.js                    # ¿qué servicios del SIA responden?
node herramientas/empaquetar.js                    # genera dist/malla-biologia.html
node tests/logica.test.js && node tests/ui.test.js # pruebas
```

`catalogo-sia.js` habla con el Catálogo de asignaturas del SIA (una aplicación Oracle ADF) sin
Chrome, reproduciendo sus peticiones parciales; los detalles no obvios están comentados en la
cabecera del script. Lee la carrera de `js/carrera.js`. Acceso anónimo: **nunca se piden
credenciales**.

Dependencias solo para desarrollo: `npm install jsdom puppeteer --no-save`.

## Publicación

`netlify.toml` publica la raíz tal cual (sitio estático). `dist/` contiene dos paquetes
autocontenidos para abrir desde cualquier dispositivo.

## Estructura

- [index.html](index.html) — interfaz (7 pestañas)
- [js/carrera.js](js/carrera.js) — qué carrera es (nombre, plan del SIA, clave de guardado)
- [js/datos.js](js/datos.js) — plan de estudios, catálogo de optativas y notas sobre los datos
- [js/app.js](js/app.js) — motor de prerrequisitos, planificador, editor, horario y renderizado
- [js/oferta.js](js/oferta.js) — generado; oferta del semestre (grupos, horarios, cupos)
- [js/sia.js](js/sia.js) — generado; fichas (créditos, descripción)
- [js/electivas.js](js/electivas.js) — generado; libre elección
- [js/losestudiantes.js](js/losestudiantes.js) — generado; enlaces a losestudiantes.com
- [herramientas/](herramientas/) — scripts de línea de comandos
- [tests/](tests/) — pruebas de lógica e interfaz
- [css/estilos.css](css/estilos.css) — estilos (tema claro/oscuro)

## Fuentes

- **Malla Curricular Programa de Pregrado en Biología** — Facultad de Ciencias, UNAL Sede Bogotá.
- **Catálogo de asignaturas del SIA** — códigos, créditos, tipologías y oferta del semestre.
- **Acuerdo del plan de estudios** (régimen legal UNAL, doc. 90037) — pendiente de cargar.
- **losestudiantes.com** — verificación de códigos y enlaces a profesores.

**Confirma siempre en el SIA antes de inscribir.**
