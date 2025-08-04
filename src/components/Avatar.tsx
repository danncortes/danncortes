import PropTypes from 'prop-types';
import React from 'react';
import profileImgDefault from '../../public/images/profile-picture-180.avif';
import profileImgMobile from '../../public/images/profile-picture-360.avif';

type Props = {
  mode: string;
  className: string;
};

export const Avatar = ({ mode, className }: Props) => {
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
    <div className={`avatar ${className}`}>
      <link
        rel="preload"
        href={profileImgDefault.src}
        as="image"
        fetchPriority="high"
      />
      <img
        width="180"
        height="180"
        className={imgModeClass}
        src={profileImgDefault.src}
        srcSet={`${profileImgDefault.src} 1x, ${profileImgMobile.src} 2x`}
        alt="Profile Picture"
      />
    </div>
  );
};

Avatar.propTypes = {
  mode: (props: Props) => {
    if (['circle', 'rounded'].includes(props['mode'])) {
      return null;
    }
    throw Error('Mode Prop not Valid');
  },
  className: PropTypes.string
};

export default Avatar;
