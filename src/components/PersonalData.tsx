import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type PersonalDataProps = {
  data: ContactInfoModel[];
  icons: boolean;
  titles?: boolean;
  mode?: 'list' | 'inline';
  className?: string;
};

export type ContactInfoModel = {
  title: string;
  value: string;
  icon: any;
  label?: string;
  link?: boolean;
  type?: string;
};

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
  const className = 'personal-data__content';

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
          {icons && (
            <FontAwesomeIcon className="personal-data__icon" icon={icon} />
          )}
          {link ? label : value}
        </WrapperTagItem>
      }
    </>
  );
};

export const PersonalData = (props: PersonalDataProps) => {
  const { data, mode, titles, icons, className } = props;
  const containerClass = mode === 'inline' ? 'flex flex-wrap' : '';

  return (
    <ul className={`personal-data ${className} ${containerClass}`}>
      {data.map((item: ContactInfoModel) => (
        <li key={`${item.title}`} className="personal-data__item">
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
