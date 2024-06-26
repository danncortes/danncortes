import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ResumeContent from './ResumeContent';
import { FontAwesomeIcon } from '../font-awesome';

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
