import React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from './Avatar';
import Course, { CourseData } from './Course';
import Education, { EducationModel } from './Education';
import PersonalData from './PersonalData';
import Tools, { ToolsAndSkillsData } from './ToolsAndSkills';
import WorkExperience from './work-experience/WorkExperience';
import resumeData from '../data.json';
import ComponentTemplate from './ComponentTemplate';
import LanguageButtons from './LanguageButtons';
import { ProfileTypes } from '../types';

export type LanguageData = {
  name: string;
  level: string;
};

const ResumeContent = () => {
  const { t } = useTranslation();

  const { profileType } = resumeData.config;

  const toolsComponent = () => (
    <Tools
      data={resumeData.tools.data as ToolsAndSkillsData[]}
      height={8}
      bgColor="#ddd"
      showLevel={resumeData.tools.showLevel}
      profileType={profileType as ProfileTypes}
    />
  );

  return (
    <div className="resume-page">
      <div className="resume-content">
        <div className="resume-content__left">
          {/* Avatar */}
          <Avatar mode="circle" className="avatar--left" />

          {/* Main Tools Left*/}
          <ComponentTemplate
            className="techstack-component--left md-no-underline hidden md:block print:block"
            title={t(resumeData.tools.title)}
          >
            {toolsComponent()}
          </ComponentTemplate>

          {/* Courses */}
          <ComponentTemplate className="md-no-underline" title={t('courses')}>
            <div className="courses">
              {resumeData.courses.map((course: CourseData, i) => (
                <Course key={`${i}-${course.name}`} course={course} />
              ))}
            </div>
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

          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>

          {/* Languages */}
          <ComponentTemplate className="md-no-underline" title={t('languages')}>
            {resumeData.languages.map((language: LanguageData, i) => (
              <div className="language" key={`${i}-${language.name}`}>
                <p className="language__name">{t(language.name)}</p>
                <p className="language__level">{t(language.level)}</p>
              </div>
            ))}
          </ComponentTemplate>

          {/* Hobbies */}
          <ComponentTemplate
            className="md-no-underline"
            title={t('hobbies.title')}
          >
            <ul className="hobbies">
              {resumeData.hobbies.map((hobby: string) => (
                <li key={hobby}>{t(hobby)}</li>
              ))}
            </ul>
          </ComponentTemplate>
        </div>

        <div className="resume-content__right">
          <Avatar mode="circle" className="avatar--right" />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl">{resumeData.name}</h1>
              <span className="text-4xl text-gray-300 ">|</span>
              <h2 className="resume-title color-primary text-2xl">
                {t(`profileInfo.title.${profileType}`)}
              </h2>
            </div>
            <LanguageButtons></LanguageButtons>
          </div>

          {/* Profile Info */}
          <ComponentTemplate marginBottom={1.6}>
            <ul className="profile flex flex-col gap-2">
              {(() => {
                const { profileType } = resumeData.config;

                return Object.values(
                  t(`profileInfo.summary.${profileType}`, {
                    returnObjects: true
                  })
                ).map((resp, index) => <li key={index}>{resp}</li>);
              })()}
            </ul>
          </ComponentTemplate>

          {/* Personal Data */}

          <ComponentTemplate>
            <div className="personal-data-container">
              <PersonalData
                data={resumeData.contactInfo}
                titles={true}
                className="personal-data--a"
              />
              <PersonalData
                data={resumeData.personalInfo}
                titles={true}
                className="personal-data--b"
              />
            </div>
          </ComponentTemplate>

          {/* Main Tools Right*/}
          <ComponentTemplate
            className="md:hidden print:hidden"
            title={t(resumeData.tools.title)}
          >
            {toolsComponent()}
          </ComponentTemplate>

          {/* Experience Info */}
          <ComponentTemplate title={t('workExperience')}>
            <section className="experience">
              {resumeData.experience.map((experience, i) => (
                <WorkExperience
                  key={`${i}-${experience.companyName}`}
                  experience={experience}
                />
              ))}
            </section>
          </ComponentTemplate>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
