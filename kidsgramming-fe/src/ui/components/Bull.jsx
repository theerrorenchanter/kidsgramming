import Box from '@mui/material/Box'

const bullBoxStyles = {
  display: 'inline-block',
  mx: '2px',
  transform: 'scale(0.8)'
}

export const bull = (
  <Box
    component="span"
    sx={bullBoxStyles} >
    •
  </Box>
)
