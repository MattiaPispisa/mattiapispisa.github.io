import ListItem from "../widgets/Item";
import SubTitle from "../widgets/Subtitle";

function Education() {
  return (
    <>
      <SubTitle>
        <p>Education</p>
      </SubTitle>
      <ListItem
        title={"title"}
        subtitle={"subtitle"}
        description={<p>descrption</p>}
        trailing={<p>12 Nov</p>}
        footer={<p>#code</p>}
      />
    </>
  );
}
export default Education;
