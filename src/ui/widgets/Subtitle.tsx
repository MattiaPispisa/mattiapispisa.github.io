import { Text } from ".";

type Props = {
  children: JSX.Element | string;
};
function SubTitle(props: Props) {
  const { children } = props;
  return (
    <Text type="h2" className="text-4xl md:text-6xl uppercase font-bold mb-12 ">
      {children}
    </Text>
  );
}

export default SubTitle;
