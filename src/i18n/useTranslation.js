import { translations } from './translations';
import { useLanguage } from './LanguageContext';

export const useTranslation = () => {
  const { lang } = useLanguage();
  const t = (key) => {
    const parts = key.split('.');
    let cur = translations[lang];
    for (const part of parts) {
      if (cur && typeof cur === 'object' && part in cur) {
        cur = cur[part];
      } else {
        return key; // fallback to key if not found
      }
    }
    return cur;
  };
  return { t, lang };
};
