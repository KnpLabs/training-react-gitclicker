import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import items from '../../items' 

export const Section = ({ itemName, number }) => {
  const repeat = Array.from([ ...Array(number).keys() ])
  const item = items.find(element => element.name === itemName)

  return (
    <div className="section">
      <Typography variant="subtitle2">{item.name}</Typography>
      <div className="icons">
        {repeat.map(key =>
          <img
            key={key}
            src={item.icon}
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
