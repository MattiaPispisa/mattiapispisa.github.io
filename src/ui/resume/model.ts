import type { JSX } from "react";
type SectionModel = {
  id: string;
  label: string;
  component: JSX.Element;
  centered?: boolean;
};

export type { SectionModel };
