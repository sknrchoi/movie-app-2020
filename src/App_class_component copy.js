import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  };

  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("Component updated");
  }
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
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
// comment: do not export App because of unusing
//export default App;
