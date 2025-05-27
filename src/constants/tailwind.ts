type PrimarySemantic = "primary";
type DefaultSemantic = "default";
type LightSemantic = "light";

/**
 * ## On light theme
 * - default: dark
 * - primary: red
 * - light: white
 * - dark: black
 */
type Semantic = DefaultSemantic | PrimarySemantic | LightSemantic | "dark" | "secondary";

const semanticToTextClass: Record<Semantic, string> = {
  default: "text-dark dark:text-light",
  primary: "text-primary dark:text-primary-dark",
  light: "text-light",
  dark: "text-dark",
  secondary: "text-gray-600 dark:text-gray-400",
};

const semanticToHoverTextClass: Record<PrimarySemantic, string> = {
  primary: "hover:text-primary-700 hover:dark:text-primary-500",
};

export type { Semantic, PrimarySemantic, DefaultSemantic, LightSemantic };
export { semanticToTextClass, semanticToHoverTextClass };
