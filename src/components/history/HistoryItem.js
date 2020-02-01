import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ content }) => (
  <div className={styles.historyItem}>
    <input type='radio' value={content} id={content}/>
    <label htmlFor={content}>
      <p name={content.method}>{content.method}</p>
      <p name={content.url}>{content.url}</p>
      <p name={content.body}>{content.body}</p>
    </label>
  </div>
);

HistoryItem.propTypes = {
  content: PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default HistoryItem;
