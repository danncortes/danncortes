import React from 'react';
import Technology from './Technology';
import ToolLevel, { LevelTypeUnion } from './ToolLevel';
import { ProfileTypes } from '../types';

export type ToolsAndSkillsData = {
  name: string;
  level?: number;
  scale?: number;
  profileTypes: Array<ProfileTypes>;
};

export type ToolsAndSkillsProps = {
  data: ToolsAndSkillsData[];
  height: number;
  bgColor: string;
  showExpOnPrint: boolean;
  showLevel?: boolean;
  primaryColor?: string;
  type?: LevelTypeUnion;
  className?: string;
  showExperience: boolean;
};

const ToolsAndSkills = ({
  data,
  height,
  bgColor,
  primaryColor,
  type,
  className,
  showExpOnPrint,
  showLevel = false,
  showExperience
}: ToolsAndSkillsProps) => {
  return (
    <div
      className={`techstack ${className ?? ''}${
        showExpOnPrint ? 'techstack--no-print-exp' : ''
      }${!showExperience ? 'techstack--no-exp' : ''}`}
    >
      {data.map((tech: ToolsAndSkillsData) => {
        const { name, level, scale } = tech;
        return (
          <Technology
            key={name}
            name={name}
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

export default ToolsAndSkills;
