import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import numberFormat from 'utils/numberFormat'
import getItemIcon from 'utils/getItemIcon'
import './Item.css'

export const Item = ({ item, lines, onBuy }) => {
  const canBuy = item => {
    return lines >= item.price
  }

  const linePerSecond = parseInt(item.multiplier * 10)

  return (
    <div 
      className="item" 
      onClick={() => canBuy(item) && onBuy(item)}
    >
      <div className="title">
        <img src={getItemIcon(item)} alt={item.name} />
        <div>
          <Typography variant="subtitle1">{item.name}</Typography>
          <small>{numberFormat(linePerSecond)} lines per second</small>
        </div>
      </div>
      <Button 
        name="buy"
        variant="contained"
        color="secondary"
        disabled={!canBuy(item)}
      >
        {numberFormat(item.price)}
      </Button>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    multiplier: PropTypes.number.isRequired,
    icon: PropTypes.elementType,
  }).isRequired,
  lines: PropTypes.number.isRequired,
  onBuy: PropTypes.func.isRequired,
}
