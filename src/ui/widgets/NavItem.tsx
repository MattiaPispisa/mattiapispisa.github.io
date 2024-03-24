import { useCallback } from "react";

type Props = {
  id: string;
  label: string;
  selected: boolean;
};

function NavItem(props: Props) {
  const { id, selected, label } = props;

  const smoothScrollTo = useCallback(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  return (
    <li>
      <a className="cursor-pointer" onClick={smoothScrollTo}>
        <p
          className={`text-center text-lg font-bold uppercase text-neutral-50  hover:opacity-100 ${
            selected ? "opacity-100" : "opacity-65"
          }`}
        >
          {label}
        </p>
      </a>
    </li>
  );
}

export default NavItem;
