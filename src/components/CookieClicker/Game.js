import React from 'react'
import './Game.css'
import { Gitcoin } from './Gitcoin'
import { Score } from './Score'

export class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicks: 0
    }
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <main className="game">
        <Score clicks={this.state.clicks} />
        <Gitcoin onClick={this.handleClick.bind(this)} />
      </main>
    );
  }
}
