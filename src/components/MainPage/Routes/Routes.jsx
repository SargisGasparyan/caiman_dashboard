import { Redirect, Route, Switch } from 'react-router-dom';
import ChangeBannerPage from './CMS/Promotions/ChangeBanner/ChangeBannerPage';
import NewPromoPage from './CMS/Promotions/CreateNewPromo/NewPromoPage';

const Routes = ({ validRoutes }) => (
  <Switch>

    {validRoutes.map((route, index) => {
      if (!route.multi) {
        return (
          <Route
            exact={route.path !== '/players/:id'}
            key={index}
            path={route.path}
            render={() => <route.Component />}
          />
        );
      }
      return route.childs.map(child => (
        <Route
          exact
          key={child.name}
          path={route.path + child.path}
          render={() => <child.Component />}
        />
      ));
    })}
    <Route
      key={Math.random()}
      path={'/create_new_promo'}
      render={() => <NewPromoPage />}
          />
    <Route
      key={Math.random()}
      path={'/change_banner'}
      render={() => <ChangeBannerPage />}
          />
    <Route path='*' render={() => <Redirect to={validRoutes[0].path} />} />
  </Switch>
);

export default Routes;
