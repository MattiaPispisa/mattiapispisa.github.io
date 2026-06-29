import {A, Text} from "..";
import {useVibrate} from "../../../hooks";

type Props = {
    id: string;
    label: string;
    selected: boolean;
    onClick?: () => void;
    onNavigate: (id: string) => void;
};

function NavItem(props: Props) {
    const {id, selected, label, onNavigate} = props;

    const [vibrate] = useVibrate();

    const onClick = () => {
        props.onClick?.();
        onNavigate(id);
        vibrate()
    };

    return (
        <li>
            <A onClick={onClick}>
                <Text
                    semantic="light"
                    className={`text-center text-lg font-bold uppercase  hover:opacity-100 ${
                        selected ? "opacity-100" : "opacity-65"
                    }`}
                >
                    {label}
                </Text>
            </A>
        </li>
    );
}

export default NavItem;
