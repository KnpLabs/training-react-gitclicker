// ./src/components/Home.tsx

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h1 className="main-title">Welcome to gitclicker!</h1>

      <Link to="/gitclicker">Start a new Game</Link>
    </div>
  )
}
