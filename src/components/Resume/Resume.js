import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../Avatar';
import { ContactInfo } from '../ContactInfo';
import resumeMock from './resume-mock';
import TechStack from '../TechStack';

const ResumeWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #555;
`;

const Resume = () => (
  <ResumeWrapper className="resume p-6 bg-gray-200 h-100">
    <div className="resume__cont max-w-screen-lg mx-auto bg-white px-6 py-10">
      <div className="grid grid-cols-7 gap-8">
        {/* Left Column */}
        <div className="col-span-2 pr-6 border-r">
          {/* Avatar */}
          <Avatar mode="circle" className="mb-10" />

          {/* Main Tech Stack */}
          <TechStack
            data={resumeMock.mainTechStack}
            className="mb-4"
            type="pill"
            height={10}
            titleClasses="mb-1 text-sm text-blue-700"
            levelClasses="mb-1"
            bgColor="#ddd"
            color="darkgoldenrod"
          />
        </div>

        {/* Right Column */}
        <div className="col-span-5">
          <h2 className="text-4xl font-medium">Daniel Cortés</h2>
          <h1 className="text-lg mb-4" style={{ color: 'darkgoldenrod' }}>
            Senior Front-End Developer
          </h1>
          <ContactInfo
            info={resumeMock.contactInfo}
            icons
            titles={false}
            mode="inline"
            className="mb-8 text-xs"
          />
          <h3 className="section-title border-b text-sm font-bold">PROFILE</h3>
          <div className="font-medium">
            {resumeMock.profileSummary.split('\n').map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </ResumeWrapper>
);

export default Resume;
