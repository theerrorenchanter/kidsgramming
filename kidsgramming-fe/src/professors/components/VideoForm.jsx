import { Alert, Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { registerCourse } from '../helpers/registercourse'
import { createCourseVideo } from '../../api/professor/professorAPI'

const validations = Yup.object({
  title: Yup.string()
    .required('The title is required')
    .trim('The title must be trimmed')
    .max(100),
  video_url: Yup.string()
    .required('The video is required')
    .url('The video must be in a valid url')
})

export const VideoForm = ({ setShowCreateVideo, sectionId }) => {
  const courseForm = useFormik({
    initialValues: {
      title: '',
      video_url: ''
    },
    validationSchema: validations,
    onSubmit: values => {
      courseForm.setFieldValue('loading', true)
      createCourseVideo({ course_section_id: sectionId, ...values }).then(res => {
        const { video, errorMessage } = res
        errorMessage
          ? courseForm.setFieldValue('errorMessage', errorMessage)
          : registerCourse(video)
        courseForm.setFieldValue('loading', false)
        courseForm.setSubmitting(false)
      })
    }
  })

  const { touched, errors, values, handleChange, isSubmitting } = courseForm
  return (
     <form onSubmit={courseForm.handleSubmit}>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                    fullWidth
                    label='Video title'
                    placeholder='Learn HTML selectors'
                    error={ touched.title && Boolean(errors.title) }
                    helperText={ touched.title && errors.title }
                    onChange={handleChange}
                    value={ values.title }
                    name='title'
                    id='title' />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                    fullWidth
                    label='Video url'
                    placeholder='https://www.youtube.com/watch?v=-asRy1Gqf-0&ab_channel=aLexBY11'
                    error={ touched.video_url && Boolean(errors.video_url) }
                    helperText={ touched.video_url && errors.video_url }
                    onChange={handleChange}
                    value={ values.video_url }
                    name='video_url'
                    id='video_url' />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } display={values.errorMessage ? '' : 'none'}>
                <Alert severity='error' >{values.errorMessage} </Alert>
              </Grid>
              <Grid item xs={ 12 } sm={ 12 }>
                <Box sx={{ display: 'flex' }}>
                  <Button disabled={isSubmitting || !!values.loading} onClick={() => setShowCreateVideo(false)} variant="contained" fullWidth sx={{ mr: 1 }}>Cancel</Button>
                  <Button disabled={isSubmitting || !!values.loading} type="submit" variant="contained" fullWidth sx={{ ml: 1 }}>SAVE VIDEO</Button>
                </Box>
              </Grid>
            </Grid>

        </Grid>
      </form>
  )
}
