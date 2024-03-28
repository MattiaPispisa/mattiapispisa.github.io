import React from "react";
import { ReactHTML } from "react";

type Semantic = "default" | "primary" | "white" | "dark";

type Props = {
  type?: keyof ReactHTML;
  className?: string;
  semantic?: Semantic;
  children: JSX.Element | string;
};

function Text({
  type = "p",
  className = "",
  semantic = "default",
  ...props
}: Props) {
  return React.createElement(
    type,
    {
      className: `${sematicToClassName[semantic]} ${className}`,
    },
    props.children
  );
}

const sematicToClassName: Record<Semantic, string> = {
  default: "text-dark dark:text-light",
  primary: "text-primary dark:text-primary-dark",
  white: "text-light",
  dark: "text-dark",
};

export default Text;
