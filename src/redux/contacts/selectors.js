import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

// Мемоизация
const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoading,
  getFilter,
  getVisibleContacts,
};
