import i18next from 'i18next';
import en from './locales/en/translation.json';
import de from './locales/de/translation.json';

export type Language = 'en' | 'de';
export const supportedLanguages: Language[] = ['en', 'de'];

// Initialize i18next for server-side rendering
if (!i18next.isInitialized) {
  i18next.init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'de'],
    interpolation: {
      escapeValue: false
    },
    nsSeparator: false,
    keySeparator: '.',
    returnObjects: true,
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    }
  });
}

export function getLanguage() {
  if (typeof navigator !== 'undefined') {
    const browserLanguage = navigator.language.split('-')[0] as Language;
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en';
  }
  return 'en';
}

export const t = i18next.t.bind(i18next);
export { i18next as i18n };
