import i18next from "i18next";

const formatDateRange = (
  startDate: string,
  endDate?: string,
  props?: { language?: string }
) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };

  const formattedStartDate = new Intl.DateTimeFormat(props?.language, options).format(
    new Date(startDate)
  );
  const formattedEndDate = endDate
    ? new Intl.DateTimeFormat(props?.language, options).format(new Date(endDate))
    : i18next.t("present");

  return `${formattedStartDate} - ${formattedEndDate}`;
};

export default formatDateRange;
