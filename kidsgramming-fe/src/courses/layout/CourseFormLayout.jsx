import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const paperContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '600pt',
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
  textAlign: 'center'
}

const boxContainerStyles = {
  p: 2,
  width: '100%',
  height: '100%'
}

export const CourseFormLayout = ({ title, children }) => {
  return (
    <Box sx={boxContainerStyles}>
      <Paper elevation={4} sx={paperContainerStyles}>
        <Typography variant="h4" sx={subtitleStyles} >
                { title }
        </Typography>
        <Box>
          {children}
        </Box>
      </Paper>
    </Box>
  )
}

CourseFormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
}
