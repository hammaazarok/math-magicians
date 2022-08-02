import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prefer-stateless-function,
 no-useless-constructor
 , react/destructuring-assignment
 ,react/prop-types */

class CalItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type === 'orange') {
      return (
        <div className="cal-item orange">
          {this.props.value}
        </div>
      );
    } if (this.props.type === 'screen') {
      return (
        <div className="cal-item screen">
          {this.props.value}
        </div>
      );
    } if (this.props.type === 'zero') {
      return (
        <div className="cal-item zero">
          {this.props.value}
        </div>
      );
    }
    return (<div className="cal-item">{this.props.value}</div>);
  }
}
CalItem.defaultProps = {
  type: '1', value: '',
};
CalItem.propsTypes = { name: PropTypes.any, value: PropTypes.any };
export default CalItem;
