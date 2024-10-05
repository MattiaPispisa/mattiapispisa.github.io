import {useEventListener} from "usehooks-ts";
import React, {useCallback} from "react";
import {Button} from "./Common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";

type Props = {
    /**
     * customize min offset to show `ScrollToTopButton`
     */
    pageYOffset?: number;
}

/**
 * On Tap scroll to tup
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function ScrollToTopButton(props: Props): JSX.Element {
    const pageYOffset = props.pageYOffset ?? 100
    const [visible, setVisible] = React.useState(false);

    const toggleVisibility = useCallback(() => {
        setVisible(window.scrollY > pageYOffset);
    }, [pageYOffset])

    useEventListener('scroll', toggleVisibility)

    return <Button
        className={_className({visible})}
        icon={<FontAwesomeIcon icon={faArrowUp}/>}
        size={"md"}
        tapEffect={"vibrate"}
        hoverEffect={"increase"}
        semantic={"secondary"}
        variant={"fill"}
        onClick={_scrollToTop}
    />
}

function _className(options: { visible: boolean }) {
    const className = "fixed bottom-4 right-4 transition duration-300"

    if (!options.visible) {
        return `${className} opacity-0 pointer-events-none`
    }
    return `${className} opacity-100`
}

function _scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

export default ScrollToTopButton