import React from 'react';
import PropTypes from 'prop-types';
import { TechT } from '../Types';

export const Tech = ({
  name,
  experience,
  className,
  experienceLevel,
  titleClasses,
  showExperience
}: TechT) => {
  
  const yearsExperience: string = ((): string  => {
    if (experience && showExperience) {
      const yearsExperience : number = Math.round((experience / 12) * 10) / 10;
      if (yearsExperience > 1 && yearsExperience % 1 > 0) {
        return `${Math.floor(yearsExperience)}+`;
      }
      return `${yearsExperience}`
    }
    return ''
  })()

  return (
    <div className={className}>
      <h4 className={titleClasses}>{name}</h4>
      {experienceLevel}
      {experience && showExperience && (
        <p className="text-xs text-gray-600 font-medium">
          {`${yearsExperience} years of exp.`}
        </p>
      )}
    </div>
  );
};

export default Tech;
