import { createAction, createReducer } from '../../helpers/redux';

const SET_LOGS = 'SET_LOGS';

export const setLogs = createAction(SET_LOGS);

const initialState = {
  logs: [],
  total: null,
};

export const logsReducer = createReducer(initialState, (state, { value }) => ({
  [SET_LOGS]: () => ({ ...state, logs: value.docs, total: value.count }),
}));
