import { useSelector } from 'react-redux';
import React from 'react';
import classnames from 'classnames';
import Tab from './Tab/Tab';
import s from './TabBar.module.scss';

const TabBar = () => {
  const partners = useSelector(state => state.tabReducers.partners);
  const activePartner = partners.find(item => item.partner === `${localStorage.getItem('partner_name')}`);

  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      {activePartner && activePartner.tabs.map((item, index) => (
        <>
          <Tab item={item} index={index} />
        </>

      ))}
    </div>
  );
};

export default TabBar;
