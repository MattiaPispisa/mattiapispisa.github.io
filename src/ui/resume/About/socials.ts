import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faDev} from "@fortawesome/free-brands-svg-icons/faDev";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";


type SocialProfileType = {
    link: string;
    icon: IconProp;
};

const socials: SocialProfileType[] = [
    {
        link: "https://www.linkedin.com/in/mattia-pispisa-252363189",
        icon: faLinkedin,
    },
    {
        link: "https://github.com/MattiaPispisa",
        icon: faGithub,
    },
    {
        link: "https://dev.to/mattia",
        icon: faDev,
    },

    {
        link: "https://twitter.com/MattiaPispisa",
        icon: faTwitter,
    },
    {link: "https://www.instagram.com/mattiapispisa", icon: faInstagram},
    {link: "https://t.me/MattiaPispisa", icon: faTelegram},
];

export {socials};
