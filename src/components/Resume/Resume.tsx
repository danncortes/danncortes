import React, { useRef } from 'react';
import PropTypes from 'prop-types';
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
import './Resume.css';
import ResumeContent from '../ResumeContent';

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

const Resume = (props: { className: string }) => {
  const { className } = props;
  const componentRef: any = useRef();

  return (
    <div className={`resume-wrapper resume ${className}`}>
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
    </div>
  );
};

export default Resume;

Resume.propTypes = {
  className: PropTypes.string
};
