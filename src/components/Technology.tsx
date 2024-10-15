import React from 'react';
import { useTranslation } from 'react-i18next';

export type Technology = {
  name: string;
  experience: number;
  experienceLevel: React.ReactNode;
  showExpOnPrint: boolean;
};

export const Technology = ({
  name,
  experience,
  experienceLevel,
  showExpOnPrint
}: Technology) => {
  const { t } = useTranslation();

  const yearsExperience: string = ((): string => {
    const yearsExperience: number = Math.round((experience / 12) * 10) / 10;
    if (yearsExperience > 1 && yearsExperience % 1 > 0) {
      return `${Math.floor(yearsExperience)}+`;
    }
    return `${yearsExperience}`;
  })();

  return (
    <div className="technology">
      <h4 className="technology__title">{name}</h4>
      {experienceLevel}
      {
        <p
          className={`technology__experience ${
            !showExpOnPrint ? 'no-show-print' : ''
          }`}
        >
          {`${yearsExperience} ${t('yOfExp')}`}
        </p>
      }
    </div>
  );
};

export default Technology;
