// Format date as MM.YYYY
export const formatDate = (date: string): string => {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${month}.${year}`;
};
