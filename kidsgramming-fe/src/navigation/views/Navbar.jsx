import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SchoolIcon from '@mui/icons-material/School'

import {
  brandIconStyles, brandNameStyles
} from '../styles/navigation'
import { useNavRoutes } from '../hooks/useNavRoutes'
import { ToggleMenu } from '../components/ToggleMenu'
import { NavbarMenu } from '../components/NavbarMenu'
import { UserMenu } from '../components/UserMenu'

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
          <NavbarMenu routes={ routes } />
          <UserMenu />

        </Toolbar>
      </Container>
    </AppBar>
  )
}
