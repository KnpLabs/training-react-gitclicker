// ./src/components/Store.tsx

import './Store.css'
import items from '../items.json'
import { Item } from '../type';

type Props = {
  lines: number;
  onBuy: (item: Item) => void;
}

export function Store({ lines, onBuy }: Props) {
  const canBuy = (item: Item) => {
    return lines >= item.price
  }

  return (
    <ul>
    {items.map((item, key) =>
      <li key={key} className="item">
        <span>{item.name} - {item.price}</span>
        <button
          onClick={() => onBuy(item)}
          disabled={!canBuy(item)}
        >
          Buy
        </button>
      </li>
    )}
    </ul>
  )
}

