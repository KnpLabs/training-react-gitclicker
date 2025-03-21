import React from "react";

export class Score extends React.Component {
  render() {
    const { lines } = this.props;

    return <h3>{lines} lines</h3>;
  }
}
