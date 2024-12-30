import { profileSite } from "../../../constants";
import { A, Text } from "../Common";

type Props = {
  open: boolean;
};

function NavFooter(props: Props) {
  const { open } = props;

  return (
    <div
      className={`w-full ${open ? "block" : "hidden"} md:block  overflow-auto`}
    >
      <A
        newTab={true}
        hover={true}
        href={`${profileSite}/notebook`}
        className="text-center hidden md:block"
      >
        <Text>Notebook (WIP)</Text>
      </A>
    </div>
  );
}

export default NavFooter;
