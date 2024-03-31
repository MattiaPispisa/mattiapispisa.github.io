import DarkModeToggle from "./_DarkModeToggle";
import LanguageSelector from "./_LanguageSelector";

const mobClassName = "flex flex-row gap-4";
const mdClassName = "md:fixed md:top-[10px] md:right-[10px]";
const className = `${mobClassName} ${mdClassName}`;

function Settings() {
  return (
    <div className={className}>
      <LanguageSelector />
      <DarkModeToggle />
    </div>
  );
}

export default Settings;
