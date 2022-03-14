import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const SET_USER_DATA = 'SET_USER_DATA';
const RESET_USER_DATA = 'RESET_USER_DATA';
const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';
const CURRENT_PARTNER = 'CURRENT_PARTNER';

// ACTIONS
export const setUserData = createAction(SET_USER_DATA);
export const resetUserData = createAction(RESET_USER_DATA);
export const toggleLanguage = createAction(TOGGLE_LANGUAGE);
export const currentPartner = createAction(CURRENT_PARTNER);

// REDUCER

const initialState = {
  locale: 'EN',
  currentPartner: `${localStorage.getItem('partner_name')}`,
};

export const userInfo = createReducer(initialState, (state, { value }) => ({
  [SET_USER_DATA]: () => ({ ...state, ...value }),
  [RESET_USER_DATA]: () => ({}),
  [TOGGLE_LANGUAGE]: () => ({ ...state, locale: value }),
  [CURRENT_PARTNER]: () => ({ ...state, currentPartner: value.currentPartner }),
}));
