/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import classnames from 'classnames';
import { NavLink, useRouteMatch } from 'react-router-dom';
import s from './CustomMenu.module.scss';
import { playerInfoMenu } from '../constants';

const CustomMenu = ({
  title, infoObject = playerInfoMenu, children, subtitle,
}) => (
  <div className={s.custom_menu_container} >
    <div className={s.custom_menu_titles}>{title}</div>
    <div className={s.custom_menu}>{children}</div>
  </div>);

CustomMenu.HeaderMenu = ({
  items, setActiveRouteIndex, activeRouteIndex,
}) => {
  const { url } = useRouteMatch();

  return (
    <div className={s.header_menu} >
      {
     items.map((item, index) => (
       <NavLink
         to={url + item.path + item.childs[0].path}
         key={`headerMenu_${index}`}

       >
         <div
           className={classnames(s.header_menu_item,
             { [s.hdmi_active]: activeRouteIndex === index })}
           onClick={() => { setActiveRouteIndex(index); }}>

           {item.name}
         </div>
       </NavLink>))
      }
    </div>
  );
};

CustomMenu.SubMenu = ({ items }) => {
  const { url } = useRouteMatch();
  return (
    <div className={s.submenu_container}>
      {
      items ? items.childs.map((item, index) => (
        <NavLink
          to={url + items.path + item.path}
          className={classnames(s.submenu_item)}
          activeClassName={s.si_active}
          key={`subMenu_${index}`}
        >
          {item.name}
        </NavLink>)) : null
    }
    </div>);
};

CustomMenu.Content = ({ children }) => (
  <div className={s.submenu_content} key='custom_menu_content'>
    {children}
  </div>
);

export default CustomMenu;
