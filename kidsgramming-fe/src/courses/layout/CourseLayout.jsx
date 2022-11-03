import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const courseLayoutBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pt: 5
}
export const CourseLayout = ({ children }) => {
  return (
    <Box sx={courseLayoutBoxStyles}>
      { children }
    </Box>
  )
}

CourseLayout.propTypes = {
  children: PropTypes.element.isRequired
}
