import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

import { linksBoxStyles } from '../styles/navigation'
import { NavbarLink } from './links/NavbarLink'

export const NavbarMenu = ({ routes }) => {
  const routeKeys = Object.keys(routes)

  return (
    <Box sx={ linksBoxStyles }>
        {routeKeys.map((routeKey) => (
            <NavbarLink key={ routeKey } route={routes[routeKey]} />
        ))}
    </Box>
  )
}

NavbarMenu.propTypes = {
  routes: PropTypes.object.isRequired
}
