import React, { Component } from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';
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

  updateData = (e) => {
    const { data } = this.state;
    const newData = calculate(data, e.target.textContent);
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
      <Calculator updateData={this.updateData} value={value} />
    );
  }
}

export default App;
