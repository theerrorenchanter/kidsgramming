import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import LoadingButton from '@mui/lab/LoadingButton'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { AuthFormLayout } from '../../auth/layout/AuthFormLayout'
import { createCourse } from '../../api/professor/professorAPI'
import { registerCourse } from '../helpers/registercourse'
import { useNavigate } from 'react-router-dom'

const validations = Yup.object({
  title: Yup.string()
    .required('The title is required')
    .trim('The title must be trimmed')
    .max(100),
  description: Yup.string()
    .required('The description is required')
    .trim('The description must be trimmed'),
  cover_image: Yup.string()
    .required('Cover image is required')
    .url('The conver image must be in a valid url')
})

export const CreateCourseForm = () => {
  const navigate = useNavigate()

  const courseForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      cover_image: ''
    },
    validationSchema: validations,
    onSubmit: values => {
      courseForm.setFieldValue('loading', true)
      createCourse(values).then(res => {
        const { course, errorMessage } = res
        errorMessage
          ? courseForm.setFieldValue('errorMessage', errorMessage)
          : registerCourse(course); navigate(`/professor/courses/${course.id}`)
        courseForm.setFieldValue('loading', false)
        courseForm.setSubmitting(false)
      })
    }
  })

  const { touched, errors, values, handleChange, isSubmitting } = courseForm

  return (
    <AuthFormLayout title='Create Course' imageSource='/auth/img/register.png'>
      <form onSubmit={ courseForm.handleSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Course title'
              placeholder='Learn HTML'
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
              placeholder='Learn all about HTML in this course'
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
              label='Cover Image'
              placeholder='https://pixabay.com/images/id-1072823/'
              name='cover_image'
              id='cover_image'
              error={touched.cover_image && Boolean(errors.cover_image)}
              helperText={touched.cover_image && errors.cover_image}
              onChange={ handleChange }
              value={ values.username } />
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
