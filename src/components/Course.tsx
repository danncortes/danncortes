import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { CourseProps } from '../Types';

const Course = ({ course, className }: CourseProps) => {
  const { name, date, site } = course;
  return (
    <div className={className + ' font-medium'}>
      <p className="text-sky-700">{name}</p>
      <p className="text-xs">{dayjs(date).format('YYYY')}</p>
      <a
        href={site}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs hover:underline"
      >
        {site}
      </a>
    </div>
  );
};

export default Course;

Course.defaultProps = {
  className: ''
};
