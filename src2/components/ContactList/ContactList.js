import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={styles.ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.li} name={name} key={id}>
          {name}: {number}
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
