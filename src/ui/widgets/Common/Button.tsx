import React from "react";

type Props = {
  /**
   * button text child
   */
  text?: string;
  /**
   * button icon child (before `text`)
   */
  icon?: JSX.Element;
  onClick?: () => void;
} & Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "children"
>;
/**
 *
 * @param {Props} param
 * @returns {JSX.Element} jsxElement
 */
const Button = ({ text, icon, onClick, className, ...other }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-md focus:outline-none gap-2 ${className}`}
      {...other}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
