import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import SchoolIcon from '@mui/icons-material/School'

import {
  brandNameStylesSm,
  brandStylesSm, menuStyles, toggleBox
} from '../styles/navigation.js'
import { useNavbar } from '../hooks/useNavbar'
import { ToggleLinks } from './links/ToggleLinks'

export const ToggleMenu = ({ routes }) => {
  const { handleOpenNavMenu, handleCloseNavMenu, anchorElNav } = useNavbar()

  return (
      <>
        <Box sx={ toggleBox }>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit" >
                <MenuIcon />
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={ menuStyles } >
                  <ToggleLinks handleCloseMenu={handleCloseNavMenu} routes={ routes } />
            </Menu>
        </Box>

        <SchoolIcon sx={ brandStylesSm } />
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={ brandNameStylesSm } >
            Kidsgramming
        </Typography>
    </>
  )
}
