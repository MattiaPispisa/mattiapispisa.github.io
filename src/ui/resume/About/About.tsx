import Title from "../../widgets/Common/Title";
import { HorizontalList, MailTo, SocialProfile, Text } from "../../widgets";
import DownloadResumeButton from "./_DownloadResumeButton";
import { socials } from "./socials";
import { mail, birthday } from "../../../constants";
import { useAppTranslation } from "../../../locale";
import { calculateAge, formatDate } from "../../../functions";
import { useMemo } from "react";

const spaceAfter = "mb-8 print:mb-3" as const;

function About() {
  const { t, language } = useAppTranslation();
  const formattedBirthday = formatDate(birthday, { language });

  return (
    <>
      <_Title />
      <div className={"mb-1"}>
        <MailTo mail={mail} />
      </div>
      <div className={spaceAfter}>
        <Text>{formattedBirthday}</Text>
      </div>
      <div className={spaceAfter}>
        <Text>{t("myInfo")}</Text>
      </div>
      <HorizontalList className={`${spaceAfter} print:flex-col print:gap-2`}>
        {socials.map((s) => {
          return <SocialProfile key={s.link} link={s.link} icon={s.icon} />;
        })}
      </HorizontalList>
      {/* 
      <div className="mb-8 min-h-14 flex justify-center">
        <Skills />
      </div> */}
      <DownloadResumeButton />
    </>
  );
}

function _Title() {
  const age = useMemo(() => calculateAge(birthday), []);

  return (
    <Title>
      Mattia
      <Text
        type="p"
        size="6xl"
        className="inline-block print:ml-2"
        semantic="primary"
      >
        Pispisa
        <Text
          type="sup"
          size="lg"
          semantic="primary"
          className="top-[-2.2em] print:hidden"
        >
          {age}
        </Text>
      </Text>
    </Title>
  );
}

export default About;
