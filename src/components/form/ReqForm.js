import React from 'react';
import propTypes from 'prop-types';

const ReqForm = ({ onChange, onSubmit, url, body, method }) => (
  <form key='ReqForm'>
    <input type='text' value={url} placeholder='URL' name={url} onChange={onChange} />
    <input type='radio' value='get' name='get' onChange={onChange} />
    <input type='radio' value='post' name='post' onChange={onChange} />
    <input type='radio' value='put' name='put' onChange={onChange} />
    <input type='radio' value='patch' name='patch' onChange={onChange} />
    <input type='radio' value='delete' name='delete' onChange={onChange} />
    <button onSubmit={onSubmit}>Go!</button> 
    <input type='test' value={body} placeholder='Raw JSON Body' name='JSON' onChange={onChange} />
  </form>
);

ReqForm.propTypes = {
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  url: propTypes.string.isRequired,
  method: propTypes.string.isRequired,
  body: propTypes.string.isRequired
};

export default ReqForm;
