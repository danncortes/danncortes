import React from 'react';
import { useTranslation } from 'react-i18next';

export type Technology = {
  name: string;
  experience: number;
  experienceLevel: React.ReactNode;
  showExperience: boolean;
};

export const Technology = ({
  name,
  experience,
  experienceLevel,
  showExperience
}: Technology) => {
  const { t } = useTranslation();
  const showExp: boolean = Boolean(experience) && showExperience;

  const yearsExperience: string = ((): string => {
    if (showExp) {
      const yearsExperience: number = Math.round((experience / 12) * 10) / 10;
      if (yearsExperience > 1 && yearsExperience % 1 > 0) {
        return `${Math.floor(yearsExperience)}+`;
      }
      return `${yearsExperience}`;
    }
    return '';
  })();

  return (
    <div className="technology">
      <h4 className="technology__title">{name}</h4>
      {experienceLevel}
      {showExp && (
        <p className="technology__experience">
          {`${yearsExperience} ${t('yOfExp')}`}
        </p>
      )}
    </div>
  );
};

export default Technology;
