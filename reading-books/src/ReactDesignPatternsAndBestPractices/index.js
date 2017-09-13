import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <span>foo</span>
        {' '}
        bar
        {' '}
        <span>baz</span>
        <button disabled={true} >OK</button>
      </div>
    );
  }
}
