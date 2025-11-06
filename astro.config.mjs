// @ts-check

import { defineConfig } from 'astro/config';
import i18next from 'astro-i18next';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/',
  integrations: [
    i18next({
      defaultLocale: 'en',
      locales: ['en', 'de'],
      loadLocaleFrom: /** @param {string} locale */ (locale) =>
        import(`./src/locales/${locale}/translation.json`).then(
          (m) => m.default
        )
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
