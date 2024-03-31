import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle } from "../../../hooks";
import { useHash } from "../HashProvider";
import ProfileImage from "../ProfileImage";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "..";
import Settings from "./_Settings";
import NavItems, { NavBarItem } from "./_NavItems";
import onScreen from "../../../functions/screens";
import { profileImage } from "../../../constants";

type Props = {
  items: NavBarItem[];
};

const navClassName = onScreen({
  def: [
    "fixed right-0 top-0 left-0",
    "p-2",
    "bg-primary dark:bg-primary-dark",
    "flex flex-row flex-wrap justify-between items-center",
  ],
  md: ["w-72", "h-full", "flex-col"],
});

function NavBar(props: Props) {
  const { items } = props;
  const { hash } = useHash();

  const [open, toggle, set] = useToggle();

  return (
    <nav className={navClassName}>
      <div className={"py-3"}>
        <ProfileImage src={profileImage} />
      </div>
      <div className="flex flex-row gap-4">
        <Settings />
        <Button
          className="md:hidden"
          onClick={toggle}
          icon={<FontAwesomeIcon icon={faBars} size="2x" />}
        />
      </div>
      <NavItems
        hash={hash}
        items={items}
        onClick={() => set(false)}
        open={open}
      />
    </nav>
  );
}

export default NavBar;
