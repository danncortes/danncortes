import i18n from 'i18next';
import de from './locales/de/translation.json';
import en from './locales/en/translation.json';

i18n.init({
  lng: 'en', // Set initial language
  fallbackLng: 'en',
  supportedLngs: ['en', 'de'], // Explicitly define supported languages
  debug: true, // Enable debug to see what's happening
  interpolation: {
    escapeValue: false // Astro handles escaping
  },
  // Enable nesting feature for $t() syntax
  nsSeparator: false, // Disable namespace separator to avoid conflicts
  keySeparator: '.', // Use dot for nested keys
  returnObjects: false,
  resources: {
    en: {
      translation: en
    },
    de: {
      translation: de
    }
  }
});

export type Language = 'en' | 'de';
export const supportedLanguages: Language[] = ['en', 'de'];

export function getLanguage() {
  const browserLanguage = navigator.language.split('-')[0] as Language;
  return supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en';
}

export { i18n };
