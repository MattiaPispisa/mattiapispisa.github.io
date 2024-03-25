import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  title: string;
  link?: string;
  subtitle?: string;

  description?: JSX.Element;

  footer?: JSX.Element;

  trailing?: JSX.Element;
};
function ListItem(props: Props) {
  const { description, footer, subtitle, title, trailing, link } = props;
  return (
    <ul className="flex flex-row">
      <div className="grow">
        {link ? (
          <ListLinkTitle link={link} title={title} />
        ) : (
          <ListTitle title={title} />
        )}

        {subtitle && (
          <div className="uppercase text-xl text-gray-400 mb-4">{subtitle}</div>
        )}
        {description && <div className="mb-1">{description}</div>}
        {footer && <div className="text-sm">{footer}</div>}
      </div>
      {trailing && (
        <div className="md:min-w-72 md:text-right text-primary">{trailing}</div>
      )}
    </ul>
  );
}

function ListLinkTitle(props: Required<Pick<Props, "title" | "link">>) {
  const { link, title } = props;
  return (
    <a className="hover:text-primary" href={link} target="_blank">
      <div className={`flex flex-row items-center gap-2`}>
        <h3 className="uppercase text-2xl font-bold">{title}</h3>
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </div>
    </a>
  );
}

function ListTitle(props: Pick<Props, "title">) {
  return <h3 className="uppercase text-2xl font-bold">{props.title}</h3>;
}

export default ListItem;
