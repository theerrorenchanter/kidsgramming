import { Container } from '@mui/system'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getCourseSections } from '../../api/professor/professorAPI'
import { CourseSection } from '../components/CourseSection'

export const CreateVideoForm = ({ courseId }) => {
  const [sections, setSections] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    getCourseSections(courseId).then(res => {
      const { sections, errorMessage } = res
      setSections(sections)
      setErrorMessage(errorMessage)
    })
  }, [])
  return (
    <Container>
      {sections.map(section => (
        <CourseSection key={section.id} section={section} />
      ))}
    </Container>
  )
}

CreateVideoForm.propTypes = {
  courseId: PropTypes.string.isRequired
}
