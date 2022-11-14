import { Navigate, Route, Routes } from 'react-router-dom'
import AdminAddCourse from '../pages/AdminAddCourse'
import AdminAddStudent from '../pages/AdminAddStudent'
import AdminAddTeacher from '../pages/AdminAddTeacher'
import { AdminCourseOffering } from '../pages/AdminCourseOffering'
import { AdminPage } from '../pages/AdminPage'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='home' element={<AdminPage />} />
        <Route path='offering' element={<AdminCourseOffering />} />
        <Route path='addstudent' element={<AdminAddStudent />} />
        <Route path='addteacher' element={<AdminAddTeacher />} />
        <Route path='addcourse' element={<AdminAddCourse />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
