import {useCallback} from "react";

type VibrateCallback = (pattern?: number | number[]) => void
type UseVibrateReturnType = [VibrateCallback]

const can = 'vibrate' in navigator

/**
 * Vibrate if device support it
 */
function useVibrate(): UseVibrateReturnType {
    const vibrate = useCallback((pattern?: number | number[]) => {
        if (!can) {
            return;
        }
        navigator.vibrate(pattern ?? 20)
    }, [])

    return [vibrate]
}

export {useVibrate}