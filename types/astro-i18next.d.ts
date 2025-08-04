declare module 'astro-i18next' {
  export default function useTranslations(): Promise<{
    t: (key: string, options?: any) => string;
    locale: string;
  }>;
}
