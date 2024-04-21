import { useEffect, useState } from "react";

/**
 * useState with useEffect
 *
 * value change:
 *
 * - when the parameter change
 * - using the function seState
 */
function useStateEffect<T>(value: T) {
  const [state, setState] = useState(value);
  useEffect(() => setState(value), [value]);

  return [state, setState] as const;
}

export default useStateEffect;
