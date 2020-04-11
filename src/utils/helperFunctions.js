export const dateHelper = (date) => date && date.split("-").reverse().join("-");

export const stripHtmlFromString = (string) =>
  string && string.replace(/<[^>]+>/g, "");

export const genresHandler = (arr) => arr.join(", ");
