import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { ThemeMode, useDarkMode } from "../DarkModeProvider.ts";
import { Button } from "..";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const DarkModeToggle = () => {
  const { darkMode, toggleThemeMode, themeMode } = useDarkMode();

  return (
    <Button
      semantic={"contrast"}
      variant={"flat"}
      hoverEffect={"increase"}
      tapEffect={"vibrate"}
      onClick={toggleThemeMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      icon={
        <FontAwesomeIcon
          icon={_icon[themeMode]}
          size="2x"
        />
      }
    />
  );
};

const _icon: Record<ThemeMode, IconProp> = {
  light: faSun,
  dark: faMoon,
  system: faCircleHalfStroke,
};

export default DarkModeToggle;
