import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locals/en/translation.json";
import esTranslation from "./locals/es/translation.json";
import frTranslation from "./locals/fr/translation.json";

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        "en": {
            "translation": enTranslation
        },
        "en-US": {
            "translation": enTranslation
        },
        "es": {
            "translation": esTranslation
        },
        "fr": {
            "translation": frTranslation
        }
    }
})

export default i18n;