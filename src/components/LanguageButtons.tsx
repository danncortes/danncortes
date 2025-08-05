// Update your language buttons to navigate to the correct routes
import React from 'react';

const LanguageButtons = () => {
  const currentPath = window.location.pathname;
  const currentLanguage = currentPath.includes('/de') ? 'de' : 'en';

  return (
    <div className="language-buttons">
      <a
        href="/en"
        className={`language-button ${
          currentLanguage === 'en' ? 'language-button--active' : ''
        }`}
      >
        EN
      </a>
      <a
        href="/de"
        className={`language-button ${
          currentLanguage === 'de' ? 'language-button--active' : ''
        }`}
      >
        DE
      </a>
    </div>
  );
};

export default LanguageButtons;
