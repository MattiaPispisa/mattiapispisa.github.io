import {
    DefaultSemantic, LightSemantic, PrimarySemantic,
    semanticToHoverTextClass,
    semanticToTextClass,
} from "../../../constants";
import React from "react";

type Props = {
    children: React.JSX.Element | React.ReactNode;
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
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /**
     * accessible name, required when the link content is icon-only
     */
    ariaLabel?: string;
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
 * @returns {React.JSX.Element} jsxElement
 */
function A({newTab = true, ...props}: Props): React.JSX.Element {
    return (
        <a
            className={_buildClassName(props)}
            href={props.href}
            aria-label={props.ariaLabel}
            onClick={props.onClick}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noreferrer" : undefined}
        >
            {props.children}
        </a>
    );
}

function _buildClassName(props: Omit<Props, "newTab">) {
    let result = "";

    if (props.semantic) {
        result += ` ${semanticToTextClass[props.semantic]} `;
    }

    if (props.hover) {
        result += ` ${semanticToHoverTextClass["primary"]} hover:underline hover:underline-offset-2`;
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
