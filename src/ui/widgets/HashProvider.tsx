import React, { startTransition } from "react";
import { provide } from "../../functions";

type HashContextType = {
  hash: string;
  updateHash: (newHash: string) => void;
};

function _useHash(): HashContextType {
  const [hash, setHash] = React.useState(() => window.location.hash);

  const hashChangeHandler = React.useCallback(() => {
    startTransition(() => {
      setHash(window.location.hash.replace("#", ""));
    });
  }, []);

  const updateHash = React.useCallback((newHash?: string) => {
    startTransition(() => {
      if (!newHash) {
        return;
      }

      history.pushState(null, "", `#${newHash}`);
      setHash(newHash);
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);

  return {
    hash,
    updateHash,
  };
}

const [HashProvider, useHash] = provide(_useHash);

export { useHash };
export default HashProvider;
