import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
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
import ResumeContent from './ResumeContent';

library.add(
  fab,
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone,
  faRing,
  faGlobeAmericas,
  faIdCard,
  faPrint
);

const Resume = () => {
  const componentRef: any = useRef();

  return (
    <div className="resume-wrapper resume">
      <ReactToPrint
        removeAfterPrint={true}
        trigger={() => (
          <p className="resume__print-tag mb-3 font-semibold">
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
    </div>
  );
};

export default Resume;
