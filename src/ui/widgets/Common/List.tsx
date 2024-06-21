import React from "react";
import { ReactHTML } from "react";

/**
 * @template T
 *
 * @param {T[]} items a list of elements
 *
 * @param children callback for every item
 */
type Props<T> = {
  items: T[];
  children: (item: T) => JSX.Element;
  className?: string;
  itemClassName?: string;
  itemType?: keyof ReactHTML;
};

function List<T>({
  itemType = "li",
  itemClassName = `ml-4 list-disc marker:text-dark dark:marker:text-white`,
  ...props
}: Props<T>) {
  const { className, items, children } = props;

  return (
    <ul className={className}>
      {items.map((item) => {
        return React.createElement(
          itemType,
          { className: itemClassName },
          children(item)
        );
      })}
    </ul>
  );
}

export default List;
