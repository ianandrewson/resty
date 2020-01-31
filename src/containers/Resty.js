import React, { Component } from 'react';
import ReqForm from '../components/form/ReqForm.js';
import Result from '../components/Result.js';
import HistoryList from '../components/history/HistoryList.js';

export default class Resty extends Component {

  state = {
    historyItems: [],
  }

  render(){
    const { historyItems } = this.state;

    return (
      <>
        <ReqForm />
        <HistoryList 
          historyItems={historyItems} />
        <Result />
        <p>HELLO WORLD</p>
      </>
    );
  }
}
