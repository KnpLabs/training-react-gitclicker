import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Score = () => {
  const lines = useSelector((state: RootState) => state.game.lines)
  const linesPerMillisecond = useSelector((state: RootState) => state.game.linesPerMillisecond)

  return (
    <>
      <h3 style={{fontFamily: 'Orbitron'}}>{Math.ceil(lines)} lines</h3>
      <small>per second: {Math.ceil(linesPerMillisecond * 10)}</small>
    </>
  )
}
