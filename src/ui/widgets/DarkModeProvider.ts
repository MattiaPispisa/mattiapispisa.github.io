import { useCallback, useMemo, useEffect, useState } from "react";
import { provide } from "../../functions";
import { useLocalStorage } from "usehooks-ts";

const themeModes = ['light', 'dark', 'system']
type ThemeMode = typeof themeModes[number];

interface DarkModeContextType {
  /**
   * The current theme mode.
   */
  themeMode: ThemeMode;
  /**
   * The current dark mode.
   */
  darkMode: boolean;
  /**
   * Toggle the theme mode.
   */
  toggleThemeMode: () => void;
}

function _useDarkMode(): DarkModeContextType {
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>("theme", "system", { deserializer: _deserializer, serializer: _serializer });
  const darkPreference = _useSystemDarkPreference();

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => {
      return _nextState[prev];
    });
  }, [setThemeMode]);

  const darkMode = useMemo(() => {
    if (themeMode === "light") return false;
    if (themeMode === "dark") return true;
    return darkPreference;
  }, [themeMode, darkPreference]);

  return { themeMode, darkMode, toggleThemeMode };
}

const _deserializer = (value: string) => {
  if (themeModes.includes(value)) {
    return value;
  }
  return "system";
}

const _serializer = (value: ThemeMode) => {
  if (themeModes.includes(value)) {
    return value;
  }
  return "system";
}

const _nextState: Record<ThemeMode, ThemeMode> = {
  light: "dark",
  dark: "system",
  system: "light",
};

function _useSystemDarkPreference() {
  const [darkPreference, _setDarkPreference] = useState(() => _darkPreference());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      _setDarkPreference(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);

  }, []);

  return darkPreference;
}

const provided = provide(_useDarkMode);
/**
 * Provider for dark mode hook.
 * Use {@link useDarkMode} to get the dark mode state.
 */
const DarkModeProvider = provided[0];

/**
 * Hook to get the dark mode state.
 * Use {@link DarkModeProvider} to provide the dark mode state.
 */
const useDarkMode = provided[1];

function _darkPreference(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export type { ThemeMode };
export { useDarkMode };
export default DarkModeProvider;
