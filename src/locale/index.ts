import { useTranslation } from "react-i18next";
import { en } from "./en";
import { useCallback } from "react";

type LanguageResolver = (t: keyof typeof en, object?: object) => string;
function useAppTranslation() {
  const [t, i18n] = useTranslation();

  const changeLanguage = useCallback(
    i18n.changeLanguage,
    [i18n]
  );

  return {
    t: t as LanguageResolver,
    changeLanguage,
    language: i18n.resolvedLanguage,
  };
}

export type { LanguageResolver };
export { localizationInit } from "./init";
export { useAppTranslation };
