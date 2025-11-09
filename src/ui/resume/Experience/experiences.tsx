import { ExperienceModel } from "./model";
import { List, Text } from "../../widgets";
import { LanguageResolver } from "../../../locale";

const experiences: (t: LanguageResolver) => ExperienceModel[] = (t) => [
  {
    application: t("mvExperience"),
    company: "MVLabs",
    companyLink: "https://mvlabs.it/",
    description: (
      <>
        <Text>{t("mvExperienceDesc")}</Text>
        <br />
        <Text>{t("mvExperienceMob")}</Text>
        <br />
        <Text>{t("mvExperienceWeb")}</Text>
      </>
    ),
    start: "2021-02-01",
    type: "work",
  },
  {
    application: t("tecnotronicaExperience"),
    company: "TECNOTRONICA S.A.S.",
    companyLink: "https://www.tecnotronica.net/",
    description: (
      <div>
        <>
          <Text>{t("tecnotronicaExperienceDesc")}</Text>
          <List
            items={
              [
                "tecnotronicaExperienceDescBe",
                "tecnotronicaExperienceDescWeb",
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
    companyLink: "https://archeido.com/it",
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
