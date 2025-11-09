import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { A, Text } from ".";

type Props = {
  title: JSX.Element | string;
  link?: string;
  subtitle?: string;

  description?: JSX.Element | string;

  footer?: JSX.Element;

  trailing?: JSX.Element | string;
};

const mobListClassName = "flex flex-col gap-2 flex-wrap";
const mdListClassName = "md:flex-row md:gap-4 md:flex-nowrap";
const printClassName = "print-avoid-break print:mb-4";
const listClassName = `${mobListClassName} ${mdListClassName} ${printClassName}`;

function ListItem(props: Props) {
  const { description, footer, subtitle, title, trailing, link } = props;
  return (
    <ul className={listClassName}>
      <div className="grow w-full">
        {link ? (
          <ListLinkTitle link={link} title={title} />
        ) : (
          <ListTitle title={title} />
        )}

        {subtitle && (
          <div
            className={`uppercase text-xl text-gray-400 print:text-base print:text-gray-600 ${
              description ? "mb-4 print:mb-2" : ""
            }`}
          >
            {subtitle}
          </div>
        )}
        {description && (
          <div className={`${footer ? "mb-2" : ""} `}>
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
        <div className="lg:min-w-52 md:text-right text-primary print:text-right print:text-gray-600 print:text-sm print:min-w-32">
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
        <h3 className="uppercase text-2xl font-bold print:text-xl">{title}</h3>
        <FontAwesomeIcon icon={faUpRightFromSquare} className="print:text-xs"/>
      </div>
    </A>
  );
}

function ListTitle(props: Pick<Props, "title">) {
  const {title} = props

  if (typeof title === "string") {
    return (
        <Text type="h3" className="uppercase text-2xl font-bold print:text-xl">
          {props.title}
        </Text>
    );
  }

  return title
}

export default ListItem;
