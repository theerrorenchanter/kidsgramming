import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfessorsPage } from '../pages/ProfessorsPage'

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ProfessorsPage />}/>

      <Route path='/*' element={<Navigate to='/' />}/>
    </Routes>
  )
}
