import '@/styles/game/core/gitcoin.css'
import githubIcon from '@/assets/github.svg'
import { click } from '@/modules/game'
import { useDispatch } from 'react-redux'

export function Gitcoin() {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(click())

  return (
    <button className="gitcoin" onClick={handleClick} type="button">
      <img src={githubIcon} alt="Gitcoin" />
    </button>
  )
}
