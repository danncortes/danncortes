import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { WorkExpData } from '../Types';

library.add(faMapMarkerAlt);

const WorkExperience = ({
  experience,
  className
}: {
  experience: WorkExpData;
  className: string;
}) => {
  const {
    companyName,
    nameNote,
    position,
    from,
    to,
    logo,
    about,
    details,
    location,
    projects,
    link
  } = experience;

  const renderLogo = (): ReactElement => {
    const img = (
      <img
        className="w-32 h-12 object-scale-down"
        src={logo}
        alt=""
        aria-label={companyName}
      />
    );

    return link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    ) : (
      img
    );
  };

  return (
    <>
      <div className={`font-medium text-sm ${className}`}>
        <div className="mb-4 flex justify-between">
          <div>
            <h3 className="text-xl font-semibold">
              {companyName}{' '}
              {nameNote && (
                <span className="text-sm font-medium">({nameNote})</span>
              )}
            </h3>
            <h4 className="color-primary text-base">{position}</h4>
            <p className=" text-gray-600">
              {dayjs(from).format('MMM YYYY')} -{' '}
              {to ? dayjs(to).format('MMM YYYY') : 'Currently'}
              {<span className="px-2">|</span>}
              <span className="text-xs">
                <FontAwesomeIcon icon="map-marker-alt" /> {location}
              </span>
            </p>
          </div>
          {logo && renderLogo()}
        </div>
        <p className="mb-4">{about && about}</p>
        <ul className="list-disc pl-4 mb-4">
          {details.split('\n').map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {projects.length > 0 && (
          <>
            <h3 className="font-semibold color-primary mb-2">
              Project{projects.length > 1 && 's'}
            </h3>
            <ul>
              {projects.map((item) => (
                <li key={item.name} className="mb-6">
                  <p className="font-semibold text-sky-700 mb-1">{item.name}</p>
                  {item.description && (
                    <p className="mb-1">{item.description}</p>
                  )}
                  <p className="font-semibold">Responsibilities</p>
                  <ul className="list-disc pl-4 mb-4">
                    {item.responsibilities.split('\n').map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {item.name === 'Application connection platform' && (
                    <div className="break-page p-8"></div>
                  )}
                </li>
              ))}
            </ul>
            {companyName === 'Truelogic Software' && (
              <div className="break-page p-10"></div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default WorkExperience;

WorkExperience.defaultProps = {
  className: ''
};
