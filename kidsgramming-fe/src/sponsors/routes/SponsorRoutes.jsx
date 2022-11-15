import { Navigate, Route, Routes } from 'react-router-dom'
import { StudentsPage } from '../pages/StudentsPage'

export const SponsorRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<StudentsPage />}/>

      <Route path='/*' element={<Navigate to='/' />}/>
    </Routes>
  )
}
