// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio público del sitio (p. ej. https://fabriziofournier.dev).
// Se define con la variable de entorno SITE_URL al publicar (Vercel → Settings → Environment Variables).
// Con él se activan la URL canónica, la imagen al compartir y el sitemap.
const site = process.env.SITE_URL || undefined;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
