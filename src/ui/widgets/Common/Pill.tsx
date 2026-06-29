import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Rounded gray "pill" surface shared by {@link Chip} and version badges.
 * Hidden in print. Pass `className` for padding/size/text-color.
 */
function Pill({ children, className }: Props) {
  return (
    <span className={`bg-gray-200 rounded-full print:hidden ${className ?? ""}`}>
      {children}
    </span>
  );
}

export default Pill;
