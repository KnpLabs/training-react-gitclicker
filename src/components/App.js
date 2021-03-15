import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'
import { Game } from './Game'
import { Home } from './Home'
import { Rules } from './Rules'
import configureStore from '../configureStore'

const store = configureStore()

export const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
