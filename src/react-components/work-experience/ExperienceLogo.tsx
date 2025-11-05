import React, { ReactElement, useEffect, useState } from 'react';
import { WorkExpData } from './WorkExperience';

type Props = {
  logo?: Exclude<WorkExpData['logo'], null>;
  name: string;
  link: string;
};

export default ({ logo, name, link }: Props): ReactElement => {
  const { loadingMode = 'lazy' } = logo || {};
  const imagesConfig = [
    {
      size: 130,
      dpr: 1,
      isDefault: true
    },
    {
      size: 260,
      dpr: 2
    }
  ];

  const [defaultSrc, setDefaultSrc] = useState('');
  const [srcSet, setSrcSet] = useState('');

  useEffect(() => {
    if (!logo) return;
    const [name, extention] = logo.name.split('.');
    setImagesSrc(name, extention);
  }, [logo]);

  const setImagesSrc = async (name: string, extension: string) => {
    let srcSetValue = '';

    for (const config of imagesConfig) {
      const { size, dpr, isDefault } = config;
      const loadedImage = (
        await import(`../../../public/${name}-${size}.${extension}`)
      ).default;

      if (isDefault) {
        setDefaultSrc(loadedImage);
      }

      srcSetValue += `${loadedImage} ${dpr}x, `;
    }

    setSrcSet(srcSetValue.slice(0, -2));
  };

  const img = (
    <>
      <img
        width="130"
        className="experience__company-logo"
        src={defaultSrc}
        srcSet={srcSet}
        alt={name}
        aria-label={name}
        loading={loadingMode as 'lazy' | 'eager'}
      />
    </>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {img}
    </a>
  ) : (
    img
  );
};
