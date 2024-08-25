import {A} from ".";

type Props = {
    mail: string;
    newTab?: boolean;
};

/**
 * An anchor with href starting with `mailto:`
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function Mail({newTab = true, ...props}: Props): JSX.Element {
    const {mail} = props;
    return (
        <A
            semantic="primary"
            className={`uppercase `}
            href={`mailto:${mail}`}
            newTab={newTab}
        >
            {mail}
        </A>
    );
}

export default Mail;
