import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Image } from 'mui-image'
import PropTypes from 'prop-types'

const paperContainerStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  p: 3
}

const imageBoxContainer = {
  display: {
    xs: 'none',
    sm: 'none',
    md: 'flex'
  },
  justifyContent: 'center',
  alignItems: 'center'
}

export const AuthFormLayout = ({ title, imageSource, children }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={4} sx={paperContainerStyles}>
        <Box>
            <Typography
                variant="h4"
                sx={{ mb: 1, textAlign: 'center' }} >
                { title }
            </Typography>

            {children}
        </Box>
        <Box sx={imageBoxContainer}>
          <Image src={imageSource} shift='left' height='500px' width='500px' duration={500} />
        </Box>
      </Paper>
    </Box>
  )
}

AuthFormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}
