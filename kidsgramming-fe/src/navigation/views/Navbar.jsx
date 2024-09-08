import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SchoolIcon from '@mui/icons-material/School'

import {
  brandIconStyles, brandNameStyles, brandNameStylesAuthenticated
} from '../styles/navigation'
import { useNavRoutes } from '../hooks/useNavRoutes'
import { AuthenticatedMenu } from '../components/AuthenticatedMenu'
import { NotAuthenticatedMenu } from '../components/NotAuthenticatedMenu'

export const Navbar = () => {
  const { routes, authenticated } = useNavRoutes()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <SchoolIcon sx={brandIconStyles} />
          <Typography
            variant="h6"
            noWrap
            sx={ authenticated ? brandNameStylesAuthenticated : brandNameStyles } >
            Kidsgramming
          </Typography>

          {(authenticated)
            ? <AuthenticatedMenu routes={routes}/>
            : <NotAuthenticatedMenu />}

        </Toolbar>
      </Container>
    </AppBar>
  )
}
