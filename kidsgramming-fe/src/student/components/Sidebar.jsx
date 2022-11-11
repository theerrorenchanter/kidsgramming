import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavbarStudent } from './NavbarStudent';
import { Link as RouterLink } from 'react-router-dom'

import PropTypes from 'prop-types'

const drawerWidth = 240;

const menu = [
  { text: 'Inicio', icon: <ArrowBackIcon />, url: '/student/home'},
  { text: 'Oferta de Cursos', icon: <MenuBookIcon />, url: '/student/offering'},
  { text: 'Mis Cursos', icon: <VisibilityIcon />, url: '/student/mycourses'},
  { text: 'Notas', icon: <MilitaryTechIcon />, url: '/student/grades'},
];

const content = menu.map((e) => (
  <ListItem key={e.text} disablePadding>
    <ListItemButton component={ RouterLink } to={e.url}>
      <ListItemIcon sx={{color:'black'}}>
        {e.icon}
      </ListItemIcon>
      <ListItemText sx={{color:'black'}} primary={e.text} />
    </ListItemButton>
  </ListItem>
));

const Sidebar = ({body}) => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavbarStudent title={"Kidsgramming"}/>
      <Drawer variant="permanent"
          sx={{
            width: drawerWidth,flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}>
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {content}
            </List>
          </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {body}
            
      </Box>
    </Box>
    </>
  )
}

export default Sidebar;


Sidebar.propTypes = {
  body: PropTypes.element.isRequired
}
