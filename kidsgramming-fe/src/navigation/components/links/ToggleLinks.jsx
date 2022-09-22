import MenuItem from '@mui/material/MenuItem'
import PropTypes from 'prop-types'

import { ToggleLink } from './ToggleLink'

export const ToggleLinks = ({ handleCloseMenu, routes }) => {
  const routeKeys = Object.keys(routes)
  return (
    <>
      {routeKeys.map(routeKey => (
        <MenuItem key={routes[routeKey].description} onClick={ handleCloseMenu }>
            <ToggleLink route={ routes[routeKey] } />
        </MenuItem>
      ))}
    </>
  )
}
