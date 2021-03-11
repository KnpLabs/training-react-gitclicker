import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'
import { Game } from './Game'
import { Home } from './Home'

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
