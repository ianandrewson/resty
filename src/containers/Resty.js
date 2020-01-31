import React, { Component } from 'react';
import ReqForm from '../components/form/ReqForm.js';
import Result from '../components/Result.js';
import HistoryList from '../components/history/HistoryList.js';

export default class Resty extends Component {

  state = {
    historyItems: [],
    url: '',
    method: '',
    body: '',
    result: ''
  }

  onChange = () => {

  }

  onSubmit = () => {

  }

  onSelect = () => {

  }

  render(){
    const { historyItems, url, method, body, result } = this.state;

    return (
      <>
        <ReqForm 
          url={url}
          method={method}
          body={body}
          onChange = {this.onChange}
          onSubmit = {this.onSubmit}
        />
        <HistoryList 
          historyItems={historyItems} 
          onSelect={this.onSelect}
        />
        <Result 
          result={result}/>
        <p>HELLO WORLD</p>
      </>
    );
  }
}
