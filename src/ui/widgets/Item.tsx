type Props = {
  title: string;
  subtitle: string;

  description?: JSX.Element;

  footer?: JSX.Element;

  trailing?: JSX.Element;
};
function ListItem(props: Props) {
  const { description, footer, subtitle, title, trailing } = props;
  return (
    <div className="flex flex-row">
      <div className="grow">
        <h3 className="uppercase text-2xl font-bold">{title}</h3>
        <div className="uppercase text-xl text-gray-400 mb-4">{subtitle}</div>
       {description &&  <div className="mb-1">{description}</div>}
        {footer && <div className="text-sm">{footer}</div>}
      </div>
      {trailing && (
        <div className="md:min-w-72 md:text-right text-primary">{trailing}</div>
      )}
    </div>
  );
}

export default ListItem;
