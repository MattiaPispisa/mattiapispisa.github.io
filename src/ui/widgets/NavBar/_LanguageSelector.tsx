import Select from "../Common/Select";

function LanguageSelector() {
  return (
    <Select
      className={" bg-primary dark:bg-primary-dark md:bg-light dark:md:bg-slate-900"}
      options={[
        {
          value: "en",
          component: <>🇺🇸</>,
        },
        {
          value: "en",
          component: <>🇮🇹</>,
        },
      ]}
    />
  );
}

export default LanguageSelector;
