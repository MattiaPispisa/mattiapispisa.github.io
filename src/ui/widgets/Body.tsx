import type { JSX } from "react";
type Props = {
  children: JSX.Element;
};
function Body(props: Props) {
  return (
    <main className="md:ml-72 bg-slate-50 dark:bg-slate-900 print:ml-0 print:bg-white print:pt-4 print:px-6">
      {props.children}
    </main>
  );
}

export default Body;
