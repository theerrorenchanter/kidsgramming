import Box from '@mui/material/Box'

import { linksBoxStyles } from '../styles/navigation.js'
import { NavbarLink } from './links/NavbarLink'

export const NavbarMenu = ({ routes }) => {
  const routeKeys = Object.keys(routes)

  return (
    <Box sx={ linksBoxStyles }>
        {routeKeys.map((routeKey) => (
            <NavbarLink key={ routes[routeKey].description } route={routes[routeKey]} />
        ))}
    </Box>
  )
}
