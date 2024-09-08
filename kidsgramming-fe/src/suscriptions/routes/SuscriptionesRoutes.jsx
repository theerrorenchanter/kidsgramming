import { Navigate, Route, Routes } from 'react-router-dom'
import { SuscriptionsPage } from '../pages/SuscriptionsPage'

export const SuscriptionesRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<SuscriptionsPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
