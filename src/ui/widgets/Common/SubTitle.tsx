import {Text} from "..";

type Props = {
    children: JSX.Element | string;
};

/**
 * Text h1
 * @param {Props} props
 */
function SubTitle(props: Props) {
    const {children} = props;
    return (
        <Text
            type="h2"
            uppercase={true}
            bold={true}
            size="4xl"
            className="mb-12 print:mb-4 print:mt-4">
            {children}
        </Text>
    );
}

export default SubTitle;
