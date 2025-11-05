import React from 'react';

export type Technology = {
  name: string;
  experienceLevel: React.ReactNode;
};

export const Technology = ({ name, experienceLevel }: Technology) => {
  return (
    <div className="technology">
      <h4 className="technology__title">{name}</h4>
      {experienceLevel}
    </div>
  );
};

export default Technology;
