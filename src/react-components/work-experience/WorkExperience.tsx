import React from 'react';
import { useTranslation } from 'react-i18next';
import ExperienceIntro from './ExperienceIntro';
import ExperienceLogo from './ExperienceLogo';
import ExperienceProjects from './ExperienceProjects';
import { formatDate } from '../../utils';
import { LocationIcon } from '../icons';

export type ProjectData = {
  projectKey: string;
  name: string;
  responsibilities: string;
  techStack: string;
};

export type WorkExpData = {
  link: string;
  position: string;
  from: string;
  to: string | null;
  location: string;
  projects: ProjectData[];
  logo?: {
    name: string;
    loadingMode: string;
  } | null;
  showLogo?: boolean;
  name: string;
  experienceKey: string;
  nameNote?: string;
  about?: string;
  isIntroArray?: boolean;
  showOnPrint?: boolean;
};

const WorkExperience = ({ experience }: { experience: WorkExpData }) => {
  const { t } = useTranslation();

  const {
    name,
    experienceKey: experienceKey,
    nameNote,
    position,
    from,
    to,
    logo,
    location,
    showLogo = false,
    projects,
    link,
    isIntroArray = false,
    showOnPrint = true
  } = experience;

  return (
    <>
      {['Ries Inc.'].includes(name) && (
        <>
          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>
        </>
      )}
      {
        <div
          className={`experience__item ${!showOnPrint ? 'no-show-print' : ''}`}
        >
          <div className="experience__header mb-4 flex justify-between">
            <div>
              <h3 className="experience__position">{t(position)}</h3>
              <h4 className="experience__company-name">
                {name}{' '}
                {nameNote && (
                  <span className="experience__company-note">({nameNote})</span>
                )}
              </h4>
              <p className="experience__time flex items-center">
                {formatDate(from)} - {to ? formatDate(to) : t('currently')}
                {<span>|</span>}
                <span className=" experience__location flex items-center gap-0.5">
                  <LocationIcon /> {t(location)}
                </span>
              </p>
            </div>
            {logo && showLogo && (
              <ExperienceLogo
                logo={logo}
                name={name}
                link={link}
              ></ExperienceLogo>
            )}
          </div>
          {(() => {
            const about = t(`experience.about`, {
              defaultValue: ''
            });
            return about ? <p className="mb-4">{about}</p> : null;
          })()}
          {t(`experience.intro`, {
            defaultValue: ''
          }) && (
            <ExperienceIntro
              isIntroArray={isIntroArray}
              translationKey={`experience.intro`}
            ></ExperienceIntro>
          )}

          {['Truelogic Software'].includes(name) && (
            <>
              <div className="break-page"></div>
              <div className="break-page"></div>
            </>
          )}

          {projects.length > 0 && (
            <ExperienceProjects
              projects={projects}
              experienceKey={experienceKey}
              name={name}
            ></ExperienceProjects>
          )}
        </div>
      }
    </>
  );
};

export default WorkExperience;
