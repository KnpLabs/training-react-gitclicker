import React from 'react'
import { useDispatch } from 'react-redux'
import './Gitcoin.css'
import { click } from 'modules/game'
import githubIcon from 'assets/github.svg'

export const Gitcoin = () => {
  const disptach = useDispatch()

  const handleClick = () => disptach(click())

  return (
    <button
      className="gitcoin"
      onClick={handleClick}
    >
      <img src={githubIcon} alt="Gitcoin" />
    </button>
  )
}
