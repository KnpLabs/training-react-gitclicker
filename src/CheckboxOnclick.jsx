import React from "react";

class CheckboxOnclick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { name, label } = this.props;

    return (
      <div>
        <input
          name={name}
          type="checkbox"
          checked={this.state.checked}
          onClick={this.handleCheck}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}

export default CheckboxOnclick;
