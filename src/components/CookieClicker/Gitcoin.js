import React from 'react'
import './Gitcoin.css'
import githubIcon from 'assets/Github.png'

export class Gitcoin extends React.Component {
  render() {
    const { onClick } = this.props

    return (
      <button
        className="gitcoin"
        onClick={onClick}
      >
        <img src={githubIcon} alt="Gitcoin" />
      </button>
    );
  }
}
