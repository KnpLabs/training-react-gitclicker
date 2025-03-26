import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link, Outlet } from 'react-router'
import GitHubIcon from '@mui/icons-material/GitHub'
import '@/styles/layout/navbar.css'

export const Navbar = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link to="/" className="navbar-link">
            <GitHubIcon />
            <Typography variant="h6" color="inherit" noWrap>
              Gitclicker
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}
