import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WrapperTagItem = ({ type, value, link, children }) => {
  if (link) {
    const target = (type === 'email') ? null : '_blank'
    const rel = (type === 'email') ? null : 'noopener noreferrer'
    return (
      <a
        className="font-medium text-blue-800 break-all"
        href={value}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }
  return <p>{children}</p>
}

WrapperTagItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  link: PropTypes.bool,
  children: PropTypes.array
}

const PersonalDataItem = (item, { titles, icons }) => {
  const {
    title, value, label, type, icon, link
  } = item;

  return (
    <>
      {titles && <h4 className="contanct-item-title">{title}</h4>}
      {(
        <WrapperTagItem type={type} value={value} link={link}>
          {icons && <FontAwesomeIcon className="mr-1" icon={icon} />}
          {link ? label : value}
        </WrapperTagItem>
      )}
    </>
  );
};

PersonalDataItem.propTypes = {
  titles: PropTypes.bool,
  icons: PropTypes.bool
};

export const PersonalData = (props) => {
  const {
    data, mode, titles, icons, className
  } = props;
  const itemClass = mode === 'list' ? 'mb-4' : 'mb-1 mr-4';
  const containerClass = mode === 'inline' ? 'flex flex-wrap lg:w-5/6' : '';

  return (
    <ul className={`${className} ${containerClass}`}>
      {data.map((item) => (
        <li key={`${item.title}`} className={`${itemClass}`}>
          {PersonalDataItem(item, {
            titles,
            icons
          })}
        </li>
      ))}
    </ul>
  );
};

PersonalData.defaultProps = {
  titles: true,
  icons: false,
  mode: 'list'
};

PersonalData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string,
      icon: PropTypes.array
    })
  ),
  titles: PropTypes.bool,
  mode: (props, propName) => {
    if (PropTypes.string && ['list', 'inline'].includes(props[propName])) {
      return null;
    }
    throw Error('Mode Prop not Valid');
  },
  icons: PropTypes.bool,
  className: PropTypes.string
};

export default PersonalData;
