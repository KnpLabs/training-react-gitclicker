import { useEffect } from 'react'
import './Game.css'
import Paper from '@material-ui/core/Paper'
import { Navbar } from '../layout/Navbar'
import { Gitcoin } from '../Gitcoin'
import { Score } from '../Score'
import { Store } from '../Store'
import { Skills } from '../Skills'
import { useDispatch } from 'react-redux'
import { loop } from '../../modules/game.ts'

export const Game = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(loop())
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />
      <main className="game">
        <Paper elevation={3} className="left">
          <Score />
          <Gitcoin />
        </Paper>

        <Paper elevation={3} className="center">
          <Skills />
        </Paper>

        <Paper elevation={3} className="right">
          <Store />
        </Paper>
      </main>
    </>
  )
}
