import { connect } from 'react-redux';
import ElementContactList from '../ElementContactList';
import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

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

// import Todo from '../Todo';
// import { useSelector, useDispatch } from 'react-redux';
// import { todosOperations, todosSelectors } from '../../redux/todos';
// import styles from './TodoList.module.css';

// export default function TodoList() {
//   const dispatch = useDispatch();
//   const todos = useSelector(todosSelectors.getVisibleTodos);

//   const onDeleteTodo = id => dispatch(todosOperations.deleteTodo(id));
//   const onToggleCompleted = id => dispatch(todosOperations.toggleCompleted(id));

//   return (
//     <ul className={styles.list}>
//       {todos.map(({ id, description, completed }) => (
//         <li key={id} className={completed ? styles.completed : styles.item}>
//           <Todo
//             text={description}
//             completed={completed}
//             onToggleCompleted={() =>
//               onToggleCompleted({ id, completed: !completed })
//             }
//             onDelete={() => onDeleteTodo(id)}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
