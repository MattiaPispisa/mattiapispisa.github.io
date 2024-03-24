import About from "./ui/resume/About";
import Education from "./ui/resume/Education";
import Experience from "./ui/resume/Experience";
import Posts from "./ui/resume/Post";
import { Body, NavBar, Section } from "./ui/widgets";
import HashProvider from "./ui/widgets/HashProvider";

type Section = {
  id: string;
  label: string;
  component: JSX.Element;
};

const sections: Section[] = [
  {
    id: "about",
    label: "About",
    component: <About />,
  },
  {
    id: "experience",
    label: "Experience",
    component: <Experience />,
  },
  { id: "education", label: "Education", component: <Education /> },
  { id: "post", label: "Post", component: <Posts /> },
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
                <Section key={s.id} id={s.id}>
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
