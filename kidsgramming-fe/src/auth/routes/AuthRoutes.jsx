import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import {CourseOfferingPage } from '../pages/CourseOfferingPage'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='courseoffering' element={<CourseOfferingPage />} />

        <Route path='/*' element={<Navigate to='register' />} />
    </Routes>
  )
}
