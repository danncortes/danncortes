import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Avatar } from '../Avatar';
import { ContactInfo } from '../ContactInfo';
import resumeMock from './resume-mock';
import TechStack from '../TechStack';
import Tags from '../Tags';
import WorkExperience from '../WorkExperience';
import Course from '../Course';
import Education from '../Education';
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPrint);

const ResumeWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #555;
`;

const Resume = ({className}) => {
  const componentRef = useRef();
  return (
    <ResumeWrapper className={`resume ${className}`}>
      <ReactToPrint
        trigger={() => <p className="font-semibold text-xs text-center mb-3 cursor-pointer"><FontAwesomeIcon icon="print" /> Print or Download</p>}
        content={() => componentRef.current}
      />
      <div className="resume__cont max-w-screen-lg mx-auto bg-white px-6 py-10" ref={componentRef}>
        <div className="grid grid-cols-7 gap-8">
          {/* Left Column */}
          <div className="col-span-2 pr-6 border-r">
            {/* Avatar */}
            <div className="mx-auto w-4/5">
              <Avatar mode="circle" className="mb-10" />
            </div>

            {/* Main Tech Stack */}
            <div className="mb-8">
              <h3 className="color-primary mb-3 font-semibold uppercase text-sm">{resumeMock.mainTechStack.title}</h3>
              <TechStack
                data={resumeMock.mainTechStack.data}
                height={10}
                titleClasses="mb-1 text-sm text-blue-700"
                levelClasses="mb-1"
                bgColor="#ddd"
                color="darkgoldenrod"
              />
            </div>

            {/* Other Tools */}
            <div className="mb-8">
              <h3 className="color-primary mb-3 font-semibold uppercase text-sm">{resumeMock.otherTools.title}</h3>
              <Tags
                tags={resumeMock.otherTools.data}
                className="flex flex-wrap"
                itemClass="border-gray-300 border mr-2 mb-2 text-sm text-blue-700 px-2 rounded-md"
              />
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="color-primary mb-3 font-semibold uppercase text-sm">{resumeMock.skills.title}</h3>
              <Tags
                tags={resumeMock.skills.data}
                className="flex flex-wrap"
                itemClass="border-gray-300 border mr-2 mb-2 text-sm text-blue-700 px-2 rounded-md"
              />
            </div>

            {/* Courses */}
            <div className="mb-8">
              <h3 className="color-primary mb-3 font-semibold uppercase text-sm">COURSES</h3>
              {resumeMock.courses.map((course, i) => (
                <Course
                  key={`${i}-${course.name}`}
                  course={course}
                  className={'text-sm text-gray-600 mb-4'}
                />
              ))}
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h3 className="color-primary mb-3 font-semibold uppercase text-sm">LANGUAGES</h3>
              {resumeMock.languages.map((language, i) => (
                <div className="mb-4" key={`${i}-${language.name}`}>
                  <p className="text-sm">{language.name}</p>
                  <p className="text-xs text-gray-600 font-medium">{language.level}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="color-primary mb-3 font-semibold uppercase text-sm">Education</h3>
              {resumeMock.education.map((education, i) => (
                <Education
                key={`${i}-${education.title}`}
                education={education}
                className={'mb-5 text-xs font-medium text-gray-600'}
              />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-5">
            <h2 className="text-4xl font-medium">Daniel Cortés</h2>
            <h1 className="text-lg mb-4" style={{ color: 'darkgoldenrod' }}>
              Senior Front-End Developer
            </h1>

            {/* Contact Info */}
            <ContactInfo
              info={resumeMock.contactInfo}
              icons
              titles={false}
              mode="inline"
              className="mb-8 text-xs"
            />
            
            {/* Profile Info */}
            <h3 className="section-title border-b text-sm">PROFILE</h3>
            <section className="font-medium mb-8">
              {resumeMock.profileSummary.split('\n').map((item) => (
                <p key={item}>{item}</p>
              ))}
            </section>
            
            {/* Experience Info */}
            <h3 className="section-title border-b text-sm">WORK EXPERIENCE</h3>
            <section>
              {resumeMock.experience.map((experience, i) => (
                <WorkExperience
                  className="mb-10"
                  key={`${i}-${experience.companyName}`}
                  experience={experience}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </ResumeWrapper>
  )
};

export default Resume;

Resume.propTypes = {
  className: PropTypes.string
}