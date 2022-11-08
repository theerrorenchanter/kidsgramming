import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'

export const ErrorAlert = ({ errorMessage }) => {
  return <Alert severity="error">{errorMessage}</Alert>
}

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string.isRequired
}
