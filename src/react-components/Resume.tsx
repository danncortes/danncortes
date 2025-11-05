import { useEffect } from 'react';
import { i18n, getLanguage } from '../i18n';
import '../styles/resume.css';

import ResumeContent from './ResumeContent';

const Resume = ({ lang }: { lang: string }) => {
  useEffect(() => {
    // Initialize the language properly
    const targetLang = lang || getLanguage();
    i18n.changeLanguage(targetLang);
  }, [lang]);

  return (
    <div className="resume-wrapper resume">
      <ResumeContent />
    </div>
  );
};

export default Resume;
