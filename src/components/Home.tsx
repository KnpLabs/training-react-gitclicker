import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Navbar } from './layout/Navbar'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

export function Home() {
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Gitclicker
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Dogs have boundless enthusiasm but no sense of shame. I should have a dog as a life coach.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/gitclicker">
                    <Button variant="contained" color="primary">
                      Play
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/rules">
                    <Button variant="contained" color="primary">
                      Rules
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}
