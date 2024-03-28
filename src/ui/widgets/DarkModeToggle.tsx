import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "./DarkModeProvider";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="focus:outline-none text-dark dark:text-light transition duration-300 transform hover:scale-110"
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x" />
    </button>
  );
};

export default DarkModeToggle;
