import React from 'react';
import CalItem from './cal-item';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <CalItem type="screen" value="0" />
        <CalItem value="AC" />
        <CalItem value="+/-" />
        <CalItem value="%" />
        <CalItem type="orange" value="÷" />
        <CalItem value="7" />
        <CalItem value="8" />
        <CalItem value="9" />
        <CalItem type="orange" value="X" />
        <CalItem value="4" />
        <CalItem value="5" />
        <CalItem value="6" />
        <CalItem type="orange" value="-" />
        <CalItem value="1" />
        <CalItem value="2" />
        <CalItem value="3" />
        <CalItem type="orange" value="+" />
        <CalItem type="zero" value="0" />
        <CalItem value="." />
        <CalItem type="orange" value="=" />
      </div>

    );
  }
}

export default Calculator;
