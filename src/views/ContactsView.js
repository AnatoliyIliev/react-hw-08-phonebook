import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../components/Container';
import ContactList from '../components/ContactList';
// import TodoEditor from '../components/TodoEditor';
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

  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <div style={barStyles}>
        <Filter />

        {isLoadingContacts && <h1>Загружаем...</h1>}
      </div>

      <ContactList />
    </Container>
  );
}
