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

const studentRoutes = {}
const professorRoutes = {}

const roleRoutes = {
  'super-admin': adminRoutes,
  'free-user-owner': freeSponsorRoutes,
  'premium-user-owner': premiumSponsorRoutes
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
