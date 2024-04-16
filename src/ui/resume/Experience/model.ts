type ExperienceType = "work" | "talk" | "conf";

type ExperienceModel = {
  application: string;
  company: string;
  description?: JSX.Element;
  start: string;
  end?: string;
  type: ExperienceType;
};

export type { ExperienceModel };
