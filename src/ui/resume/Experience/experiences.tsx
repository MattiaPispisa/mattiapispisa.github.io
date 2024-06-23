import { ExperienceModel } from "./model";
import { List, Text } from "../../widgets";
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
      <div>
        <>
          <Text>{t("tecnotronicaExperienceDesc")}</Text>
          <List
            items={
              [
                "tecnotronicaExperienceDescWeb",
                "tecnotronicaExperienceDescBe",
              ] as const
            }
          >
            {(item) => <Text>{t(item)}</Text>}
          </List>
        </>
      </div>
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
