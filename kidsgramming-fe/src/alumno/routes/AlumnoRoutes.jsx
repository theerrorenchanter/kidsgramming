import { Navigate, Route, Routes } from 'react-router-dom'

import { RegisterAlumnoPage } from '../pages/RegisterAlumnoPage'

export const AlumnoRoutes = () => {
  return (
    <Routes>
        <Route path='add' element={<RegisterAlumnoPage />} />

        <Route path='/*' element={<Navigate to='register' />} />
    </Routes>
  )
}
