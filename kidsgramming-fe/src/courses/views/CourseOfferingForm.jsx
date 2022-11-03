import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

import { CourseOverView } from '../components/CourseOverView'

export const CourseOfferingForm = ({ courses }) => {
  return (
    <>
      <Grid container spacing={1} justifyContent="center" >
        {courses.map((course) =>
          <Box key={course.id}>
            <CourseOverView title={course.title} description={course.description} imageURL={course.cover_image} />
          </Box>)}
      </Grid>
    </>
  )
}

CourseOfferingForm.propTypes = {
  courses: PropTypes.array.isRequired
}
