import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  updateState = (newData) => {
    this.setState({
      data: newData,
    });
  }

  render() {
    const { data } = this.state;
    let value = '';
    if (data.total) {
      value = `${data.total} ${data.operation || ''} ${data.next || ''}`;
    } else if (data.next) {
      value = `${data.next} ${data.operation || ''}`;
    }

    return (
      <Calculator
        data={data}
        value={value}
        updateState={this.updateState}
      />
    );
  }
}

export default App;
