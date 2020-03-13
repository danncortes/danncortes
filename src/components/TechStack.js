import React from 'react';
import PropTypes from 'prop-types';
import Tech from './Tech';
import ToolLevel from './ToolLevel';

const TechStack = ({
  data,
  className,
  height,
  width,
  titleClasses,
  type,
  showExperience,
  bgColor,
  color,
  levelClasses
}) => {

  return (
    <ul className={className}>
      {data.map((tech) => (
        <Tech
          key={tech.name}
          className="mb-3"
          name={tech.name}
          experience={tech.experience}
          titleClasses={titleClasses}
          showExperience={showExperience}
          experienceLevel={(
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
          )}
        />
      ))}
    </ul>
  );
};

export default TechStack;

TechStack.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  titleClasses: PropTypes.string,
  type: PropTypes.string,
  showExperience: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  levelClasses: PropTypes.string
};

TechStack.defaultProps = {
  showExperience: true
};
