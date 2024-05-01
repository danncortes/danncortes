import React from 'react';
import Tech from './Tech';
import ToolLevel from './ToolLevel';
import { TechData, TechStackProps } from '../Types';

const TechStack = ({
  data,
  height,
  bgColor,
  type,
  color,
  width,
  className,
  titleClasses,
  levelClasses,
  stackClasses,
  showExperience
}: TechStackProps) => {
  return (
    <div className={className}>
      {data.map((tech: TechData) => (
        <Tech
          key={tech.name}
          className={stackClasses}
          name={tech.name}
          experience={tech.experience}
          titleClasses={titleClasses}
          showExperience={showExperience}
          experienceLevel={
            <ToolLevel
              className={levelClasses}
              level={tech.level}
              scale={tech.scale}
              bgColor={bgColor}
              color={color}
              height={height}
              width={width}
              type={type}
            />
          }
        />
      ))}
    </div>
  );
};

export default TechStack;

TechStack.defaultProps = {
  showExperience: true
};
