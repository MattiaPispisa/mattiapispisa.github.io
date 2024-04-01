import {
  Semantic,
  sematicToHoverTextClass,
  sematicToTextClass,
} from "../../../constants";

type Props = {
  children: JSX.Element | string;
  newTab?: boolean;
  href?: string;
  onClick?: () => void;
  semantic?: Semantic;
  className?: string;
  hover?: boolean;
};
function A({ newTab = true, ...props }: Props) {
  return (
    <a
      className={_buildClassName(props)}
      href={props.href}
      onClick={props.onClick}
      target={newTab ? "_blank" : undefined}
    >
      {props.children}
    </a>
  );
}

function _buildClassName(props: Omit<Props, "newTab">) {
  let result = "";

  if (props.semantic) {
    result = `${result} ${sematicToTextClass[props.semantic]}`;
  }

  if (props.hover) {
    result = `${result} ${sematicToHoverTextClass["primary"]}`;
  }

  if (props.className) {
    result = `${result} ${props.className}`;
  }

  if (props.onClick || props.href) {
    result = `${result} cursor-pointer`;
  }

  return result;
}

export default A;
