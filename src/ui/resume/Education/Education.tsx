import { formatDateRange } from "../../../functions";
import ListItem from "../../widgets/ListItem";
import SubTitle from "../../widgets/SubTitle";

function Education() {
  return (
    <>
      <SubTitle>
        <p>Education</p>
      </SubTitle>
      <div className="flex flex-col gap-y-12">
        <ListItem
          title={"Master's Degree"}
          subtitle={"Università degli studi di Udine"}
          description={
            <>
              <p>
                Master's Degree in Computer Science, Computer Science
                (Interactive Systems)
              </p>
              <p>
                Vote: <b>110/110</b> with merit to the best graduates
              </p>
              <img
                alt="merito"
                src="merito.jpeg"
                className="object-contain w-fit	h-[100px]"
              />
            </>
          }
          trailing={<p>{formatDateRange("2019-10-01", "2021-10-01")}</p>}
        />
        <ListItem
          title={"Bachelor's Degree"}
          subtitle={"Università degli studi di Udine"}
          description={
            <>
              <p>Bachelor's degree in Computer Science, Computer Science</p>
              <p>
                Vote: <b>110/110</b>
              </p>
            </>
          }
          trailing={<p>{formatDateRange("2016-10-01", "2019-10-01")}</p>}
        />
        <ListItem
          title={"Diploma"}
          subtitle={"ISIS Arturo Malignani"}
          description={<p>diploma in telecommunications</p>}
          trailing={<p>{formatDateRange("2012", "2016")}</p>}
        />
      </div>
    </>
  );
}
export default Education;
