import { useCallback } from "react";
import { A, Text } from "..";

type Props = {
  id: string;
  label: string;
  selected: boolean;
  onClick?: () => void;
};

function NavItem(props: Props) {
  const { id, selected, label } = props;

  const smoothScrollTo = useCallback(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  const onClick = () => {
    props.onClick?.();
    smoothScrollTo();
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
