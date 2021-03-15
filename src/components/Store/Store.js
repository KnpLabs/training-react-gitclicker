import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import './Store.css'
import { buyItem } from 'modules/game'
import { Item } from './Item'

export const Store = () => {
  const dispatch = useDispatch()
  const lines = useSelector(state => state.game.lines)
  const items = useSelector(state => state.game.items)

  const handleBuy = item => {
    dispatch(buyItem(item))
  }

  return (
    <div className="store">
      <Typography variant="h5">Store</Typography>

      {items.map((item, key) =>
        <Item 
          key={key} 
          item={item}
          lines={lines}
          onBuy={handleBuy}
        />
      )}
    </div>
  )
}
