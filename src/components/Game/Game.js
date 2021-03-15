import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import './Game.css'
import { start, stop } from 'modules/game'
import { Navbar } from 'components/layout/Navbar'
import { Gitcoin } from 'components/Gitcoin'
import { Score } from 'components/Score'
import { Store } from 'components/Store/Store'
import { Skills } from 'components/Skills'

export const Game = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(start())

    return () => {
      dispatch(stop())
    }
  })

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
