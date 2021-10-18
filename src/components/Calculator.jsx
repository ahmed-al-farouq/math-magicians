import React, { Component } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  updateData = (e) => {
    const { data, updateState } = this.props;
    const newData = calculate(data, e.target.textContent);
    updateState(newData);
  }

  render() {
    const { value } = this.props;
    return (
      <section className="calculator-container">
        <div className="output">
          <div className="operand">
            {value || 0}
          </div>
        </div>
        <button type="button" onClick={this.updateData}>AC</button>
        <button type="button" onClick={this.updateData}>+/-</button>
        <button type="button" onClick={this.updateData}>%</button>
        <button type="button" onClick={this.updateData} className="operators">÷</button>
        <button type="button" onClick={this.updateData}>7</button>
        <button type="button" onClick={this.updateData}>8</button>
        <button type="button" onClick={this.updateData}>9</button>
        <button type="button" onClick={this.updateData} className="operators">x</button>
        <button type="button" onClick={this.updateData}>4</button>
        <button type="button" onClick={this.updateData}>5</button>
        <button type="button" onClick={this.updateData}>6</button>
        <button type="button" onClick={this.updateData} className="operators">+</button>
        <button type="button" onClick={this.updateData}>1</button>
        <button type="button" onClick={this.updateData}>2</button>
        <button type="button" onClick={this.updateData}>3</button>
        <button type="button" onClick={this.updateData} className="operators">-</button>
        <button type="button" onClick={this.updateData} className="span-two">0</button>
        <button type="button" onClick={this.updateData}>.</button>
        <button type="button" onClick={this.updateData} className="operators">=</button>
      </section>
    );
  }
}

Calculator.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default Calculator;
