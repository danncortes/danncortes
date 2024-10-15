import React from 'react';

const ComponentTemplate = (props: {
  className?: string;
  title?: string;
  children: React.ReactNode;
}) => {
  const { title, children, className } = props;

  return (
    <div className={`component-template ${className ?? ''}`}>
      {title && <h3 className={`component-template__title`}>{title}</h3>}
      {children}
    </div>
  );
};

export default ComponentTemplate;
