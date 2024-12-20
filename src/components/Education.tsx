import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { library } from '@fortawesome/fontawesome-svg-core';
import { formatDate } from '../utils';

library.add(faMapMarkerAlt);

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
      <p className="education__icon">
        <FontAwesomeIcon icon="map-marker-alt" /> {location}
      </p>
    </div>
  );
};

export default Education;

Education.propTypes = {
  education: PropTypes.object
};
