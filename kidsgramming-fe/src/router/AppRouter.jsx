import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { HomeRoutes } from '../home/routes/HomeRoutes'
import { authenticationStatuses } from '../store/auth/authSlice'
import { CheckingAuth } from '../ui/views/CheckingAuth'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)

  if (status === authenticationStatuses.authenticating) return <CheckingAuth />

  return (
    <Routes>
        {(status === authenticationStatuses.authenticated)
          ? ''
          : <Route path='/*' element={<HomeRoutes />} />}

    </Routes>

  )
}
