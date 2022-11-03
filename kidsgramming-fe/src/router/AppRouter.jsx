import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CourseRoutes } from '../courses/routes/CourseRoutes'

import { HomeRoutes } from '../home/routes/HomeRoutes'
import { authenticationStatuses } from '../store/auth/authSlice'
import { CheckingAuth } from '../ui/views/CheckingAuth'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)

  if (status === authenticationStatuses.authenticating) return <CheckingAuth />

  return (
    <Routes>
        {(status === authenticationStatuses.authenticated)
          ? (<>

            </>)
          : (<>
              <Route path='/' element={<HomeRoutes />} />
              <Route path='auth/*' element={<AuthRoutes />} />
            </>)}

          <Route path='courses/*' element={<CourseRoutes />} />

          <Route path='/*' element={<Navigate to='/' />} />
    </Routes>

  )
}
