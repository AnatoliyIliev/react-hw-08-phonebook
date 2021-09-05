import styles from './Filter.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, contactsSelectors } from '../../redux';

const Filter = ({ value, onChange }) => (
  <label className={styles.labelName}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
