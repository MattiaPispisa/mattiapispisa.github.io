import { useCallback } from "react";
import { provide } from "../../functions";
import { useLocalStorage } from "usehooks-ts";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function _useDarkMode(): DarkModeContextType {
  const [darkMode, setDarkMode] = useLocalStorage("dark", _darkPreference());

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
