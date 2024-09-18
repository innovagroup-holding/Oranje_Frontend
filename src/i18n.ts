import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import nl from '@/locales/nl.json';

const messages = {
    en,
    nl
};

const i18n = createI18n({
    locale: 'en', 
    fallbackLocale: 'en', 
    messages, 
});

export default i18n;
