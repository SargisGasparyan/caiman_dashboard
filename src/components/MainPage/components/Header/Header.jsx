import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.scss';
import { toggleSidebar } from '../../../../redux/ducks/configsDuck';
import UserDropdown from './components/UserDropdown';
import PartnersDropdown from './components/PartnersDropdown';
import LanguageDropdown from './components/LanguageDropdwon';

function Header() {
  const dispatch = useDispatch();
  const { isSidebarActive } = useSelector(state => state.configs);
  const [ dropdownsInfo, setDropdownsInfo ] = useState({
    user: false,
    partners: false,
    language: false,
  });

  const toggleLeftMenu = () => {
    dispatch(toggleSidebar());
  };

  const dropdownHandler = (name) => {
    setDropdownsInfo(prev => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <div className={classnames(s.root, 'col-*-*')}>
      <div className={s.leftSide}>
        <Link
          to={'/'}>
          <div className={classnames(s.logoContainer, 'transition', {
            [s.logoLink]: isSidebarActive,
            [s.logoLinkMin]: !isSidebarActive,
          })} />
        </Link>
        <div
          className={classnames(s.burgerImg, 'transition', {
            [s.burgerActive]: !isSidebarActive,
          })}
          onClick={toggleLeftMenu} />
      </div>
      <div className={classnames(s.rightSide)}>
        <PartnersDropdown
          dropdownsInfo={dropdownsInfo}
          setDropdownsInfo={setDropdownsInfo}
          dropdownHandler={dropdownHandler} />
        <div className={classnames(s.headerItem, 'c-d')}>
          <div className={classnames(s.iconWrapper, s.clockIcon, 'mr-10')} />
          <Clock
            format={'HH:mm:ss'}
            style={{ fontSize: '1.1rem' }}
            ticking />
        </div>
        <UserDropdown
          dropdownsInfo={dropdownsInfo}
          setDropdownsInfo={setDropdownsInfo}
          dropdownHandler={dropdownHandler} />
        <LanguageDropdown
          dropdownsInfo={dropdownsInfo}
          setDropdownsInfo={setDropdownsInfo}
          dropdownHandler={dropdownHandler} />
        <div className={classnames(s.iconWrapper, s.headPhone)} />
      </div>
    </div>

  );
}

export default Header;
