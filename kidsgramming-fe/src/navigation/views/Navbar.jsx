import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SchoolIcon from '@mui/icons-material/School'

import {
  brandIconStyles, brandNameStyles, brandNameStylesAuthenticated
} from '../styles/navigation'
import { useNavRoutes } from '../hooks/useNavRoutes'
import { ToggleMenu } from '../components/ToggleMenu'
import { NavbarMenu } from '../components/NavbarMenu'
import { UserMenu } from '../components/UserMenu'
import { LogoNavbar } from '../components/LogoNavbar'
import { SpecialButton } from '../../ui/components/SpecialButton'

export const Navbar = () => {
  const { routes } = useNavRoutes()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* verify authentication and change styles -> authenticated: brandNameStylesAuthenticated  */}
          <SchoolIcon sx={brandIconStyles} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={ brandNameStyles } >
            Kidsgramming
          </Typography>

          {/* verify authentication and change: authenticated */}
          {/* <ToggleMenu routes={ routes }/>
          <NavbarMenu routes={ routes } />
          <UserMenu /> */}

          {/* verify authentication and change: not authenticated */}
          <LogoNavbar />
          <SpecialButton extraStyles={[{ key: 'fontSize', value: '10pt' }, { key: 'height', value: '40px' }]}>Join us!</SpecialButton>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
