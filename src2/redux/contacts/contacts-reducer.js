import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => {
    const repeatСontact = state.some(contact => contact.name === payload.name);
    if (repeatСontact) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }
    const contactsState = [...state, payload];
    return contactsState;
  },

  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
