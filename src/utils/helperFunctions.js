export const formatDate = (date) => date && date.split("-").reverse().join("-");

export const stripHtmlFromString = (string) =>
  string && string.replace(/<[^>]+>/g, "");

export const resetScrollPosition = () => {
  if (window.scrollY !== 0) {
    window.scrollTo({
      top: 0,
    });
  }
};
