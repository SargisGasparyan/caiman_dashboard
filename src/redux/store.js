import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { isDevelopmentStage } from '../helpers/utils';
import { reducers } from './reducers';

const compose = isDevelopmentStage() ? composeWithDevTools : param => param;

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunkMiddleware)),
);

window.getState = isDevelopmentStage() && store.getState;

export const getStoreState = store.getState;
export const { dispatch } = store;
export const getUserId = () => store.getState().userInfo.userId;
export default store;
