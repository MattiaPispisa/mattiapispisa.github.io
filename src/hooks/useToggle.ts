import { Dispatch, SetStateAction, useCallback, useState } from "react";

type UseToggleReturn = [
  state: boolean,
  toggle: () => void,
  setState: Dispatch<SetStateAction<boolean>>
];

/**
 * useState for a boolean
 * @param {boolean} initial
 * @returns {UseToggleReturn} Returns a stateful value, and a function to toggle it.
 */
function useToggle(initial?: boolean): UseToggleReturn {
  const [state, setState] = useState(initial ?? false);

  /**
   * toggle boolean value
   */
  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [state, toggle, setState] as const;
}

export { useToggle };
