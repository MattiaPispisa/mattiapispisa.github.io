import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectOption, { SelectOptionProps } from "./SelectOption";
import { useCallback } from "react";

type Props = {
  className?: string;
  options: SelectOptionProps[];
  onSelected?: (value: string) => void;
};

function Select({ options, onSelected, className }: Props) {
  const onChange = useCallback(
    (event: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
      const targetValue = event.currentTarget.value;
      onSelected?.(targetValue);
    },
    [onSelected]
  );

  return (
    <div className="relative">
      <select
        onClick={onChange}
        className={`block appearance-none w-full bg-transparent border border-dark  dark:border-light  text-dark dark:text-light py-3 px-4 pr-8 rounded leading-tight focus:outline-none ${className}`}
      >
        {options.map((option) => {
          return <SelectOption {...option} />;
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dark dark:text-light">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

export default Select;
