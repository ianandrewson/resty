import React from 'react';
import propTypes from 'prop-types';
import styles from './ReqForm.css';

const ReqForm = ({ onChange, onSubmit, url, body, method }) => (
  <form key='ReqForm' onSubmit={onSubmit} className={styles.reqForm}>
    <input type='text' value={url} placeholder='URL' name='url' onChange={onChange} />
    <div className={styles.radioWrapper}>
      <label>
        GET
        <input type='radio' value='GET' name='method' onChange={onChange} />
      </label>
      <label>
        POST
        <input type='radio' value='POST' name='method' onChange={onChange} />
      </label>
      <label>
        PUT
        <input type='radio' value='PUT' name='method' onChange={onChange} />
      </label>
      <label>
        PATCH
        <input type='radio' value='PATCH' name='method' onChange={onChange} />
      </label>
      <label>
        DELETE
        <input type='radio' value='DELETE' name='method' onChange={onChange} />
      </label>
    </div>
    <button>Go!</button> 
    <input className={styles.result} type='text' value={body} placeholder='Raw JSON Body' name='JSON' onChange={onChange} />
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
