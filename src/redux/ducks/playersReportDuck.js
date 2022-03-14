import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const PLAYERS_REPORT = 'PLAYERS_REPORT';
const SET_PLAYERS_REPORT_INITIAL = 'SET_PLAYERS_REPORT_INITIAL';

// ACTIONS
export const playersReportAction = createAction(PLAYERS_REPORT);
export const setPlayerReportInitialDataAction = createAction(SET_PLAYERS_REPORT_INITIAL);

// REDUCER
const initialState = {
  playersReport: {
    count: 0,
    data: {},
    users: [],
  },
};

export const playersReportData = createReducer(initialState, (state, { value }) => ({
  [PLAYERS_REPORT]: () => ({
    ...state,
    playersReport: value,
  }),
  [SET_PLAYERS_REPORT_INITIAL]: () => ({
    ...initialState,
  }),
}));
