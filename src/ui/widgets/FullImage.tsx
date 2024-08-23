import FullScreen from "./FullScreen/FullScreen.tsx";

type Props = {
    src: string;
    alt?: string;
    onClick?: () => void;
};

const FullScreenImage = ({src, onClick, alt}: Props) => {
    return (
        <FullScreen
            onClick={onClick}
        >
            <img
                src={src}
                alt={`Full Screen ${alt ?? ""}`}
                className="rounded-md max-w-full max-h-full"
            />
        </FullScreen>
    );
};

export default FullScreenImage;
