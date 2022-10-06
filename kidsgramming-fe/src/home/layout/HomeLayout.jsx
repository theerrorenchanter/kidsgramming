import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export const HomeLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </Box>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
}
