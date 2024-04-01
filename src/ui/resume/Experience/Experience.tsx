import { formatDateRange } from "../../../functions";
import { useAppTranslation } from "../../../locale";
import ListItem from "../../widgets/ListItem";
import SubTitle from "../../widgets/Common/SubTitle";
import { experiences } from "./experiences";

function Experience() {
  const { t } = useAppTranslation();
  return (
    <>
      <SubTitle>Experience</SubTitle>
      <div className="flex flex-col gap-y-12">
        {experiences(t).map((experience, i) => {
          return (
            <ListItem
              key={i}
              title={experience.application}
              subtitle={experience.company}
              description={experience.description}
              trailing={formatDateRange(experience.start, experience.end)}
            />
          );
        })}
      </div>
    </>
  );
}
export default Experience;
