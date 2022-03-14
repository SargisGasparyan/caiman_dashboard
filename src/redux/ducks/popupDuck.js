import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const SET_ACTIVE_POPUP = 'SET_ACTIVE_POPUP';
const RESET_POPUP = 'RESET_POPUP';

// ACTIONS
export const setActivePopup = createAction(SET_ACTIVE_POPUP);
export const resetPopup = createAction(RESET_POPUP);

// REDUCER
export const activePopup = createReducer(null, (_, { value }) => ({
  [SET_ACTIVE_POPUP]: () => value,
  [RESET_POPUP]: () => null,
}));
