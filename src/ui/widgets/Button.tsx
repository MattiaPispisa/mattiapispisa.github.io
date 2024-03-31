type Props = {
  text?: string;
  icon?: JSX.Element;
  onClick?: () => void;
} & Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "children"
>;

const Button = ({ text, icon, onClick, className, ...other }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-md focus:outline-none focus:ring gap-2 ${className}`}
      {...other}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
