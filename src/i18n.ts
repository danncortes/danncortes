import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import de from './locales/de/translation.json';
import en from './locales/en/translation.json';

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: 'de',
        debug: true,
        resources: {
            en: {
                translation: en,
            },
            de: {
                translation: de,
            },
        }
    });


