import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'

export const CountrySelect = ({ touched, errors, values, handleChange }) => {
  return (
    <FormControl fullWidth>
        <InputLabel id="countries-label">Country</InputLabel>
        <Select
            labelId='countries-label'
            label="Country"
            placeholder='Costa Rica'
            name='country'
            id='country'
            error={ touched.country && Boolean(errors.country) }
            onChange={ handleChange }
            value={ values.country } >
            <MenuItem value={10}>Costa Rica</MenuItem>
            <MenuItem value={20}>United States</MenuItem>
            <MenuItem value={30}>Canada</MenuItem>
        </Select>
    </FormControl>
  )
}

CountrySelect.propTypes = {
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}
