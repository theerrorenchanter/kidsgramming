import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../../auth/routes/AuthRoutes'
import { CourseRoutes } from '../../courses/routes/CourseRoutes'
import { HomePage } from '../pages/HomePage'

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='auth/*' element={<AuthRoutes />} />
        <Route path='course/*' element={<CourseRoutes />} />

        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
