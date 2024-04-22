type SelectOptionProps = {
  value: string;
  component: JSX.Element;
};

/**
 * use **only** inside `Select`
 * @param {SelectOptionProps} props
 * @returns {JSX.Element} jsxElement
 */
function SelectOption(props: SelectOptionProps) {
  return <option value={props.value}>{props.component}</option>;
}

export type { SelectOptionProps };
export default SelectOption;
