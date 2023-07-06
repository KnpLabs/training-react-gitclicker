import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'
import { Game } from './Game'
import { Home } from './Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/gitclicker',
    element: <Game />
  }
])

const store = configureStore()

const App = () => {
  return (
    <Provider store={ store }>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
