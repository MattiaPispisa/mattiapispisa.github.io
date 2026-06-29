import NavItem from "./_NavItem";

type NavBarItem = {
  id: string;
  label: string;
};

type Props = {
  hash: string;
  onClick: () => void;
  onNavigate: (id: string) => void;
  items: NavBarItem[];
  open: boolean;
};

function NavItems({ items, open, hash, onClick, onNavigate }: Props) {

  return (
    <div
      className={`w-full flex-grow  ${open ? "block" : "hidden"}  md:block overflow-auto`}
    >
      <ul>
        {items.map((item) => {
          return (
            <NavItem
              key={item.id}
              selected={item.id === hash}
              id={item.id}
              label={item.label}
              onClick={onClick}
              onNavigate={onNavigate}
            />
          );
        })}
      </ul>
    </div>
  );
}

export type { NavBarItem };
export default NavItems;
