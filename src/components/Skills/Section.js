import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import getItemIcon from 'utils/getItemIcon' 

export const Section = ({ itemName, number }) => {
  const repeat = Array.from([ ...Array(number).keys() ])
  const items = useSelector(state => state.game.items)
  const item = items.find(element => element.name === itemName)
  
  if (!item) return null

  return (
    <div className="section">
      <Typography variant="subtitle2">{item.name}</Typography>
      <div className="icons">
        {repeat.map(key =>
          <img
            key={key}
            src={getItemIcon(item)}
            alt={item.name}
          />
        )}
      </div>
    </div>
  )
}

Section.propTypes = {
  itemName: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}
