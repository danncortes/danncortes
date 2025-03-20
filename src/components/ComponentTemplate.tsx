import React from 'react';

type Props = {
  className?: string;
  title?: string;
  children: React.ReactNode;
  marginBottom?: number;
};

const ComponentTemplate = ({
  title,
  children,
  className,
  marginBottom
}: Props) => {
  const marginBottomProp = marginBottom ? `${marginBottom}rem` : '';
  const marginBottomStyle = marginBottomProp
    ? { marginBottom: marginBottomProp }
    : {};
  return (
    <div
      className={`component-template ${className ?? ''}`}
      style={marginBottomStyle}
    >
      {title && <h3 className={`component-template__title`}>{title}</h3>}
      {children}
    </div>
  );
};

export default ComponentTemplate;
