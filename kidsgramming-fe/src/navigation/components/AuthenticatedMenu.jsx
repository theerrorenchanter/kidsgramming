import PropTypes from 'prop-types'

import { NavbarMenu } from './NavbarMenu'
import { ToggleMenu } from './ToggleMenu'
import { UserMenu } from './UserMenu'

export const AuthenticatedMenu = ({ routes }) => {
  return (
    <>
        <ToggleMenu routes={ routes }/>
        <NavbarMenu routes={ routes } />
        <UserMenu />
    </>
  )
}

AuthenticatedMenu.propTypes = {
  routes: PropTypes.object.isRequired
}
