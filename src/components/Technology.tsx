import React from 'react';

export type Technology = {
  name: string;
  experienceLevel: React.ReactNode;
  showExpOnPrint: boolean;
  showExperience: boolean;
};

export const Technology = ({
  name,
  experienceLevel,
  showExpOnPrint,
  showExperience
}: Technology) => {
  return (
    <div className="technology">
      <h4 className="technology__title">{name}</h4>
      {experienceLevel}
      {showExperience && (
        <p
          className={`technology__experience ${
            !showExpOnPrint ? 'no-show-print' : ''
          }`}
        ></p>
      )}
    </div>
  );
};

export default Technology;
