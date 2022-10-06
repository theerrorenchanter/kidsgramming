import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { CountrySelect } from '../components/CountrySelect'
import { AuthFormLayout } from '../layout/AuthFormLayout'
import { authenticationStatuses } from '../../store/auth/authSlice'

export const RegisterForm = ({ authForm }) => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === authenticationStatuses.authenticating, [status])

  const { touched, errors, values, handleChange, isSubmitting } = authForm

  return (
    <AuthFormLayout title='Register' imageSource='/auth/img/register.png'>
      <form onSubmit={ authForm.handleSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Parent or Institution name'
              placeholder='Hogwarts University'
              name='name'
              id='name'
              error={ touched.name && Boolean(errors.name) }
              helperText={ touched.name && errors.name }
              onChange={handleChange}
              value={ values.name } />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <CountrySelect
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              values={values} />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Email'
              placeholder='example@domain.com'
              name='email'
              id='email'
              error={ touched.email && Boolean(errors.email) }
              helperText={touched.email && errors.email}
              onChange={ handleChange }
              value={ values.email } />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Username'
              placeholder='hoguni'
              name='username'
              id='username'
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              onChange={ handleChange }
              value={ values.username } />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Password'
              placeholder='Your password'
              name='password'
              id='password'
              type='password'
              error={ touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              onChange={ handleChange }
              value={ values.password } />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } display={errorMessage ? '' : 'none'}>
                <Alert severity='error' >{errorMessage}</Alert>
              </Grid>

              <Grid item xs={ 12 }>
                <Button variant="contained" disabled={isSubmitting || isAuthenticating} type="submit" fullWidth>Register</Button>
              </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login'>
              Login
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthFormLayout>
  )
}

RegisterForm.propTypes = {
  authForm: PropTypes.object.isRequired
}
