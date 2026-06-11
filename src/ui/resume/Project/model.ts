import type { JSX } from "react";

type ProjectModel = {
  title: JSX.Element | string;
  description: JSX.Element | string;
  link: string;
  hashtags: string[];
};

export type { ProjectModel };
