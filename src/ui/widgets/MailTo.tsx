type Props = {
  mail: string;
  newTab?: boolean;
};
function Mail({ newTab = true, ...props }: Props) {
  const { mail } = props;
  return (
    <a
      className={`uppercase text-primary dark:text-primary-dark`}
      href={`mailto:${mail}`}
      target={newTab ? `_blank` : undefined}
    >
      {mail}
    </a>
  );
}

export default Mail;
