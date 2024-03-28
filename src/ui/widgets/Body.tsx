type Props = {
  children: JSX.Element;
};
function Body(props: Props) {
  return <div className="ml-72 bg-slate-50 dark:bg-slate-900">{props.children}</div>;
}

export default Body;
