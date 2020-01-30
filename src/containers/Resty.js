import React, { Component } from 'react';
import ReqForm from '../components/form/ReqForm.js';
import Result from '../components/Result.js';

export default class Resty extends Component {
  render(){
    return (
      <>
        <ReqForm />
        <Result />
        <p>HELLO WORLD</p>
      </>
    );
  }
}
