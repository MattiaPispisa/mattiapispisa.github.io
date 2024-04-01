import { useEffect, useLayoutEffect, useState } from "react";

type UseDisableScrollResult = [boolean, (disableScroll: boolean) => void];

function useDisableScroll(
  initialLocked = true,
  unLockOnUnmount = true,
  rootId = "root"
): UseDisableScrollResult {
  const [locked, setLocked] = useState(initialLocked);

  useLayoutEffect(() => {
    if (!locked) {
      return;
    }

    // if scrollbar was visible clientWidth was (Total - scrollbar)
    const innerWidth = document.body.clientWidth;

    // Save initial body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Get the scrollBar width
    const root = document.getElementById(rootId); // or root
    const scrollBarWidth = root ? root.offsetWidth - innerWidth : 0;

    // Avoid width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  // Update state if initialValue changes
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    return () => {
      if (unLockOnUnmount) {
        setLocked(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [locked, setLocked];
}

export { useDisableScroll };
