import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  isIntroArray: boolean;
  translationKey: string;
};

export default ({ isIntroArray, translationKey }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      {isIntroArray ? (
        <ul className="experience__job-profile">
          {Object.values(
            t(translationKey, {
              returnObjects: true
            })
          ).map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      ) : (
        <p className="experience__job-profile">{t(translationKey)}</p>
      )}
    </>
  );
};
