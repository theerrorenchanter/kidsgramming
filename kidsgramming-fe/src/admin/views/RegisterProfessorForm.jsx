import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import LoadingButton from '@mui/lab/LoadingButton'
import PropTypes from 'prop-types'

import { AuthFormLayout } from '../../auth/layout/AuthFormLayout'

export const RegisterProfessorForm = ({ authForm }) => {
  const { touched, errors, values, handleChange, isSubmitting } = authForm

  return (
    <AuthFormLayout title='Register Professor' imageSource='/auth/img/register.png'>
      <form onSubmit={ authForm.handleSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Professor name'
              placeholder='Edward Williams'
              name='name'
              id='name'
              error={ touched.name && Boolean(errors.name) }
              helperText={ touched.name && errors.name }
              onChange={handleChange}
              value={ values.name } />
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
              <Grid item xs={ 12 } display={values.errorMessage ? '' : 'none'}>
                <Alert severity='error' >{values.errorMessage}</Alert>
              </Grid>

              <Grid item xs={ 12 }>
                <LoadingButton variant="contained" disabled={isSubmitting || !!values.loading} loading={isSubmitting || !!values.loading} type="submit" fullWidth>Register</LoadingButton>
              </Grid>
          </Grid>

        </Grid>
      </form>
    </AuthFormLayout>
  )
}

RegisterProfessorForm.propTypes = {
  authForm: PropTypes.object.isRequired
}
