import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {A} from ".";

type Props = {
    icon: IconProp;
    link: string;
    newTab?: boolean;
};

function SocialProfile({newTab = true, ...props}: Props) {
    const {icon, link} = props;
    return (
        <A
            href={link}
            newTab={newTab}
            semantic="light">
            <div
                className="rounded-full w-14 h-14 bg-neutral-600 flex items-center justify-center  hover:bg-primary dark:hover:bg-primary-dark">
                <FontAwesomeIcon icon={icon} size="2x"/>
            </div>
        </A>
    );
}

export default SocialProfile;
