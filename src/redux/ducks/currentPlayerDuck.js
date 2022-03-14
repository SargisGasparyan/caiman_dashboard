import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
const ADD_NOTE = 'ADD_NOTE';
const SET_SEVERITY = 'SET_SEVERITY';
const SET_CURRENT_PLAYER_TRANSACTIONS = 'SET_CURRENT_PLAYER_TRANSACTIONS';

/// ACTIONS
export const setCurrentPlayer = createAction(SET_CURRENT_PLAYER);
export const setPlayerSeverity = createAction(SET_SEVERITY);
export const addPlayerNote = createAction(ADD_NOTE);
export const setCurrentPlayerTransactions = createAction(SET_CURRENT_PLAYER_TRANSACTIONS);

const initialState = {
  severity: null,
  notes: {
    count: null,
    docs: [],
  },
  transactions: {
    docs: [],
    count: null,
  },
};

export const currentPlayer = createReducer(initialState, (state, { value }) => ({
  [SET_CURRENT_PLAYER]: () => ({ ...state, ...value }),
  [SET_SEVERITY]: () => ({ ...state, severity: value }),
  [ADD_NOTE]: () => ({
    ...state,
    notes: {
      count: state.count + 1,
      docs: [ value, ...state.notes.docs ],
    },
  }),
  [SET_CURRENT_PLAYER_TRANSACTIONS]: () => ({ ...state, transactions: value }),
}));
