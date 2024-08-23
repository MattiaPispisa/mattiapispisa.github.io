import {useCallback, useState} from "react";
import {useDisableScroll} from "./useDisableScroll.ts";

function useFullScreen() {
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

    return {fullScreen, setFullScreen, removeFullScreen};
}

export {useFullScreen};