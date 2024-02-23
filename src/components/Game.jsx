// ./src/components/Game.jsx

import { useEffect, useState } from 'react';
import './Game.css'
import { Gitcoin } from './Gitcoin'
import { Score } from './Score'
import { Store } from './Store';
import items from '../items.json'
import { Office } from './Office';

export function Game() {
  const [lines, setLines] = useState(0);
  const [linesPerMillisecond, setLinesPerMillisecond] = useState(0)
  const [ownedItems, setOwnedItems] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(lines + linesPerMillisecond)
    }, 100)

    return () => clearInterval(interval)
  }, [lines, linesPerMillisecond])

  useEffect(() => {
    let count = 0

    Object.keys(ownedItems).forEach(name => {
      const item = items.find(element => element.name === name)
      count += item.linesPerMillisecond * ownedItems[name]
    })

    setLinesPerMillisecond(count)
  }, [ownedItems])


  const handleClick = () => {
    setLines(lines + 1);
  }

  const handleBuy = item => {
    setLines(lines - item.price)
    setOwnedItems({
      ...ownedItems,
      [item.name]: (ownedItems[item.name] || 0) + 1
    })
  }

  return (
    <main className="game">
      <section className="left">
        <Score
          lines={Math.ceil(lines)}
          linesPerSecond={Math.ceil(linesPerMillisecond * 10)}
        />
        <Gitcoin onClick={handleClick} />
      </section>

      <section className="center">
        <Office items={ownedItems} />
      </section>

      <section className="right">
        <Store
          lines={lines}
          onBuy={handleBuy}
        />
      </section>
    </main>
  )
}
