import React from "react";
import { ReactHTML } from "react";
import { Semantic, semanticToTextClass } from "../../../constants";

type TextSize = "xs";

type Props = {
  type?: keyof ReactHTML;
  className?: string;
  semantic?: Semantic;
  children: JSX.Element | string | React.ReactNode;
  uppercase?: boolean;
  bold?: boolean;
  size?: TextSize;
};

const textSizeClass: Record<TextSize, string> = {
  xs: "text-xs",
};

function Text({
  type = "p",
  className = "",
  semantic = "default",
  uppercase = false,
  bold,
  size,
  ...props
}: Props) {
  return React.createElement(
    type,
    {
      className: `${semanticToTextClass[semantic]} ${
        uppercase ? "uppercase" : ""
      } ${size ? textSizeClass[size] : ""} ${
        bold ? "font-bold" : ""
      } ${className} print:text-black print:text-sm`,
    },
    props.children
  );
}

export default Text;
