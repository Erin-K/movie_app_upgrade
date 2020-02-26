import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor(props) { // 시작전 호출
    super(props);
    console.log('before render component')
  }
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({
      count: current.count+1
    }))
  };
  minus = () => {
    this.setState(current => ({
      count: current.count-1
    }))
  };

  componentDidMount() {
    console.log('component rendered')
  }

  componentDidUpdate() {
    console.log('update')
  }

  componentWillUnmount() {
    console.log('goodbye component')
  }

  render() {
    console.log('rendering')
    return (
      <div>
        <h1>the number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
