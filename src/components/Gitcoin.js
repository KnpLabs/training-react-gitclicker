import React from 'react'
import './Gitcoin.css'
import githubIcon from 'assets/github.svg'

export const Gitcoin = ({ onClick }) => {
  return (
    <button
      className="gitcoin"
      onClick={onClick}
    >
      <img src={githubIcon} alt="Gitcoin" />
    </button>
  );
}
