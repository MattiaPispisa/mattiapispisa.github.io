type Props = {
  children: JSX.Element;
};
function SubTitle(props: Props) {
  const { children } = props;
  return <h2 className="text-6xl uppercase font-bold mb-12">{children}</h2>;
}

export default SubTitle;
