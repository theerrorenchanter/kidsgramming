import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'

import { useNavbar } from '../hooks/useNavbar'
import { ToggleLinks } from './links/ToggleLinks'

export const JoinOptions = () => {
  const { handleOpenUserMenu, anchorElUser, handleCloseUserMenu } = useNavbar()

  return (
    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open options">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User"/>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu} >
              <ToggleLinks handleCloseMenu={handleCloseUserMenu} routes={ links } />
            </Menu>
          </Box>
  )
}
