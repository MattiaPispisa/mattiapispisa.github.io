import { EducationModel } from "./mode";
import { Text, ZoomableImage } from "../../widgets";
import { LanguageResolver } from "../../../locale";
import { merito } from "../../../constants";

const educations: (t: LanguageResolver) => EducationModel[] = (t) => [
  {
    degree: t("masterDegree"),
    university: "Università degli studi di Udine",
    description: (
      <div className="flex flex-col items-start">
        <Text>{t("masterDegreeDesc")}</Text>
        <Text>
          <>
            {t("masterDegreeVote")}
            <b>110/110</b>
            {t("masterDegreeBestGraduate")}
          </>
        </Text>
        <ZoomableImage
          alt="merito"
          src={merito}
          className="object-contain w-fit	h-[100px]"
        />
      </div>
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
