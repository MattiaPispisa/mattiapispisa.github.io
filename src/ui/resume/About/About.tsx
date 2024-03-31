import Title from "../../widgets/Title";
import { MailTo, SocialProfile, Text } from "../../widgets";
import DownloadResumeButton from "../../widgets/DownloadResumeButton";
import { socials } from "./socials";
import { mail } from "../../../constants";

function About() {
  return (
    <>
      <Title>
        <>
          Mattia
          <Text type="span" className="inline-block" semantic="primary">
            Pispisa
          </Text>
        </>
      </Title>
      <div className="mb-8">
        <MailTo mail={mail} />
      </div>
      <div className="mb-8">
        <Text>
          As a Mobile Developer at MV Labs, I'm constantly seeking new
          challenges, driven by my passion for both web and mobile programming,
          along with a keen interest in design books.
        </Text>
      </div>
      <div className="flex flex-row gap-x-4 mb-8">
        {socials.map((s) => {
          return <SocialProfile key={s.link} link={s.link} icon={s.icon} />;
        })}
      </div>
      <DownloadResumeButton />
    </>
  );
}

export default About;
