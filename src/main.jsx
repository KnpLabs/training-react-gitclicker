import React from "react";
import { createRoot } from "react-dom/client";
import Checkbox from "./Checkbox";
import CheckboxOnclick from "./CheckboxOnclick";
import ExampleDidMount from "./ExampleDidMount";
import ExampleDidUpdate from "./ExampleDidUpdate";
import ExampleWillUnmount from "./ExampleWillUnmount";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent} type="button">
          {this.state.showComponent ? "Hide Component" : "Show Component"}
        </button>
        {this.state.showComponent && <ExampleWillUnmount />}
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Checkbox name="example" label="Example Checkbox" />
    <CheckboxOnclick name="exampleOnclick" label="Example Checkbox Onclick" />
    <h1>React Lifecycle Methods</h1>
    <ExampleDidMount />
    <ExampleDidUpdate />
    <Example />
  </>,
);
