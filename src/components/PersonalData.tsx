import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { t } from 'i18next';

export type PersonalDataProps = {
  data: ContactInfoModel[];
  icons?: boolean;
  titles?: boolean;
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

type Props = {
  type: ContactInfoModel['type'];
  value: ContactInfoModel['value'];
  link: ContactInfoModel['link'];
  children: React.ReactNode;
};

const WrapperTagItem = ({ type, value, link, children }: Props) => {
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
      {titles && <h4 className="contanct-item-title">{t(title)}</h4>}
      {
        <WrapperTagItem type={type} value={value} link={link}>
          {icons && (
            <FontAwesomeIcon className="personal-data__icon" icon={icon} />
          )}
          {link ? t(label!) : t(value)}
        </WrapperTagItem>
      }
    </>
  );
};

export const PersonalData = ({
  data,
  titles,
  icons = false,
  className
}: PersonalDataProps) => {
  return (
    <ul className={`personal-data ${className}`}>
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

export default PersonalData;
