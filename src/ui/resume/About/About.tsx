import Title from "../../widgets/Common/Title";
import { HorizontalList, MailTo, SocialProfile, Text } from "../../widgets";
import DownloadResumeButton from "./_DownloadResumeButton";
import { socials } from "./socials";
import { mail } from "../../../constants";
import { useAppTranslation } from "../../../locale";

const spaceAfter = "mb-8 print:mb-3" as const;

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
      <div className={spaceAfter}>
        <MailTo mail={mail} />
      </div>
      <div className={spaceAfter}>
        <Text>{t("myInfo")}</Text>
      </div>
      <HorizontalList className={`${spaceAfter} print:flex-col print:gap-2`}>
        {socials.map((s) => {
          return <SocialProfile key={s.link} link={s.link} icon={s.icon} />;
        })}
      </HorizontalList>
      {/* <div className="mb-8 min-h-14 flex justify-center">
        <Skills />
      </div> */}
      <DownloadResumeButton />
    </>
  );
}

export default About;
