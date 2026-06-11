import type { JSX } from "react";

type SkeletonItem = {
    width?: string;
    height?: string;
    className?: string;
};

type Props = {
    items: SkeletonItem[];
    className?: string;
};

function Skeleton({ items, className }: Props): JSX.Element {
    return (
        <div className={`animate-pulse space-y-3 ${className ?? ""}`}>
            {items.map((item, i) => (
                <div
                    key={i}
                    className={`bg-gray-300 dark:bg-slate-700 rounded ${item.width ?? "w-full"} ${item.height ?? "h-4"} ${item.className ?? ""}`}
                />
            ))}
        </div>
    );
}

export default Skeleton;
