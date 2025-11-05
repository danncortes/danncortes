// Update your language buttons to navigate to the correct routes
import React from 'react';

const LanguageButtons = () => {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  const currentLanguage = currentPath.includes('/de') ? 'de' : 'en';

  return (
    <div className="language-buttons">
      <a
        href={`/en/${currentHash}`}
        className={`language-button rounded-sm ${
          currentLanguage === 'en' ? 'language-button--active' : ''
        }`}
      >
        EN
      </a>
      <a
        href={`/de/${currentHash}`}
        className={`language-button rounded-sm ${
          currentLanguage === 'de' ? 'language-button--active' : ''
        }`}
      >
        DE
      </a>
    </div>
  );
};

export default LanguageButtons;
