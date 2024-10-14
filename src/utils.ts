type Locales = 'en' | 'de';

type LocalizedText = {
    [key in Locales]: string;
}

export default function getLocalizedText(content: LocalizedText | string, locale: Locales): string {
    if (typeof content === 'string') {
        return content;
    }
    return content[locale] || content['de'] || '';
}