import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {sematicToTextClass} from "../../constants";

type Props = {
    className?: string;
}

/**
 * Spinning primary icon
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function Spinner(props: Props): JSX.Element {
    return <FontAwesomeIcon
        size={"4x"}
        className={`${sematicToTextClass["primary"]} ${props.className ?? ''}`}
        icon={faSpinner} spin={true}
    />
}

export default Spinner;