type SelectOptionProps = {
  value: string;
  component: JSX.Element;
};

function SelectOption(props: SelectOptionProps) {
  return <option value={props.value}>{props.component}</option>;
}

export type { SelectOptionProps };
export default SelectOption;
