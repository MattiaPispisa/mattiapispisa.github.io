import { formatDateRange } from "../../../functions";
import ListItem from "../../widgets/ListItem";
import SubTitle from "../../widgets/SubTitle";
import { experiences } from "./experiences";

function Experience() {
  return (
    <>
      <SubTitle>Experience</SubTitle>
      <div className="flex flex-col gap-y-12">
        {experiences.map((experience) => {
          return (
            <ListItem
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
