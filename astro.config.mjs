import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
  image: {
    // Permite que Astro optimice fotos de la carpeta /fotos (fuera de src).
    responsiveStyles: false,
  },
});
