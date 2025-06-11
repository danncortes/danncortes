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

export type ToolsProps = {
  data: ToolsAndSkillsData[];
  height: number;
  bgColor: string;
  showLevel?: boolean;
  primaryColor?: string;
  type?: LevelTypeUnion;
  className?: string;
  profileType: ProfileTypes;
};

const Tools = ({
  data,
  height,
  bgColor,
  primaryColor,
  type,
  className,
  showLevel = false,
  profileType
}: ToolsProps) => {
  return (
    <div
      className={`tools ${
        className ?? ''
      } grid gap-3 grid-cols-5 md:grid-cols-1 md:gap-1 lg:gap-3 lg:grid-cols-2 print:grid-cols-1 print:gap-1`}
    >
      {data.map((tech: ToolsAndSkillsData) => {
        const { name, level, scale, profileTypes } = tech;
        if (profileTypes.includes(profileType)) {
          return (
            <Technology
              key={name}
              name={name}
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
        }
      })}
    </div>
  );
};

export default Tools;
