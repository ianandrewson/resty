import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => (
  <textarea readOnly value={result}/>
);

Result.propTypes = {
  result: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]).isRequired
};

export default Result;
