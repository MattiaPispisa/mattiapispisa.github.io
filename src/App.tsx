import About from "./ui/resume/About/About";
import Education from "./ui/resume/Education/Education";
import Experience from "./ui/resume/Experience/Experience";
import Posts from "./ui/resume/Post/Post";
import { Body, NavBar, Section } from "./ui/widgets";
import HashProvider from "./ui/widgets/HashProvider";

type Section = {
  id: string;
  label: string;
  component: JSX.Element;
  centered?: boolean;
};

const sections: Section[] = [
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

export default function App() {
  return (
    <HashProvider>
      <>
        <NavBar items={sections} />
        <Body>
          <>
            {sections.map((s) => {
              return (
                <Section centered={s.centered} key={s.id} id={s.id}>
                  {s.component}
                </Section>
              );
            })}
          </>
        </Body>
      </>
    </HashProvider>
  );
}
