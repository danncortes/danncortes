import React from 'react';

export type TagProps = {
  tags: string[];
};

const Tags = ({ tags }: TagProps) => {
  return (
    <ul className="tag-list flex flex-wrap">
      {tags.length
        ? tags.map((tag, i) => (
            <li className="tag-list__tag" key={i + tag}>
              {tag}
            </li>
          ))
        : ''}
    </ul>
  );
};

export default Tags;
