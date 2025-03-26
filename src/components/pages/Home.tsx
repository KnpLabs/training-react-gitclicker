import { Container, Typography, Grid2 as Grid, Button } from '@mui/material'
import { Link } from 'react-router'

export default function Home() {
  return (
    <Container maxWidth="sm" component="main">
      <Grid container spacing={2} justifyContent="center">
        <Typography component="h1" variant="h2" color="textPrimary">
          Gitclicker
        </Typography>
        <Typography component="p" variant="h5" align="center" color="textSecondary">
          Dogs have boundless enthusiasm but no sense of shame. I should have a dog as a life coach.
        </Typography>

        <Link to="/gitclicker">
          <Button variant="contained" color="primary">
            Play
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}
