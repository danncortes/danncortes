import i18n from 'i18next';

export function formatDate(
  dateString: string,
  config: { full: boolean } = { full: true }
): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();

  const formattedMonth = i18n.t(`months.${month}`);

  if (config.full) {
    return `${formattedMonth} ${year}`;
  } else {
    return `${year}`;
  }
}
