import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const SET_LANGUAGE = 'CONFIGS/SET_LANGUAGE';
const TOGGLE_SIDEBAR = 'CONFIGS/TOGGLE_SIDEBAR';

// ACTIONS
export const setLanguage = createAction(SET_LANGUAGE);
export const toggleSidebar = createAction(TOGGLE_SIDEBAR);

// REDUCER
const initialState = {
  language: null,
  isSidebarActive: true,
};

export const configs = createReducer(initialState, (state, { value }) => ({
  [SET_LANGUAGE]: () => ({ ...state, language: value }),
  [TOGGLE_SIDEBAR]: () => ({ ...state, isSidebarActive: !state.isSidebarActive }),
}));
