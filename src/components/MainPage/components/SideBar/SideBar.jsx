import { NavLink, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTabAction, activeTabAction } from '../../../../redux/ducks/controlTab';
import s from './SideBar.module.scss';

const SideBar = ({ validRoutes }) => {
  const dispatch = useDispatch();
  const partners = useSelector(state => state.tabReducers.partners);

  const { pathname } = useLocation();
  const { isSidebarActive } = useSelector(state => state.configs);

  const [ activeDropdown, setActiveDropdown ] = useState(null);

  const paths = useMemo(() => pathname.split('/'), [ pathname ]);

  return (
    <div className={classnames(s.sidebar, 'transition', {
      [s.sidebarActive]: isSidebarActive,
    })}>
      {validRoutes.map((route, index) => {
        if (route.hidden) {
          return null;
        }
        if (!route.multi) {
          return <NavLink
            key={index}
            className={s.menuItem}
            activeClassName={s.activeItem}
            onClick={() => {
              const partnerTabs = partners.find(partner => partner.partner === `${localStorage.getItem('partner_name')}`).tabs;
              setActiveDropdown(null);
              partnerTabs.includes(route.name) === false && dispatch(addTabAction({
                partner: `${localStorage.getItem('partner_name')}`,
                text: route.name,
              }));
              dispatch(activeTabAction({
                partner: `${localStorage.getItem('partner_name')}`,
                tabName: route.name,
              }));
            }}
            to={route.path}
      >
            <div className={s.menuInfo}>
              <img src={route.icon} className={s.icon} alt='' />
              <div>
                {route.name}
              </div>
            </div>
          </NavLink>;
        }
        return route.childs.length ? (
          <div
            key={index}
            onMouseEnter={() => setActiveDropdown(route.path)}
            onMouseLeave={() => setActiveDropdown(null)}
            className={s.dropdown}>
            <div
              key={index}
              className={classnames(s.menuItem, {
                [s.activeItem]: paths[1] === route.path.slice(1) || activeDropdown === route.path,
              })}>
              <div className={s.menuInfo}>
                <img src={route.icon} className={s.icon} alt='' />
                <div>{route.name}</div>
              </div>
              {isSidebarActive && <div className={classnames(s.arrowDown, s.toRight)} />}
            </div>
            {activeDropdown === route.path && (
              <div className={s.multiItems}>
                {route.childs.map((child, idx) => (
                  <NavLink
                    key={idx}
                    className={s.dropdownItem}
                    activeClassName={s.activeChild}
                    onClick={() => { setActiveDropdown(null); }}
                    to={route.path + child.path}>
                    {child.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default SideBar;
