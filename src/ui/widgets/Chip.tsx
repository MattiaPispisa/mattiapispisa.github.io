import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCallback} from "react";
import {useVibrate} from "../../hooks";
import {Pill} from "./Common";

type Props = {
    name: string;
    onRemove: () => void;
};

function Chip(props: Props) {
    const {name, onRemove} = props;
    const [vibrate] = useVibrate()

    const _onClick = useCallback(() => {
        vibrate()
        onRemove()
    }, [onRemove, vibrate]);

    return (
        <Pill className="inline-flex items-center px-3 py-1 w-fit">
            <span className="mr-2">{name}</span>
            <button
                className="cursor-pointer text-red-500 hover:text-red-700 focus:outline-none"
                onClick={_onClick}
            >
                <FontAwesomeIcon icon={faXmark}/>
            </button>
        </Pill>
    );
}

export default Chip;
