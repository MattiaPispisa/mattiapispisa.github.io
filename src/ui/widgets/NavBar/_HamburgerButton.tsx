import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "..";
import onScreen from "../../../functions/screens";

type Props = {
  onClick: () => void;
};

const className = onScreen({
  def: ["text-dark dark:text-light"],
  md: ["hidden"],
});

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
