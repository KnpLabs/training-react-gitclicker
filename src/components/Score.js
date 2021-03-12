import React from 'react'
import { useSelector } from 'react-redux'

export const Score = () => {
  const lines = useSelector(state => parseInt(state.game.lines))
  const linesPerSecond = useSelector(state => parseInt(state.game.linesPerMillisecond * 10))

  return (
    <>
      <h3 style={{fontFamily: 'Orbitron'}}>{lines} lines</h3>
      <small>per second: {linesPerSecond}</small>
    </>
  )
}
