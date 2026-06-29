import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {flushSync} from "react-dom";
import {useAppTranslation} from "../../locale";
import {Body, NavBar, Section, PrintSimpleHeader, PrintSimpleFooter} from "../widgets";
import {useDarkMode} from "../widgets/DarkModeProvider.ts";
import {sections as sectionFunc, prefetchSections} from "./sections";
import ScrollToTopButton from "../widgets/ScrollToTopButton.tsx";

export default function App() {
    const {darkMode} = useDarkMode();
    const {t} = useAppTranslation();
    const printing = usePrinting();
    const {revealAll, navigate} = useRevealNavigation();

    const sections = useMemo(() => {
        return sectionFunc(t);
    }, [t]);

    usePrefetchSections();

    return (
        <div className={darkMode ? "dark" : ""}>
            <NavBar items={sections} onNavigate={navigate}/>
            <Body>
                <>
                    <PrintSimpleHeader />
                    {sections.map((s) => {
                        return (
                            <Section centered={s.centered} forceRender={printing || revealAll} key={s.id} id={s.id}>
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

/**
 * Sidebar navigation for a lazily-mounted page: before scrolling to an anchor,
 * load every section chunk and mount them all so the target reaches its final
 * height, then keep the target pinned to the top while the freshly-mounted
 * sections settle (they may grow as their content loads). Without this the
 * smooth scroll would chase a moving target and land on the wrong section.
 */
function useRevealNavigation(): { revealAll: boolean; navigate: (id: string) => void } {
    const [revealAll, setRevealAll] = useState(false);
    const targetRef = useRef<string | null>(null);
    const settleTimer = useRef<number | undefined>(undefined);

    const scrollToTarget = useCallback(() => {
        const id = targetRef.current;
        if (!id) return;
        document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
    }, []);

    const releaseSoon = useCallback((delay: number) => {
        window.clearTimeout(settleTimer.current);
        settleTimer.current = window.setTimeout(() => {
            targetRef.current = null;
        }, delay);
    }, []);

    useEffect(() => {
        // Re-pin the target whenever the page height changes (sections mounting).
        const observer = new ResizeObserver(() => {
            if (!targetRef.current) return;
            scrollToTarget();
            releaseSoon(250);
        });
        observer.observe(document.body);

        // A manual scroll cancels the pinning so we never fight the user.
        const cancel = () => { targetRef.current = null; };
        window.addEventListener("wheel", cancel, { passive: true });
        window.addEventListener("touchmove", cancel, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("wheel", cancel);
            window.removeEventListener("touchmove", cancel);
            window.clearTimeout(settleTimer.current);
        };
    }, [scrollToTarget, releaseSoon]);

    const navigate = useCallback((id: string) => {
        targetRef.current = id;
        void prefetchSections()
            .catch(() => {})
            .finally(() => {
                flushSync(() => setRevealAll(true));
                scrollToTarget();
                // Fallback release in case no resize fires (already mounted).
                releaseSoon(600);
            });
    }, [scrollToTarget, releaseSoon]);

    // Honor a deep link (e.g. shared `.../#books-read`) on first load.
    useEffect(() => {
        const initial = window.location.hash.replace("#", "");
        if (initial) navigate(initial);
    }, [navigate]);

    return { revealAll, navigate };
}

/**
 * After the first paint, warms up the remaining section chunks during idle time
 * so scrolling and printing stay instant without bloating the initial bundle.
 */
function usePrefetchSections(): void {
    useEffect(() => {
        const w = window as Window & {
            requestIdleCallback?: (cb: () => void) => number;
            cancelIdleCallback?: (handle: number) => void;
        };

        const warm = () => void prefetchSections().catch(() => {});

        if (w.requestIdleCallback) {
            const handle = w.requestIdleCallback(warm);
            return () => w.cancelIdleCallback?.(handle);
        }

        const timer = window.setTimeout(warm, 1500);
        return () => window.clearTimeout(timer);
    }, []);
}

/**
 * Forces every (lazily-mounted) section into the DOM while the browser is
 * printing, so the resume prints complete even for sections never scrolled to.
 * `flushSync` guarantees the synchronous render happens before the print snapshot.
 */
function usePrinting(): boolean {
    const [printing, setPrinting] = useState(false);

    useEffect(() => {
        const onBeforePrint = () => flushSync(() => setPrinting(true));
        const onAfterPrint = () => setPrinting(false);

        window.addEventListener("beforeprint", onBeforePrint);
        window.addEventListener("afterprint", onAfterPrint);
        return () => {
            window.removeEventListener("beforeprint", onBeforePrint);
            window.removeEventListener("afterprint", onAfterPrint);
        };
    }, []);

    return printing;
}
