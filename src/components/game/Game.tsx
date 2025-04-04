import { useEffect, useState } from 'react'
import '@/styles/game/index.css'
import type { Item, OwnedItems } from '@/types'
import { Grid2 as Grid, Card, CardContent, CardHeader } from '@mui/material'
import { items } from '@/constants/items'
import { Score, Gitcoin } from '@/components/game/core'
import { Skills } from '@/components/game/skills'
import { Store } from '@/components/game/store'

export function Game() {
  const [lines, setLines] = useState(0)
  const [linesPerMillisecond, setLinesPerMillisecond] = useState(0)

  const [ownedItems, setOwnedItems] = useState<OwnedItems>({})

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => prev + linesPerMillisecond)
    }, 100)
    return () => clearInterval(interval)
  }, [linesPerMillisecond])

  useEffect(() => {
    let count = 0

    Object.keys(ownedItems).forEach((name) => {
      const item = items.find(element => element.name === name)

      if (item != null) {
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
      [item.name]: (ownedItems[item.name] || 0) + 1,
    })
  }

  return (
    <>
      <Grid size={3}>
        <Card component="section" className="card">
          <CardContent className="content">
            <Score
              lines={Math.ceil(lines)}
              linesPerSecond={Math.ceil(linesPerMillisecond * 10)}
            />
            <Gitcoin onClick={handleClick} />
          </CardContent>
        </Card>
      </Grid>
      <Grid size="grow">
        <Card component="section" className="card">
          <CardHeader title="Skills" />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Skills skills={ownedItems} />
          </CardContent>
        </Card>
      </Grid>
      <Grid size="grow">
        <Card component="section" className="card">
          <CardHeader title="Store" />
          <CardContent>
            <Store lines={lines} onBuy={handleBuy} />
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}
