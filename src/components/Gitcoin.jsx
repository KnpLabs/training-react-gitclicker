import React from "react";
import "./Gitcoin.css";
import githubIcon from "../assets/github.svg";

export class Gitcoin extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <button className="gitcoin" onClick={onClick} type="button">
        <img src={githubIcon} alt="Gitcoin" />
      </button>
    );
  }
}
