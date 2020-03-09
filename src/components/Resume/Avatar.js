import React from 'react'
import PropTypes from 'prop-types';
import profileImg from '../../assets/profile-pic-md.png';

export const Avatar = (props) => {
  
  const {mode} = props
  let imgModeClass = ''

  switch (mode) {
    case 'circle':
      imgModeClass = 'rounded-full'
      break
    case 'rounded':
      imgModeClass = 'rounded-md'
      break
    default:
      imgModeClass = ''
  }

  return (
    <div className={`avatar ${props.className}`}>
      <img
        className={imgModeClass}
        src={profileImg}
        alt="Profile Pic"
      />
    </div>
  )
}

Avatar.propTypes = {
  mode: (props, propName, componentName) => {
    if (PropTypes.string && ['circle', 'rounded'].includes(props[propName])) {
      return null
    } else {
      throw Error('Mode Prop not Valid')
    }
  },
  className: PropTypes.string
}

export default Avatar