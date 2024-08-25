import FullScreenImage from "./FullImage";
import {useFullScreen} from "../../hooks";

type Props = {
    src: string;
    className?: string;
    alt?: string;
};

/**
 * An img, on tap show img using {@link FullScreenImage}
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function ZoomableImage(props: Props): JSX.Element {
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
