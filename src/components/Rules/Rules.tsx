import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { fetchItems } from '../../modules/rules'
import { Navbar } from '../layout/Navbar'
import { useAppDispatch } from '../../store'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

export const Rules = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Configurator
            </Typography>
            <Outlet />
          </Container>
        </div>
      </main>
    </>
  )
}
