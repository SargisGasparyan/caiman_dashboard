import { createAction, createReducer } from '../../helpers/redux';

const GET_STAKES = 'GET_STAKES';

export const getStakes = createAction(GET_STAKES);

const initialState = {
  stakes: [],
  count: null,
};

export const stakesReducer = createReducer(initialState, (state, { value }) => ({
  [GET_STAKES]: () => ({ ...state, stakes: value.docs, count: value.count }),
}));
