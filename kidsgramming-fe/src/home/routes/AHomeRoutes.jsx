import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { roleRouterComponent } from '../../navigation/routes/roles'

export const AHomeRoutes = () => {
  const { roles } = useSelector(state => state.auth)

  const RoutePage = roleRouterComponent[roles]

  return (
    <Routes>
        <Route path='/' element={ <RoutePage />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
