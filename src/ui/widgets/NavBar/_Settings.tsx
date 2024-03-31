import onScreen from "../../../functions/screens";
import DarkModeToggle from "./_DarkModeToggle";
import LanguageSelector from "./_LanguageSelector";

const className = onScreen({
  def: ["flex flex-row gap-4"],
  md: ["fixed", "top-[10px]", "right-[10px]"],
});

function Settings() {
  return (
    <div className={className}>
      <LanguageSelector />
      <DarkModeToggle />
    </div>
  );
}

export default Settings;
