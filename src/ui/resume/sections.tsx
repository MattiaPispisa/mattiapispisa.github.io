import { lazy } from "react";
import { LanguageResolver } from "../../locale";
import { SectionModel } from "./model";

const importAbout = () => import("./About/About");
const importProject = () => import("./Project/Project");
const importPosts = () => import("./Post/Post");
const importSkills = () => import("./Skills/Skills");
const importExperience = () => import("./Experience/Experience");
const importEducation = () => import("./Education/Education");
const importBooksRead = () => import("./BooksRead/BooksRead");
const importPassions = () => import("./Passions/Passions");

const About = lazy(importAbout);
const Project = lazy(importProject);
const Posts = lazy(importPosts);
const Skills = lazy(importSkills);
const Experience = lazy(importExperience);
const Education = lazy(importEducation);
const BooksRead = lazy(importBooksRead);
const Passions = lazy(importPassions);

/**
 * Warms up every section chunk in the background. Each chunk is only parsed
 * (the heavy per-section work runs when the component actually mounts), so this
 * stays off the critical render path while making scrolling and printing instant.
 *
 * Returns a promise that resolves once every chunk is loaded. `import()` is
 * cached, so calling this repeatedly is cheap (resolves instantly once warm).
 */
function prefetchSections(): Promise<unknown> {
  return Promise.all([
    importAbout(),
    importProject(),
    importPosts(),
    importSkills(),
    importExperience(),
    importEducation(),
    importBooksRead(),
    importPassions(),
  ]);
}

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
    id: "skills",
    label: t("skills"),
    component: <Skills />,
    centered: false,
  },
  {
    id: "experience",
    label: t("experience"),
    component: <Experience />,
  },
  { id: "education", label: t("education"), component: <Education /> },
  { id: "books-read", label: t("booksRead"), component: <BooksRead /> },
  { id: "passions", label: t("passions"), component: <Passions /> },
];

export { sections, prefetchSections };
