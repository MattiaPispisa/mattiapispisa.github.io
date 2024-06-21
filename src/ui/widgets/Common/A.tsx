import {
  Semantic,
  sematicToHoverTextClass,
  sematicToTextClass,
} from "../../../constants";

type Props = {
  children: JSX.Element | string;
  /**
   * link is open in another tab
   *
   * @default true
   */
  newTab?: boolean;
  /**
   * href
   */
  href?: string;
  onClick?: () => void;
  /**
   * a color semantic
   */
  semantic?: Semantic;
  className?: string;
  /**
   * color color on hover based on `semantic`
   */
  hover?: boolean;
};
/**
 *
 * @param {Props} props
 * @returns {JSX.Element} jsxElement
 */
function A({ newTab = true, ...props }: Props): JSX.Element {
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
