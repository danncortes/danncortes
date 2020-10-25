import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '../Avatar';
import { PersonalData } from '../PersonalData';
import resumeMock from './resume-mock';
import TechStack from '../TechStack';
import Tags from '../Tags';
import WorkExperience from '../WorkExperience';
import Course from '../Course';
import Education from '../Education';
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  CourseData,
  WorkExpData,
  LanguageData,
  EducationModel
} from '../../Types';
import './Resume.css';
import {
  faPrint,
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone,
  faRing,
  faGlobeAmericas,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone,
  faRing,
  faGlobeAmericas,
  faIdCard
);

library.add(faPrint);

const ResumeWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #555;
`;

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
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {resumeMock.mainTechStack.title}
          </h3>
          <TechStack
            data={resumeMock.mainTechStack.data}
            height={10}
            titleClasses="mb-1 text-sm text-blue-700"
            stackClasses="mb-3"
            levelClasses="mb-1"
            bgColor="#ddd"
            color="darkgoldenrod"
          />
        </div>

        {/* Other Tools */}
        <div className="mb-8">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {resumeMock.otherTools.title}
          </h3>
          <Tags
            tags={resumeMock.otherTools.data}
            className="flex flex-wrap"
            itemClass="bg-gray-300 border mr-2 mb-2 text-sm text-blue-700 px-2 rounded-md"
          />
        </div>
        <div className="break-page p-4"></div>

        {/* Skills */}
        <div className="break-page p-6"></div>
        <div className="mb-8">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {resumeMock.skills.title}
          </h3>
          <Tags
            tags={resumeMock.skills.data}
            className="flex flex-wrap"
            itemClass="bg-gray-300 border mr-2 mb-2 text-sm text-blue-700 px-2 rounded-md"
          />
        </div>

        {/* Courses */}
        <div className="mb-8">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {COURSES}
          </h3>
          {resumeMock.courses.map((course: CourseData, i) => (
            <Course
              key={`${i}-${course.name}`}
              course={course}
              className={'text-sm text-gray-600 mb-4'}
            />
          ))}
        </div>

        {/* Languages */}
        <div className="break-page p-4"></div>
        <div className="mb-8">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {LANGUAGES}
          </h3>
          {resumeMock.languages.map((language: LanguageData, i) => (
            <div className="mb-4" key={`${i}-${language.name}`}>
              <p className="text-sm">{language.name}</p>
              <p className="text-xs text-gray-600 font-medium">
                {language.level}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {EDUCATION}
          </h3>
          {resumeMock.education.map((education: EducationModel, i) => (
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

        <h2 className="text-4xl font-medium">{resumeMock.name}</h2>
        <h1 className="text-lg mb-4" style={{ color: 'darkgoldenrod' }}>
          {resumeMock.title}
        </h1>

        {/* Personal Data */}
        <PersonalData
          data={resumeMock.contactInfo}
          icons={true}
          titles={false}
          mode="inline"
          className="text-xs"
        />
        <PersonalData
          data={resumeMock.personalInfo}
          icons={true}
          titles={false}
          mode="inline"
          className="mb-6 text-xs"
        />

        {/* Profile Info */}
        <h3 className="section-title border-b text-sm uppercase">{PROFILE}</h3>
        <ul className="font-medium mb-8 list-disc pl-4">
          {resumeMock.profileSummary.split('\n').map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Main Tech Stack - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {resumeMock.mainTechStack.title}
          </h3>
          <TechStack
            data={resumeMock.mainTechStack.data}
            height={10}
            titleClasses="mb-1 text-sm text-blue-700"
            className="flex flex-wrap justify-start"
            stackClasses="mx-2 my-3"
            levelClasses="mb-1"
            bgColor="#ddd"
            color="darkgoldenrod"
          />
        </div>

        {/* Other tools - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {resumeMock.otherTools.title}
          </h3>
          <Tags
            tags={resumeMock.otherTools.data}
            className="flex flex-wrap"
            itemClass="border-gray-300 border mr-2 mb-2 text-sm text-blue-700 px-2 rounded-md"
          />
        </div>

        {/* Skills - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {resumeMock.skills.title}
          </h3>
          <Tags
            tags={resumeMock.skills.data}
            className="flex flex-wrap"
            itemClass="border-gray-300 border mr-2 mb-2 text-sm text-blue-700 px-2 rounded-md"
          />
        </div>

        {/* Experience Info */}
        <h3 className="section-title border-b text-sm uppercase">
          {WORK_EXPERIENCE}
        </h3>
        <section>
          {resumeMock.experience.length
            ? resumeMock.experience.map((experience: WorkExpData, i) => (
                <WorkExperience
                  className="mb-10"
                  key={`${i}-${experience.companyName}`}
                  experience={experience}
                />
              ))
            : ''}
        </section>

        {/* Courses - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {COURSES}
          </h3>
          {resumeMock.courses.map((course: CourseData, i) => (
            <Course
              key={`${i}-${course.name}`}
              course={course}
              className={'text-sm text-gray-600 mb-4'}
            />
          ))}
        </div>

        {/* Languages - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {LANGUAGES}
          </h3>
          {resumeMock.languages.map((language: LanguageData, i) => (
            <div className="mb-4" key={`${i}-${language.name}`}>
              <p className="text-sm">{language.name}</p>
              <p className="text-xs text-gray-600 font-medium">
                {language.level}
              </p>
            </div>
          ))}
        </div>

        {/* Education - Mobile */}
        <div className="mb-8 sm:hidden print:hidden">
          <h3 className="color-primary mb-3 font-semibold uppercase text-sm">
            {EDUCATION}
          </h3>
          {resumeMock.education.map((education, i) => (
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

const Resume = (props: { className: string }) => {
  const { className } = props;
  const componentRef: any = useRef();

  return (
    <ResumeWrapper className={`resume ${className}`}>
      <ReactToPrint
        removeAfterPrint={true}
        trigger={() => (
          <p className="font-semibold text-xs text-center mb-3 cursor-pointer">
            <FontAwesomeIcon icon="print" /> Print or Download
          </p>
        )}
        content={() => componentRef.current}
      />
      <div style={{ display: 'none' }}>
        <div ref={componentRef} className="resume-print-version">
          <ResumeContent />
        </div>
      </div>
      <ResumeContent />
    </ResumeWrapper>
  );
};

export default Resume;

Resume.propTypes = {
  className: PropTypes.string
};
