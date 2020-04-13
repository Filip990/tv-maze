export const formatDate = (date) => date && date.split("-").reverse().join("-");

export const stripHtmlFromString = (string) =>
  string && string.replace(/<[^>]+>/g, "");
