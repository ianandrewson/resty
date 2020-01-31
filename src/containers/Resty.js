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

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  onSubmit = event => {
    event.preventDefault();

    this.setState(state => ({
      historyItems: [...state.historyItems, {
        url: state.url,
        method: state.method,
        body: state.body
      }]
    }));
  }

  onHistorySelect = ({ target }) => {
    this.setState(target);
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
          onHistorySelect={this.onHistorySelect}
        />
        <Result 
          result={result}/>
        <p>HELLO WORLD</p>
      </>
    );
  }
}
