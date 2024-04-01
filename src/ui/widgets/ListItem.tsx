import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { A, Text } from ".";

type Props = {
  title: string;
  link?: string;
  subtitle?: string;

  description?: JSX.Element | string;

  footer?: JSX.Element;

  trailing?: JSX.Element | string;
};

const mobListClassName = "flex flex-col gap-2 flex-wrap";
const mdListClassName = "md:flex-row md:gap-4 md:flex-nowrap";
const listClassName = `${mobListClassName} ${mdListClassName}`;

function ListItem(props: Props) {
  const { description, footer, subtitle, title, trailing, link } = props;
  return (
    <ul className={listClassName}>
      <div className="grow">
        {link ? (
          <ListLinkTitle link={link} title={title} />
        ) : (
          <ListTitle title={title} />
        )}

        {subtitle && (
          <div
            className={`uppercase text-xl text-gray-400 ${
              description ? "mb-4" : ""
            }`}
          >
            {subtitle}
          </div>
        )}
        {description && (
          <div className={`${footer ? "mb-1" : ""} `}>
            {typeof description === "string" ? (
              <Text>{description}</Text>
            ) : (
              description
            )}
          </div>
        )}
        {footer && <div className="text-sm">{footer}</div>}
      </div>
      {trailing && (
        <div className="lg:min-w-52 md:text-right text-primary ">
          {trailing}
        </div>
      )}
    </ul>
  );
}

function ListLinkTitle(props: Required<Pick<Props, "title" | "link">>) {
  const { link, title } = props;
  return (
    <A hover={true} href={link} semantic="default" newTab={true}>
      <div className={`flex flex-row items-baseline gap-2`}>
        <h3 className="uppercase text-2xl font-bold  ">{title}</h3>
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </div>
    </A>
  );
}

function ListTitle(props: Pick<Props, "title">) {
  return (
    <Text type="h3" className="uppercase text-2xl font-bold ">
      {props.title}
    </Text>
  );
}

export default ListItem;
