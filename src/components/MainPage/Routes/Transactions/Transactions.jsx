import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from '../../../../context/LanguageProvider';
import s from '../Player/CustomMenu/CustomMenu.module.scss';
import Component from './Component/Component';
import { filtersInitials } from './helpers/constants';

function Transactions() {
  const { t } = useTranslation();
  const { currentProject } = useSelector(states => states.userInfo);
  const [ openedPage, setOpenedPage ] = useState('balance');
  const [ filterData, setFilterData ] = useState(filtersInitials(openedPage, currentProject.name));

  const openPage = (page) => {
    setOpenedPage(page);
    setFilterData(filtersInitials(page, currentProject.name));
  };
  return (
    <>
      <div className={s.header_menu}>
        <div
          onClick={() => openPage('balance')}
          className={
            openedPage === 'balance' ? `${s.header_menu_item} ${s.hdmi_active_colored}`
              : s.header_menu_item}>
          {t('Balance')}
        </div>
        <div
          onClick={() => openPage('units')}
          className={openedPage === 'units' ? `${s.header_menu_item} ${s.hdmi_active_colored}`
            : s.header_menu_item}>
          {t('Units')}
        </div>
      </div>
      <Component
        type={openedPage}
        filterData={filterData}
        setFilterData={setFilterData}
        currentProject={currentProject.name}
      />
    </>
  );
}

export default Transactions;
