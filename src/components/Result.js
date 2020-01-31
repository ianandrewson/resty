import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => (
  <textarea readOnly value={result}/>
);

Result.propTypes = {
  result: PropTypes.string.isRequired
};

export default Result;
