import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./ui/resume/Resume.tsx";
import "./index.css";
import HashProvider from "./ui/widgets/HashProvider.tsx";
import DarkModeProvider from "./ui/widgets/DarkModeProvider.tsx";
import "devicon/devicon.min.css";
import { localizationInit } from "./locale/init.ts";

localizationInit().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <DarkModeProvider>
        <HashProvider>
          <Resume />
        </HashProvider>
      </DarkModeProvider>
    </React.StrictMode>
  );
});
