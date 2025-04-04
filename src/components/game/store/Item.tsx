import '@/styles/game/store/item.css'
import { Typography, Button } from '@mui/material'
import { Item as ItemType } from '@/types'

type Props = {
  item: ItemType
  lines: number
  onBuy: (item: ItemType) => void
}

export function Item({ item, lines, onBuy }: Props) {
  const canBuy = lines >= item.price

  const linePerSecond = Math.ceil(item.linesPerMillisecond * 10)

  return (
    <li
      className="item"
      onClick={() => canBuy && onBuy(item)}
    >
      <div className="title">
        <img src={item.icon} alt={item.name} />
        <div>
          <Typography variant="subtitle1">{item.name}</Typography>
          <small>
            {linePerSecond}
            {' '}
            lines per second
          </small>
        </div>
      </div>
      <Button
        variant="contained"
        color="secondary"
        disabled={!canBuy}
      >
        {item.price}
      </Button>
    </li>
  )
}
