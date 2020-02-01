import React from 'react';
import PropTypes from 'prop-types';
import styles from './Result.css';

const Result = ({ result }) => (
  <textarea readOnly className={styles.result} value={result}/>
);

Result.propTypes = {
  result: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]).isRequired
};

export default Result;
