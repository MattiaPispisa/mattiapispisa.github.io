import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "..";

type Props = {
  onClick: () => void;
};

const mobClassName = "text-dark dark:text-light";
const mdClassName = "md:hidden";
const className = `${mobClassName} ${mdClassName}`;

function HamburgerButton({ onClick }: Props) {
  return (
    <Button
      className={className}
      onClick={onClick}
      icon={<FontAwesomeIcon icon={faBars} size="2x" />}
    />
  );
}

export default HamburgerButton;
