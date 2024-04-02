function formatDate(dateString: string, props?: { language?: string }) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(props?.language, options);
}
export default formatDate;
