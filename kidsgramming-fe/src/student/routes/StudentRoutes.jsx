import { Navigate, Route, Routes } from 'react-router-dom'
import { StudentMyCourses } from '../pages/StudentMyCourses'
import {StudentCourseOffering } from '../pages/StudentCourseOffering'
import {StudentPage } from '../pages/StudentPage'
import StudentGrades from '../pages/StudentGrades'
import { VideoCourse } from '../pages/VideoCourse'

export const StudentRoutes = () => {
  return (
    <Routes>
        <Route path='home' element={<StudentPage />} />
        <Route path='offering' element={<StudentCourseOffering />} />
        <Route path='mycourses' element={<StudentMyCourses />} />
        <Route path='grades' element={<StudentGrades />} />
        <Route path='videocourses/:title/:id' element={<VideoCourse />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
