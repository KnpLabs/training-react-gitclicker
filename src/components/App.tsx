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
import { Rules } from './Rules'
import { ItemsList } from './Rules/ItemsList'
import { CreateItemForm } from './Rules/CreateItemForm'
import { EditItemForm } from './Rules/EditItemForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/gitclicker',
    element: <Game />
  },
  {
    path: '/rules',
    element: <Rules />,
    children: [
      {
        path: '/rules',
        element: <ItemsList />
      },
      {
        path: '/rules/add',
        element: <CreateItemForm />
      },
      {
        path: '/rules/edit/:id',
        element: <EditItemForm />
      }
    ]
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
