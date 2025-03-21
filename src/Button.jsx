import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <button className="btn" onClick={this.props.onClick} type="button">
        {this.props.children}
      </button>
    );
  }
}

export default Button;
