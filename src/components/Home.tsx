import { Link } from 'react-router'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Gitclicker!</h1>
      <Link to="/gitclicker">
        Start a new game !
      </Link>
    </div>
  )
}
