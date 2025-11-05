import i18n from 'i18next';

declare global {
  interface Window {
    MSStream: any;
  }
}

/**
 * Format date string (YYYY-MM) to localized month and year (e.g., "Apr 2024")
 * @param dateString - Date in YYYY-MM format
 * @returns Formatted date string with translated month abbreviation
 */
export function formatDate(dateString: string): string {
  if (!dateString) return '';

  const [year, month] = dateString.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  const months = i18n.t('months', { returnObjects: true }) as string[];

  return `${months[monthIndex]} ${year}`;
}

/**
 * Initialize scroll animations for elements with 'animate-on-scroll' class
 * Call this function after DOM is loaded
 */
export function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((element) => observer.observe(element));
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
