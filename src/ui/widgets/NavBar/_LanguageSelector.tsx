import Select from "../Common/Select";

function LanguageSelector() {
  return (
    <Select
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
