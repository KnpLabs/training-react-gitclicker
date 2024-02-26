import Typography from '@material-ui/core/Typography'
import './Store.css'
import { Item } from './Item'
import { Item as ItemType } from '../../type'
import { useSelector } from 'react-redux'
import { buyItem } from '../../modules/game'
import { RootState, useAppDispatch } from '../../store'

export const Store = () => {
  const lines = useSelector((state: RootState) => state.game.lines)
  const items = useSelector((state: RootState) => state.game.items)
  const dispatch = useAppDispatch()
  const handleBuy = (item: ItemType) => dispatch(buyItem(item))

  return (
    <div className="store">
      <Typography variant="h5">Store</Typography>

      {items.map((item) =>
        <Item
          key={item.id}
          item={item}
          lines={lines}
          onBuy={handleBuy}
        />
      )}
    </div>
  )
}
