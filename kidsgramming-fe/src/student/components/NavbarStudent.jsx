import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import PropTypes from 'prop-types'

const settings = ['Perfil', 'Cerrar Sesión'];

export const NavbarStudent= ({ title }) => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography variant="h6" noWrap component="a" href="/"
              sx={{
                mr: 2, display: { xs: 'none', md: 'flex' },fontFamily: 'monospace',
                fontWeight: 700,letterSpacing: '.3rem',color: 'inherit',textDecoration: 'none',
              }}>
              {title}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              
            </Box>
            <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography variant="h5" noWrap component="a" href=""
              sx={{mr: 2,display: { xs: 'flex', md: 'none' },flexGrow: 1,fontFamily: 'monospace',
                  fontWeight: 700,letterSpacing: '.3rem',color: 'inherit',textDecoration: 'none',
              }}>
              {title}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color:'inherit'}}>
                  <AccountCircleIcon/>
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: '45px' }}
                id="menu-appbar" anchorEl={anchorElUser}
                anchorOrigin={{vertical: 'top',horizontal: 'right',}}
                keepMounted
                transformOrigin={{vertical: 'top',horizontal: 'right',}}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </AppBar>
  );
}

NavbarStudent.propTypes = {
  title: PropTypes.string.isRequired
}