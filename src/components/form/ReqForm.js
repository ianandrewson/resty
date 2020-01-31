import React from 'react';
import propTypes from 'prop-types';

const ReqForm = ({ onChange, onSubmit, url, body, method }) => (
  <form key='ReqForm' onSubmit={onSubmit}>
    <input type='text' value={url} placeholder='URL' name='url' onChange={onChange} />
    <input type='radio' value='GET' name='method' onChange={onChange} />
    <input type='radio' value='POST' name='method' onChange={onChange} />
    <input type='radio' value='PUT' name='method' onChange={onChange} />
    <input type='radio' value='PATCH' name='method' onChange={onChange} />
    <input type='radio' value='DELETE' name='method' onChange={onChange} />
    <button>Go!</button> 
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
