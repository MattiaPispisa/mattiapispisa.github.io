import { formatDateRange } from "../../functions";
import ListItem from "../widgets/Item";
import SubTitle from "../widgets/Subtitle";

function Experience() {
  return (
    <>
      <SubTitle>
        <p>Experience</p>
      </SubTitle>
      <div className="flex flex-col gap-y-12">
        <ListItem
          title={"Web and mobile application designer and developer"}
          subtitle={"MVLabs"}
          description={
            <>
              <p>
                Specialized in developing web applications, primarily utilizing
                the following technologies/tools: TypeScript, React, Vite,
                TurboRepo.
              </p>
              <p>
                While mobile applications are primarily developed using
                Dart/Flutter.
              </p>
            </>
          }
          trailing={<p>{formatDateRange("2021-02-01")}</p>}
        />
        <ListItem
          title={
            "Designer and developer of a Web connector for the ProXFlow application"
          }
          subtitle={"TECNOTRONICA S.A.S."}
          description={
            <p>
              Technologies used in the development of the WEB connector for
              ProXFlow:
              <ul>
                <li className="ml-4 list-disc">
                  Development of a Web-App in dart/flutter
                </li>
                <li className="ml-4 list-disc">
                  Development of a Back-End in dart
                </li>
              </ul>
            </p>
          }
          trailing={<p>{formatDateRange("2022-11-01", "2023-05-01")}</p>}
        />
        <ListItem
          title={"iOS Mobile Developer"}
          subtitle={"Archeido"}
          trailing={<p>{formatDateRange("2019-07-01", "2020-03-01")}</p>}
        />
        <ListItem
          title={"Employee"}
          subtitle={"Fill In The Blanks s.r.l."}
          trailing={<p>{formatDateRange("2015-06-01", "2015-07-01")}</p>}
        />
      </div>
    </>
  );
}
export default Experience;
