import { useCallback, useState } from "react";

function useToggle(initial?: boolean) {
  const [state, setState] = useState(initial ?? false);
  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [state, toggle, setState] as const;
}

export { useToggle };
