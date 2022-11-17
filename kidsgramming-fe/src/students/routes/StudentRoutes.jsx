import { Navigate, Route, Routes } from 'react-router-dom'
import { StudentHome } from '../pages/StudentHome'

export const StudentRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<StudentHome />}/>
      <Route path='/*' element={<Navigate to='/' />}/>
    </Routes>
  )
}
