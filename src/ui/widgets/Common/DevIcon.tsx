import useStateEffect from "../../../hooks/useStateEffect";

type LanguageIcon = "js" | "ts" | "dart";
type FrameworkIcon = "react" | "mithril" | "flutter";
type MarkupIcon = "html" | "css" | "sass" | "bootstrap" | "tailwind";
type ToolIcon = "vite" | "vitest" | "webpack" | "docker";

type DevIconProps = LanguageIcon | MarkupIcon | FrameworkIcon | ToolIcon;

type Size = "1x" | "2x" | "3x";

type Props = {
  icon: DevIconProps;
  /**
   * black and white or colored
   */
  colored?: boolean;
  size: Size;
  /**
   * toggle to `colored` on hover
   */
  colorOnHover?: boolean;
};

/**
 *
 * @param {Props} param
 * @returns {JSX.Element} jsxElement
 */
function DevIcon({ icon, size, colorOnHover, ...other }: Props) {
  const [colored, setColored] = useStateEffect(other.colored);

  return (
    <i
      className={`${sizeMap[size]} ${iconMap[icon]} ${
        colored ? "colored" : ""
      } ${
        colorOnHover ? "hover:cursor-pointer" : ""
      } transition-all duration-300 ease-in-out ${hoverSizeMap[size]}`}
      onMouseEnter={colorOnHover ? () => setColored(true) : undefined}
      onMouseLeave={colorOnHover ? () => setColored(false) : undefined}
    />
  );
}

const sizeMap: Record<Size, string> = {
  "1x": "text-[1em]",
  "2x": "text-[2em]",
  "3x": "text-[3em]",
};

const hoverSizeMap: Record<Size, string> = {
  "1x": "hover:text-[2em]",
  "2x": "hover:text-[3em]",
  "3x": "hover:text-[3em]",
};

const iconMap: Record<DevIconProps, string> = {
  js: "devicon-javascript-plain",
  ts: "devicon-typescript-plain",
  dart: "devicon-dart-plain",
  react: "devicon-react-original",
  mithril: "devicon-mithril-original",
  flutter: "devicon-flutter-plain",
  vite: "devicon-vitejs-plain",
  vitest: "devicon-vitest-plain",
  webpack: "devicon-webpack-plain",
  docker: "devicon-docker-plain",
  bootstrap: "devicon-bootstrap-plain",
  css: "devicon-css3-plain",
  html: "devicon-html5-plain",
  tailwind: "devicon-tailwindcss-original",
  sass: "devicon-sass-original",
};
export type { DevIconProps };
export default DevIcon;
