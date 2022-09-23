import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export const HomeLayout = ({ children }) => {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      { children }
      </Box>
    </div>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
}
