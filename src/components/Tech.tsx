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
  let yearExperience: number | null = null;
  let yearExpStr: string = '';

  if (experience && showExperience) {
    yearExperience = Math.round((experience / 12) * 10) / 10;
    if (yearExperience > 1 && yearExperience % 1 > 0) {
      yearExpStr = `${Math.floor(yearExperience)}+`;
    }
  }

  return (
    <div className={className}>
      <h4 className={titleClasses}>{name}</h4>
      {experienceLevel}
      {experience && showExperience && (
        <p className="text-xs text-gray-600 font-medium">
          {`${yearExpStr} years of exp.`}
        </p>
      )}
    </div>
  );
};

export default Tech;
