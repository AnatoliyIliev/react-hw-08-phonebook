const ElementContactList = ({ name, number, onDeleteContact }) => (
  <>
    <span>
      {name}: {number}
    </span>
    <button onClick={onDeleteContact}>Delete</button>
  </>
);

export default ElementContactList;
