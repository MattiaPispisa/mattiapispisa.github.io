import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: IconProp;
  link: string;
  newTab?: boolean;
};

function SocialProfile({ newTab = true, ...props }: Props) {
  const { icon, link } = props;
  return (
    <a href={link} target={newTab ? "_blank" : undefined}>
      <div className="rounded-full w-14 h-14 bg-neutral-600 flex items-center justify-center text-light hover:bg-primary">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
    </a>
  );
}

export default SocialProfile;
