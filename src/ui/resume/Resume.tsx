import { Body, NavBar, Section } from "../widgets";
import { useDarkMode } from "../widgets/DarkModeProvider";
import { sections } from "./sections";

export default function App() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
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
    </div>
  );
}
