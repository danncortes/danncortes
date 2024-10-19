import React, { ReactElement } from 'react';

type Props = {
  logo: string;
  companyName: string;
  link: string;
};

export default ({ logo, companyName, link }: Props): ReactElement => {
  const img = (
    <img
      className="experience__company-logo"
      src={logo}
      alt=""
      aria-label={companyName}
    />
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {img}
    </a>
  ) : (
    img
  );
};
