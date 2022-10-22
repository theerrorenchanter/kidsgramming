import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const paperContainerStyles = {
  display: 'inline-flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  p: 3
}

const subtitleStyles = {
  background: '-webkit-linear-gradient(45deg, #7722e7 30%, #FF8E53 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textTransform: 'uppercase',
  fontFamily: 'monospace',
  fontSize: 35,
  letterSpacing: 2,
  fontWeight: 700,
  color: 'primary.main',
  textAlign: 'center'
}

export const AuthCourseLayout = ({ title, children }) => {
  return (
    <Box sx={{ p: 2}}>
      <Paper elevation={4} sx={paperContainerStyles}>
        <Box>
          <Typography variant="h4" sx={subtitleStyles} >
              { title }
          </Typography>
          {children}
        </Box>
      </Paper>
    </Box>
  )
}

AuthCourseLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}
