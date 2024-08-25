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
            className="text-4xl md:text-6xl mb-12 ">
            {children}
        </Text>
    );
}

export default SubTitle;
