import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const authLayoutBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pt: 5
}
export const AuthLayout = ({ children }) => {
  return (
    <Box sx={authLayoutBoxStyles}>
      { children }
    </Box>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
}
