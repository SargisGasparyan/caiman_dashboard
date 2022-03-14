import { Redirect, Route, Switch } from 'react-router-dom';

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
    <Route path='*' render={() => <Redirect to={validRoutes[0].path} />} />
  </Switch>
);

export default Routes;
