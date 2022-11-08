import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const SubscriptionsLayout = ({ children }) => {
  return (
    <Container sx={containerStyles}>
    <Box sx={{ p: 2 }}>
      <Paper elevation={4} sx={paperContainerStyles}>
        <Box>
          <Typography variant="h4" sx={subtitleStyles} >
             Available suscriptions
          </Typography>
          {children}
        </Box>
      </Paper>
    </Box>
    </Container>
  )
}

SubscriptionsLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}
