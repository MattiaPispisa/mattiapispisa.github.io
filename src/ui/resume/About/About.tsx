import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Title from "../../widgets/Title";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { MailTo, SocialProfile } from "../../widgets";
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

function About() {
  return (
    <>
      <Title>
        <>
          Mattia <span className="text-primary">Pispisa</span>
        </>
      </Title>
      <div className="mb-8">
        <MailTo mail="mattia.pispisa@gmail.com" />
      </div>
      <div className="mb-8">
        <p>
          As a Mobile Developer at MV Labs, I'm constantly seeking new
          challenges, driven by my passion for both web and mobile programming,
          along with a keen interest in design books.
        </p>
      </div>
      <div className="flex flex-row gap-x-4">
        {socials.map((s) => {
          return <SocialProfile key={s.link} link={s.link} icon={s.icon} />;
        })}
      </div>
    </>
  );
}

export default About;
