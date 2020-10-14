import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    //Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    //this.state.count = 1;
    this.setState(current => ({count: current.count + 1}));

  };
  minus = () => {
    console.log("minus");
    //Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    //this.state.count = -1;
    this.setState(current => ({count: current.count - 1}));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
export default App;
