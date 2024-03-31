import { useToggle } from "../../../hooks";
import { useHash } from "../HashProvider";
import ProfileImage from "../ProfileImage";
import Settings from "./_Settings";
import NavItems, { NavBarItem } from "./_NavItems";
import { profileImage } from "../../../constants";
import HamburgerButton from "./_HamburgerButton";

type Props = {
  items: NavBarItem[];
};

const mobClassName =
  "fixed right-0 top-0 left-0 p-2 bg-primary dark:bg-primary-dark flex flex-row flex-wrap justify-between items-center";
const mdClassName = "md:w-72 md:h-full md:flex-col";
const className = `${mobClassName} ${mdClassName}`;

function NavBar(props: Props) {
  const { items } = props;
  const { hash } = useHash();

  const [open, toggle, set] = useToggle();

  return (
    <nav className={className}>
      <div className={"py-3"}>
        <ProfileImage src={profileImage} />
      </div>
      <div className="flex flex-row gap-4">
        <Settings />
        <HamburgerButton onClick={toggle} />
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
