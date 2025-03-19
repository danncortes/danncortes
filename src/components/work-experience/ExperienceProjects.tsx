import React from 'react';
import { ProjectData } from './WorkExperience';
import { useTranslation } from 'react-i18next';

type Props = {
  projects: ProjectData[];
  companyKey: string;
  companyName: string;
};

export default ({ projects, companyKey }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="experience__project-header">
        {t(`project${projects.length > 1 ? 's' : ''}`)}
      </h3>
      <ul>
        {projects.map((project) => (
          <li key={project.name} className="experience__project">
            <div className="experience__project-header flex justify-between">
              <p className="experience__project-name color-secondary">
                {t(
                  `experience.${companyKey}.projects.${project.projectKey}.name`
                )}
              </p>
              <p className="experience__project-techstack">
                {`${project.techStack}`}
              </p>
            </div>
            <p className="experience__project-description mb-1">
              {t(
                `experience.${companyKey}.projects.${project.projectKey}.description`
              )}
            </p>
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
