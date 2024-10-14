import React from 'react';
import Avatar from './Avatar';
import Course, { CourseData } from './Course';
import Education, { EducationModel } from './Education';
import PersonalData from './PersonalData';
import Tags from './Tags';
import TechStack from './TechStack';
import WorkExperience from './WorkExperience';
import resumeData from '../data.json';
import ComponentTemplate from './ComponentTemplate';
import getLocalizedText from '../utils';
import { useTranslation } from 'react-i18next';

export type LanguageData = {
  name: string;
  level: string;
};

const ResumeContent = () => {
  const { t } = useTranslation();
  return (
    <div className="resume-page">
      <div className="resume-content">
        <div className="resume-content__left">
          {/* Avatar */}
          <Avatar mode="circle" className="avatar--left" />

          {/* Main Tech Stack */}
          <ComponentTemplate
            className="techstack-component--left md-no-underline"
            title={t(resumeData.mainTechStack.title)}
          >
            <TechStack
              data={resumeData.mainTechStack.data}
              height={10}
              bgColor="#ddd"
              primaryColor="peru"
              showLevel={resumeData.mainTechStack.showLevel}
            />
          </ComponentTemplate>

          {/* Other Tools */}
          <ComponentTemplate
            className="other-tools-component--left md-no-underline"
            title={t(resumeData.otherTools.title)}
          >
            <Tags tags={resumeData.otherTools.data} />
          </ComponentTemplate>

          {/* Skills */}
          <ComponentTemplate
            className="skills-component--left md-no-underline"
            title={t(resumeData.skills.title)}
          >
            <Tags tags={resumeData.skills.data} />
          </ComponentTemplate>

          {/* Courses */}
          <ComponentTemplate className="md-no-underline" title={t('courses')}>
            <div className="courses">
              {resumeData.courses.map((course: CourseData, i) => (
                <Course key={`${i}-${course.name}`} course={course} />
              ))}
            </div>
          </ComponentTemplate>

          {/* Languages */}
          <ComponentTemplate className="md-no-underline" title={t('languages')}>
            {resumeData.languages.map((language: LanguageData, i) => (
              <div className="language" key={`${i}-${language.name}`}>
                <p className="language__name">{t(language.name)}</p>
                <p className="language__level">{t(language.level)}</p>
              </div>
            ))}
          </ComponentTemplate>

          {/* Education */}
          <ComponentTemplate className="md-no-underline" title={t('education')}>
            {resumeData.education.map((education: EducationModel, i) => (
              <Education
                key={`${i}-${education.title}`}
                education={education}
              />
            ))}
          </ComponentTemplate>
        </div>

        <div className="resume-content__right">
          <Avatar mode="circle" className="avatar--right" />

          <h1 className="resume-name">{resumeData.name}</h1>

          <h2 className="resume-title color-primary">
            {t('profileInfo.title')}
          </h2>

          {/* Personal Data */}
          <PersonalData
            data={resumeData.contactInfo}
            icons={true}
            titles={false}
            mode="inline"
            className="personal-data--a"
          />
          <PersonalData
            data={resumeData.personalInfo}
            icons={true}
            titles={false}
            mode="inline"
            className="personal-data--b"
          />

          {/* Profile Info */}
          <ComponentTemplate title={t('profile')}>
            <ul className="profile">
              {[0, 1].map((item) => (
                <li key={item}>{t(`profileInfo.summary.${item}`)}</li>
              ))}
            </ul>
          </ComponentTemplate>

          {/* Main Tech Stack */}
          <ComponentTemplate
            className="techstack-component--right"
            title={t(resumeData.mainTechStack.title)}
          >
            <TechStack
              data={resumeData.mainTechStack.data}
              height={10}
              bgColor="#ddd"
              primaryColor="peru"
              showLevel={resumeData.mainTechStack.showLevel}
            />
          </ComponentTemplate>

          {/* Other Tools */}
          <ComponentTemplate
            className="other-tools-component--right"
            title={t(resumeData.otherTools.title)}
          >
            <Tags tags={resumeData.otherTools.data} />
          </ComponentTemplate>

          {/* Skills */}
          <ComponentTemplate
            className="other-tools-component--right"
            title={resumeData.skills.title}
          >
            <Tags tags={resumeData.skills.data} />
          </ComponentTemplate>

          {/* Experience Info */}
          <ComponentTemplate title={t('workExperience')}>
            <section className="experience">
              {resumeData.experience.length
                ? resumeData.experience.map((experience, i) => (
                    <WorkExperience
                      key={`${i}-${experience.companyName}`}
                      experience={experience}
                    />
                  ))
                : ''}
            </section>
          </ComponentTemplate>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
