import type {MouseEvent} from "react";
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

    const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
        // keep the custom reveal+scroll behavior instead of the native hash jump
        event.preventDefault();
        props.onClick?.();
        onNavigate(id);
        vibrate()
    };

    return (
        <li className="py-2">
            <A href={`#${id}`} newTab={false} onClick={onClick}>
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
