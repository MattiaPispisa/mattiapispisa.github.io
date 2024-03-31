type Props = {
  label: string;
  onClick: () => void;
};
const ButtonChip = (props: Props) => {
  const { label, onClick } = props;
  return (
    <button
      className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 hover:bg-gray-300 focus:outline-none focus:ring focus:bg-gray-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonChip;
