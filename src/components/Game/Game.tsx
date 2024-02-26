import { useEffect, useState } from 'react'
import './Game.css'
import { Paper } from '@material-ui/core'
import { Gitcoin } from '../Gitcoin'
import { Score } from '../Score'
import { Store } from '../Store'
import items from '../../items.ts'
import { Item, OwnedItems } from '../../type'
import { Navbar } from '../layout/Navbar'
import { Skills } from '../Skills'

export function Game() {
  const [lines, setLines] = useState(0)
  const [linesPerMillisecond, setLinesPerMillisecond] = useState(0)

  const [ownedItems, setOwnedItems] = useState<OwnedItems>({})

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

      if(item != null) {
        count += item.linesPerMillisecond * ownedItems[name]
      }
    })

    setLinesPerMillisecond(count)
  }, [ownedItems])


  const handleClick = () => {
    setLines(lines + 1)
  }

  const handleBuy = (item: Item) => {
    setLines(lines - item.price)
    setOwnedItems({
      ...ownedItems,
      [item.name]: (ownedItems[item.name] || 0) + 1
    })
  }

  return (
    <>
      <Navbar />
      <main className="game">
        <Paper elevation={3} className="left">
          <Score
            lines={Math.ceil(lines)}
            linesPerSecond={Math.ceil(linesPerMillisecond * 10)}
          />
          <Gitcoin onClick={handleClick} />
        </Paper>

        <Paper elevation={3} className="center">
          <Skills skills={ownedItems} />
        </Paper>

        <Paper elevation={3} className="right">
          <Store
            lines={Math.ceil(lines)}
            onBuy={handleBuy}
          />
        </Paper>
      </main>
    </>
  )
}
