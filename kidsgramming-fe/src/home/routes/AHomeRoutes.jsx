import { Navigate, Route, Routes } from 'react-router-dom'

import { AHomePage } from '../pages/AHomePage'

export const AHomeRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AHomePage />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
