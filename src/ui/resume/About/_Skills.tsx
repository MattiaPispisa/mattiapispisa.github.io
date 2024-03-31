import { useMemo } from "react";
import { Carousel, DevIcon } from "../../widgets";
import { skillsIconsProps } from "./_skillsIcons";
import { DevIconProps } from "../../widgets/Common/DevIcon";

function itemMap(icon: DevIconProps) {
  return (
    <DevIcon
      key={icon}
      icon={icon}
      colored={false}
      colorOnHover={true}
      size="2x"
    />
  );
}

function Skills() {
  const items = useMemo(() => skillsIconsProps.map(itemMap), []);

  return <Carousel items={items} />;
}

export default Skills;
