import React from 'react'
import PropTypes from 'prop-types'

const Tags = ({ tags, className, itemClass }) => {
  return (
    <ul className={className}>
      {tags.map((tag, i) => (
        <li className={itemClass} key={i + tag}>{tag}</li>
      ))}
    </ul>
  )
}

export default Tags

Tags.propTypes = {
  tags: PropTypes.array,
  itemClass: PropTypes.string,
  className: PropTypes.string
}