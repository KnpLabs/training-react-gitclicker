// ./src/components/Store.jsx

import './Store.css'
import items from '../items.json'

export function Store({ lines, onBuy }) {
  const canBuy = item => {
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
