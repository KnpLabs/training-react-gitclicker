import React from "react";

class CustomButton extends React.Component {
  render() {
    return (
      <button style={{ backgroundColor: this.props.color }} type="button">
        {this.props.children}
      </button>
    );
  }
}

export default CustomButton;
