import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem.js';

const HistoryList = ({ onSelect, historyItems }) => {
  const items = historyItems.map((item, i) => (
    <li key={i} onSelect={onSelect}>
      <HistoryItem content={item} />
    </li>
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};

HistoryList.propTypes = {
  onSelect: PropTypes.func.isRequired,
  historyItems: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList