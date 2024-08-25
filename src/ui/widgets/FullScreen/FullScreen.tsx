import React from "react";

type Props = {
    children?: React.ReactNode | JSX.Element;
    onClick?: () => void;
}

/**
 * Fixed centered content surrounded by an opacity layer
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function FullScreen(props: Props): JSX.Element {
    const {children, onClick} = props;

    return <div
        onClick={onClick}
        className={`${
            onClick ? "cursor-pointer" : ""
        } fixed top-0 left-0 p-4 md:p-16 z-50 w-full h-full bg-black/85 transition-all duration-500 ease-in-out overflow-auto flex flex-col items-center justify-center`}
    >
        {children}
    </div>
}

export default FullScreen;