import React from "react";
import { ReactHTML } from "react";
import { Semantic, semanticToTextClass } from "../../../constants";

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";

type TextProps = {
  type?: keyof ReactHTML;
  className?: string;
  semantic?: Semantic;
  children: JSX.Element | string | React.ReactNode;
  uppercase?: boolean;
  bold?: boolean;
  size?: TextSize;
};

const textSizeClass: Record<TextSize, string> = {
  xs: "text-xs print:text-xs",
  sm: "text-sm print:text-sm",
  base: "text-base print:text-sm",
  lg: "text-lg print:text-base",
  xl: "text-xl print:text-lg",
  "2xl": "text-2xl print:text-xl",
  "3xl": "text-3xl print:text-2xl",
  "4xl": "text-4xl print:text-3xl",
  "5xl": "text-5xl print:text-4xl",
  "6xl": "text-6xl print:text-4xl",
};

function Text({
  type = "p",
  className = "",
  semantic = "default",
  uppercase = false,
  bold,
  size,
  ...props
}: TextProps) {
  return React.createElement(
    type,
    {
      className: `${semanticToTextClass[semantic]} ${
        uppercase ? "uppercase" : ""
      } ${size ? textSizeClass[size] : ""} ${
        bold ? "font-bold" : ""
      } ${className} ${size ? "" : "print:text-black print:text-sm"}`,
    },
    props.children
  );
}

export type { TextProps };
export default Text;
