import React, {useCallback} from "react";
import {sematicToTextClass} from "../../../constants";
import {useVibrate} from "../../../hooks";

type ButtonSize = "sm" | "md"
type ButtonSemantic = "primary" | "secondary" | "contrast"
type ButtonVariant = "fill" | "outlined" | "flat"
type ButtonHoverEffect = "increase"
type ButtonTapEffect = "vibrate"

const baseClassName = "flex items-center justify-center py-2 px-4 rounded-md focus:outline-none gap-2 touch-action: manipulation"

const sizeClasses = {
    sm: "text-sm",
    md: "text-md",
};

const semanticClasses: Record<ButtonSemantic, string> = {
    primary: `${sematicToTextClass["default"]} bg-primary-500 hover:bg-primary-700 dark:bg-primary-dark dark:hover:bg-primary-600`,
    secondary: `${sematicToTextClass["default"]} bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600`,
    contrast: `${sematicToTextClass["default"]}`,
};

const variantClasses: Record<ButtonVariant, Record<ButtonSemantic, string>> = {
    flat: {
        primary: `${sematicToTextClass["primary"]} bg-transparent hover:bg-primary-100`,
        secondary: `${sematicToTextClass["default"]} bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800`,
        contrast: `${sematicToTextClass["default"]} bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700`,
    },
    fill: {
        primary: semanticClasses.primary,
        secondary: semanticClasses.secondary,
        contrast: `${sematicToTextClass["default"]} bg-dark hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-300`,
    },
    outlined: {
        primary: `${sematicToTextClass["primary"]} border border-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-500 dark:hover:bg-primary-500 dark:hover:text-white`,
        secondary: `border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white`,
        contrast: `${sematicToTextClass["default"]} border border-dark hover:bg-dark hover:text-white dark:border-light dark:hover:bg-light dark:hover:text-dark`,
    },
};

const hoverEffectClasses = {
    increase: `transition duration-300 transform hover:scale-110`
}

type Props = {
    /**
     * button text child
     */
    text?: string | JSX.Element;
    /**
     * button icon child (before `text`)
     */
    icon?: JSX.Element;
    onClick?: () => void;
    size?: ButtonSize
    variant?: ButtonVariant
    semantic?: ButtonSemantic
    hoverEffect?: ButtonHoverEffect
    tapEffect?: ButtonTapEffect
} & Omit<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
    "children" | "onClick"
>;
/**
 *
 * @param {Props} param
 * @returns {JSX.Element} jsxElement
 */
const Button = ({
                    semantic = "primary",
                    variant = "fill",
                    size = "md",
                    icon,
                    text,
                    onClick,
                    className,
                    hoverEffect,
                    tapEffect,
                    ...other
                }: Props): JSX.Element => {

    const [vibrate] = useVibrate()

    const _onClick = useCallback(() => {
        if (tapEffect === "vibrate") {
            vibrate()
        }
        onClick?.()
    }, [vibrate, onClick, tapEffect])


    return (
        <button
            onClick={_onClick}
            className={composeClassName(semantic, variant, size, className, hoverEffect)}
            {...other}
        >
            {icon}
            {text}
        </button>
    );
};

function composeClassName(semantic: ButtonSemantic, variant: ButtonVariant, size: ButtonSize, className?: string, hoverEffect?: ButtonHoverEffect,): string {
    const sizeClass = sizeClasses[size];
    const semanticClass = semanticClasses[semantic];
    const variantClass = variantClasses[variant][semantic];

    return `${baseClassName} ${sizeClass} ${
        variant === "fill" ? semanticClass : variantClass
    } ${className ?? ''} ${hoverEffect ? hoverEffectClasses[hoverEffect] : ''}`;
}

export default Button;
