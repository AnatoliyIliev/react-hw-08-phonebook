import { connect } from 'react-redux';
import ElementContactList from '../ElementContactList';
import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';
import { contactsOperations, contactsSelectors } from '../../redux';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {/* <h1>nj jyj { contacts }</h1> */}
    <ul className={styles.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li className={styles.contactList_items} key={id}>
          <ElementContactList
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
