import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { linkStyles } from '../../styles/navigation'

export const NavbarLink = ({ route }) => {
  const { to, description } = route
  return (
    <Button component={ RouterLink } sx={ linkStyles } to={ to }>
      <Typography sx={{ fontWeight: 500 }} align='center'>{description}</Typography>
    </Button>
  )
}

NavbarLink.propTypes = {
  route: PropTypes.object.isRequired
}
