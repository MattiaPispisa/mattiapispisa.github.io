import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../DarkModeProvider.ts";
import { Button } from "..";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button
      className="text-dark dark:text-light transition duration-300 transform hover:scale-110"
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      icon={<FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x" />}
    />
  );
};

export default DarkModeToggle;
