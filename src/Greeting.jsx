import React from "react";

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.firstName} {this.props.lastName}
        </h1>
        <h2>Good to see you!</h2>
      </div>
    );
  }
}

export default Greeting;
