import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import GithubIcon from '@material-ui/icons/GitHub'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}))

export const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/">
          <GithubIcon className={classes.icon} />
        </Link>
        <Link to="/">
          <Typography variant="h6" color="inherit" noWrap>
            Gitclicker
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
