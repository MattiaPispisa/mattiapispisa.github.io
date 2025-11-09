import { useAppTranslation } from "../../../locale";
import { SubTitle } from "../../widgets";
import Skill from "./Skill";
import skillsData from "./skillsData";

export default function Skills() {
  const { t } = useAppTranslation();

  return (
    <>
      <SubTitle>{t("skills")}</SubTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 print:grid-cols-2 print:gap-4">
        {skillsData(t).map((skill, i: number) => {
          return <Skill key={i} skill={skill} />;
        })}
      </div>
    </>
  );
}
