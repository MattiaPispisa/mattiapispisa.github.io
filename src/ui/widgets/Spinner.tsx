import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {sematicToTextClass} from "../../constants";

type Props = {
    className?: string;
}

function Spinner(props: Props) {
    return <FontAwesomeIcon
        size={"4x"}
        className={`${sematicToTextClass["primary"]} ${props.className ?? ''}`}
        icon={faSpinner} spin={true}
    />
}

export default Spinner;