import React from "react";

/**
 * @note This is a basic checkbox component without onClick event handling.
 * 💡 Please check the console for warning messages.
 */
class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false,
    };
  }

  render() {
    const { name, label } = this.props;

    return (
      <div>
        <input name={name} type="checkbox" checked={this.state.check} />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}

export default Checkbox;
