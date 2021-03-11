import React from 'react'
import PropTypes from 'prop-types'

export const Score = ({ lines, linesPerSecond }) => (
  <>
    <h3 style={{fontFamily: 'Orbitron'}}>{parseInt(lines)} lines</h3>
    <small>per second: {linesPerSecond}</small>
  </>
)

Score.propTypes = {
  lines: PropTypes.number.isRequired,
  linesPerSecond: PropTypes.number.isRequired,
}
