import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import SchoolIcon from '@mui/icons-material/School'

import {
  brandIconStyles, brandNameStyles
} from '../styles/navigation.js'
import { useNavRoutes } from '../hooks/useNavRoutes'
import { ToggleMenu } from '../components/ToggleMenu.jsx'
import { NavbarMenu } from '../components/NavbarMenu.jsx'
import { UserMenu } from '../components/UserMenu.jsx'

export const Navbar = () => {
  const { routes } = useNavRoutes()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <SchoolIcon sx={brandIconStyles} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={ brandNameStyles } >
            Kidsgramming
          </Typography>

          <ToggleMenu routes={ routes }/>
          <NavbarMenu routes={routes} />
          <UserMenu />

        </Toolbar>
      </Container>
    </AppBar>
  )
}
