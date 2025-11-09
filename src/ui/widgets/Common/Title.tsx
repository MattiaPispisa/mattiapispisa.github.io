import {Text} from "..";
import React from "react";

type Props = {
    children: JSX.Element | React.ReactNode;
    className?: string;
};

/**
 * Text h1
 * @param {Props} props
 */
function Title(props: Props) {
    const {children} = props;
    return (
        <Text
            uppercase={true}
            bold={true}
            type="h1"
            size="6xl"
            className={`print:mb-3 ${props.className ?? ''}`}>
            {children}
        </Text>
    );
}

export default Title;
