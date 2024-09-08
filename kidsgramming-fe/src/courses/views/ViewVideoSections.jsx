import { Container } from '@mui/system'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getCourseSections } from '../../api/professor/professorAPI'
import { NothingToShow } from '../../ui/components/NothingToShow'
import { Waiting } from '../../ui/components/Waiting'
import { CourseSection } from '../components/CourseSection'

export const ViewVideoSections = ({ courseId, premium }) => {
  const [sections, setSections] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCourseSections(courseId).then(res => {
      const { sections, errorMessage } = res
      setSections(sections)
      setErrorMessage(errorMessage)
      setLoading(false)
    })
  }, [])
  return (
    <Container>
        {!errorMessage && !sections.length && !loading && <NothingToShow reason='This Course does not have content' />}
        {errorMessage && !loading && <NothingToShow reason={ errorMessage } />}
        {loading && <Waiting />}
      {sections.map(section => (
        <CourseSection key={section.id} section={section} premium={premium} />
      ))}
    </Container>
  )
}

ViewVideoSections.propTypes = {
  courseId: PropTypes.string.isRequired
}
