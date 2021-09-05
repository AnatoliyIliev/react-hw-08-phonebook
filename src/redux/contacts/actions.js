import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactRequest',
);
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactsRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactsRequest = createAction('contacts/addContactRequest');
export const deleteContactSuccess = createAction('contacts/addContactSuccess');
export const deleteContactError = createAction('contacts/addContactError');

export const changeFilter = createAction('contacts/changeFilter');
