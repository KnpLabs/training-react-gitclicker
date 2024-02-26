import './Store.css'
import items from '../../items'
import { Item as ItemType } from '../../type'
import Typography from '@material-ui/core/Typography'
import { Item } from './Item'
import { useSelector } from 'react-redux'
import { buyItem } from '../../modules/game'
import { RootState, useAppDispatch } from '../../store'

export const Store = () => {
  const lines = useSelector((state: RootState) => state.game.lines)
  const dispatch = useAppDispatch()
  const handleBuy = (item: ItemType) => dispatch(buyItem(item))

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
