import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../../auth/routes/AuthRoutes'
import { HomePage } from '../pages/HomePage'

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='auth/*' element={<AuthRoutes />} />

        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
