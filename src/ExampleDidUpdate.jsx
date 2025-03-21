import React from "react";

class ExampleDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidUpdate() {
    console.log("Component did update!");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment} type="button">
          Increment
        </button>
      </div>
    );
  }
}

export default ExampleDidUpdate;
