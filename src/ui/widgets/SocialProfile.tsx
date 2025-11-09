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
    
    // Extract domain name for print view
    const displayLink = _displayLink(link);
    
    return (
        <A
            href={link}
            newTab={newTab}
            semantic="light"
            className="print:no-underline">
            <div
                className="rounded-full w-14 h-14 bg-neutral-600 flex items-center justify-center hover:bg-primary dark:hover:bg-primary-dark print:rounded-none print:w-auto print:h-auto print:bg-transparent print:flex-row print:gap-3 print:justify-start print:py-1">
                <div className="print:w-6 print:text-center">
                    <FontAwesomeIcon icon={icon} size="2x" className="print:text-base"/>
                </div>
                <span className="hidden print:inline print:text-xs print:text-gray-700">{displayLink}</span>
            </div>
        </A>
    );
}

/**
 * Display the link without the protocol and the trailing slash
 * @param link - The link to display
 * @returns The link without the protocol and the trailing slash
 */
function _displayLink(link: string) {
    // Remove the protocol and the trailing slash
    return link.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export default SocialProfile;
