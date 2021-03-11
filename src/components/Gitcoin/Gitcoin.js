import React from 'react'
import PropTypes from 'prop-types'
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
  )
}

Gitcoin.propTypes = {
  onClick: PropTypes.func.isRequired,
}
