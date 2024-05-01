import React from 'react';
import {
  CourseData,
  LanguageData,
  EducationModel,
  WorkExpData
} from '../Types';
import Avatar from './Avatar';
import Course from './Course';
import Education from './Education';
import PersonalData from './PersonalData';
import Tags from './Tags';
import TechStack from './TechStack';
import WorkExperience from './WorkExperience';
import resumeData from '../data';

const COURSES = 'Courses';
const LANGUAGES = 'Languages';
const EDUCATION = 'Education';
const PROFILE = 'Profile';
const WORK_EXPERIENCE = 'Work Experience';

const ResumeContent = () => (
  <div className="resume__cont max-w-screen-lg mx-auto bg-white px-6 py-4 sm:py-10">
    <div className="grid grid-cols-7 gap-8">
      {/* Left Column */}
      <div className="col-span-2 pr-6 border-r hidden sm:block print:block">
        {/* Avatar */}
        <div className="mx-auto w-4/5">
          <Avatar mode="circle" className="mb-10" />
        </div>

        {/* Main Tech Stack */}
        <div className="mb-8">
          <h3 className="color-primary mb-3 uppercase text-md">
            {resumeData.mainTechStack.title}
          </h3>
          <TechStack
            data={resumeData.mainTechStack.data}
            height={10}
            titleClasses="mb-1 text-sm text-sky-700 font-medium"
            stackClasses="mb-3"
            levelClasses="mb-1"
            bgColor="#ddd"
            color="peru"
          />
        </div>

        {/* Other Tools */}
        <div className="mb-8">
          <h3 className="color-primary mb-3 uppercase text-md">
            {resumeData.otherTools.title}
          </h3>
          <Tags
            tags={resumeData.otherTools.data}
            className="flex flex-wrap"
            itemClass="bg-slate-100 border mr-2 mb-2 text-sm text-sky-700 px-2 rounded-sm"
          />
        </div>
        <div className="break-page p-4"></div>

        {/* Skills */}
        <div className="break-page p-6"></div>
        <div className="mb-8">
          <h3 className="color-primary mb-3 uppercase text-md">
            {resumeData.skills.title}
          </h3>
          <Tags
            tags={resumeData.skills.data}
            className="flex flex-wrap"
            itemClass="bg-slate-100 border mr-2 mb-2 text-sm text-sky-700 px-2 rounded-sm"
          />
        </div>

        {/* Courses */}
        <div className="mb-8">
          <h3 className="color-primary mb-3 uppercase text-md">{COURSES}</h3>
          {resumeData.courses.map((course: CourseData, i) => (
            <Course
              key={`${i}-${course.name}`}
              course={course}
              className={'text-sm text-gray-700 mb-4'}
            />
          ))}
        </div>

        {/* Languages */}
        <div className="break-page p-4"></div>
        <div className="mb-8">
          <h3 className="color-primary mb-3 uppercase text-md">{LANGUAGES}</h3>
          {resumeData.languages.map((language: LanguageData, i) => (
            <div className="mb-4 font-medium" key={`${i}-${language.name}`}>
              <p className="text-sm text-sky-700">{language.name}</p>
              <p className="text-xs text-gray-500">{language.level}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="color-primary mb-3 uppercase text-md">{EDUCATION}</h3>
          {resumeData.education.map((education: EducationModel, i) => (
            <Education
              key={`${i}-${education.title}`}
              education={education}
              className={'mb-5 text-xs font-medium text-gray-600'}
            />
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-7 sm:col-span-5 print:col-span-5">
        {/* Avatar mobile */}
        <div className="mx-auto w-2/5 sm:hidden print:hidden">
          <Avatar mode="circle" className="mb-8" />
        </div>

        <h1 className="text-4xl font-medium">{resumeData.name}</h1>
        <h2 className="text-lg mb-4 color-primary">{resumeData.title}</h2>

        {/* Personal Data */}
        <PersonalData
          data={resumeData.contactInfo}
          icons={true}
          titles={false}
          mode="inline"
          className="text-xs"
        />
        <PersonalData
          data={resumeData.personalInfo}
          icons={true}
          titles={false}
          mode="inline"
          className="mb-6 text-xs"
        />

        {/* Profile Info */}
        <h3 className="section-title border-b text-md uppercase">{PROFILE}</h3>
        <ul className="font-medium mb-8 list-disc pl-4">
          {resumeData.profileSummary.split('\n').map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Main Tech Stack - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 uppercase text-md">
            {resumeData.mainTechStack.title}
          </h3>
          <TechStack
            data={resumeData.mainTechStack.data}
            height={10}
            titleClasses="mb-1 text-sm text-sky-700 font-medium"
            className="flex flex-wrap justify-start"
            stackClasses="mx-2 my-3"
            levelClasses="mb-1"
            bgColor="#ddd"
            color="peru"
          />
        </div>

        {/* Other tools - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 uppercase text-md">
            {resumeData.otherTools.title}
          </h3>
          <Tags
            tags={resumeData.otherTools.data}
            className="flex flex-wrap"
            itemClass="border-gray-300 border mr-2 mb-2 text-sm text-sky-700 px-2 rounded-sm"
          />
        </div>

        {/* Skills - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 uppercase text-md">
            {resumeData.skills.title}
          </h3>
          <Tags
            tags={resumeData.skills.data}
            className="flex flex-wrap"
            itemClass="border-gray-300 border mr-2 mb-2 text-sm text-sky-700 px-2 rounded-sm"
          />
        </div>

        {/* Experience Info */}
        <h3 className="section-title border-b text-md uppercase">
          {WORK_EXPERIENCE}
        </h3>
        <section>
          {resumeData.experience.length
            ? resumeData.experience.map((experience: WorkExpData, i) => (
                <WorkExperience
                  className="mb-8"
                  key={`${i}-${experience.companyName}`}
                  experience={experience}
                />
              ))
            : ''}
        </section>

        {/* Courses - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 uppercase text-md">{COURSES}</h3>
          {resumeData.courses.map((course: CourseData, i) => (
            <Course
              key={`${i}-${course.name}`}
              course={course}
              className={'text-sm text-gray-600 mb-4'}
            />
          ))}
        </div>

        {/* Languages - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 uppercase text-md">{LANGUAGES}</h3>
          {resumeData.languages.map((language: LanguageData, i) => (
            <div className="mb-4" key={`${i}-${language.name}`}>
              <p className="text-sm text-sky-700">{language.name}</p>
              <p className="text-xs text-gray-500 font-medium">
                {language.level}
              </p>
            </div>
          ))}
        </div>

        {/* Education - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 uppercase text-md">{EDUCATION}</h3>
          {resumeData.education.map((education, i) => (
            <Education
              key={`${i}-${education.title}`}
              education={education}
              className={'mb-5 text-xs font-medium text-gray-600'}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ResumeContent;
