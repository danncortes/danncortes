import React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from './Avatar';
import Course, { CourseData } from './Course';
import Education, { EducationModel } from './Education';
import PersonalData from './PersonalData';
import TechStack from './TechStack';
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

          {/* Main Tech Stack Left*/}
          <ComponentTemplate
            className="techstack-component--left md-no-underline"
            title={t(resumeData.mainTechStack.title)}
          >
            <TechStack
              data={resumeData.mainTechStack.data}
              height={10}
              bgColor="#ddd"
              primaryColor="peru"
              showExpOnPrint={resumeData.mainTechStack.showExpOnPrint}
              showExperience={resumeData.mainTechStack.showExperience}
              showLevel={resumeData.mainTechStack.showLevel}
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

          {/* Languages */}
          <ComponentTemplate className="md-no-underline" title={t('languages')}>
            {resumeData.languages.map((language: LanguageData, i) => (
              <div className="language" key={`${i}-${language.name}`}>
                <p className="language__name">{t(language.name)}</p>
                <p className="language__level">{t(language.level)}</p>
              </div>
            ))}
          </ComponentTemplate>

          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>

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
          <div className="resume-header flex">
            <div className="resume-header__left">
              <h1 className="resume-name">{resumeData.name}</h1>
              <h2 className="resume-title color-primary">
                {t('profileInfo.title')}
              </h2>
            </div>
            <LanguageButtons></LanguageButtons>
          </div>

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
          <ComponentTemplate>
            <ul className="profile">{<li>{t(`profileInfo.summary`)}</li>}</ul>
          </ComponentTemplate>

          {/* Main Tech Stack Right*/}
          <ComponentTemplate
            className="techstack-component--right"
            title={t(resumeData.mainTechStack.title)}
          >
            <TechStack
              data={resumeData.mainTechStack.data}
              height={10}
              bgColor="#ddd"
              primaryColor="peru"
              showExpOnPrint={resumeData.mainTechStack.showExpOnPrint}
              showExperience={resumeData.mainTechStack.showExperience}
              showLevel={resumeData.mainTechStack.showLevel}
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
          <p className="more-info">
            {t('moreExpInfo')}{' '}
            <a target="blank" href="http://danncortes.com">
              danncortes.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
