import { ExperienceModel } from "./model";
import { Text } from "../../widgets";

const experiences: ExperienceModel[] = [
  {
    application: "Web and mobile application designer and developer",
    company: "MVLabs",
    description: (
      <>
        <Text>
          Specialized in developing web applications, primarily utilizing the
          following technologies/tools: TypeScript, React, Vite, TurboRepo.
        </Text>
        <Text>
          While mobile applications are primarily developed using Dart/Flutter.
        </Text>
      </>
    ),
    start: "2021-02-01",
  },
  {
    application:
      "Designer and developer of a Web connector for the ProXFlow application",
    company: "TECNOTRONICA S.A.S.",
    description: (
      <Text>
        <>
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
        </>
      </Text>
    ),
    start: "2022-11-01",
    end: "2023-05-01",
  },
  {
    application: "iOS Mobile Developer",
    company: "Archeido",
    start: "2019-07-01",
    end: "2020-03-01",
  },
  {
    application: "Employee",
    company: "Fill In The Blanks s.r.l.",
    start: "2015-06-01",
    end: "2015-07-01",
  },
];

export { experiences };
