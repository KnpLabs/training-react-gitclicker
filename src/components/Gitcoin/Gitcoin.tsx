import './Gitcoin.css'
import githubIcon from '../../assets/github.svg'
import { useDispatch } from 'react-redux'
import { click } from '../../modules/game'

export const Gitcoin = () => {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(click())

  return (
    <button
      className="gitcoin"
      onClick={handleClick}
    >
      <img src={githubIcon} alt="Gitcoin" />
    </button>
  )
}
