import React, { useState, useEffect } from 'react'
import './Game.css'
import Paper from '@material-ui/core/Paper'
import { Navbar } from 'components/layout/Navbar'
import { Gitcoin } from 'components/Gitcoin'
import { Score } from 'components/Score'
import { Store } from 'components/Store/Store'
import { Skills } from 'components/Skills'
import items from '../../items'

export const Game = () => {
  const [lines, setLines] = useState(0)
  const [linesPerMillisecond, setLinesPerMillisecond] = useState(0)
  const [ownedItems, setOwnedItems] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(lines + linesPerMillisecond)
    }, 100)

    return () => clearInterval(interval)
  })

  useEffect(() => {
    let count = 0

    Object.keys(ownedItems).forEach(name => {
      const item = items.find(element => element.name === name)
      count += item.multiplier * ownedItems[name]
    })

    setLinesPerMillisecond(count)
  }, [ownedItems])

  const handleClick = () => {
    setLines(lines + 1)
  }

  const handleBuy = item => {
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
            lines={lines}
            linesPerSecond={parseInt(linesPerMillisecond * 10)}
          />
          <Gitcoin onClick={handleClick} />
        </Paper>

        <Paper elevation={3} className="center">
          <Skills skills={ownedItems} />
        </Paper>

        <Paper elevation={3} className="right">
          <Store
            lines={lines}
            onBuy={handleBuy}
          />
        </Paper>
      </main>
    </>
  )
}
