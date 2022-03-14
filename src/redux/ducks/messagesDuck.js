import { createAction, createReducer } from '../../helpers/redux';

const SET_MESSAGES = 'SET_MESSAGES';
const SET_COUNT = 'SET_COUNT';

export const setMessages = createAction(SET_MESSAGES);
export const setCount = createAction(SET_COUNT);

const initialState = {
  messages: [],
  count: null,
};

export const messagesReducer = createReducer(initialState, (state, { value }) => ({
  [SET_MESSAGES]: () => ({ ...state, messages: value.docs }),
  [SET_COUNT]: () => ({ ...state, count: value.count }),
}));
