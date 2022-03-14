import React from 'react';
import { useTranslation } from '../../../../context/LanguageProvider';
import s from './Stakes.module.scss';
import StakesFilter from './StakesFilter/Filter';
import StakesTable from './StakesTable/StakesTable';

function Stakes() {
  const { t } = useTranslation();

  return (
    <>
      <p className={s.stakes__title}>{ t('Stakes')}</p>
      <StakesFilter />
      <StakesTable />
    </>
  );
}

export default Stakes;
