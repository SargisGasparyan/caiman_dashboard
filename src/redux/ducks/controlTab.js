import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const ADD_TAB = 'ADD_TAB';
const ACTIVE_TAB = 'ACTIVE_TAB';
const REMOVE_TABS = 'REMOVE_TABS';
const REMOVE_TAB = 'REMOVE_TAB';

// ACTIONS
export const addTabAction = createAction(ADD_TAB);
export const activeTabAction = createAction(ACTIVE_TAB);
export const removeTabsAction = createAction(REMOVE_TABS);
export const removeTab = createAction(REMOVE_TAB);

// REDUCER
const initialState = {
  partners: [
    { partner: 'PMBETTZ', tabs: [], activeTab: '' },
    { partner: 'VAMOSETH', tabs: [], activeTab: '' },
    { partner: 'HABESHAETH', tabs: [], activeTab: '' },
    { partner: 'PMBETKE', tabs: [], activeTab: '' },
    { partner: 'PMBETZM', tabs: [], activeTab: '' },
    { partner: 'MLOTT', tabs: [], activeTab: '' },
  ],
};

export const tabReducers = createReducer(initialState, (state, { value }) => ({
  [ACTIVE_TAB]: () => ({
    partners: state.partners
      .map(x => (x.partner === value.partner
        ? { ...x, activeTab: value.tabName } : { ...x })),
  }),
  [ADD_TAB]: () => ({
    partners: state.partners
      .map(x => (x.partner === value.partner
        ? { ...x, tabs: [ ...x.tabs, value.text ]} : { ...x })),
  }),
  [REMOVE_TABS]: () => ({
    partners: [ ...initialState.partners ],
  }),
  [REMOVE_TAB]: () => ({
    partners: state.partners
      .map(x => (x.partner === value.partner
        ? {
          ...x,
          tabs:
          [ ...x.tabs.slice(0, value.index), ...x.tabs.slice(value.index + 1) ],
        } : { ...x })),
  }),
}));
