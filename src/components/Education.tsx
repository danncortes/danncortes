import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils';
import { LocationIcon } from './icons'; // Import the new icon

export type EducationModel = {
  title: string;
  from: string;
  to: string;
  place: string;
  location: string;
};

const Education = ({ education }: { education: EducationModel }) => {
  const { title, from, to, place, location } = education;

  return (
    <div className="education">
      <p className="education__title">{title}</p>
      <p className="education__date">
        {formatDate(from)} - {formatDate(to)}
      </p>
      <p className="education__place">{place}</p>
      <p className="education__icon flex items-center gap-1">
        <LocationIcon /> {location}
      </p>
    </div>
  );
};

export default Education;

Education.propTypes = {
  education: PropTypes.object
};
