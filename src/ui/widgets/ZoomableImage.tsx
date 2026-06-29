import type { JSX } from "react";
import {lazy, Suspense} from "react";
import {useFullScreen} from "../../hooks";

const FullScreenImage = lazy(() => import("./FullImage"));

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
                <Suspense fallback={<></>}>
                    <FullScreenImage
                        src={props.src}
                        alt={props.alt}
                        onClick={removeFullScreen}
                    />
                </Suspense>
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
