import { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks";
import { useHash } from "./HashProvider";

type Props = {
  id: string;
  centered?: boolean;
  children: JSX.Element;
};
function Section({ centered = true, ...props }: Props) {
  const { id } = props;
  const [ref] = useUpdateSection(id);

  return (
    <section
      ref={ref}
      className="p-12 min-h-[100vh] border-b-[1px] flex"
      id={id}
    >
      <div className={`${centered ? "mt-auto mb-auto" : ""} w-full h-full`}>
        {props.children}
      </div>
    </section>
  );
}

function useUpdateSection(id: string) {
  const { updateHash } = useHash();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    if (!isIntersecting) {
      return;
    }

    updateHash(id);
  }, [isIntersecting]);

  return [ref];
}

export default Section;
