import { LanguageResolver } from "../../../locale";
import { SkillModel } from "./model";

const skillsData = (t: LanguageResolver): SkillModel[] => [
  {
    title: "React & TypeScript",
    description: t("skillReactDesc"),
    level: 5,
  },
  {
    title: "Flutter & Dart",
    description: t("skillFlutterDesc"),
    level: 5,
  },
  {
    title: "JavaScript & Node.js",
    description: t("skillJavaScriptDesc"),
    level: 4.5,
  },
  {
    title: "Git & CI/CD",
    description: t("skillGitDesc"),
    level: 4,
  },
  {
    title: "UI/UX Design",
    description: t("skillUIUXDesc"),
    level: 3.5,
  },
];

export default skillsData;

