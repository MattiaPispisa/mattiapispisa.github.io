import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle } from "../../hooks";
import { useHash } from "./HashProvider";
import NavItem from "./NavItem";
import ProfileImage from "./ProfileImage";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, DarkModeToggle } from ".";

type NavBarItem = {
  id: string;
  label: string;
};
type Props = {
  items: NavBarItem[];
};
function NavBar(props: Props) {
  const { items } = props;
  const { hash } = useHash();

  const [open, toggle, set] = useToggle();

  return (
    <nav
      className={
        "fixed right-0 top-0 left-0 md:w-72 md:h-full bg-primary dark:bg-primary-dark p-2 flex flex-row flex-wrap justify-between md:flex-col items-center"
      }
    >
      <div className={"py-3"}>
        <ProfileImage src={"profile_image.jpg"} />
      </div>
      <div className="flex flex-row gap-2">
        <div className="md:fixed md:top-0 md:right-0">
          <DarkModeToggle />
        </div>
        <Button
          className="md:hidden"
          onClick={toggle}
          icon={<FontAwesomeIcon icon={faBars} size="2x" />}
        />
      </div>

      <div
        className={`w-full flex-grow  ${open ? "block" : "hidden"}  md:block `}
      >
        <ul>
          {items.map((item) => {
            return (
              <div key={item.id} className={"py-2"}>
                <NavItem
                  selected={item.id === hash}
                  id={item.id}
                  label={item.label}
                  onClick={() => set(false)}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
