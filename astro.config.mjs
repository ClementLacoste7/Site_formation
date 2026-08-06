// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://cybercursus.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [
    mdx(),
    react(),
    sitemap({
      // "/" n'est qu'une redirection technique vers "/fr/" (voir
      // pages/index.astro) : aucune valeur SEO à l'indexer elle-même.
      filter: (page) => page !== 'https://cybercursus.fr/'
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        // /pagefind/pagefind.js n'existe qu'après l'étape "pagefind --site
        // dist" qui suit astro build (voir le script npm "build") : il ne
        // faut pas que Rollup tente de le résoudre au moment du bundle.
        external: ['/pagefind/pagefind.js']
      }
    }
  }
});
