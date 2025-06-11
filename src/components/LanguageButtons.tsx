import React from 'react';
import { Language, supportedLanguages } from '../i18n';
import { i18n } from '../i18n';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const currentLanguage = i18n.language as Language;

  return (
    <div className="language-buttons no-show-print">
      {supportedLanguages.map((language) => {
        return (
          <button
            onClick={() => {
              navigate(`/${language}`);
            }}
            key={language}
            className={`language-button rounded-sm ${
              currentLanguage === language ? 'language-button--active' : ''
            }`}
          >
            {language.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
