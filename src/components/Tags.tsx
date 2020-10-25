import React from 'react';
import { TagProps } from '../Types';

const Tags = ({ tags, className, itemClass }: TagProps) => {
  return (
    <ul className={className}>
      {tags.length
        ? tags.map((tag, i) => (
            <li className={itemClass} key={i + tag}>
              {tag}
            </li>
          ))
        : ''}
    </ul>
  );
};

Tags.defaultProps = {
  className: '',
  itemClass: ''
};

export default Tags;
