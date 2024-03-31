import Title from "../../widgets/Title";
import { MailTo, SocialProfile, Text } from "../../widgets";
import DownloadResumeButton from "../../widgets/DownloadResumeButton";
import { socials } from "./socials";
import { mail } from "../../../constants";
import { myInfo } from "./myInfo";

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
        <Text>{myInfo}</Text>
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
