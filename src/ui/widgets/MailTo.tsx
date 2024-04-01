import { A } from ".";

type Props = {
  mail: string;
  newTab?: boolean;
};
function Mail({ newTab = true, ...props }: Props) {
  const { mail } = props;
  return (
    <A
      semantic="primary"
      className={`uppercase `}
      href={`mailto:${mail}`}
      newTab={newTab}
    >
      {mail}
    </A>
  );
}

export default Mail;
