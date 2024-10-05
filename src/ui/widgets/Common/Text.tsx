import React from "react";
import {ReactHTML} from "react";
import {Semantic, semanticToTextClass} from "../../../constants";

type Props = {
    type?: keyof ReactHTML;
    className?: string;
    semantic?: Semantic;
    children: JSX.Element | string | React.ReactNode;
    uppercase?: boolean;
    bold?: boolean;
};

function Text({
                  type = "p",
                  className = "",
                  semantic = "default",
                  uppercase = false,
                  bold,
                  ...props
              }: Props) {
    return React.createElement(
        type,
        {
            className: `${semanticToTextClass[semantic]} ${uppercase ? 'uppercase' : ''} ${bold ? 'font-bold' : ''} ${className}`,
        },
        props.children
    );
}

export default Text;
