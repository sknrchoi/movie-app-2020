import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000); // 6 seconds
  }
  render() {
    const {isLoading} = this.state;
    return (
      <div>
       {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}
export default App;
