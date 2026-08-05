// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

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
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
