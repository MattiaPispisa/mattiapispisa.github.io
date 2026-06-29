import type { JSX } from "react";
import { Suspense, useEffect, useState } from "react";
import { useHash } from "./HashProvider";
import { useIntersectionObserver } from "usehooks-ts";
import { Skeleton } from "./Common";

const SECTION_SKELETON_ITEMS = [
  { width: "w-1/3", height: "h-8", className: "mb-6" },
  {},
  { width: "w-5/6" },
  { width: "w-4/6" },
  {},
  { width: "w-3/4" },
];

function SectionSkeleton(): JSX.Element {
  return <Skeleton className="w-full" items={SECTION_SKELETON_ITEMS} />;
}

type Props = {
  id: string;
  centered?: boolean;
  /**
   * When `true` the content is rendered regardless of viewport visibility.
   * Used to force every section into the DOM (before printing, or when the
   * user navigates via the sidebar so anchor targets reach their final height).
   */
  forceRender?: boolean;
  children: JSX.Element;
};
function Section({ centered = true, forceRender = false, ...props }: Props) {
  const { id } = props;
  const { ref, hasBeenVisible } = useUpdateSection(id);

  // Mount the (lazy) content only once the section has entered the viewport,
  // or when forced to render. The reserved `min-h-[100vh]` keeps the skeleton
  // at full height, avoiding layout shift.
  const shouldRender = hasBeenVisible || forceRender;

  return (
    <section
      ref={ref}
      className="pl-6 pr-6 pb-6 pt-20 md:p-12 min-h-[100vh] border-b-[1px] dark:border-black flex print:min-h-0 print:h-auto print:block print:px-0 print:py-3 print:border-b-0 print-avoid-break"
      id={id}
    >
      <div className={`${centered ? "mt-auto mb-auto" : ""} w-full h-full print:mt-0 print:mb-0 print:h-auto`}>
        {shouldRender ? (
          <Suspense fallback={<SectionSkeleton />}>{props.children}</Suspense>
        ) : (
          <SectionSkeleton />
        )}
      </div>
    </section>
  );
}

function useUpdateSection(id: string) {
  const { updateHash } = useHash();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (!isIntersecting) {
      return;
    }

    setHasBeenVisible(true);
    updateHash(id);
  }, [isIntersecting, id, updateHash]);

  return { ref, hasBeenVisible };
}

export default Section;
