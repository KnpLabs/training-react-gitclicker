import './Gitcoin.css'
import githubIcon from '../../assets/github.svg'
import { useAppDispatch } from '../../store'
import { click } from '../../modules/game'

export const Gitcoin = () => {
  const dispatch = useAppDispatch()
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
