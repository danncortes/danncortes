import i18n from 'i18next';

declare global {
  interface Window {
    MSStream: any;
  }
}

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

function getDeviceType() {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return 'Android';
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  } else if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  } else if (/tablet/i.test(userAgent)) {
    return 'Tablet';
  } else {
    return 'Desktop';
  }
}

export function isDesktop() {
  return getDeviceType() === 'Desktop';
}
