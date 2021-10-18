import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    const { updateData, value } = this.props;
    return (
      <section className="calculator-container">
        <div className="output">
          <div className="operand">
            {value || 0}
          </div>
        </div>
        <button type="button" onClick={updateData}>AC</button>
        <button type="button" onClick={updateData}>+/-</button>
        <button type="button" onClick={updateData}>%</button>
        <button type="button" onClick={updateData} className="operators">÷</button>
        <button type="button" onClick={updateData}>7</button>
        <button type="button" onClick={updateData}>8</button>
        <button type="button" onClick={updateData}>9</button>
        <button type="button" onClick={updateData} className="operators">x</button>
        <button type="button" onClick={updateData}>4</button>
        <button type="button" onClick={updateData}>5</button>
        <button type="button" onClick={updateData}>6</button>
        <button type="button" onClick={updateData} className="operators">+</button>
        <button type="button" onClick={updateData}>1</button>
        <button type="button" onClick={updateData}>2</button>
        <button type="button" onClick={updateData}>3</button>
        <button type="button" onClick={updateData} className="operators">-</button>
        <button type="button" onClick={updateData} className="span-two">0</button>
        <button type="button" onClick={updateData}>.</button>
        <button type="button" onClick={updateData} className="operators">=</button>
      </section>
    );
  }
}

Calculator.propTypes = {
  updateData: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Calculator;
