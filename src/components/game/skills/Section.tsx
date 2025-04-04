import { items } from '@/constants/items'
import { Box, Grid2 as Grid, Typography } from '@mui/material'

type Props = {
  itemName: string
  number: number
}

export const Section = ({ itemName, number }: Props) => {
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
              src={item.icon}
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
