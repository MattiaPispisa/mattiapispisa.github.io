import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "..";

type Props = {
    onClick: () => void;
};

const mdClassName = "md:hidden";
const className = `${mdClassName}`;

function HamburgerButton({onClick}: Props) {
    return (
        <Button
            semantic={"contrast"}
            variant={"flat"}
            hoverEffect={"increase"}
            tapEffect={"vibrate"}
            className={className}
            onClick={onClick}
            icon={<FontAwesomeIcon icon={faBars} size="2x"/>}
        />
    );
}

export default HamburgerButton;
