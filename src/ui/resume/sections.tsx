import { LanguageResolver } from "../../locale";
import About from "./About/About";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Passions from "./Passions/Passions";
import Posts from "./Post/Post";
import Project from "./Project/Project";
import { SectionModel } from "./model";

const sections: (t: LanguageResolver) => SectionModel[] = (t) => [
  {
    id: "about",
    label: t("about"),
    component: <About />,
  },
  {
    id: "project",
    label: t("project"),
    component: <Project />,
    centered: false,
  },
  { id: "post", label: t("post"), component: <Posts />, centered: false },
  {
    id: "experience",
    label: t("experience"),
    component: <Experience />,
  },
  { id: "education", label: t("education"), component: <Education /> },
  { id: "passions", label: t("passions"), component: <Passions /> },
];

export { sections };
