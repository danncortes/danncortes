import React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from './Avatar';
import Course, { CourseData } from './Course';
import Education, { EducationModel } from './Education';
import PersonalData from './PersonalData';
import ToolsAndSkills, { ToolsAndSkillsData } from './ToolsAndSkills';
import WorkExperience from './work-experience/WorkExperience';
import resumeData from '../data.json';
import ComponentTemplate from './ComponentTemplate';
import LanguageButtons from './LanguageButtons';

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

          {/* Main Tools Left*/}
          <ComponentTemplate
            className="techstack-component--left md-no-underline"
            title={t(resumeData.tools.title)}
          >
            <ToolsAndSkills
              data={resumeData.tools.data as ToolsAndSkillsData[]}
              height={10}
              bgColor="#ddd"
              showExpOnPrint={resumeData.tools.showExpOnPrint}
              showExperience={resumeData.tools.showExperience}
              showLevel={resumeData.tools.showLevel}
            />
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
          <div className="resume-header flex">
            <div className="resume-header__left">
              <h1 className="resume-name">{resumeData.name}</h1>
              <h2 className="resume-title color-primary">
                {t('profileInfo.title')}
              </h2>
            </div>
            <LanguageButtons></LanguageButtons>
          </div>

          {/* Profile Info */}
          <ComponentTemplate marginBottom={1.6}>
            <ul className="profile">
              {Object.values(
                t(`profileInfo.summary`, {
                  returnObjects: true
                })
              ).map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
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
            className="techstack-component--right"
            title={t(resumeData.tools.title)}
          >
            <ToolsAndSkills
              data={resumeData.tools.data as ToolsAndSkillsData[]}
              height={10}
              bgColor="#ddd"
              showExpOnPrint={resumeData.tools.showExpOnPrint}
              showExperience={resumeData.tools.showExperience}
              showLevel={resumeData.tools.showLevel}
            />
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
