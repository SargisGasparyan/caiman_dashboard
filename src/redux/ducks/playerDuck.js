import { createAction, createReducer } from '../../helpers/redux';

const SET_PLAYER_ID = 'SET_PLAYER_ID';
const SET_PLAYER_BETS = 'SET_PLAYER_BETS';
const SET_ONE_BET = 'SET_ONE_BET';

export const setPlayerID = createAction(SET_PLAYER_ID);
export const setPlayerBets = createAction(SET_PLAYER_BETS);

const initialState = {
  bets: [],
  total: '',
  oneBet: '',
};

export const player = createReducer(initialState, (state, { value }) => ({
  [SET_PLAYER_BETS]: () => ({ ...state, bets: value.data, total: value.count }),
  [SET_ONE_BET]: () => ({ ...state, oneBet: value }),
}));
