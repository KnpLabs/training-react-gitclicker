import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import './Store.css'
import { Item } from './Item'
import items from '../../items'

export const Store = ({ lines, onBuy }) => {
  return (
    <div className="store">
      <Typography variant="h5">Store</Typography>

      {items.map((item, key) =>
        <Item 
          key={key} 
          item={item}
          lines={lines}
          onBuy={onBuy}
        />
      )}
    </div>
  )
}

Store.propTypes = {
  lines: PropTypes.number.isRequired,
  onBuy: PropTypes.func.isRequired,
}
