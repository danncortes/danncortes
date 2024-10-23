import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '../font-awesome';
import { i18n, Language, supportedLanguages } from '../i18n';
import ResumeContent from './ResumeContent';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();
  const { language } = useParams<{ language: Language }>();
  const FontSizesPerLanguage: { [key in Language]: string } = {
    en: '12.4px',
    de: '12.2px'
  };

  useEffect(() => {
    const initialFontSize = window.getComputedStyle(document.documentElement)
      .fontSize;

    window.onbeforeprint = () => {
      const { language } = i18n;
      document.documentElement.style.fontSize =
        FontSizesPerLanguage[language as Language];
    };

    window.onafterprint = () => {
      document.documentElement.style.fontSize = initialFontSize;
    };
  }, []);

  useEffect(() => {
    if (supportedLanguages.includes(language)) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  const onClickPrint = () => {
    document.documentElement.style.fontSize = '12px';
    window.print();
  };

  return (
    <div className="resume-wrapper resume">
      <button
        className="resume__print-tag mb-3 font-semibold"
        onClick={onClickPrint}
      >
        <FontAwesomeIcon icon="print" /> {t('printOrDownload')}
      </button>
      <ResumeContent />
    </div>
  );
};

export default Resume;
