import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useRouteMatch, useLocation, Route, Switch, Redirect,
  useParams,
} from 'react-router-dom';
import classNames from 'classnames';
import { playerInfoMenu } from './constants';
import CustomMenu from '../Player/CustomMenu/CustomMenu';
import { PLAYER_ROUTES_CONFIGS } from './configs/playerConfigs';
import { RATE_STAR_COLORS } from '../../../../constants/components/currentPlayer';
import { getPlayersReport } from '../../../../redux/thunks/currentPlayerThunk';
import Star from './Components/Star/Star';
import s from './Components/General/PlayerInfo/PlayerInfo.module.scss';

function Player() {
  const { path, url } = useRouteMatch();
  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPlayer = useSelector(state => state.currentPlayer);
  const [ activeMenu, setActiveMenu ] = useState(
    {
      headersActive: playerInfoMenu[0].name,
      subs: playerInfoMenu[0].childs,
      subActive: playerInfoMenu[0].childs[0],
    },
  );

  const [ activeRouteIndex, setActiveRouteIndex ] = useState(getActiveMenuIndex());

  useEffect(() => {
    dispatch(getPlayersReport(params.id));
  }, []);

  const onHeaderMenuItemClick = (index) => {
    setActiveMenu({
      headersActive: playerInfoMenu[index].name,
      subs: playerInfoMenu[index].childs,
      subActive: playerInfoMenu[index].childs[0],
    });
  };
  const onSubMenuItemClick = (value) => {
    setActiveMenu({
      ...activeMenu, subActive: value,
    });
  };

  return (
    <CustomMenu
      title={`${currentPlayer.f_name || ''}  ${currentPlayer.l_name || ''}`}>
      <div className={classNames(s.flex, 'container', s.customContainer)}>
        <div className='row'>
          <div className={classNames('col-auto', s.playerIdPart)}>Player ID: {currentPlayer.id}
            {<div className={s.headerStar} style={{ margin: 5, height: 27 }}> <Star
              color={RATE_STAR_COLORS[currentPlayer.severity]} />
            </div>}
          </div>
          <div className={classNames('col-auto', s.playerIdPart)}>Winning Amount: {currentPlayer.winningAmount ? currentPlayer.winningAmount.toFixed(2) : '-'} </div>
        </div>
      </div>
      <CustomMenu.HeaderMenu
        items={PLAYER_ROUTES_CONFIGS}
        active={activeMenu.headersActive}
        activeRouteIndex={activeRouteIndex}
        setActiveRouteIndex={setActiveRouteIndex}
        onHeaderClick={(value) => { onHeaderMenuItemClick(value); }} />
      <CustomMenu.SubMenu
        items={PLAYER_ROUTES_CONFIGS[activeRouteIndex]}
        active={activeMenu.subActive}
        onSubClick={(value) => { onSubMenuItemClick(value); }}
      />
      <CustomMenu.Content>
        <Switch>
          {PLAYER_ROUTES_CONFIGS.map((route, index) => {
            if (!route.multi) {
              return (
                <Route
                  exact={route.path !== '/players/:id'}
                  key={index}
                  path={path + route.path}
                  render={() => <route.Component />}
          />
              );
            }
            return route.childs.map(child => (
              <Route
                exact
                key={child.name}
                path={path + route.path + child.path}
                render={() => <child.Component />}
        />
            ));
          })}
          <Route path='*' render={() => <Redirect to={url + PLAYER_ROUTES_CONFIGS[0].path + PLAYER_ROUTES_CONFIGS[0].childs[0].path} />} />
        </Switch>
      </CustomMenu.Content>
    </CustomMenu>
  );

  function getActiveMenuIndex() {
    const currentPath = location.pathname.split('/')[3];
    return PLAYER_ROUTES_CONFIGS.findIndex(item => item.path.includes(currentPath));
  }
}

export default Player;
