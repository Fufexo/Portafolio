// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio público del sitio (p. ej. https://fabriziofournier.dev).
// Se define con la variable de entorno SITE_URL al publicar (Vercel → Settings → Environment Variables).
// Con él se activan la URL canónica, las alternativas por idioma (hreflang), la imagen al compartir y el sitemap.
const site = process.env.SITE_URL || undefined;

// https://astro.build/config
export default defineConfig({
  site,
  // Español en la raíz (/about) e inglés con prefijo (/en/about)
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: site
    ? [
        sitemap({
          i18n: {
            defaultLocale: 'es',
            locales: { es: 'es-PE', en: 'en-US' },
          },
        }),
      ]
    : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
