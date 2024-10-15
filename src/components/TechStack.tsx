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
  showExpOnPrint: boolean;
  showLevel?: boolean;
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
  showExpOnPrint,
  showLevel = false
}: TechStackProps) => {
  return (
    <div
      className={`techstack ${className ?? ''} ${
        showExpOnPrint || 'techstack--no-print-exp'
      }`}
    >
      {data.map((tech: TechData) => (
        <Technology
          key={tech.name}
          name={tech.name}
          experience={tech.experience}
          showExpOnPrint={showExpOnPrint}
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
