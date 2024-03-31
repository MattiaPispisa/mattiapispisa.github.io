import { formatDateRange } from "../../../functions";
import { useAppTranslation } from "../../../locale";
import { ListItem, SubTitle } from "../../widgets";
import { educations } from "./educations";

function Education() {
  const { t } = useAppTranslation();
  return (
    <>
      <SubTitle>
        <>{t("education")}</>
      </SubTitle>
      <div className="flex flex-col gap-y-12">
        {educations(t).map((education, i) => {
          return (
            <ListItem
              key={i}
              title={education.degree}
              subtitle={education.university}
              description={education.description}
              trailing={formatDateRange(education.start, education.end)}
            />
          );
        })}
      </div>
    </>
  );
}
export default Education;
