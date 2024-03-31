import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./en";
import { it } from "./it";

async function localizationInit() {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: import.meta.env.MODE === "dev",
      resources: {
        en: {
          translation: en,
        },
        it: {
          translation: it,
        },
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
}

export { localizationInit };
