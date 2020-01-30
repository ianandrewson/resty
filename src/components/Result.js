import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => (
  <textarea>{result}</textarea>
);

Result.propTypes = {
  result: PropTypes.string.isRequired
};

export default Result;
