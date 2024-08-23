import FullScreenImage from "./FullImage";
import {useFullScreen} from "../../hooks";

type Props = {
    src: string;
    className?: string;
    alt?: string;
};

function ZoomableImage(props: Props) {
    const {removeFullScreen, fullScreen, setFullScreen} = useFullScreen()

    return (
        <>
            {fullScreen && (
                <FullScreenImage
                    src={props.src}
                    alt={props.alt}
                    onClick={removeFullScreen}
                />
            )}
            <img
                alt={props.alt}
                className={`${props.className} cursor-pointer`}
                src={props.src}
                onClick={setFullScreen}
            />
        </>
    );
}

export default ZoomableImage;
