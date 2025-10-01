import React from 'react';
import { formatDate } from '../utils';
import { useTranslation } from 'react-i18next';

export type CourseData = {
  name: string;
  date: string;
  note: string;
  site: string;
  url: string;
  duration?: number;
  show?: boolean;
  where?: string;
};

export type CourseProps = {
  course: CourseData;
  showYear?: boolean;
};

const Course = ({ course, showYear = true }: CourseProps) => {
  const { t } = useTranslation();
  const { name, date, site, show = true, url, duration, where } = course;
  return (
    <>
      {show && (
        <div className="course">
          <p className="course__name mb-1">{name}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="course__site text-xs font-normal text-gray-600 mb-1"
          >
            {showYear && formatDate(date, { full: false })} - {site}
          </a>
          <p className="text-xs font-normal text-gray-600">
            {duration && `${duration} ${t('hours')}`} {where}
          </p>
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
