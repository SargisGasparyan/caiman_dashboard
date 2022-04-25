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
import PromotionPage from './Routes/CMS/Promotions/PromotionsPage';
import NewPromoPage from './Routes/CMS/Promotions/CreateNewPromo/NewPromoPage';

const { CONTENT } = LOADING_IDS;
const MainPage = () => {
  const dispatch = useDispatch();
  const { role } = useSelector(state => state.userInfo);
  const activeLoadings = useSelector(state => state.activeLoadings);
  const st = useSelector(state => state.tabReducers.partners);
  const validRoutes = useMemo(() => getValidRoutes(role), [ role ]);

  return (
    <div className={classnames(s.root)}>
      <div className='row' style={{ margin: 0 }}>
        <Header />
      </div>
      <div style={{ position: 'fixed', zIndex: '24', top: '45px' }}>
        <TabBar />
      </div>
      <div className={classnames(s.main, 'row')}>
        <div className='col-auto' style={{ paddingRight: 0 }}>
          <SideBar validRoutes={validRoutes} />
        </div>
        <div className={classnames(s.content, 'transition', 'col')}>
          <Routes validRoutes={validRoutes} />
        </div>
      </div>
      {activeLoadings.includes(CONTENT) && <ContentLoader />}
    </div>
  );
};

export default MainPage;
