# Mexa_WEB — Páginas web a tu medida

**En línea: https://mexaweb.netlify.app**

Sitio web de una sola página para **Mexa_WEB**: creación de páginas web modernas
y diseño de logos profesionales para negocios locales en México 🇲🇽

## Archivos

```
index.html              El sitio COMPLETO: HTML, CSS, JS, logo e imágenes
404.html                Página de error, con el mismo diseño del sitio
assets/logo.svg         Copia suelta del logo (para redes, tarjetas, rótulos)
assets/og.png           La imagen que se ve al compartir el enlace (1200×630)
assets/proyecto-1..4.svg  Copias sueltas de las imágenes de ejemplo
assets/demo-*.webp      Las capturas de las cuatro demos, para el portafolio
demos/restaurante/      Demo: Maíz y Brasa (cocina mexicana)
demos/salon/            Demo: Raíz Estudio (salón de belleza)
demos/consultorio/      Demo: Clínica Vértice (medicina general)
demos/tienda/           Demo: La Surtida (abarrotes)
robots.txt              Le dice a Google que puede entrar
sitemap.xml             La lista de páginas, para Google
_headers                Ajustes de seguridad y caché que aplica Netlify
_redirects              Esconde la carpeta de herramientas internas
```

### Las cuatro demos

Cada carpeta de `demos/` es un sitio completo e independiente, con su propio
`index.html`, `styles.css`, `main.js` e imágenes. Están pensadas para enseñar
a un cliente cómo se vería su giro, y todas llevan arriba una franja que dice
que son demostraciones y un enlace de vuelta a tu página.

Los cuatro usan un estilo visual distinto a propósito, para que no parezcan la
misma plantilla repintada:

| Demo | Giro | Estilo |
|---|---|---|
| Maíz y Brasa | Restaurante | Oscuro cálido, serif editorial |
| Raíz Estudio | Salón de belleza | Crema, serif en cursiva |
| Clínica Vértice | Consultorio | Pastel con cristal esmerilado |
| La Surtida | Tienda | Papel de revista, serif de titular |

**Las imágenes son ilustraciones hechas a medida, no fotos.** Si en algún
momento quieres fotos reales en las demos, hay dos caminos: mandarme fotos
tuyas, o generarlas con inteligencia artificial (eso cuesta unos dólares y
hace falta una clave de OpenAI).

> **Ojo:** desde que hay demos, el sitio ya **no es un archivo suelto**. El
> `index.html` sigue abriendo solo, pero para que los botones "Abrir demo"
> funcionen tienes que subir la carpeta completa, no solo el `index.html`.

### La imagen al compartir el enlace

`assets/og.png` es lo que aparece cuando mandas mexaweb.netlify.app por
WhatsApp, Facebook o Instagram. Tiene que ser **PNG o JPG** (WhatsApp no
muestra SVG ni WebP) y la dirección dentro del `index.html` tiene que ser
**completa**, empezando por `https://`.

> Si algún día cambias de dirección (por ejemplo a `mexaweb.com`), busca
> `mexaweb.netlify.app` en `index.html`, `robots.txt` y `sitemap.xml` y
> reemplázala por todas las veces que aparezca (son 11 en total).

**El `index.html` se ve completo por sí solo.** El logo y los dibujos van
dentro del archivo. Lo único que necesita de fuera son las capturas del
portafolio (`assets/demo-*.webp`) y las carpetas de `demos/`, que es a donde
llevan los botones "Abrir demo".

## Cómo verlo

Abre `index.html` con doble clic en cualquier navegador. No necesita instalación
ni servidor.

## Cómo publicarlo en internet

### Netlify (es lo que está en uso)

El sitio está publicado en **https://mexaweb.netlify.app**, conectado a este
repositorio. Cada cambio que llegue a la rama `main` se publica solo en un par
de minutos; no hay que hacer nada más.

Panel de control: app.netlify.com → proyecto **mexaweb**.

### GitHub Pages (alternativa, sin usar)

El sitio ya está en la rama `main`. Solo falta encenderlo:

1. Entra a **Settings** (Configuración) del repositorio, arriba a la derecha.
2. En el menú de la izquierda busca **Pages**.
3. En *Build and deployment* → *Source*, elige **Deploy from a branch**.
4. En *Branch* elige **`main`** y la carpeta **`/ (root)`**. Dale **Save**.

En dos o tres minutos tu página queda pública en:

```
https://emmatrix1416-wq.github.io/Tiempo-pantalla/
```

Cada vez que cambies algo en `main`, la página se actualiza sola.

### Otras opciones

- **Netlify Drop**: entra a `app.netlify.com/drop` y arrastra el `index.html`.
  Te da un enlace público al instante, sin crear cuenta.
- **Hosting propio**: sube los archivos por FTP a la carpeta pública.

### Dominio propio

Cuando quieras algo como `mexaweb.com` en vez de la dirección larga, compra el
dominio y conéctalo desde **Settings → Pages → Custom domain**. Es el mismo
sitio, solo cambia la dirección.

## Cómo cambiar cosas

Todo se edita en `index.html` con cualquier editor de texto.

### Datos de contacto

Están en varios botones. Si cambian, busca y reemplaza:

| Dato | Qué buscar |
|---|---|
| WhatsApp | `525544728735` (formato: 52 + número a 10 dígitos, sin espacios) |
| Correo | `mexaweb6@gmail.com` |
| Instagram | `mexa_webs` |

El texto que aparece escrito cuando alguien abre WhatsApp va después de
`?text=` y está codificado para URL (`%20` es un espacio).

### Precios

Están en la sección `<!-- PLANES / PRECIOS -->`. Cada plan tiene su nombre,
título, precio y lista de lo que incluye.

### Fotos del portafolio

Las cuatro imágenes son dibujos provisionales que están escritos dentro del
HTML. Para poner capturas reales de tus proyectos:

1. Guarda tu captura junto al `index.html`, por ejemplo `mi-proyecto.jpg`.
2. En la sección `<!-- PORTAFOLIO -->`, cada proyecto empieza con un bloque
   largo que va de `<svg class="proyecto-img"` hasta su `</svg>`.
   Borra ese bloque completo y en su lugar escribe:

   ```html
   <img src="mi-proyecto.jpg" alt="Página web de mi cliente" loading="lazy">
   ```

3. Debajo, cambia el nombre del negocio y la descripción.

Medida recomendada: **800 × 560 px** (proporción 10:7).

> Ojo: si usas imágenes como archivos aparte, tienes que subirlas junto con el
> `index.html`. Mientras uses las provisionales, el archivo sigue funcionando solo.

### Colores

Se controlan desde las variables al inicio del `<style>` (`:root`): negro base,
degradado azul y plata. Cambiar un valor ahí lo actualiza en todo el sitio.

## Detalles técnicos

- Responsive: diseñado primero para celular.
- Sin dependencias ni frameworks. El único archivo que se descarga de internet
  es la tipografía Sora de Google Fonts; si no hay conexión, el sitio se ve
  igual con la tipografía del sistema.
- Logo e imágenes incrustados como SVG dentro del HTML: cargan al instante y
  se ven nítidos en cualquier pantalla.
- Funciona **aunque el navegador no ejecute JavaScript** (por ejemplo, al abrirlo
  desde el visor de archivos del celular): el contenido siempre se ve y el menú
  abre con CSS. El JavaScript solo agrega las animaciones al hacer scroll.
- Las animaciones se desactivan solas si el sistema pide menos movimiento.
- Etiquetas Open Graph para que se vea bien al compartir el enlace por WhatsApp.

---

© Mexa_WEB — Páginas web a tu medida
