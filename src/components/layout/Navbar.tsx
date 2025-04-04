import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link, Outlet } from 'react-router'
import githubIcon from '@/assets/github.svg'
import '@/styles/layout/navbar.css'

export const Navbar = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link to="/" className="navbar-link">
            <img src={githubIcon} alt="Gitcoin" />
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
