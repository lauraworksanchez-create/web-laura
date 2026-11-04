# laurasanchezpardo.com

Web de Laura Sánchez Pardo, migrada desde Squarespace a una web estática (HTML + CSS + JS) lista para Vercel.

## Estructura

- `public/` la web publicada (lo que sirve Vercel). Español en la raíz, inglés en `/en/`.
- `src/content.mjs` todos los textos (es / en) y las imágenes de cada página. **Para cambiar un texto, edita aquí.**
- `src/styles.css` estilos (colores y fuentes arriba del todo, en `:root`).
- `src/main.js` menú móvil, carrusel, formulario y animaciones.
- `scripts/build.mjs` genera las páginas de `public/` a partir del contenido.

## Cambiar algo

```bash
npm install          # solo la primera vez
npm run generate     # vuelve a generar public/
```

Después sube los cambios a GitHub y Vercel publica solo.

## Formulario de contacto

Usa FormSubmit (gratis, sin cuenta). La primera vez que alguien envíe el formulario llegará un email a laurawork.sanchez@gmail.com para activarlo: hay que pulsar el enlace una vez.

## Fuentes

Familjen Grotesk (títulos) y Arimo (texto), alojadas en `public/fonts/` (licencia SIL Open Font License).
