import { createAction, createReducer } from '../../helpers/redux';

/// ACTION TYPES

const SET_PLAYERS = 'SET_PLAYERS';
const RESET_PLAYERS = 'RESET_PLAYERS';

/// ACTIONS

export const setPlayers = createAction(SET_PLAYERS);
export const resetPlayers = createAction(RESET_PLAYERS);

const initialState = {
  players: [],
  total: '',
};

export const playersInfo = createReducer(initialState, (state, { value }) => ({
  [SET_PLAYERS]: () => ({ ...state, players: value.docs, total: value.count }),
  [RESET_PLAYERS]: () => initialState,
}));
