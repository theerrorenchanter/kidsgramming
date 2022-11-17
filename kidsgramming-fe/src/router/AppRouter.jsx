import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CourseRoutes } from '../courses/routes/CourseRoutes'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { AHomeRoutes } from '../home/routes/AHomeRoutes'

import { UAHomeRoutes } from '../home/routes/UAHomeRoutes'
import { authenticationStatuses } from '../store/auth/authSlice'
import { SuscriptionesRoutes } from '../suscriptions/routes/SuscriptionesRoutes'
import { CheckingAuth } from '../ui/views/CheckingAuth'
import { roleRouterComponent } from '../navigation/routes/roles'

export const AppRouter = () => {
  const { status, roles } = useSelector(state => state.auth)
  if (status === authenticationStatuses.authenticating) return <CheckingAuth />

  const RoutePage = roleRouterComponent[roles]

  return (
    <Routes>
        {(status === authenticationStatuses.authenticated)
          ? (<>
              <Route path='/*' element={<RoutePage />} />
            </>)
          : (<>
              <Route path='/' element={<UAHomeRoutes />} />
              <Route path='auth/*' element={<AuthRoutes />} />
            </>)
        }

          <Route path='courses/*' element={<CourseRoutes />} />
          <Route path='suscriptions/*' element={<SuscriptionesRoutes />}/>

    </Routes>

  )
}
