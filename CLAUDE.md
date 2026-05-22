# CLAUDE.md

> Guía de proyecto para Claude. Léela completa antes de tocar cualquier archivo.

---

## 1. Proyecto

Portafolio web personal. **Una sola página.** Sin secciones tradicionales tipo landing (no hay "Hero / About / Projects / Contact" como bloques separados con saltos visuales). Todo el contenido fluye en un único lienzo continuo, gobernado por una retícula y por la jerarquía tipográfica — no por colores, imágenes ni "cards".

**Cero imágenes.** Ni fotos, ni iconos decorativos, ni ilustraciones, ni logos. Si algo necesita representarse visualmente, se hace con tipografía, espacio en blanco, líneas, o numeración. Punto.

**Estética:** Diseño suizo (International Typographic Style) traducido a la web. Müller-Brockmann, Hofmann, Ruder como referencia mental. Limpio. Funcional. Frío. Riguroso.

---

## 2. Principios de diseño (no negociables)

1. **La retícula manda.** Todo se alinea a una grid de 12 columnas con gutters consistentes. Nada flota libre. Si un elemento no encaja en la grid, está mal colocado, no la grid está mal.
2. **Tipografía como sistema, no decoración.** Máximo 2 familias tipográficas (idealmente 1). La jerarquía se construye con tamaño, peso y espacio — nunca con color ni efectos.
3. **Espacio en blanco generoso e intencional.** El vacío es contenido. No lo rellenes.
4. **Asimetría controlada.** El estilo suizo no es centrado y simétrico — es alineado a la izquierda, con bloques desplazados que respetan la retícula. Busca tensión visual a través del desbalance medido.
5. **Color reducido al mínimo.** Negro sobre blanco roto (o blanco sobre negro). Un único acento si acaso — y solo si justifica su existencia.
6. **Ningún ornamento.** Sin sombras, sin gradientes, sin bordes redondeados decorativos, sin glassmorphism, sin neumorfismo, sin "glow", sin emojis. Esquinas rectas. Líneas de 1px cuando hagan falta.
7. **Detalle obsesivo.** Kerning, leading, alineación óptica, espacios consistentes. Si una "i" minúscula se ve mal junto a una mayúscula, se arregla.

---

## 3. Sistema visual

### Color (paleta completa, no añadir más)
```css
--ink:    #0A0A0A;   /* texto principal — no negro puro */
--paper:  #FAFAF7;   /* fondo — blanco con un toque cálido, no #FFF */
--muted:  #6B6B6B;   /* texto secundario / metadatos */
--rule:   #1A1A1A;   /* líneas divisorias */
--accent: #FF3B00;   /* rojo bermellón suizo — usar con extrema moderación */
```

### Tipografía
- **Display / headings:** Una grotesca neutra y robusta. Opciones aceptables: **Neue Haas Grotesk**, **Helvetica Now**, **Söhne**, **GT America**, **Inter Tight** como último recurso. Una sola.
- **Body / mono opcional:** Si se usa monospace para metadatos/numeración, **JetBrains Mono** o **IBM Plex Mono**.
- **Prohibidas:** serifas humanistas, scripts, display fonts decorativas, cualquier fuente "amigable" o "creativa".

### Escala tipográfica (modular, ratio 1.333)
```
--text-xs:   12px   /* metadatos, numeración, captions */
--text-sm:   14px   /* navegación, etiquetas */
--text-base: 16px   /* cuerpo */
--text-lg:   21px   /* subtítulos */
--text-xl:   42px   /* títulos de bloque */
--text-2xl:  84px   /* título principal */
--text-3xl:  144px  /* statement tipográfico, si aplica */
```

### Retícula
- 12 columnas, gutter de 24px, margen lateral de 48px (desktop) / 16px (mobile).
- Maxwidth del contenido: **1440px**, centrado.
- Línea base vertical de 8px — todo el espaciado en múltiplos de 8.

### Espaciado
Solo estos valores: `8 / 16 / 24 / 40 / 64 / 96 / 144 / 240 px`. Nada en medio.

---

## 4. Estructura de la página

Una sola página, scroll vertical, sin "anclas" tipo `#about`. El contenido se lee como un documento — de arriba hacia abajo. No hay menú de navegación con enlaces a secciones. Si acaso, un menú minúsculo arriba con: nombre, año, ubicación, contacto. Nada más.

Orden sugerido del flujo (sin títulos de sección visibles, solo numeración fina tipo `01 / 02 / 03` a la izquierda en columna estrecha):

