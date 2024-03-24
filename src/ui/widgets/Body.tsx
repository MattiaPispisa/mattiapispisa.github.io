type Props = {
  children: JSX.Element;
};
function Body(props: Props) {
  return <div className="ml-72">{props.children}</div>;
}

export default Body;
