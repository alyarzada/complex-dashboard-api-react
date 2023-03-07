import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { az, en, rus } from "./locales";

const resources = {
  az,
  en,
  rus,
};

const detectionOptions = {
  order: ["localStorage", "path", "cookie"],

  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLanguage",
  lookupFromPathIndex: 0,

  caches: ["localStorage", "cookie"],

  cookieMinutes: 10000,
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "az",
    fallbackLng: "az",
    load: "languageOnly",
    whitelist: ["az", "en", "rus"],
    detection: detectionOptions,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