1. Statement tipográfico de apertura (nombre + rol, una sola línea fuerte)
2. Párrafo breve de presentación (máx. 3 líneas, alineado a la izquierda, en la mitad del ancho)
3. Listado de trabajos / proyectos como **tabla tipográfica** — año, cliente, descripción, rol. Sin imágenes. Sin tarjetas. Filas separadas por líneas de 1px.
4. Información de contacto al pie, alineada a la grid, en `--text-sm`.

Cada "bloque" se separa de los demás con espacio vertical generoso (`--space-144` o `--space-240`), no con divisores.

---

## 5. Stack técnico

- **HTML semántico puro** + CSS moderno. Nada de frameworks JS si no es estrictamente necesario.
- Si se requiere build: **Astro** o **Vite** con HTML/CSS. Evitar React a menos que haya interactividad real (no la hay).
- **CSS:** custom properties + grid + flexbox. No Tailwind por defecto (no encaja con el rigor del sistema); si se usa, configurar tokens propios y desactivar los defaults.
- **Fuentes:** servidas localmente (`@font-face` con `woff2`), nunca desde Google Fonts en producción.
- **Sin librerías de animación.** Las transiciones que existan serán CSS puro, máx. `transition: opacity 200ms ease, transform 200ms ease`. Sin parallax, sin scroll-jacking.
- **Accesibilidad:** contraste AAA donde sea posible, navegación por teclado correcta, `prefers-reduced-motion` respetado.
- **Performance:** Lighthouse 100/100/100/100 como objetivo. Sin JS innecesario.

---

## 6. Reglas de comportamiento para Claude

Cuando trabajes en este repositorio:

- **No añadas imágenes nunca.** Si pienses que "ayudaría una imagen aquí", la respuesta es no. Resuélvelo con tipografía y espacio.
- **No introduzcas color decorativo.** Si vas a usar `--accent`, justifica por qué en un comentario en el CSS.
- **No uses emojis** ni en el código fuente ni en los textos del sitio.
- **No uses bordes redondeados** (`border-radius: 0` siempre, salvo que pida explícitamente lo contrario).
- **No uses sombras** (`box-shadow: none`).
- **No uses gradientes.**
- **No uses iconos** — ni librerías como Lucide, Heroicons, Feather, etc.
- **Respeta la escala tipográfica y los valores de espaciado.** Si necesitas un valor que no está, plantéalo antes de inventarlo.
- **Antes de añadir una nueva dependencia**, justifica por qué y proponla; no la instales sin acuerdo.
- **Antes de crear un nuevo componente**, revisa si la grid + tipografía existente lo resuelve. Casi siempre lo resuelve.
- **Cuando hagas cambios al CSS global**, mantén los tokens en `:root` como única fuente de verdad. No hardcodees valores.
- **Mobile-first**, pero diseñado pensando en desktop. La grid colapsa a 1 columna en `< 768px` con márgenes laterales reducidos.

---

## 7. Referencias mentales (no copiar, entender)

- Josef Müller-Brockmann — *Grid Systems in Graphic Design*
- Sitios: `kasper-florio.com`, `studiofeixen.ch`, `manualcreative.com`, `bureau-cool.com`, archivos de *Werkplaats Typografie*.
- Cualquier portafolio que se sienta "warm", "playful" o "moderno" — **no es la referencia**.

---

## 8. Tono del contenido escrito

- Frases cortas. Sin adjetivos vacíos.
- Sin "passionate", "creative", "innovative", "passionate about creating beautiful experiences".
- Hechos: qué hago, para quién, cuándo.
- Primera persona, en minúscula si encaja con el sistema visual; nunca corporativo.

---

## 9. Estructura de archivos esperada

```
/
├── index.html
├── styles/
│   ├── reset.css
│   ├── tokens.css      → variables CSS (color, type, space, grid)
│   ├── base.css        → tipografía, body, defaults
│   └── layout.css      → grid, composición de la página
├── fonts/              → woff2 locales
├── public/
│   └── favicon.svg     → mínimo, tipográfico (una letra o un punto)
└── CLAUDE.md
```

---

## 10. Definición de "terminado"

Una pantalla está terminada cuando:
- Se puede eliminar un elemento más y el diseño empeora.
- No se puede añadir nada sin que sobre.
- Se ve igual de bien impresa en blanco y negro que en pantalla.
- Pasa Lighthouse con 100 en performance y accesibilidad.
