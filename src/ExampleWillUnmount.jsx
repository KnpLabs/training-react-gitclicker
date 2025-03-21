import React from "react";

class ExampleWillUnmount extends React.Component {
  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  render() {
    return <h1>Goodbye!</h1>;
  }
}

export default ExampleWillUnmount;
