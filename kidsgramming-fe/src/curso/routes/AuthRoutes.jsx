import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../pages/LoginPage'
import { AddCourse } from '../pages/AddCoursePage'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='addCourse' element={<AddCourse />} />

        <Route path='/*' element={<Navigate to='addCourse' />} />
    </Routes>
  )
}
