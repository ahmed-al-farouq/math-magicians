import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Calculator({ data, value, updateState }) {
  const updateData = (e) => {
    const newData = calculate(data, e.target.textContent);
    updateState(newData);
  };

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

Calculator.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default Calculator;
