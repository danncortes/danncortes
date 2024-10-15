import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import 'dayjs/locale/de';
import dayjs from 'dayjs';
import de from './locales/de/translation.json';
import en from './locales/en/translation.json';

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: 'en',
        debug: false,
        resources: {
            en: {
                translation: en,
            },
            de: {
                translation: de,
            },
        }
    });

export type Language = 'en' | 'de';
export const supportedLanguages: Language[] = ['en', 'de'];

function getLanguage() {
    const browserLanguage = navigator.language.split('-')[0] as Language;
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en'
}

i18n.changeLanguage(getLanguage());
dayjs.locale(i18n.language);

export { i18n };



