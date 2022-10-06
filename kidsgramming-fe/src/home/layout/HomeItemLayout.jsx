import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export const HomeItemLayout = ({ children }) => {
  return (
    <Box sx={{ m: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      { children }
    </Box>
  )
}

HomeItemLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
