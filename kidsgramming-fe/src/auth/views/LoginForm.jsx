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

import { AuthFormLayout } from '../layout/AuthFormLayout'
import { authenticationStatuses } from '../../store/auth/authSlice'

export const LoginForm = ({ authForm }) => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === authenticationStatuses.authenticating, [status])

  const { touched, errors, values, handleChange, isSubmitting } = authForm

  return (
    <AuthFormLayout title='Login' imageSource='/auth/img/login.png'>
      <form onSubmit={ authForm.handleSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Sponsor'
              placeholder='hoguni'
              name='user_sponsor'
              id='user_sponsor'
              error={ touched.user_sponsor && Boolean(errors.user_sponsor) }
              helperText={ touched.user_sponsor && errors.user_sponsor }
              onChange={handleChange}
              value={ values.user_sponsor } />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Username'
              placeholder='michaelwilliams'
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
                <Button variant="contained" disabled={isSubmitting || isAuthenticating} type="submit" fullWidth>Login</Button>
              </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Don`t you have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/register'>
              Register
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthFormLayout>
  )
}

LoginForm.propTypes = {
  authForm: PropTypes.object.isRequired
}
