type PrimarySemantic = "primary";
type DefaultSemantic = "default"
type LightSemantic = "light"

/**
 * ## On light theme
 * - default: dark
 * - primary: red
 * - light: white
 * - dark: black
 */
type Semantic = DefaultSemantic | PrimarySemantic | LightSemantic | "dark";

const sematicToTextClass: Record<Semantic, string> = {
    default: "text-dark dark:text-light",
    primary: "text-primary dark:text-primary-dark",
    light: "text-light",
    dark: "text-dark",
};

const sematicToHoverTextClass: Record<PrimarySemantic, string> = {
    primary: "hover:text-primary-700 hover:dark:text-primary-500",
};

export type {Semantic, PrimarySemantic,DefaultSemantic, LightSemantic};
export {sematicToTextClass, sematicToHoverTextClass};
