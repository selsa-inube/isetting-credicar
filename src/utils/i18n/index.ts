import { es } from "@locales/en/translation";
import { en } from "@locales/es/translation";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export { i18next as i18n };
