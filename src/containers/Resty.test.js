import React from 'react';
import { shallow } from 'enzyme';
import Resty from './Resty.js';

describe('Resty tests', () => {

  it('can change url in state', () => {
    const wrapper = shallow(<Resty />);
    const resty = wrapper.instance();
    resty.onChange({
      target: { name: 'url', value: 'my rad website' }
    });
    expect(wrapper.state('url')).toEqual('my rad website');
  });

  it('can change the method in state', () => {
    const wrapper = shallow(<Resty />);
    const resty = wrapper.instance();
    resty.onChange({
      target: {
        name: 'method',
        value: 'post'
      }
    });
    expect(wrapper.state('method')).toEqual('post');
  });
  
  it('can change the body in state', () => {
    const wrapper = shallow(<Resty />);
    const resty = wrapper.instance();
    resty.onChange({
      target: {
        name: 'body',
        value: 'a bunch of json'
      }
    });
    expect(wrapper.state('body')).toEqual('a bunch of json');
  });

  it('can add a historyItem on submit', () => {
    const preventDefault = jest.fn();

    const wrapper = shallow(<Resty />);
    const resty = wrapper.instance();
    wrapper.setState({
      url: 'blah',
      body: 'more blahs',
      method: 'post',
    });

    resty.onSubmit({
      preventDefault
    });

    expect(wrapper.state('historyItems')).toEqual([
      {
        url: 'blah',
        body: 'more blahs',
        method: 'post'
      }
    ]);
  });

  it('can fetch from the API and set result state', () => {
    const wrapper = shallow(<Resty />);
    const resty = wrapper.instance();

    return resty.fetch()
      .then(() => {
        expect(wrapper.state('historyItems')).toEqual([
          { character:'John Snow', house: 'Stark' },
          { character: 'Victarion Greyjoy', house: 'Greyjoy' },
          { character: 'Prince Oberyn', house: 'Martell' }
        ]);
      });
  });
});
