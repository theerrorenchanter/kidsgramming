import { AuthLayout } from '../../auth/layout/AuthLayout'

import { Navbar } from '../../navigation/views/Navbar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NothingToShow } from '../../ui/components/NothingToShow'
import { Waiting } from '../../ui/components/Waiting'
import { getCourse } from '../../api/professor/professorAPI'
import { ViewVideoSections } from '../views/ViewVideoSections'

export const CourseView = () => {
  const { courseId } = useParams()
  const [course, setCourse] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCourse(courseId).then(res => {
      setCourse(res.course)
      setErrorMessage(res.errorMessage)
      setLoading(false)
    })
  }, [])

  return (
    <>
        <Navbar />
          <AuthLayout >
              {Boolean(course) && !loading && <ViewVideoSections courseId={courseId} premium={course.premium}/>}
              {!errorMessage && !course && !loading && <NothingToShow reason='This Course does not exist' />}
              {errorMessage && !loading && <NothingToShow reason={ errorMessage } />}
              {loading && <Waiting />}
        </AuthLayout>
    </>
  )
}
