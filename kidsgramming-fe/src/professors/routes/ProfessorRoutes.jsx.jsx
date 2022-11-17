import { Navigate, Route, Routes } from 'react-router-dom'
import { CoursesPage } from '../pages/CoursesPage'
import { SectionsPage } from '../pages/SectionsPage'

export const ProfessorRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CoursesPage />}/>
      <Route path='/professor/courses/:courseId' element={<SectionsPage />} />
      <Route path='/*' element={<Navigate to='/' />}/>
    </Routes>
  )
}
