// App.tsx

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
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

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
