import Typography from '@material-ui/core/Typography'
import items from '../../items.ts'

type Props = {
  itemName: string
  number: number
}

export const Section = ({ itemName, number }: Props) => {
  const repeat = Array.from([ ...Array(number).keys() ])
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
            src={item.icon}
            alt={item.name}
          />
        )}
      </div>
    </div>
  )
}

