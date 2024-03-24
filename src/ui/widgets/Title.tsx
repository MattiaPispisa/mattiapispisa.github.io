type Props = {
  children: JSX.Element;
};
function Title(props: Props) {
  const { children } = props;
  return <h1 className="text-8xl uppercase font-bold">{children}</h1>;
}

export default Title;
