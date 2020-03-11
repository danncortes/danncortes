import React from 'react';
import PropTypes from 'prop-types';

const DotExpecienteLevel = ({
  scale,
  level,
  height,
  color,
  bgColor,
  className
}) => {
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

DotExpecienteLevel.propTypes = {
  scale: PropTypes.number,
  level: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string
};

const BarExpecienteLevel = ({
  scale,
  level,
  height,
  width,
  color,
  bgColor,
  className,
  type
}) => {
  const widthLevel = (level * 100) / scale
  return (
    <div
      className={`flex ${className} ${(type === 'pill') && 'rounded-full'}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor
      }}
    >
      <div
        className={(type === 'pill') && 'rounded-full'}
        style={{
          width: `${widthLevel}%`,
          height: `${height}px`,
          backgroundColor: color
        }}></div>
    </div>
  )
};

BarExpecienteLevel.propTypes = {
  scale: PropTypes.number,
  level: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  type: PropTypes.string
};


const ExperienceLevel = (props) => {
  const { type } = props;

  if (type === 'bar' || type === 'pill') {
    return <BarExpecienteLevel {...props} />
  }
  return <DotExpecienteLevel {...props} />;
};

export default ExperienceLevel;

ExperienceLevel.propTypes = {
  type: (props, propName) => {
    if (PropTypes.string && ['pill', 'bar'].includes(props[propName])) {
      return null;
    }
    throw Error('Mode Prop not Valid');
  }
}