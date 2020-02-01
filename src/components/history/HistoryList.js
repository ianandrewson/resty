import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem.js';
import styles from './HistoryList.css';

const HistoryList = ({ onHistorySelect, historyItems }) => {
  const items = historyItems.map((item, i) => (
    <li key={i} onHistorySelect={onHistorySelect}>
      <HistoryItem content={item} />
    </li>
  ));

  return (
    <section className={styles.historyList}>
      <h2>History</h2>
      <ul>
        {items}
      </ul>
    </section>
  );
};

HistoryList.propTypes = {
  onHistorySelect: PropTypes.func.isRequired,
  historyItems: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;
