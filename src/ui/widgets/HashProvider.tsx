import React, { createContext, useContext } from "react";

type HashContextType = {
  hash: string;
  updateHash: (newHash: string) => void;
};

const HashContext = createContext<HashContextType | undefined>(undefined);

const HashProvider = (props: { children: JSX.Element }) => {
  const [hash, setHash] = React.useState(() => window.location.hash);

  const hashChangeHandler = React.useCallback(() => {
    setHash(window.location.hash.replace("#", ""));
  }, []);

  const updateHash = React.useCallback((newHash?: string) => {
    if (!newHash) {
      return;
    }

    history.pushState(null, "", `#${newHash}`);
    setHash(newHash);
  }, []);

  React.useEffect(() => {
    window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);

  return (
    <HashContext.Provider value={{ hash, updateHash }}>
      {props.children}
    </HashContext.Provider>
  );
};

const useHash = (): HashContextType => {
  const context = useContext(HashContext);
  if (!context) {
    throw new Error("useHash must be used within a HashProvider");
  }
  return context;
};

export { useHash };
export default HashProvider;
