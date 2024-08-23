import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {useDarkMode} from "../DarkModeProvider.ts";
import {Button} from "..";

const DarkModeToggle = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();

    return (
        <Button
            semantic={"contrast"}
            variant={"flat"}
            hoverEffect={"increase"}
            tapEffect={"vibrate"}
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            icon={<FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x"/>}
        />
    );
};

export default DarkModeToggle;
