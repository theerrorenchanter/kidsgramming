import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout'
import { NavbarMenu } from './NavbarMenu'
import { ToggleMenu } from './ToggleMenu'
import { UserMenu } from './UserMenu'
import { useLogout } from '../hooks/useLogout'

export const AuthenticatedMenu = ({ routes }) => {
  const { logout } = useLogout()

  return (
    <>
        <ToggleMenu routes={ routes }/>
        <NavbarMenu routes={ routes } />
        <UserMenu />
        <Button onClick={logout} variant="contained" color="error" size='small' endIcon={<LogoutIcon />} sx={{ ml: 1 }}>
          Logout
        </Button>
    </>
  )
}

AuthenticatedMenu.propTypes = {
  routes: PropTypes.object.isRequired
}
