import React from 'react'
import { useSelector } from 'react-redux'
import numberFormat from 'utils/numberFormat'

export const Score = () => {
  const lines = useSelector(state => numberFormat(state.game.lines))
  const linesPerSecond = useSelector(state => numberFormat(state.game.linesPerMillisecond * 10))

  return (
    <>
      <h3 style={{fontFamily: 'Orbitron'}}>{lines} lines</h3>
      <small>per second: {linesPerSecond}</small>
    </>
  )
}
