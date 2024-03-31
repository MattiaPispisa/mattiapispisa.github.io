import { useCallback, useState } from "react";
import { provide } from "../../functions";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function _useDarkMode(): DarkModeContextType {
  const [darkMode, setDarkMode] = useState(_darkPreference());

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }, []);

  return { darkMode, toggleDarkMode };
}

const [DarkModeProvider, useDarkMode] = provide(_useDarkMode);

function _darkPreference(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export { useDarkMode };
export default DarkModeProvider;
