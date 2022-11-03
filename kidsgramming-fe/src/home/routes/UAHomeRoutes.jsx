import { Navigate, Route, Routes } from 'react-router-dom'

import { UAHomePage } from '../pages/UAHomePage'

export const UAHomeRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<UAHomePage />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
