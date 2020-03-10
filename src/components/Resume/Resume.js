import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../Avatar';
import { ContactInfo } from '../ContactInfo';

const ResumeWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #444;
`;
const profileSummary = () => (
  <>
    Design and development of web projects using JavaScript, HTML and CSS.
    <br />
    +5 years of experience in JavaScript and Scrum Development
    <br />
    +12 years of experience in UI Design, HTML y CSS
    <br />
    +15 years of experience in Graphic Arts
    <br />
    Strong organizational skills, always striving for excellence in quality
    while working under tight deadlines
  </>
);

const contactInfo = [
  {
    title: 'Email',
    label: 'danncortes@gmail.com',
    value: 'danncortes@gmail.com',
    type: 'email',
    icon: 'envelope'
  },
  {
    title: 'Phone',
    label: '+41767251794',
    value: '+41767251794',
    type: 'phone',
    icon: 'phone'
  },
  {
    title: 'Location',
    label: 'Luzern - Switzerland',
    value: 'Luzern+Switzerland',
    type: 'map',
    icon: 'map-marker-alt'
  },
  {
    title: 'LinkedIn',
    label: 'linkedin.com/in/danncortes',
    value: 'http://linkedin.com/in/danncortes',
    type: 'link',
    icon: 'linkedin'
  },
  {
    title: 'Github',
    label: 'github.com/danncortes',
    value: 'https://github.com/danncortes',
    type: 'link',
    icon: 'github'
  }
];

const Resume = () => {
  return (
    <ResumeWrapper className="resume p-6 bg-gray-200 h-screen">
      <div className="resume__cont max-w-screen-lg mx-auto bg-white px-6 py-10">
        <div className="grid grid-cols-7 gap-8">
          {/* Left Column */}
          <div className="col-span-2 pr-6 border-r">
            <Avatar mode="circle" className="mb-10" />
          </div>

          {/* Right Column */}
          <div className="col-span-5">
            <h2 className="text-4xl font-medium">Daniel Cortés</h2>
            <h1 className="text-lg mb-4" style={{ color: 'darkgoldenrod' }}>
              Senior Front-End Developer
            </h1>
            <ContactInfo
              info={contactInfo}
              icons
              titles={false}
              mode="inline"
              className="mb-8 text-xs"
            />
            <h3 className="section-title border-b text-sm font-bold">
              PROFILE
            </h3>
            <p className="font-medium">{profileSummary()}</p>
          </div>
        </div>
      </div>
    </ResumeWrapper>
  );
};

export default Resume;
