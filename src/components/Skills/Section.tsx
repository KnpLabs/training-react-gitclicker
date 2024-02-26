import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import getItemIcon from '../../utils/getItemIcon'

type Props = {
  itemName: string
  number: number
}

export const Section = ({ itemName, number }: Props) => {
  const repeat = Array.from([ ...Array(number).keys() ])
  const items = useSelector((state: RootState) => state.game.items)
  const item = items.find(element => element.name === itemName)

  if(item == null) {
    return null
  }

  return (
    <div className="section">
      <Typography variant="subtitle2">{item.name}</Typography>
      <div className="icons">
        {repeat.map(key =>
          <img
            key={key}
            src={getItemIcon(item)}
            alt={item.name}
          />
        )}
      </div>
    </div>
  )
}

