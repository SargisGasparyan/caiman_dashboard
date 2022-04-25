import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import s from './Tab.module.scss';
import { activeTabAction, removeTab } from '../../../../../redux/ducks/controlTab';

const Tab = ({ item, index }) => {
  const currentParnerLocal = `${localStorage.getItem('partner_name')}`;
  const dispatch = useDispatch();
  const history = useHistory();
  const partners = useSelector(state => state.tabReducers.partners);
  const current_partner = partners.find(obj => obj.partner === currentParnerLocal);

  const todoSwitcher = (val) => {
    switch (val) {
      case 'ACL':
        return 'AclUsers';
      case 'ACL Resources':
        return 'aclManagment';
      case 'Promotions':
        return 'promotion';
      case 'Create new promo':
        return 'create_new_promo';
      case 'Change banner':
        return 'change_banner';
      default:
        return val;
    }
  };

  const changeActivePage = (page) => {
    if (current_partner.activeTab === page) {
      const currentPage = window.location.pathname.split('/')[1];
      // eslint-disable-next-line prefer-const
      let curent = currentPage;
      // eslint-disable-next-line no-nested-ternary
      page === 'ACL Resources' ? curent = 'ACL Resources' : page === 'ACL' ? curent = 'ACL' : curent = page;
      const tabIndex = current_partner.tabs.indexOf(curent);
      if (current_partner.tabs[tabIndex + 1]) {
        dispatch(activeTabAction({
          partner: currentParnerLocal,
          tabName: current_partner.tabs[tabIndex + 1],
        }));
        history.push(todoSwitcher(current_partner.tabs[tabIndex + 1]));
      } else {
        dispatch(activeTabAction({
          partner: currentParnerLocal,
          tabName: current_partner.tabs[tabIndex - 1],
        }));
        history.push(todoSwitcher(current_partner.tabs[tabIndex - 1]));
        // history.goBack();
      }
    }
  };

  return (
    <div
      key={index}
      style={{
        display: 'flex', alignItems: 'center',
      }}>
      <NavLink
        className={classnames({
          [s.active]: current_partner.activeTab === item,
          [s.not_active]: current_partner.activeTab !== item,
        })}
        onClick={() => {
          dispatch(activeTabAction({
            partner: currentParnerLocal,
            tabName: item,
          }));
        }}
        to={() => todoSwitcher(item)}>{item}
      </NavLink>
      <span
        style={{
          marginRight: '35px', marginLeft: '10px', cursor: 'pointer', color: `${current_partner.activeTab === item ? 'green' : ''}`,
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeActivePage(item);
          dispatch(removeTab({
            partner: currentParnerLocal,
            index,
          }));
        }}>&#10005;</span>
    </div>
  );
};

export default Tab;
