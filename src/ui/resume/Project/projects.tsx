import { LanguageResolver } from "../../../locale";
import { A, Text } from "../../widgets";
import { ProjectModel } from "./model";

const projects: (t: LanguageResolver) => ProjectModel[] = (_) => [
  {
    title: "Posix timezones",
    description:
      "Posix timezones package. This package is designed to simplify working with timezones, allowing developers to read and write timezones in posix standard.",
    hashtags: ["library", "dart"],
    link: "https://pub.dev/packages/posix_tz",
  },
  {
    title: "Good enums",
    description: "Code generator to make enums easier to use",
    hashtags: ["library", "dart"],
    link: "https://pub.dev/packages/good_enums",
  },
  {
    title: "How to train your useReducer",
    description: (
      <div className="flex flex-col gap-2">
        <Text>A talk given at the ReactJS meetup in Verona in 2023.</Text>
        <A
          hover={true}
          semantic="primary"
          href="https://github.com/mvlabs/how-to-train-your-use-reducer"
        >
          Code "how-to-train-your-use-reducer"
        </A>
        <Text>
          Splitting the view from the controller is foundational to build great
          applications. We tend to rely on external libraries to manage their
          state. But React itself has a great off-the-shelf state management
          tool: the useReducer. In this talk we’re going to get to know more
          about it, and especially learn how to enhance it tailoring it to our
          needs. You'll discover what you have been missing.
        </Text>
      </div>
    ),
    hashtags: ["talk", "react"],
    link: "https://2023.reactjsday.it/talks_speakers/#mattia-pispisa",
  },
  {
    title: "Efficient tree manipulations",
    description:
      "An exercise on algorithms and data structures completed during my bachelor's degree in computer science.",
    hashtags: ["exercise", "c", "university"],
    link: "https://github.com/MattiaPispisa/asd_project_2017",
  },
];

export { projects };
