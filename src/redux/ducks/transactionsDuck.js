import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const SET_TRANSACTION = 'SET_TRANSACTION';
const FROM_TO_TRANSACTIONS_DATA = 'FROM_TO_TRANSACTIONS_DATA';
const APPLY_TRANSACTIONS_DATA = 'APPLY_TRANSACTIONS_DATA';
const SET_TRANSACTION_INITIAL = 'SET_TRANSACTION_INITIAL';

// ACTIONS
export const applyTransactionsDataAction = createAction(APPLY_TRANSACTIONS_DATA);
export const fromToTransactionsDataAction = createAction(FROM_TO_TRANSACTIONS_DATA);
export const resetTransactions = createAction(SET_TRANSACTION_INITIAL);
export const setTransactions = createAction(SET_TRANSACTION);

// REDUCER
const initialState = {
  transactions: { balance: [], units: []},
  count: { balance: null, units: null },
  IN: {
    rows: [],
    sum: 0,
  },
  OUT: {
    rows: [],
    sum: 0,
  },
  allTransactions: {
    rows: [],
    count: 0,
  },
};

export const transactionsData = createReducer(initialState, (state, { value }) => ({
  [FROM_TO_TRANSACTIONS_DATA]: () => ({
    ...state,
    IN: value.IN,
    OUT: value.OUT,
  }),
  [APPLY_TRANSACTIONS_DATA]: () => ({
    ...state,
    allTransactions: value,
  }),
  [SET_TRANSACTION_INITIAL]: () => ({
    ...initialState,
  }),
  [SET_TRANSACTION]: () => ({
    ...state,
    transactions: { ...state.transactions, [value.types]: value.rows },
    count: { ...state.count, [value.types]: value.count },
  }),
}));
