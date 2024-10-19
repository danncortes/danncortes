import React from 'react';

type Props = {
  className?: string;
  title?: string;
  children: React.ReactNode;
};

const ComponentTemplate = ({ title, children, className }: Props) => {
  return (
    <div className={`component-template ${className ?? ''}`}>
      {title && <h3 className={`component-template__title`}>{title}</h3>}
      {children}
    </div>
  );
};

export default ComponentTemplate;
