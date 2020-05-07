import React from 'react';
import PropTypes from 'prop-types';

export const Tech = ({
  name,
  experience,
  className,
  experienceLevel,
  titleClasses,
  showExperience
}) => {

  let yearExperience = ''
  if (experience && showExperience) {
    yearExperience = Math.round((experience / 12) * 10) / 10
    if (yearExperience > 1 && yearExperience % 1 > 0) {
      yearExperience = `${Math.floor(yearExperience)}+`
    }
  }

  return (
    <div className={className}>
      <h4 className={titleClasses}>{name}</h4>
      {experienceLevel}
      {experience && showExperience && (
        <p className="text-xs text-gray-600 font-medium">
          {`${yearExperience} Years of exp.`}
        </p>
      )}
    </div>
  )
};

export default Tech;

Tech.propTypes = {
  name: PropTypes.string,
  experience: PropTypes.number,
  className: PropTypes.string,
  experienceLevel: PropTypes.object,
  titleClasses: PropTypes.string,
  showExperience: PropTypes.bool
};
