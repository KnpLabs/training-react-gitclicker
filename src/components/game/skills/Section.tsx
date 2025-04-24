import { RootState } from '@/store'
import getItemIcon from '@/utils/getItemIcon'
import { Box, Grid2 as Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

type Props = {
  itemName: string
  number: number
}

export const Section = ({ itemName, number }: Props) => {
  const items = useSelector((state: RootState) => state.game.items)
  const item = items.find(element => element.name === itemName)

  if (item == null) {
    return null
  }

  return (
    <Box component="section">
      <Typography variant="subtitle2" marginBottom={1}>{item.name}</Typography>
      <Grid container component="ul" gap={1}>
        {Array.from({ length: number }).map((_, index) => (
          <li
            key={index}
          >
            <img
              src={getItemIcon(item)}
              alt={item.name}
              style={{
                width: '2rem',
              }}
            />
          </li>
        ))}
      </Grid>
    </Box>
  )
}
