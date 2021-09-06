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

  await axios
    .get('/contacts')
    .then(({ name, number }) =>
      console.log('operations-fetchContacts', (name, number)),
    )
    // .then((name, number) => dispatch(fetchContactSuccess(name, number)))
    .then(({ name, number }) => dispatch(fetchContactSuccess(name, number)))
    .catch(error => dispatch(fetchContactError(error)));
};

const addContacts = (name, number) => dispatch => {
  console.log('operations-addContacts', name, number);
  const contact = { name, number };
  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
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
