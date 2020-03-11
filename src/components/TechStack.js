import React from 'react';
import PropTypes from 'prop-types';
import Tech from './Tech';
import ExperienceLevel from './ExperienceLevel';

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
  const { title, data: stacks } = data;

  return (
    <div className={className}>
      <h3 className="color-primary mb-3 font-semibold">{title}</h3>
      <ul>
        {stacks.map((tech) => (
          <Tech
            key={tech.name}
            className="mb-3"
            name={tech.name}
            experience={tech.experience}
            titleClasses={titleClasses}
            showExperience={showExperience}
            experienceLevel={(
              <ExperienceLevel
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
    </div>
  );
};

export default TechStack;

TechStack.propTypes = {
  data: PropTypes.object,
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
