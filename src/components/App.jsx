import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GlobalLoader from './Common/Loaders/GlobalLoader/GlobalLoader';
import MainPage from './MainPage/MainPage';
import SignIn from './SignIn/SignIn';
import { removeLoading } from '../redux/ducks/loadingDuck';
import { getUserConfigsThunk } from '../redux/thunks/globalThunk';
import { LOADING_IDS } from '../constants/ids';

const { GLOBAL } = LOADING_IDS;

const App = () => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector(state => state.userInfo);

  const activeLoadings = useSelector(state => state.activeLoadings);

  useEffect(() => {
    const token = localStorage.getItem('token');
    token
      ? dispatch(getUserConfigsThunk(token))
      : dispatch(removeLoading(GLOBAL));
  }, []);

  if (activeLoadings.includes(GLOBAL)) return <GlobalLoader />;
  return (
    <div>

      <Switch>
        <Route
          exact
          path="/auth"
          render={() => (userId ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route
          path="/"
          render={() => (!userId ? <Redirect to="/auth" /> : <MainPage />)}
        />
      </Switch>
      <div className="preload" />
    </div>
  );
};

/// aply
export default App;
