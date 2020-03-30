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
  const { companyName, position, from, to, logo, about, details, location, projects } = experience

  return (
    <div className={`font-medium text-sm ${className}`}>
      <div className="mb-4 flex justify-between">
        <div>
          <h3 className="text-2xl">{companyName}</h3>
          <h4 className="color-primary text-base">{position}</h4>
          <p className=" text-gray-600">
            {dayjs(from).format('MMM-YYYY')} - {to ? dayjs(to).format('MMM-YYYY') : 'Currently'}
            {<span className="px-2">|</span>}
            <span className="text-xs"><FontAwesomeIcon icon="map-marker-alt" /> {location}</span>
          </p>
        </div>
        {
          logo && (
            <div className="pr-2">
              <img className="w-32 h-12 object-scale-down" src={logo} alt="" />
            </div>
          )
        }
      </div>
      <p className="mb-4" >{about && about}</p>
      <ul className="list-disc pl-4 mb-4">
        {details.split('\n').map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {
        projects.length > 0 && (
          <>
            <h3 className="font-semibold color-primary mb-2">Projects</h3>
            <ul>
              {projects.map((item) => (
                <li key={item.name} className="mb-6">
                  <p className="font-semibold text-blue-600 mb-1">{item.name}</p>
                  {item.description && <p className="mb-1 text-gray-600">{item.description}</p>}
                  <p className="font-semibold">Responsabilities</p>
                  <ul className="list-disc pl-4 mb-4">
                    {item.responsabilities.split('\n').map((item) => (
                      <li key={item} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        )
      }
    </div>
  )

}

export default WorkExperience

WorkExperience.propTypes = {
  experience: PropTypes.object,
  className: PropTypes.string
}