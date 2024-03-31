import Title from "../../widgets/Title";
import { MailTo, SocialProfile, Text } from "../../widgets";
import DownloadResumeButton from "../../widgets/DownloadResumeButton";
import { socials } from "./socials";
import { mail } from "../../../constants";
import { useAppTranslation } from "../../../locale";

function About() {
  const { t } = useAppTranslation();
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
        <Text>{t("myInfo")}</Text>
      </div>
      <div className="flex flex-row gap-x-4 mb-8 overflow-x-auto">
        {socials.map((s) => {
          return <SocialProfile key={s.link} link={s.link} icon={s.icon} />;
        })}
      </div>
      {/* <div className="mb-8 min-h-14 flex justify-center">
        <Skills />
      </div> */}
      <DownloadResumeButton />
    </>
  );
}

export default About;
