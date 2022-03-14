import { NavLink, useHistory } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import TabBar from './components/TabBar/TabBar';
import { activeTabAction, removeTab } from '../../redux/ducks/controlTab';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { getValidRoutes } from '../../configs/routesConfigs';
import s from './MainPage.module.scss';
import ContentLoader from '../Common/Loaders/ContentLoader/ContentLoader';

import Routes from './Routes/Routes';
import { LOADING_IDS } from '../../constants/ids';

const { CONTENT } = LOADING_IDS;

const MainPage = () => {
  const dispatch = useDispatch();
  const { role } = useSelector(state => state.userInfo);
  const activeLoadings = useSelector(state => state.activeLoadings);
  const st = useSelector(state => state.tabReducers.partners);
  const res = st.find(item => item.partner === `${localStorage.getItem('partner_name')}`);
  const validRoutes = useMemo(() => getValidRoutes(role), [ role ]);
  const history = useHistory();

  const itemSwitcher = (item) => {
    if (item === 'ACL') {
      return 'AclUsers';
    }
    if (item === 'ACL Resources') {
      return 'aclManagment';
    }
    return item;
  };
  const changeActivePage = (page) => {
    if (res.activeTab === page) {
      const currentPage = window.location.pathname.split('/')[1];
      const curent = currentPage;
      const tabIndex = res.tabs.indexOf(curent);
      if (res.tabs[tabIndex + 1]) {
        dispatch(activeTabAction({
          partner: `${localStorage.getItem('partner_name')}`,
          tabName: res.tabs[tabIndex + 1],
        }));
        history.push(res.tabs[tabIndex + 1]);
        // window.location.href = res.tabs[tabIndex + 1];
      } else {
        dispatch(activeTabAction({
          partner: `${localStorage.getItem('partner_name')}`,
          tabName: res.tabs[tabIndex - 1],
        }));
        history.goBack();
      }
    }
  };

  return (
    <div className={classnames(s.root, 'container')}>
      <div className='row' style={{ margin: 0 }}>
        <Header />
      </div>
      <div className={classnames(s.main, 'row')}>
        <div className='col-auto' style={{ paddingRight: 0 }}>
          <SideBar validRoutes={validRoutes} />
        </div>
        <div className={classnames(s.content, 'transition', 'col')}>
          <div style={{ display: 'flex', margin: '10px' }}>
            {/* {res && res.tabs.map((item, index) => <div><NavLink
              key={index}
              onClick={() => {
                dispatch(activeTabAction({
                  partner: `${localStorage.getItem('partner_name')}`,
                  tabName: item,
                }));
              }
              }
              style={{
                margin: '10px',
                color: `${res.activeTab === item ? 'red' : 'gray'}`,
                border: '1px solid black',
                width: '150px',
                textAlign: 'center',
              }}
              to={() => itemSwitcher(item)}>{item}
              <h1 onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                changeActivePage(item);
                dispatch(removeTab({
                  partner: `${localStorage.getItem('partner_name')}`,
                  index,
                }));
              }}>X</h1>
            </NavLink>
            </div>)} */}
            <TabBar />
          </div>
          <Routes validRoutes={validRoutes} />
        </div>
      </div>
      {activeLoadings.includes(CONTENT) && <ContentLoader />}
    </div>
  );
};

export default MainPage;
