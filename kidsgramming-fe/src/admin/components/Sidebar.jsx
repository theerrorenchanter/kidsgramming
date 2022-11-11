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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavbarAdmin } from './NavbarAdmin';
import { Link as RouterLink } from 'react-router-dom'

import PropTypes from 'prop-types'

const drawerWidth = 240;

const menu = [ 
  { text: 'Inicio', icon: <ArrowBackIcon />, url: '/admin/home'},
  { text: 'Oferta de Cursos', icon: <MenuBookIcon />, url: '/admin/offering'},
  { text: 'Agregar Estudiante', icon: <PersonAddIcon />, url: '/admin/addstudent'},
  { text: 'Agregar Profesor', icon: <PersonAddIcon />, url: '/admin/addteacher'},
  { text: 'Agregar Curso', icon: <LibraryAddIcon />, url: '/admin/addcourse'}
 
];

const content = menu.map((e) => (
  <ListItem key={e.text} disablePadding>
    <ListItemButton component={ RouterLink } to={e.url}>
      <ListItemIcon sx={{color: 'black'}}>
        {e.icon}
      </ListItemIcon>
      <ListItemText sx={{color: 'black'}} primary={e.text} />
    </ListItemButton>
  </ListItem>
));

const Sidebar = ({body}) => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavbarAdmin title={"Kidsgramming"}/>
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
