import { LOADING_IDS } from '../../constants/ids';
import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const ADD_LOADING = 'ADD_LOADING';
const REMOVE_LOADING = 'REMOVE_LOADING';

// ACTIONS
export const addLoading = createAction(ADD_LOADING);
export const removeLoading = createAction(REMOVE_LOADING);

// REDUCER
export const activeLoadings = createReducer([ LOADING_IDS.GLOBAL ], (state, { value }) => ({
  [ADD_LOADING]: () => [ ...state, value ],
  [REMOVE_LOADING]: () => state.filter(item => item !== value),
}));
