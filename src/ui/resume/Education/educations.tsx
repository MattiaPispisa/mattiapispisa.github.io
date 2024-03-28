import { EducationModel } from "./mode";
import { Text } from "../../widgets";

const educations: EducationModel[] = [
  {
    degree: "Master's Degree",
    university: "Università degli studi di Udine",
    description: (
      <>
        <Text>
          Master's Degree in Computer Science, Computer Science (Interactive
          Systems)
        </Text>
        <Text>
          <>
            Vote: <b>110/110</b> with merit to the best graduates
          </>
        </Text>
        <img
          alt="merito"
          src="merito.jpeg"
          className="object-contain w-fit	h-[100px]"
        />
      </>
    ),
    start: "2019-10-01",
    end: "2021-10-01",
  },
  {
    degree: "Bachelor's Degree",
    university: "Università degli studi di Udine",
    description: (
      <>
        <Text>Bachelor's degree in Computer Science, Computer Science</Text>
        <Text>
          <>
            Vote: <b>110/110</b>
          </>
        </Text>
      </>
    ),
    start: "2016-10-01",
    end: "2019-10-01",
  },
  {
    degree: "Diploma",
    university: "ISIS Arturo Malignani",
    description: <Text>diploma in telecommunications</Text>,
    start: "2012",
    end: "2016",
  },
];

export { educations };
