import { EducationModel } from "./mode";
import { Text } from "../../widgets";
import { LanguageResolver } from "../../../locale";

const educations: (t: LanguageResolver) => EducationModel[] = (t) => [
  {
    degree: t("masterDegree"),
    university: "Università degli studi di Udine",
    description: (
      <>
        <Text>{t("masterDegreeDesc")}</Text>
        <Text>
          <>
            {t("masterDegreeVote")}
            <b>110/110</b>
            {t("masterDegreeBestGraduate")}
          </>
        </Text>
        <img
          alt="merito"
          src="merito.jpeg"
          className="object-contain w-fit	h-[100px]"
        />
      </>
    ),
    start: "2019-10-01",
    end: "2021-10-01",
  },
  {
    degree: t("bachelorDegree"),
    university: "Università degli studi di Udine",
    description: (
      <>
        <Text>{t("bachelorDegreeDesc")}</Text>
        <Text>
          <>
            {t("bachelorDegreeVote")}
            <b>110/110</b>
          </>
        </Text>
      </>
    ),
    start: "2016-10-01",
    end: "2019-10-01",
  },
  {
    degree: t("diploma"),
    university: "ISIS Arturo Malignani",
    description: <Text>{t("diplomaText")}</Text>,
    start: "2012",
    end: "2016",
  },
];

export { educations };
