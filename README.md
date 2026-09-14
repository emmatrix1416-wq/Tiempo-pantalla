# Mexa_WEB — Páginas web a tu medida

Sitio web de una sola página para **Mexa_WEB**: creación de páginas web modernas
y diseño de logos profesionales para negocios locales en México 🇲🇽

## Archivos

```
index.html              El sitio completo (HTML + CSS + JS en un solo archivo)
assets/logo.svg         Logo Mexa_WEB (M plateada + W azul con órbita)
assets/proyecto-1..4.svg  Imágenes de ejemplo del portafolio (reemplazables)
```

## Cómo verlo

Abre `index.html` con doble clic en cualquier navegador. No necesita instalación
ni servidor.

## Cómo publicarlo en internet

Cualquiera de estas opciones funciona subiendo la carpeta completa
(`index.html` + la carpeta `assets`):

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

Las cuatro imágenes de `assets/` son provisionales. Para poner capturas reales:

1. Guarda tu imagen en `assets/` (por ejemplo `assets/mi-proyecto.jpg`).
2. En la sección `<!-- PORTAFOLIO -->` cambia el `src` de la imagen y su `alt`.
3. Actualiza el nombre y la descripción que van debajo.

Medida recomendada: **800 × 560 px** (proporción 10:7).

### Colores

Se controlan desde las variables al inicio del `<style>` (`:root`): negro base,
degradado azul y plata. Cambiar un valor ahí lo actualiza en todo el sitio.

## Detalles técnicos

- Responsive: diseñado primero para celular.
- Sin dependencias ni frameworks; solo se carga la tipografía Sora desde Google Fonts.
- Animaciones sutiles al hacer scroll con `IntersectionObserver`, desactivadas
  automáticamente si el sistema pide menos movimiento.
- Etiquetas Open Graph para que se vea bien al compartir el enlace por WhatsApp.

---

© Mexa_WEB — Páginas web a tu medida
