import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  name: string;
  onRemove: () => void;
};
function Chip(props: Props) {
  const { name, onRemove } = props;
  return (
    <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 w-fit">
      <span className="mr-2">{name}</span>
      <button
        className="text-red-500 hover:text-red-700 focus:outline-none"
        onClick={onRemove}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}

export default Chip;
