import React from "react";
import "./Game.css";
import { Gitcoin } from "./Gitcoin";
import { Score } from "./Score";

export class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: 0,
    };
  }

  handleClick() {
    this.setState({
      lines: this.state.lines + 1,
    });
  }

  render() {
    return (
      <main className="game">
        <Score lines={this.state.lines} />
        <Gitcoin onClick={this.handleClick.bind(this)} />
      </main>
    );
  }
}
