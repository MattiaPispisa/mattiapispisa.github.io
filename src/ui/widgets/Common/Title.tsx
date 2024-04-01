import { Text } from "..";

type Props = {
  children: JSX.Element;
};
function Title(props: Props) {
  const { children } = props;
  return (
    <Text type="h1" className="text-6xl md:text-8xl uppercase font-bold">
      {children}
    </Text>
  );
}

export default Title;
