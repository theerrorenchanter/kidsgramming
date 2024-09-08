import { Navigate, Route, Routes } from 'react-router-dom'
import { CourseOfferingPage } from '../pages/CourseOfferingPage'
import { CourseView } from '../pages/CourseView'

export const CourseRoutes = () => {
  return (
    <Routes>
        <Route path='offering' element={<CourseOfferingPage />} />
        <Route path='view/:courseId' element={<CourseView />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

// `/courses/view/${courseId}`
