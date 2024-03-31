type Callbacks = {
  def?: string[];
  md?: string[];
  lg?: string[];
};

function onScreen({ def, lg, md }: Callbacks): string { 
  return `${def?.map((d) => d).join(" ") ?? ""} ${
    md?.map((m) => `md:${m}`).join(" ") ?? ""
  } ${lg?.map((l) => `lg:${l}`).join(" ") ?? ""}`.trim();
}

export default onScreen;
