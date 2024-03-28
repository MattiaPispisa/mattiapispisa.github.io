import About from "./About/About";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Posts from "./Post/Post";
import { SectionModel } from "./model";

const sections: SectionModel[] = [
  {
    id: "about",
    label: "About",
    component: <About />,
  },
  { id: "post", label: "Post", component: <Posts />, centered: false },
  {
    id: "experience",
    label: "Experience",
    component: <Experience />,
  },
  { id: "education", label: "Education", component: <Education /> },
];

export { sections };
