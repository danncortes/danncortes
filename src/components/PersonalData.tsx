import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PersonalDataProps, ContactInfoModel } from '../Types';

const WrapperTagItem = ({
  type,
  value,
  link,
  children
}: {
  type: ContactInfoModel['type'];
  value: ContactInfoModel['value'];
  link: ContactInfoModel['link'];
  children: React.ReactNode;
}) => {
  const className = 'font-medium text-blue-700 break-all';
  if (link) {
    const target = type === 'email' ? '' : '_blank';
    const rel = type === 'email' ? '' : 'noopener noreferrer';
    return (
      <a className={className} href={value} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return <p className={className}>{children}</p>;
};

const PersonalDataItem = (
  item: ContactInfoModel,
  { titles, icons }: { titles: PersonalDataProps['titles']; icons: boolean }
) => {
  const { title, value, label, type, icon, link } = item;

  return (
    <>
      {titles && <h4 className="contanct-item-title">{title}</h4>}
      {
        <WrapperTagItem type={type} value={value} link={link}>
          {icons && <FontAwesomeIcon className="mr-1" icon={icon} />}
          {link ? label : value}
        </WrapperTagItem>
      }
    </>
  );
};

export const PersonalData = (props: PersonalDataProps) => {
  const { data, mode, titles, icons, className } = props;
  const itemClass = mode === 'list' ? 'mb-4' : 'mb-1 mr-4';
  const containerClass = mode === 'inline' ? 'flex flex-wrap lg:w-5/6' : '';

  return (
    <ul className={`${className} ${containerClass}`}>
      {data.map((item: ContactInfoModel) => (
        <li key={`${item.title}`} className={`${itemClass}`}>
          {PersonalDataItem(item, {
            titles,
            icons
          })}
        </li>
      ))}
    </ul>
  );
};

PersonalData.defaultProps = {
  titles: true,
  icons: false,
  mode: 'list'
};

export default PersonalData;
