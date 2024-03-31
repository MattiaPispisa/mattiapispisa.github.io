import { useAppTranslation } from "../../../locale";
import Select from "../Common/Select";

function LanguageSelector() {
  const { language, changeLanguage } = useAppTranslation();

  return (
    <Select
      value={language}
      onSelected={changeLanguage}
      className={
        " bg-primary dark:bg-primary-dark md:bg-light dark:md:bg-slate-900"
      }
      options={[
        {
          value: "en",
          component: <>🇺🇸</>,
        },
        {
          value: "it",
          component: <>🇮🇹</>,
        },
      ]}
    />
  );
}

export default LanguageSelector;
