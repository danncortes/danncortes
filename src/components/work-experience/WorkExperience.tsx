import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';
import ExperienceIntro from './ExperienceIntro';
import ExperienceLogo from './ExperienceLogo';
import ExperienceProjects from './ExperienceProjects';

library.add(faMapMarkerAlt);

export type ProjectData = {
  projectKey: string;
  name: string;
};

export type WorkExpData = {
  link: string;
  position: string;
  from: number;
  to: number | null;
  location: string;
  projects: ProjectData[];
  logo: string;
  companyName: string;
  companyKey: string;
  nameNote?: string;
  about?: string;
  isIntroArray?: boolean;
  showOnPrint?: boolean;
};

const WorkExperience = ({ experience }: { experience: WorkExpData }) => {
  const { t } = useTranslation();

  const {
    companyName,
    companyKey,
    nameNote,
    position,
    from,
    to,
    logo,
    about,
    location,
    projects,
    link,
    isIntroArray = false,
    showOnPrint = true
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
      {
        <div
          className={`experience__item ${!showOnPrint ? 'no-show-print' : ''}`}
        >
          <div className="experience__header flex justify-between">
            <div>
              <h3 className="experience__company-name">
                {companyName}{' '}
                {nameNote && (
                  <span className="experience__company-note">({nameNote})</span>
                )}
              </h3>
              <h4 className="experience__position color-primary">
                {t(position)}
              </h4>
              <p className="experience__time">
                {dayjs(from).format('MMM YYYY')} -{' '}
                {to ? dayjs(to).format('MMM YYYY') : 'Currently'}
                {<span>|</span>}
                <span className=" experience__location">
                  <FontAwesomeIcon icon="map-marker-alt" /> {t(location)}
                </span>
              </p>
            </div>
            {logo && (
              <ExperienceLogo
                logo={logo}
                companyName={companyName}
                link={link}
              ></ExperienceLogo>
            )}
          </div>
          {about && <p className="experience__about">{about}</p>}
          <ExperienceIntro
            isIntroArray={isIntroArray}
            translationKey={`experience.${companyKey}.intro`}
          ></ExperienceIntro>

          {projects.length > 0 && (
            <ExperienceProjects
              projects={projects}
              companyKey={companyKey}
              companyName={companyName}
            ></ExperienceProjects>
          )}
        </div>
      }
    </>
  );
};

export default WorkExperience;
