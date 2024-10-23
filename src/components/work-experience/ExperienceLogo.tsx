import React, { ReactElement, useEffect, useState } from 'react';
import { loadImage } from '../../utils';

type Props = {
  logo: string;
  companyName: string;
  link: string;
};

export default ({ logo, companyName, link }: Props): ReactElement => {
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
    const [name, extention] = logo.split('.');
    setImagesSrc(name, extention);
  }, [logo]);

  const setImagesSrc = async (name: string, extension: string) => {
    let srcSetValue = '';

    for (const config of imagesConfig) {
      const { size, dpr, isDefault } = config;
      const loadedImage = (await loadImage(`${name}-${size}.${extension}`))
        .default;

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
        alt={companyName}
        aria-label={companyName}
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
