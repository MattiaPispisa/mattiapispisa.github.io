import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import {
  faInstagram,
  faLinkedin,
  faDev,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
  { link: "https://www.instagram.com/mattiapispisa", icon: faInstagram },
];

export { socials };
