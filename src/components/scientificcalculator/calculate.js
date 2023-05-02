import React, { useState } from 'react';
import calculate from '../logic-protocol/calculating';
import './calculator.css';

const MyCalculator = () => {
  const [calculatorData, setinCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const myInputValueButton = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setinCalculatorData(newData);
  };

  const inputValue = calculatorData.next || calculatorData.total || '0';
  return (
    <>
      <center>
        <div className="maincontainer">
          <input type="number" value={inputValue} id="calcu-input" readOnly />
          <button type="button" onClick={() => myInputValueButton('AC')}>AC</button>
          <button type="button" onClick={() => myInputValueButton('+/-')}>+/-</button>
          <button type="button" onClick={() => myInputValueButton('%')}>%</button>
          <button type="button" className="divide color_orage" onClick={() => myInputValueButton('÷')}>÷</button>
          <button type="button" onClick={() => myInputValueButton('7')}>7</button>
          <button type="button" onClick={() => myInputValueButton('8')}>8</button>
          <button type="button" onClick={() => myInputValueButton('9')}>9</button>
          <button type="button" className="multply color_orage" onClick={() => myInputValueButton('x')}>x</button>
          <button type="button" onClick={() => myInputValueButton('4')}>4</button>
          <button type="button" onClick={() => myInputValueButton('5')}>5</button>
          <button type="button" onClick={() => myInputValueButton('6')}>6</button>
          <button type="button" className="sub color_orage" onClick={() => myInputValueButton('-')}>-</button>
          <button type="button" onClick={() => myInputValueButton('1')}>1</button>
          <button type="button" onClick={() => myInputValueButton('2')}>2</button>
          <button type="button" onClick={() => myInputValueButton('3')}>3</button>
          <button type="button" className="plus color_orage" onClick={() => myInputValueButton('+')}>+</button>
          <button type="button" className="numberZero" onClick={() => myInputValueButton('0')}>0</button>
          <button type="button" onClick={() => myInputValueButton('.')}>.</button>
          <button type="button" className="isqual color_orage" onClick={() => myInputValueButton('=')}>=</button>
        </div>
      </center>
    </>
  );
};

export default MyCalculator;
