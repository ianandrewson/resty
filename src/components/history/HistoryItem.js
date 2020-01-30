import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ content, onSelect }) => (
  <li onSelect={onSelect}>
    <input type='radio' value={content} />
    <p name={content.url}>{content.url}</p>
    <p name={content.method}>{content.method}</p>
    <p name={content.body}>{content.body}</p>
  </li>
);

HistoryItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  content: PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default HistoryItem;
