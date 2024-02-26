import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Game } from './Game'
import { Home } from './Home'
import './App.css'
import { CssBaseline } from '@material-ui/core'
import { Provider } from 'react-redux'
import store from '../store'

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

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  )
}
