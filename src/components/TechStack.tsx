import React from 'react';
import Technology from './Technology';
import ToolLevel, { LevelTypeUnion } from './ToolLevel';

export type TechData = {
  name: string;
  level?: number;
  scale?: number;
  experience?: number;
};

export type TechStackProps = {
  data: TechData[];
  height: number;
  bgColor: string;
  showExpOnPrint: boolean;
  showLevel?: boolean;
  primaryColor?: string;
  type?: LevelTypeUnion;
  className?: string;
  showExperience: boolean;
};

const TechStack = ({
  data,
  height,
  bgColor,
  primaryColor,
  type,
  className,
  showExpOnPrint,
  showLevel = false,
  showExperience
}: TechStackProps) => {
  return (
    <div
      className={`techstack ${className ?? ''}${
        showExpOnPrint ? 'techstack--no-print-exp' : ''
      }${!showExperience ? 'techstack--no-exp' : ''}`}
    >
      {data.map((tech: TechData) => {
        const { name, experience, level, scale } = tech;
        return (
          <Technology
            key={name}
            name={name}
            experience={experience}
            showExpOnPrint={showExpOnPrint}
            showExperience={showExperience}
            experienceLevel={
              showLevel &&
              level &&
              scale && (
                <ToolLevel
                  className="techstack-level"
                  level={level}
                  scale={scale}
                  bgColor={bgColor}
                  primaryColor={primaryColor}
                  height={height}
                  type={type}
                />
              )
            }
          />
        );
      })}
    </div>
  );
};

export default TechStack;
