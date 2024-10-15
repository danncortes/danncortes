import React from 'react';
import { Language, supportedLanguages } from '../i18n';
import { changeLanguage } from 'i18next';
import { i18n } from '../i18n';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const currentLanguage = i18n.language as Language;
  return (
    <div className="language-buttons no-show-print">
      {supportedLanguages.map((language) => {
        return (
          <button
            onClick={() => {
              history.push(`/${language}`);
            }}
            key={language}
            className={`language-button ${
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
