import { useEffect, useState } from "react";

function useStateEffect<T>(value: T) {
  const [state, setState] = useState(value);
  useEffect(() => setState(value), [value]);

  return [state, setState] as const;
}

export default useStateEffect;
