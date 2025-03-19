import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';
import ExperienceIntro from './ExperienceIntro';
import ExperienceLogo from './ExperienceLogo';
import ExperienceProjects from './ExperienceProjects';
import { formatDate } from '../../utils';

library.add(faMapMarkerAlt);

export type ProjectData = {
  projectKey: string;
  name: string;
  techStack: string;
};

export type WorkExpData = {
  link: string;
  position: string;
  from: string;
  to: string | null;
  location: string;
  projects: ProjectData[];
  logo: {
    name: string;
    loadingMode: string;
  } | null;
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
    location,
    projects,
    link,
    isIntroArray = false,
    showOnPrint = true
  } = experience;

  return (
    <>
      {
        <div
          className={`experience__item ${!showOnPrint ? 'no-show-print' : ''}`}
        >
          <div className="experience__header mb-4 flex justify-between">
            <div>
              <h3 className="experience__company-name">
                {companyName}{' '}
                {nameNote && (
                  <span className="experience__company-note">({nameNote})</span>
                )}
              </h3>
              <h4 className="experience__position">{t(position)}</h4>
              <p className="experience__time">
                {formatDate(from)} - {to ? formatDate(to) : 'Currently'}
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
          {(() => {
            const about = t(`experience.${companyKey}.about`, {
              defaultValue: ''
            });
            return about ? <p className="mb-4">{about}</p> : null;
          })()}
          {t(`experience.${companyKey}.intro`, {
            defaultValue: ''
          }) && (
            <ExperienceIntro
              isIntroArray={isIntroArray}
              translationKey={`experience.${companyKey}.intro`}
            ></ExperienceIntro>
          )}

          {['Endava'].includes(companyName) && (
            <>
              <div className="break-page"></div>
              <div className="break-page"></div>
              <div className="break-page"></div>
            </>
          )}

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
