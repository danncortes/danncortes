import defineI18nConfig from 'astro-i18next';

export default defineI18nConfig({
  defaultLocale: 'en',
  locales: ['en', 'de'],
  loadLocaleFrom: (locale) =>
    import(`./src/locales/${locale}/translation.json`).then((m) => m.default)
});
