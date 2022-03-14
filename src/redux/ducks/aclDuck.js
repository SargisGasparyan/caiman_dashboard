import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const SET_USERS = 'ACL/SET_USERS';
const SET_EDITING_USER = 'ACL/SET_EDITING_USER';
const TOGGLE_CREATE_MODAL = 'ACL/TOGGLE_CREATE_MODAL';

// ACTIONS
export const setAclUsers = createAction(SET_USERS);
export const setEditingUser = createAction(SET_EDITING_USER);
export const toggleCreateModal = createAction(TOGGLE_CREATE_MODAL);

// REDUCER
const initialState = {
  allUsers: [],
  isCreateModalActive: false,
  editingUser: null,
};

export const acl = createReducer(initialState, (state, { value }) => ({
  [SET_USERS]: () => ({ ...state, allUsers: value }),
  [TOGGLE_CREATE_MODAL]: () => ({ ...state, isCreateModalActive: value }),
  [SET_EDITING_USER]: () => ({ ...state, editingUser: value }),
}));
