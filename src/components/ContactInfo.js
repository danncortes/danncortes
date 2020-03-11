import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faEnvelope, faMap, faMapMarkerAlt, faPhone);

const renderIcon = (icons, icon) => {
  if (icons) {
    if (icon === 'github' || icon === 'linkedin') {
      return <FontAwesomeIcon className="mr-1" icon={['fab', icon]} />;
    }
    if (icon === 'envelope' || icon === 'map-marker-alt' || icon === 'phone') {
      return <FontAwesomeIcon className="mr-1" icon={icon} />;
    }
    return '';
  }
  return '';
};

const ContactInfoItem = (item, props) => {
  const {
    title, value, label, type, icon
  } = item;
  const { titles, icons } = props;

  const contactElement = () => {
    let element = (
      <p className="font-medium break-all">
        {renderIcon(icons, icon)}
        {value}
      </p>
    );
    if (type === 'link') {
      element = (
        <a
          className="font-medium text-blue-800 break-all"
          href={value}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderIcon(icons, icon)}
          {label}
        </a>
      );
    } else if (type === 'map') {
      element = (
        <a
          className="font-medium text-blue-800 break-all"
          href={`https://www.google.com.co/maps/search/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderIcon(icons, icon)}
          {label}
        </a>
      );
    } else if (type === 'email') {
      element = (
        <a
          href={`mailto:${value}`}
          className="font-medium text-blue-800 break-all"
        >
          {renderIcon(icons, icon)}
          {label}
        </a>
      );
    }
    return element;
  };

  return (
    <>
      {titles && <h4 className="contanct-item-title">{title}</h4>}
      {contactElement()}
    </>
  );
};

ContactInfoItem.propTypes = {
  titles: PropTypes.bool,
  icons: PropTypes.bool
};

export const ContactInfo = (props) => {
  const {
    info, mode, titles, icons, className
  } = props;
  const itemClass = mode === 'list' ? 'mb-4' : 'mb-1 mr-4';
  const containerClass = mode === 'inline' ? 'flex flex-wrap lg:w-5/6' : '';

  return (
    <ul className={`${className} ${containerClass}`}>
      {info.map((item) => (
        <li key={`${item.title}`} className={`${itemClass}`}>
          {ContactInfoItem(item, {
            mode,
            titles,
            icons
          })}
        </li>
      ))}
    </ul>
  );
};

ContactInfo.defaultProps = {
  titles: true,
  icons: false,
  mode: 'list'
};

ContactInfo.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string,
      icon: PropTypes.string
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

export default ContactInfo;
