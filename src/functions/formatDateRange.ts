const formatDateRange = (startDate: string, endDate?: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };

  const formattedStartDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(startDate)
  );
  const formattedEndDate = endDate
    ? new Intl.DateTimeFormat("en-US", options).format(new Date(endDate))
    : "Present";

  return `${formattedStartDate} - ${formattedEndDate}`;
};

export default formatDateRange;
