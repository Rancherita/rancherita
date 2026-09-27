// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Por defecto se publica en GitHub Pages: https://rancherita.github.io/rancherita/
// Si más adelante usáis un dominio propio, definid SITE_URL (p. ej. https://rancherita.com) y BASE_PATH=/
const site = process.env.SITE_URL || 'https://rancherita.github.io';
const base = process.env.BASE_PATH || '/rancherita';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
