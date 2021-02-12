import React from 'react'

export class Checkbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      check: false,
    };
  }

  render() {
    const { name, label } = this.props

    return (
      <div>
        <input
          name={name}
          type="checkbox"
          checked={this.state.checked ? 'checked' : ''}
        />
        <label>{label}</label>
      </div>
    );
  }
}
