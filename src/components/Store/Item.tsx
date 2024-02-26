import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './Item.css'
import { Item as ItemType } from '../../type'
import getItemIcon from '../../utils/getItemIcon'

type Props = {
  item: ItemType;
  lines: number;
  onBuy: (item: ItemType) => void;
}

export const Item = ({ item, lines, onBuy }: Props) => {
  const canBuy = (item: ItemType) => {
    return lines >= item.price
  }

  const linePerSecond = Math.ceil(item.linesPerMillisecond * 10)

  return (
    <div
      className="item"
      onClick={() => canBuy(item) && onBuy(item)}
    >
      <div className="title">
        <img src={getItemIcon(item)} alt={item.name} />
        <div>
          <Typography variant="subtitle1">{item.name}</Typography>
          <small>{linePerSecond} lines per second</small>
        </div>
      </div>
      <Button
        variant="contained"
        color="secondary"
        disabled={!canBuy(item)}
      >
        {item.price}
      </Button>
    </div>
  )
}
