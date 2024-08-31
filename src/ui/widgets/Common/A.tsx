import {
    DefaultSemantic, LightSemantic, PrimarySemantic,
    sematicToHoverTextClass,
    sematicToTextClass,
} from "../../../constants";
import React from "react";

type Props = {
    children: JSX.Element | React.ReactNode;
    /**
     * link is open in another tab
     *
     * @default true
     */
    newTab?: boolean;
    /**
     * href
     */
    href?: string;
    onClick?: () => void;
    /**
     * a color semantic
     */
    semantic?: DefaultSemantic | PrimarySemantic | LightSemantic;
    className?: string;
    /**
     * color on hover based on `semantic`
     */
    hover?: boolean;
};

/**
 *
 * @param {Props} props
 * @returns {JSX.Element} jsxElement
 */
function A({newTab = true, ...props}: Props): JSX.Element {
    return (
        <a
            className={_buildClassName(props)}
            href={props.href}
            onClick={props.onClick}
            target={newTab ? "_blank" : undefined}
        >
            {props.children}
        </a>
    );
}

function _buildClassName(props: Omit<Props, "newTab">) {
    let result = "";

    if (props.semantic) {
        result += ` ${sematicToTextClass[props.semantic]} `;
    }

    if (props.hover) {
        result += ` ${sematicToHoverTextClass["primary"]} hover:underline hover:underline-offset-2`;
    }

    if (props.className) {
        result += ` ${props.className}`;
    }

    if (props.onClick || props.href) {
        result += " cursor-pointer";
    }

    return result.trim();
}

export default A;
