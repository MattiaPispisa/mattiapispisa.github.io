import { LanguageResolver } from "../../../locale";
import { SkillModel } from "./model";

const skillsData = (t: LanguageResolver): SkillModel[] => [
  {
    title: "Dart",
    description: t("skillDartDesc"),
    level: 5,
  },
  {
    title: "Flutter",
    description: t("skillFlutterDesc"),
    level: 5,
  },
  {
    title: "Javascript & Typescript",
    description: t("skillJsTsDesc"),
    level: 5,
  },
  {
    title: "React & React Router",
    description: t("skillReactDesc"),
    level: 5,
  },
  {
    title: "Python",
    description: t("skillPythonDesc"),
    level: 3.5,
  },
  {
    title: "Android",
    level: 4.5,
  },
  {
    title: "iOS",
    level: 3.5,
  },

  {
    title: "SQL",
    level: 3.5,
  },
  {
    title: "Java",
    level: 3.5,
  },
  {
    title: "C#",
    level: 3.5,
  },
];

export default skillsData;
