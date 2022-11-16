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

export const AddCourse = ({ authForm }) => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === authenticationStatuses.authenticating, [status])

  const { touched, errors, values, handleChange, isSubmitting } = authForm

  return (
    <AuthFormLayout title='Agregar Curso' /*imageSource='/auth/img/register.png'*/>
      <form onSubmit={ authForm.handleSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Nombre del curso'
              placeholder='Nombre del curso'
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
              label='Descripción'
              placeholder='Descripción'
              name='description'
              id='description'
              error={ touched.description && Boolean(errors.description) }
              helperText={touched.description && errors.description}
              onChange={ handleChange }
              value={ values.description } />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Link del video'
              placeholder='Link del video'
              name='video'
              id='video'
              error={touched.video && Boolean(errors.video)}
              helperText={touched.video && errors.video}
              onChange={ handleChange }
              value={ values.video } />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } display={errorMessage ? '' : 'none'}>
                <Alert severity='error' >{errorMessage}</Alert>
              </Grid>

              <Grid item xs={ 12 }>
                <Button variant="contained" disabled={isSubmitting || isAuthenticating} type="submit" fullWidth>Agregar</Button>
              </Grid>
          </Grid>

        </Grid>
      </form>
    </AuthFormLayout>
  )
}

AddCourse.propTypes = {
  authForm: PropTypes.object.isRequired
}
