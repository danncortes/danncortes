import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { i18n, Language, getLanguage } from '../i18n';
import ResumeContent from './ResumeContent';

const Resume = () => {
  const { language = getLanguage() } = useParams<{ language: Language }>();
  const FontSizesPerLanguage: { [key in Language]: string } = {
    en: '12.5px',
    de: '12.3px'
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
    let lang = language as Language;

    if (!lang) {
      lang = getLanguage();
    }

    i18n.changeLanguage(lang);
  }, [language]);

  return (
    <div className="resume-wrapper resume">
      <ResumeContent />
    </div>
  );
};

export default Resume;
