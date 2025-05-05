import './Gitcoin.css'
import githubIcon from '@/assets/github.svg'

type Props = {
  onClick: () => void
}

export function Gitcoin({ onClick }: Props) {
  return (
    <button className="gitcoin" onClick={onClick} type="button">
      <img src={githubIcon} alt="Gitcoin" />
    </button>
  )
}
