import {useCallback, useState} from "react";
import FullScreenImage from "./FullImage";
import {useDisableScroll} from "../../hooks";

type Props = {
    src: string;
    className?: string;
    alt?: string;
};

function ZoomableImage(props: Props) {
    const [fullScreen, _setFullScreen] = useState(false);
    const [, setDisableScroll] = useDisableScroll(false);

    const setFullScreen = useCallback(() => {
        setDisableScroll(true);
        _setFullScreen(true);
    }, [setDisableScroll]);

    const removeFullScreen = useCallback(() => {
        setDisableScroll(false);
        _setFullScreen(false);
    }, [setDisableScroll]);

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
