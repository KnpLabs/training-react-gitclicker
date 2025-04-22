import { Item as ItemType } from '@/types'
import { Item } from './Item.tsx'
import { Grid2 as Grid } from '@mui/material'
import { buyItem } from '@/modules/game.ts'
import { RootState } from '@/store.ts'
import { useSelector, useDispatch } from 'react-redux'

export function Store() {
  const lines = useSelector((state: RootState) => state.game.lines)
  const items = useSelector((state: RootState) => state.game.items)
  const dispatch = useDispatch()
  const handleBuy = (item: ItemType) => dispatch(buyItem(item))

  return (
    <Grid container component="ul" spacing={2} display="flex" flexDirection="column">
      {items.map((item, key) => (
        <Item
          key={key}
          item={item}
          lines={lines}
          onBuy={handleBuy}
        />
      ))}
    </Grid>
  )
}
