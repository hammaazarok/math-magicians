import React from 'react';
import calculate from '../logic/calculate';
/* eslint-disable react/prefer-stateless-function
 ,no-useless-constructor
 ,react/destructuring-assignment
 ,jsx-a11y/interactive-supports-focus
 ,jsx-a11y/click-events-have-key-events
 ,jsx-a11y/no-static-element-interactions
 ,react/prop-types
 ,react/no-unused-state */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.performClick = this.performClick.bind(this);
  }

  performClick(e) {
    const value = e.target.innerHTML;
    const { total, next, operation } = calculate(this.state, value);
    this.setState({ total, next, operation });
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
  }

  render() {
    return (
      <div className="calculator">
        <div className="cal-item screen">0</div>
        <div className="cal-item" onClick={this.performClick}>AC</div>
        <div className="cal-item" onClick={this.performClick}>+/-</div>
        <div className="cal-item" onClick={this.performClick}>%</div>
        <div className="cal-item orange" onClick={this.performClick}>÷</div>
        <div className="cal-item" onClick={this.performClick}>7</div>
        <div className="cal-item" onClick={this.performClick}>8</div>
        <div className="cal-item" onClick={this.performClick}>9</div>
        <div className="cal-item orange" onClick={this.performClick}>x</div>
        <div className="cal-item" onClick={this.performClick}>4</div>
        <div className="cal-item" onClick={this.performClick}>5</div>
        <div className="cal-item" onClick={this.performClick}>6</div>
        <div className="cal-item orange" onClick={this.performClick}>-</div>
        <div className="cal-item" onClick={this.performClick}>1</div>
        <div className="cal-item" onClick={this.performClick}>2</div>
        <div className="cal-item" onClick={this.performClick}>3</div>
        <div className="cal-item orange" onClick={this.performClick}>+</div>
        <div className="cal-item zero" onClick={this.performClick}>0</div>
        <div className="cal-item" onClick={this.performClick}>.</div>
        <div className="cal-item orange" onClick={this.performClick}>=</div>
      </div>
    );
  }
}

export default Calculator;
