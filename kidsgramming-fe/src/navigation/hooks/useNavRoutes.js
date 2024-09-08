import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { authenticationStatuses } from '../../store/auth/authSlice'

const adminRoutes = {
  professors: {
    description: 'Professors',
    to: '/'
  }
}

const freeSponsorRoutes = {
  students: {
    description: 'Students',
    to: '/'
  }
}
const premiumSponsorRoutes = {
  students: {
    description: 'Students',
    to: '/'
  }
}

const freeStudentRoutes = {
  home: {
    description: 'Home',
    to: '/'
  }
}

const premiumStudentRoutes = {
  home: {
    description: 'Home',
    to: '/'
  }
}

const professorRoutes = {
  courses: {
    description: 'Courses',
    to: '/'
  }
}

const roleRoutes = {
  'super-admin': adminRoutes,
  'free-user-owner': freeSponsorRoutes,
  'premium-user-owner': premiumSponsorRoutes,
  'user-professor': professorRoutes,
  'free-user-student': freeStudentRoutes,
  'premium-user-student': premiumStudentRoutes
}

const initialState = {
  authenticated: false,
  routes: {}
}

export const useNavRoutes = (init = initialState) => {
  const [authenticated, setAuthenticated] = useState(init.authenticated)
  const [routes, setRoutes] = useState(init.routes)
  const { status, roles } = useSelector(state => state.auth)

  useEffect(() => {
    setAuthenticated(status === authenticationStatuses.authenticated)
    status === authenticationStatuses.authenticated ? setRoutes(roleRoutes[roles]) : setRoutes({})
  }, [status])

  return {
    routes,
    authenticated
  }
}
