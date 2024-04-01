type Gap = "2" | "4";

type Props = {
  children: JSX.Element[];
  className?: string;
  gap?: Gap;
};

function HorizontalList({ gap = "4", className = "", ...props }: Props) {
  return (
    <div
      className={`flex flex-row ${_gapToClassName[gap]} overflow-x-auto ${className} scrollbar-hide md:scrollbar-default`}
    >
      {props.children}
    </div>
  );
}

const _gapToClassName: Record<Gap, string> = {
  "2": "gap-x-2",
  "4": "gap-x-4",
};

export default HorizontalList;
