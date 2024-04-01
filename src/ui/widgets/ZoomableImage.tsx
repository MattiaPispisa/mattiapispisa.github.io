import { useState } from "react";
import FullScreenImage from "./FullImage";

type Props = {
  src: string;
  className?: string;
  alt?: string;
};
function ZoomableImage(props: Props) {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      {fullScreen && (
        <FullScreenImage
          src={props.src}
          alt={props.alt}
          onClick={() => setFullScreen(false)}
        />
      )}
      <img
        alt={props.alt}
        className={`${props.className} cursor-pointer`}
        src={props.src}
        onClick={() => setFullScreen(true)}
      />
    </>
  );
}

export default ZoomableImage;
