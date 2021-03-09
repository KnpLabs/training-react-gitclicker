import React from 'react'
import './Store.css'
import items from '../items.json'

export const Store = ({ lines }) => {
  const canBuy = item => {
    return lines >= item.price
  }

  return (
    <ul>
    {items.map((item, key) =>
      <li key={key} className="item">
        <span>{item.name} - {item.price}</span>
        <button
          disabled={!canBuy(item)}
        >
          Buy
        </button>
      </li>
    )}
    </ul>
  )
}
