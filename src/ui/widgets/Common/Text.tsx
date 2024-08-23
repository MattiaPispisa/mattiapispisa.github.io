import React from "react";
import { ReactHTML } from "react";
import { Semantic, sematicToTextClass } from "../../../constants";

type Props = {
  type?: keyof ReactHTML;
  className?: string;
  semantic?: Semantic;
  children: JSX.Element | string | React.ReactNode;
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
      className: `${sematicToTextClass[semantic]} ${className}`,
    },
    props.children
  );
}

export default Text;
