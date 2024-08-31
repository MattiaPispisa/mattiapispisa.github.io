import NavItem from "./_NavItem";

type NavBarItem = {
  id: string;
  label: string;
};

type Props = {
  hash: string;
  onClick: () => void;
  items: NavBarItem[];
  open: boolean;
};

function NavItems({ items, open, hash, onClick }: Props) {

  return (
    <div
      className={`w-full flex-grow  ${open ? "block" : "hidden"}  md:block overflow-auto`}
    >
      <ul>
        {items.map((item) => {
          return (
            <div key={item.id} className={"py-2"}>
              <NavItem
                selected={item.id === hash}
                id={item.id}
                label={item.label}
                onClick={onClick}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export type { NavBarItem };
export default NavItems;
