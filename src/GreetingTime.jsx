import React from "react";

/**
 * props:
 * name: string
 * isMorning: boolean
 */
class GreetingTime extends React.Component {
  render() {
    const { name, isMorning } = this.props;

    return (
      <div>
        {isMorning ? <h1>Good Morning {name}</h1> : <h2>Goodbye {name}</h2>}
      </div>
    );
  }
}

export default GreetingTime;
