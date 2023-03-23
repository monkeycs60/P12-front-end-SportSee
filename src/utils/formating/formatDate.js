/**
Formats a given date string to DD-MM-YY format.
@param {string} dateString - The date string to be formatted.
@returns {string} The formatted date string in DD-MM-YY format.
*/
export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  return `${day}-${month}-${year}`;
}