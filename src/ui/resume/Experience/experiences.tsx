import { ExperienceModel } from "./model";
import { Text } from "../../widgets";
import { LanguageResolver } from "../../../locale";

const experiences: (t: LanguageResolver) => ExperienceModel[] = (t) => [
  {
    application: t("mvExperience"),
    company: "MVLabs",
    description: (
      <>
        <Text>{t("mvExperienceWeb")}</Text>
        <Text>{t("mvExperienceMob")}</Text>
      </>
    ),
    start: "2021-02-01",
    type: "work",
  },
  {
    application: t("tecnotronicaExperience"),
    company: "TECNOTRONICA S.A.S.",
    description: (
      <Text>
        <>
          {t("tecnotronicaExperienceDesc")}
          <ul>
            <li className="ml-4 list-disc">
              {t("tecnotronicaExperienceDescWeb")}
            </li>
            <li className="ml-4 list-disc">
              {t("tecnotronicaExperienceDescBe")}
            </li>
          </ul>
        </>
      </Text>
    ),
    start: "2022-11-01",
    end: "2023-05-01",
    type: "work",
  },
  {
    application: t("archeidoExperience"),
    company: "Archeido",
    start: "2019-07-01",
    end: "2020-03-01",
    type: "work",
  },
  {
    application: t("fillInTheBlanksExperience"),
    company: "Fill In The Blanks s.r.l.",
    start: "2015-06-01",
    end: "2015-07-01",
    type: "work",
  },
];

export { experiences };
