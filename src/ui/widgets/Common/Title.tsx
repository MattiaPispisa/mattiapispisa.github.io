import { Text } from "..";
import { TextProps } from "./Text";

type TitleProps = Omit<TextProps, "type" | "size" | "bold" | "uppercase">;

/**
 * Text h1
 * @param {TitleProps} props
 */
function Title(props: TitleProps) {
  const { className, ...rest } = props;
  return (
    <Text
      uppercase={true}
      bold={true}
      type="h1"
      size="6xl"
      className={`print:mb-3 ${className ?? ""}`}
      {...rest}
    />
  );
}

export default Title;
