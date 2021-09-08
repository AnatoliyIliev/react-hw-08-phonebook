import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  // const isLoadingContacts = useSelector(state =>
  //   contactsSelectors.getLoading(state),
  // );

  const isError = useSelector(state => contactsSelectors.getError(state));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <ContactForm />
      <div style={barStyles}>
        <Filter />

        {isLoadingContacts && <h1>Загружаем...</h1>}
        {isError && <Alert severity="error">{isError}</Alert>}
      </div>

      <ContactList />
    </Container>
  );
}
