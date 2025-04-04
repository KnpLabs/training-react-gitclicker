import { Item as ItemType } from '@/types'
import { Item } from './Item.tsx'
import { items } from '@/constants/items.ts'
import { Grid2 as Grid } from '@mui/material'

type Props = {
  lines: number
  onBuy: (item: ItemType) => void
}

export function Store({ lines, onBuy }: Props) {
  return (
    <Grid container component="ul" spacing={2} display="flex" flexDirection="column">
      {items.map((item, key) => (
        <Item
          key={key}
          item={item}
          lines={lines}
          onBuy={onBuy}
        />
      ))}
    </Grid>
  )
}
