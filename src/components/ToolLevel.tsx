import React from 'react';
import { ExperienceLevelDotProps, BarExperienceLevelProps } from '../Types';

const ExpecienteLevelDot = ({
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
      bg = color;
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

ExpecienteLevelDot.defaultProps = {
  className: ''
};

const ExpecienteLevelBar = ({
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
          backgroundColor: color
        }}
      ></div>
    </div>
  );
};

ExpecienteLevelBar.defaultProps = {
  className: '',
  type: ''
};

const ExperienceLevel = (props: BarExperienceLevelProps) => {
  const { type } = props;

  if (type === 'bar' || type === 'pill') {
    return <ExpecienteLevelBar {...props} />;
  }
  return <ExpecienteLevelDot {...props} />;
};

export default ExperienceLevel;

ExperienceLevel.defaultProps = {
  type: 'dots'
};
