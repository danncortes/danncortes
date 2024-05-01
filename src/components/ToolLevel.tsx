import React from 'react';
import { ExperienceLevelDotProps, BarExperienceLevelProps } from '../Types';

const ExperienceLevelDot = ({
  scale,
  level,
  height,
  color,
  bgColor,
  className
}: ExperienceLevelDotProps) => {
  const dots = [];

  for (let i = 0; i < scale; i++) {
    let bg = bgColor;

    if (i < level) {
      bg = color ?? 'var(--primary-color)';
    }

    dots.push(
      <div
        key={i}
        className="rounded-full mr-1 border-solid"
        style={{
          width: `${height}px`,
          height: `${height}px`,
          backgroundColor: bg
        }}
      />
    );
  }

  return <div className={`flex ${className}`}>{dots}</div>;
};

ExperienceLevelDot.defaultProps = {
  className: ''
};

const ExperienceLevelBar = ({
  scale,
  level,
  height,
  width,
  color,
  bgColor,
  className,
  type
}: BarExperienceLevelProps) => {
  const widthLevel = (level * 100) / scale;
  const widthContainer: string = width ? `${width}px` : '';

  return (
    <div
      className={`flex ${className} ${type === 'pill' && 'rounded-full'}`}
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
          backgroundColor: color ?? 'var(--primary-color)'
        }}
      ></div>
    </div>
  );
};

ExperienceLevelBar.defaultProps = {
  className: '',
  type: ''
};

const ExperienceLevel = (props: BarExperienceLevelProps) => {
  const { type } = props;

  if (type === 'bar' || type === 'pill') {
    return <ExperienceLevelBar {...props} />;
  }
  return <ExperienceLevelDot {...props} />;
};

export default ExperienceLevel;

ExperienceLevel.defaultProps = {
  type: 'dots'
};
