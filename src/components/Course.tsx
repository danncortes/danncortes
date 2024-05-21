import React from 'react';
import dayjs from 'dayjs';

export type CourseData = {
  name: string;
  date: number;
  note: string;
  site: string;
};

export type CourseProps = {
  course: CourseData;
};

const Course = ({ course }: CourseProps) => {
  const { name, date, site } = course;
  return (
    <div className="course">
      <p className="course__name">{name}</p>
      <p className="course__date">{dayjs(date).format('YYYY')}</p>
      <a
        href={site}
        target="_blank"
        rel="noopener noreferrer"
        className="course__site"
      >
        {site}
      </a>
    </div>
  );
};

export default Course;
