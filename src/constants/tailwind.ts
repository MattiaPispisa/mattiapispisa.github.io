type Primary = "primary";
/**
 * ## On light theme
 * - default: dark
 * - primary: red
 * - light: white
 * - dark: black
 */
type Semantic = "default" | Primary | "light" | "dark";

const sematicToTextClass: Record<Semantic, string> = {
  default: "text-dark dark:text-light",
  primary: "text-primary dark:text-primary-dark",
  light: "text-light",
  dark: "text-dark",
};

const sematicToHoverTextClass: Record<Primary, string> = {
  primary: "hover:text-primary hover:dark:text-primary-dark",
};

export type { Semantic };
export { sematicToTextClass, sematicToHoverTextClass };
