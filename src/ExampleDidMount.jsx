import React from "react";

class ExampleDidMount extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component did mount!");
  }

  render() {
    return <h1>Component Mounted</h1>;
  }
}

export default ExampleDidMount;
