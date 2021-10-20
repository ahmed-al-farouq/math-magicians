import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <section className="calculator-container">
        <div className="output">
          <div className="operand">
            0
          </div>
        </div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operators">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operators">&times;</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operators">+</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operators">-</button>
        <button type="button" className="span-two">0</button>
        <button type="button">.</button>
        <button type="button" className="operators">=</button>
      </section>
    );
  }
}

export default Calculator;
