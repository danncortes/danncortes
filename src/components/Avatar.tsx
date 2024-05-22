import PropTypes from 'prop-types';
import React from 'react';
import profileImg from '../assets/profile-pic.png';

type Props = {
  mode: string;
  className: string;
};

export const Avatar = (props: Props) => {
  const { mode } = props;
  let imgModeClass = '';

  switch (mode) {
    case 'circle':
      imgModeClass = 'rounded-full';
      break;
    case 'rounded':
      imgModeClass = 'rounded-md';
      break;
    default:
      imgModeClass = '';
  }

  return (
    profileImg && (
      <div className={`avatar ${props.className}`}>
        <img className={imgModeClass} src={profileImg} alt="Profile Pic" />
      </div>
    )
  );
};

Avatar.propTypes = {
  mode: (props: Props, propName: keyof Props) => {
    if (['circle', 'rounded'].includes(props['mode'])) {
      return null;
    }
    throw Error('Mode Prop not Valid');
  },
  className: PropTypes.string
};

export default Avatar;
