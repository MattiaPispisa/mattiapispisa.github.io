import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faDev} from "@fortawesome/free-brands-svg-icons/faDev";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons/faXTwitter";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";


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
        link: "https://g.dev/mattia_pispisa",
        icon: faGoogle,
    },
    {
        link: "https://twitter.com/MattiaPispisa",
        icon: faXTwitter,
    },
    {link: "https://www.instagram.com/mattiapispisa", icon: faInstagram},
    {link: "https://t.me/MattiaPispisa", icon: faTelegram},
];

export {socials};
