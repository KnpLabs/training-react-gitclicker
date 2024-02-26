// ./src/components/Store.tsx

import './Store.css'
import items from '../../items.ts'
import { Item as ItemType } from '../../type'
import { Typography } from '@material-ui/core'
import { Item } from './Item.tsx'

type Props = {
  lines: number;
  onBuy: (item: ItemType) => void;
}

export function Store({ lines, onBuy }: Props) {
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

