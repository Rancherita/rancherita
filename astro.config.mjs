// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// El sitio se publica en el dominio propio: https://rancheritaontour.com
// Al servirse en la raíz del dominio, `base` es '/'. (Con la URL antigua de
// GitHub Pages hacía falta base '/rancherita'; si se cambia el dominio, basta
// con definir las variables SITE_URL y BASE_PATH en Actions.)
const site = process.env.SITE_URL || 'https://rancheritaontour.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  // Estilos dentro de cada página: así, justo después de publicar, una página
  // guardada en caché nunca apunta a un archivo CSS que ya no existe.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
