import React from 'react';
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faMapMarkerAlt);

const WorkExperience = ({ experience, className }) => {
  const { companyName, position, from, to, logo, details, location } = experience

  return (
    <div className={`font-medium ${className}`}>
      <div className="mb-4 flex justify-between">
        <div>
          <h3 className="text-2xl">{companyName}</h3>
          <h4 className="color-primary">{position}</h4>
          <p className="text-sm text-gray-600">
            {dayjs(from).format('MMM-YYYY')} - {to ? dayjs(to).format('MMM-YYYY') : 'Currently'}
            {<span className="px-2">|</span>}
            <span className="text-xs"><FontAwesomeIcon icon="map-marker-alt" /> {location}</span>
          </p>
        </div>
        <div className="pr-2">
          <img src={logo} alt="" />
        </div>
      </div>
      <ul className="list-disc list-inside text-sm">
        {details.split('\n').map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )

}

export default WorkExperience

WorkExperience.propTypes = {
  experience: PropTypes.object,
  className: PropTypes.string
}