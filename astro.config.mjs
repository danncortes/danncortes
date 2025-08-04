// @ts-check

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import i18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [
    react(),
    i18next({
      defaultLocale: 'en',
      locales: ['en', 'de'],
      loadLocaleFrom: (locale) =>
        import(`./src/locales/${locale}/translation.json`).then(
          (m) => m.default
        )
    })
  ]
});
