import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CourseRoutes } from '../courses/routes/CourseRoutes'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { StudentRoutes } from '../student/routes/StudentRoutes'
import { AHomeRoutes } from '../home/routes/AHomeRoutes'

import { UAHomeRoutes } from '../home/routes/UAHomeRoutes'
import { authenticationStatuses } from '../store/auth/authSlice'
import { SuscriptionesRoutes } from '../suscriptions/routes/SuscriptionesRoutes'
import { CheckingAuth } from '../ui/views/CheckingAuth'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  if (status === authenticationStatuses.authenticating) return <CheckingAuth />

  return (
    <Routes>
        {(status === authenticationStatuses.authenticated)
          ? (<>
              <Route path='/' element={<AHomeRoutes />} />
            </>)
          : (<>
              <Route path='/' element={<UAHomeRoutes />} />
              <Route path='auth/*' element={<AuthRoutes />} />
            </>)}

          <Route path='admin/*' element={<AdminRoutes />} />
          <Route path='student/*' element={<StudentRoutes />} />
          <Route path='courses/*' element={<CourseRoutes />} />
          <Route path='suscriptions/*' element={<SuscriptionesRoutes />}/>

          <Route path='/*' element={<Navigate to='/' />} />
    </Routes>

  )
}
