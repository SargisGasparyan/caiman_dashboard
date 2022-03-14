import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import s from './Tab.module.scss';
import { activeTabAction } from '../../../../../redux/ducks/controlTab';

const Tab = ({ item }) => {
  const currentParnerLocal = `${localStorage.getItem('partner_name')}`;
  const dispatch = useDispatch();
  const history = useHistory();
  const partners = useSelector(state => state.tabReducers.partners);
  const current_partner = partners.find(obj => obj.partner === currentParnerLocal);
  const todoSwitcher = (val) => {
    if (val === 'ACL') {
      return 'AclUsers';
    }
    if (val === 'ACL Resources') {
      return 'aclManagment';
    }
    return val;
  };
  const changeActivePage = (page) => {
    if (current_partner.activeTab === page) {
      const currentPage = window.location.pathname.split('/')[1];
      const curent = currentPage;
      const tabIndex = current_partner.tabs.indexOf(curent);
      if (current_partner.tabs[tabIndex + 1]) {
        dispatch(activeTabAction({
          partner: currentParnerLocal,
          tabName: current_partner.tabs[tabIndex + 1],
        }));
        history.push(current_partner.tabs[tabIndex + 1]);
      } else {
        dispatch(activeTabAction({
          partner: currentParnerLocal,
          tabName: current_partner.tabs[tabIndex - 1],
        }));
        history.goBack();
      }
    }
  };
  return (
    <div>
      <NavLink
        onClick={() => {
          dispatch(activeTabAction({
            partner: currentParnerLocal,
            tabName: item,
          }));
        }}
        style={{
          margin: '10px',
          color: 'gray',
          borderBottom: `${current_partner.activeTab === item ? '3px solid red' : '1px solid black'}`,
          width: '150px',
          textAlign: 'center',
        }}
        to={() => todoSwitcher(item)}>{item}
        {/* <h1 onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                changeActivePage(item);
                                dispatch(removeTab({
                                  partner: `${localStorage.getItem('partner_name')}`,
                                  index,
                                }));
                              }}>X</h1> */}
      </NavLink>
    </div>
  );
};

export default Tab;
