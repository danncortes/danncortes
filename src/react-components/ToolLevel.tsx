import React from 'react';

export type LevelTypeUnion = 'pill' | 'bar' | 'dots';

export interface ExperienceLevelDotProps {
  className?: string;
  scale: number;
  level: number;
  height: number;
  bgColor: string;
  primaryColor?: string;
}

export interface BarExperienceLevelProps extends ExperienceLevelDotProps {
  type?: LevelTypeUnion;
  width?: number;
}

const ExperienceLevelDot = ({
  className,
  scale,
  level,
  height,
  primaryColor,
  bgColor
}: ExperienceLevelDotProps) => {
  const dots = [];

  for (let i = 0; i < scale; i++) {
    let backgroundColor = primaryColor ?? 'var(--primary-color)';

    if (i > level) {
      backgroundColor = bgColor;
    }

    dots.push(
      <div
        key={i}
        className="tool-level__dot rounded-full shrink-0"
        style={{
          width: `${height}px`,
          height: `${height}px`,
          backgroundColor
        }}
      />
    );
  }

  return <div className={`flex ${className}`}>{dots}</div>;
};

const ExperienceLevelBar = ({
  className,
  scale,
  level,
  height,
  width,
  primaryColor,
  bgColor,
  type
}: BarExperienceLevelProps) => {
  const widthLevel = (level * 100) / scale;
  const widthContainer: string = width ? `${width}px` : '';

  return (
    <div
      className={`flex ${type === 'pill' && 'rounded-full'} ${className}`}
      style={{
        width: widthContainer,
        height: `${height}px`,
        backgroundColor: bgColor
      }}
    >
      <div
        className={type === 'pill' ? 'rounded-full' : ''}
        style={{
          width: `${widthLevel}%`,
          height: `${height}px`,
          backgroundColor: primaryColor ?? 'var(--primary-color)'
        }}
      ></div>
    </div>
  );
};

const ExperienceLevel = (props: BarExperienceLevelProps) => {
  const { type } = props;

  if (type === 'bar' || type === 'pill') {
    return <ExperienceLevelBar {...props} />;
  }
  return <ExperienceLevelDot {...props} />;
};

export default ExperienceLevel;
