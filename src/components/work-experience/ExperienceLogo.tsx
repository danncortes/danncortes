import React, { ReactElement } from 'react';

export default (props: {
  logo: string;
  companyName: string;
  link: string;
}): ReactElement => {
  const { logo, companyName, link } = props;
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
