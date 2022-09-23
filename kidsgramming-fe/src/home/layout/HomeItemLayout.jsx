import { Box } from '@mui/material'
import PropTypes from 'prop-types'

export const HomeItemLayout = (props) => {
  const { sx, ...other } = props
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx
        }}
        {...other} />
    </Box>
  )
}

HomeItemLayout.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
}
