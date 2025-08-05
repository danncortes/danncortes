import React from 'react';
import { t } from 'i18next';

export type PersonalDataProps = {
  data: ContactInfoModel[];
  titles?: boolean;
  className?: string;
};

export type ContactInfoModel = {
  title: string;
  value: string;
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
  { titles }: { titles: PersonalDataProps['titles'] }
) => {
  const { title, value, label, type, link } = item;

  return (
    <>
      {titles && <h4 className="contanct-item-title">{t(title)}</h4>}
      {
        <WrapperTagItem type={type} value={value} link={link}>
          {link ? t(label!) : t(value)}
        </WrapperTagItem>
      }
    </>
  );
};

export const PersonalData = ({
  data,
  titles,
  className
}: PersonalDataProps) => {
  return (
    <ul className={`personal-data ${className}`}>
      {data.map((item: ContactInfoModel) => (
        <li key={`${item.title}`} className="personal-data__item">
          {PersonalDataItem(item, {
            titles
          })}
        </li>
      ))}
    </ul>
  );
};

export default PersonalData;
