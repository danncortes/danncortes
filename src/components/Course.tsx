import React from 'react';
import dayjs from 'dayjs';

export type CourseData = {
  name: string;
  date: number;
  note: string;
  site: string;
  show?: boolean;
};

export type CourseProps = {
  course: CourseData;
  showYear?: boolean;
};

const Course = ({ course, showYear = false }: CourseProps) => {
  const { name, date, site, show = true } = course;
  return (
    <>
      {show && (
        <div className="course">
          <p className="course__name">{name}</p>
          {showYear && (
            <p className="course__date">{dayjs(date).format('YYYY')}</p>
          )}
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="course__site"
          >
            {site.split('.')[1] ? site.split('.')[1] : ''}
          </a>
        </div>
      )}
      {/* Use the following code snippet to render spaces for the page break on print: */}
      {name === '' && (
        <>
          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>
          <div className="break-page"></div>
        </>
      )}
    </>
  );
};

export default Course;
