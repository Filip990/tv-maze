export const dateHelper = (date) =>
  (date && date.split("-").reverse().join("-")) || "NN";

export const stripHtmlFromString = (string) =>
  string && string.replace(/<[^>]+>/g, "");
