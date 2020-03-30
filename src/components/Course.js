import React from 'react';
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

const Course = ({ course, className }) => {
  const { name, date, site } = course
  return (
    <div className={className}>
      <p className="text-blue-700">{name}</p>
      <p className="text-xs font-medium">{dayjs(date).format('YYYY')}</p>
      <a
        href={site}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium hover:underline">
        {site}
      </a>
    </div>
  )
}

export default Course

Course.propTypes = {
  course: PropTypes.object,
  className: PropTypes.string
}
