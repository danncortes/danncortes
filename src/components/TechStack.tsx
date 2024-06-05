import React from 'react';
import Technology from './Technology';
import ToolLevel, { LevelTypeUnion } from './ToolLevel';

export type TechData = {
  name: string;
  level: number;
  scale: number;
  experience: number;
};

export type TechStackProps = {
  data: TechData[];
  height: number;
  bgColor: string;
  showExperience: boolean;
  showLevel: boolean;
  primaryColor?: string;
  type?: LevelTypeUnion;
  className?: string;
};

const TechStack = ({
  data,
  height,
  bgColor,
  primaryColor,
  type,
  className,
  showExperience,
  showLevel
}: TechStackProps) => {
  return (
    <div className={`techstack ${className ?? ''}`}>
      {data.map((tech: TechData) => (
        <Technology
          key={tech.name}
          name={tech.name}
          experience={tech.experience}
          showExperience={showExperience}
          experienceLevel={
            showLevel && (
              <ToolLevel
                className="techstack-level"
                level={tech.level}
                scale={tech.scale}
                bgColor={bgColor}
                primaryColor={primaryColor}
                height={height}
                type={type}
              />
            )
          }
        />
      ))}
    </div>
  );
};

export default TechStack;

TechStack.defaultProps = {
  showExperience: true,
  showLevel: false
};
