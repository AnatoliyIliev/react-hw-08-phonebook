import axios from 'axios';

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
} from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContacts =
  ({ name, number }) =>
  async dispatch => {
    const contact = {
      name,
      number,
    };
    dispatch(addContactsRequest());

    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactsSuccess(data));
    } catch (error) {
      dispatch(addContactsError(error));
    }
  };

const deleteContacts = id => async dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch(error => dispatch(deleteContactsError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContacts,
  deleteContacts,
  fetchContacts,
};

// const fetchContacts = () =>  dispatch => {
//     dispatch(fetchContactsRequest());

//     axios
//         .get('/contacts')
//         .then(({ data }) =>
//             dispatch(fetchContactsSuccess(data)))
//         .catch(error => dispatch(fetchContactsError(error)));

// };

// const addContacts = ({name, number}) => dispatch => {
//     const contact = {
//         name,
//         number,
//     };
//     dispatch(addContactsRequest());

//     axios
//         .post('/contacts', contact)
//         .then(({ data }) =>
//             dispatch(addContactsSuccess(data)))
//         .catch(error => dispatch(addContactsError(error)));

// };

// const deleteContacts = id => dispatch => {
//     dispatch(deleteContactsRequest(id));
//     axios
//         .delete(`/contacts/${id}`)
//         .then(() =>
//             dispatch(deleteContactsSuccess(id)))
//         .catch(error => dispatch(deleteContactsError(error)));

// }
