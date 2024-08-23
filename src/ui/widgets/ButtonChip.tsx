import {useCallback} from "react";
import {useVibrate} from "../../hooks";

type Props = {
    label: string;
    onClick: () => void;
};
const ButtonChip = (props: Props) => {
    const {label, onClick} = props;
    const [vibrate] = useVibrate()

    const _onClick = useCallback(() => {
        vibrate()
        onClick()
    }, [onClick, vibrate]);

    return (
        <button
            className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
            onClick={_onClick}
        >
            {label}
        </button>
    );
};

export default ButtonChip;
