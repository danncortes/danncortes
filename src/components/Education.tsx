import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { EducationModel } from '../Types';

library.add(faMapMarkerAlt);

const Education = ({
  education,
  className
}: {
  education: EducationModel;
  className: string;
}) => {
  const { title, from, to, place, location } = education;
  return (
    <div className={className}>
      <p className="text-sm text-gray-700 font-semibold">{title}</p>
      <p>
        {dayjs(from).format('MMM YYYY')} - {dayjs(to).format('MMM YYYY')}
      </p>
      <p>{place}</p>
      <p>
        <FontAwesomeIcon icon="map-marker-alt" /> {location}
      </p>
    </div>
  );
};

export default Education;

Education.propTypes = {
  education: PropTypes.object,
  className: PropTypes.string
};
