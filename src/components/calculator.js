import React, { useState } from 'react';
import calculate from '../logic/calculate';
/* eslint-disable react/prefer-stateless-function
 ,no-useless-constructor
 ,react/destructuring-assignment
 ,jsx-a11y/interactive-supports-focus
 ,jsx-a11y/click-events-have-key-events
 ,jsx-a11y/no-static-element-interactions
 ,react/prop-types
 ,react/no-unused-state */
let [obj, setObj] = [{}, () => {}];

const performClick = (e) => {
  const value = e.target.innerHTML;
  const { total, next, operation } = calculate(obj, value);
  setObj({ total, next, operation });
  const screen = document.querySelector('.screen');
  if (next !== null) {
    screen.innerHTML = next;
  } else if (total !== null) {
    screen.innerHTML = total;
  } else if (next !== null && total !== null) {
    screen.innerHTML = total;
  } else {
    screen.innerHTML = '0';
  }
};
const Calculator = () => {
  [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="calculator">
      <div className="cal-item screen">0</div>
      <div className="cal-item" onClick={performClick}>AC</div>
      <div className="cal-item" onClick={performClick}>+/-</div>
      <div className="cal-item" onClick={performClick}>%</div>
      <div className="cal-item orange" onClick={performClick}>÷</div>
      <div className="cal-item" onClick={performClick}>7</div>
      <div className="cal-item" onClick={performClick}>8</div>
      <div className="cal-item" onClick={performClick}>9</div>
      <div className="cal-item orange" onClick={performClick}>x</div>
      <div className="cal-item" onClick={performClick}>4</div>
      <div className="cal-item" onClick={performClick}>5</div>
      <div className="cal-item" onClick={performClick}>6</div>
      <div className="cal-item orange" onClick={performClick}>-</div>
      <div className="cal-item" onClick={performClick}>1</div>
      <div className="cal-item" onClick={performClick}>2</div>
      <div className="cal-item" onClick={performClick}>3</div>
      <div className="cal-item orange" onClick={performClick}>+</div>
      <div className="cal-item zero" onClick={performClick}>0</div>
      <div className="cal-item" onClick={performClick}>.</div>
      <div className="cal-item orange" onClick={performClick}>=</div>
    </div>
  );
};

export default Calculator;
