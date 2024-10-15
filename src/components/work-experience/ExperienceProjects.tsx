import React from 'react';
import { ProjectData, WorkExpData } from './WorkExperience';
import { useTranslation } from 'react-i18next';

export default ({
  projects,
  companyKey,
  companyName
}: {
  projects: ProjectData[];
  companyKey: WorkExpData['companyKey'];
  companyName: WorkExpData['companyName'];
}) => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="color-primary">
        {t(`project${projects.length > 1 ? 's' : ''}`)}
      </h3>
      <ul>
        {projects.map((project, i) => (
          <li key={project.name} className="experience__project">
            <p className="experience__project-name color-secondary">
              {project.name}
            </p>
            {
              <p className="experience__project-description">
                {t(
                  `experience.${companyKey}.projects.${project.projectKey}.description`
                )}
              </p>
            }
            {['Truelogic Software'].includes(companyName) && (
              <>
                <div className="break-page"></div>
                <div className="break-page"></div>
                <div className="break-page"></div>
                <div className="break-page"></div>
              </>
            )}
            <p className="font-semibold">{t('responsibilities')}</p>
            <ul className="experience__project-responsibilities">
              {Object.values(
                t(
                  `experience.${companyKey}.projects.${project.projectKey}.responsibilities`,
                  {
                    returnObjects: true
                  }
                )
              ).map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
