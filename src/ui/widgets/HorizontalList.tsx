type Gap = "2" | "4";

type Props = {
    children: JSX.Element[];
    className?: string;
    gap?: Gap;
};

/**
 * flex row scrollable
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function HorizontalList({gap = "4", className = "", ...props}: Props): JSX.Element {
    return (
        <div
            className={`flex flex-row ${_gapToClassName[gap]} overflow-x-auto ${className} scrollbar-hide md:scrollbar-default print:flex-wrap print:gap-y-2`}
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
