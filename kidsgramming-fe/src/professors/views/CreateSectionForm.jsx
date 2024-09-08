import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import LoadingButton from '@mui/lab/LoadingButton'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import { AuthFormLayout } from '../../auth/layout/AuthFormLayout'
import { createSection } from '../../api/professor/professorAPI'
import { registerCourse } from '../helpers/registercourse'

const validations = Yup.object({
  title: Yup.string()
    .required('The title is required')
    .trim('The title must be trimmed')
    .max(100),
  description: Yup.string()
    .required('The description is required')
    .trim('The description must be trimmed')
})

export const CreateSectionForm = ({ courseId }) => {
  const sectionForm = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema: validations,
    onSubmit: values => {
      sectionForm.setFieldValue('loading', true)
      createSection({ course_id: courseId, ...values }).then(res => {
        const { section, errorMessage } = res
        if (errorMessage) sectionForm.setFieldValue('errorMessage', errorMessage)
        if (!errorMessage) registerCourse(section)
        sectionForm.setFieldValue('loading', false)
        sectionForm.setSubmitting(false)
      })
    }
  })

  const { touched, errors, values, handleChange, isSubmitting } = sectionForm

  return (
    <AuthFormLayout title='Create Section' imageSource='/auth/img/register.png'>
      <form onSubmit={ sectionForm.handleSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Section title'
              placeholder='Learn HTML Selectors'
              name='title'
              id='title'
              error={ touched.title && Boolean(errors.title) }
              helperText={ touched.title && errors.title }
              onChange={handleChange}
              value={ values.title } />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              multiline
              minRows={4}
              label='Description'
              placeholder='Learn all about HTML selectors in this section'
              name='description'
              id='description'
              error={ touched.description && Boolean(errors.description) }
              helperText={touched.description && errors.description}
              onChange={ handleChange }
              value={ values.description } />
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

CreateSectionForm.propTypes = {
  courseId: PropTypes.string.isRequired
}
