import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Container;
