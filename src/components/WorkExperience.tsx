import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faMapMarkerAlt);

export type ProjectData = {
  name: string;
  description: string;
  responsibilities: string;
};

export type WorkExpData = {
  companyName: string;
  nameNote?: string;
  about?: string;
  link: string;
  position: string;
  from: number;
  to: number | null;
  location: string;
  details: string;
  projects: ProjectData[];
  logo: string;
};

const WorkExperience = ({ experience }: { experience: WorkExpData }) => {
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
        className="experience__company-logo"
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
      {['Dada'].includes(companyName) && (
        <>
          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>
        </>
      )}
      <div className="experience__item">
        <div className="experience__header flex justify-between">
          <div>
            <h3 className="experience__company-name">
              {companyName}{' '}
              {nameNote && (
                <span className="experience__company-note">({nameNote})</span>
              )}
            </h3>
            <h4 className="experience__position color-primary">{position}</h4>
            <p className="experience__time">
              {dayjs(from).format('MMM YYYY')} -{' '}
              {to ? dayjs(to).format('MMM YYYY') : 'Currently'}
              {<span>|</span>}
              <span className=" experience__location">
                <FontAwesomeIcon icon="map-marker-alt" /> {location}
              </span>
            </p>
          </div>
          {logo && renderLogo()}
        </div>
        {about && <p className="experience__about">{about}</p>}
        <ul className="experience__job-profile">
          {details.split('\n').map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {projects.length > 0 && (
          <>
            <h3 className="color-primary">
              Project{projects.length > 1 && 's'}
            </h3>
            <ul>
              {projects.map((item) => (
                <li key={item.name} className="experience__project">
                  <p className="experience__project-name color-secondary">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="experience__project-description">
                      {item.description}
                    </p>
                  )}
                  {['Truelogic Software'].includes(companyName) && (
                    <>
                      <div className="break-page"></div>
                      <div className="break-page"></div>
                      <div className="break-page"></div>
                      <div className="break-page"></div>
                      <div className="break-page"></div>
                    </>
                  )}
                  <p className="font-semibold">Responsibilities</p>
                  <ul className="experience__project-responsibilities">
                    {item.responsibilities.split('\n').map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default WorkExperience;
