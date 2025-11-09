import {useMemo} from "react";
import {useAppTranslation} from "../../locale";
import {Body, NavBar, Section, PrintSimpleHeader, PrintSimpleFooter} from "../widgets";
import {useDarkMode} from "../widgets/DarkModeProvider.ts";
import {sections as sectionFunc} from "./sections";
import ScrollToTopButton from "../widgets/ScrollToTopButton.tsx";

export default function App() {
    const {darkMode} = useDarkMode();
    const {t} = useAppTranslation();

    const sections = useMemo(() => {
        return sectionFunc(t);
    }, [t]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <NavBar items={sections}/>
            <Body>
                <>
                    <PrintSimpleHeader />
                    {sections.map((s) => {
                        return (
                            <Section centered={s.centered} key={s.id} id={s.id}>
                                {s.component}
                            </Section>
                        );
                    })}
                    <PrintSimpleFooter />
                    <ScrollToTopButton/>
                </>
            </Body>
        </div>
    );
}
