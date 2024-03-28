import { formatDateRange } from "../../../functions";
import { ListItem, SubTitle } from "../../widgets";
import { educations } from "./educations";

function Education() {
  return (
    <>
      <SubTitle>
        <>Education</>
      </SubTitle>
      <div className="flex flex-col gap-y-12">
        {educations.map((education) => {
          return (
            <ListItem
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
