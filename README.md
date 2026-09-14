# Mexa_WEB — Páginas web a tu medida

Sitio web de una sola página para **Mexa_WEB**: creación de páginas web modernas
y diseño de logos profesionales para negocios locales en México 🇲🇽

## Archivos

```
index.html              El sitio COMPLETO: HTML, CSS, JS, logo e imágenes
assets/logo.svg         Copia suelta del logo (para redes, tarjetas, rótulos)
assets/proyecto-1..4.svg  Copias sueltas de las imágenes de ejemplo
```

**`index.html` funciona solo.** El logo y las imágenes van dentro del archivo,
así que puedes mandarlo por WhatsApp o correo, o abrirlo desde cualquier
carpeta, y se verá completo. La carpeta `assets/` es solo una copia de respaldo
por si necesitas el logo por separado; el sitio no depende de ella.

## Cómo verlo

Abre `index.html` con doble clic en cualquier navegador. No necesita instalación
ni servidor.

## Cómo publicarlo en internet

Basta con subir `index.html`:

- **GitHub Pages**: Settings → Pages → Branch `main` → carpeta `/root`.
- **Netlify / Vercel**: arrastra la carpeta a su panel.
- **Hosting propio**: sube todo por FTP a la carpeta pública.

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
