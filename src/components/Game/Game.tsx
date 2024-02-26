import { useEffect } from 'react'
import './Game.css'
import { Paper } from '@material-ui/core'
import { Gitcoin } from '../Gitcoin'
import { Score } from '../Score'
import { Store } from '../Store'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store.ts'
import { buyItem, click, loop } from '../../modules/game.ts'
import { Item } from '../../type.ts'
import { Navbar } from '../layout/Navbar'
import { Skills } from '../Skills'

export const Game = () => {
  const dispatch = useDispatch()
  const lines = useSelector((state: RootState) => state.game.lines)
  const skills = useSelector((state: RootState) => state.game.skills)
  const linesPerMillisecond = useSelector((state: RootState) => state.game.linesPerMillisecond)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(loop())
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const handleClick = () => dispatch(click())
  const handleBuy = (item: Item) => dispatch(buyItem(item))

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
          <Skills skills={skills} />
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
