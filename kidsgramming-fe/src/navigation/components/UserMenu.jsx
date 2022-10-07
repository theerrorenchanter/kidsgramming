import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'

import { useNavbar } from '../hooks/useNavbar'
import { ToggleLinks } from './links/ToggleLinks'

const routes = {
  login: {
    description: 'Login',
    to: '/auth/login'
  },
  register: {
    description: 'Register',
    to: '/auth/register'
  }
}

export const UserMenu = () => {
  const { handleOpenNavMenu, anchorElNav, handleCloseNavMenu } = useNavbar()

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
          <Avatar alt="User" />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu} >
        <ToggleLinks handleCloseMenu={handleCloseNavMenu} routes={ routes } />
      </Menu>
    </Box>
  )
}
