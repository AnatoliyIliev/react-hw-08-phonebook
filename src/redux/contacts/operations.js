import axios from 'axios';
import {
  addContactsRequest,
  addContactSuccess,
  addContactError,
  deleteContactsRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

// axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

const addContacts = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContacts = id => dispatch => {
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
  addContacts,
  deleteContacts,
};
