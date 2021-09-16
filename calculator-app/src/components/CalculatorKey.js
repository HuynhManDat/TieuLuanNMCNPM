import React from "react";
import PointTarget from "react-point";

//component tạo phím của máy tính
export default class CalculatorKey extends React.Component {
    render() {
      const { onPress, className, ...props } = this.props;
  
      return (
        <PointTarget onPoint={onPress}>
          <button className={`calculator-key ${className}`} {...props} />
        </PointTarget>
      );
    }
  }