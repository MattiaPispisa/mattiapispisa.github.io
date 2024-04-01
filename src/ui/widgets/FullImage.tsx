type Props = {
  src: string;
  alt?: string;
  onClick?: () => void;
};

const FullScreenImage = ({ src, onClick, alt }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`${
        onClick ? "cursor-pointer" : ""
      } fixed top-0 left-0 p-4 md:p-16 z-50 w-full h-full bg-black/85 transition-all duration-500 ease-in-out  flex items-center justify-center`}
    >
      <img
        src={src}
        alt={`Full Screen ${alt ?? ""}`}
        className="rounded-md max-w-full max-h-full"
      />
    </div>
  );
};

export default FullScreenImage;
