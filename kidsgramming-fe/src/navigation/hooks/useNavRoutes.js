import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { authenticationStatuses } from '../../store/auth/authSlice'

const notAuthenticatedRoutes = {
  home: {
    description: 'Home',
    to: '/'
  },
  login: {
    description: 'Login',
    to: '/auth/login'
  },
  register: {
    description: 'Register',
    to: '/auth/register'
  },
  pricing: {
    description: 'Pricing',
    to: '/pricing'
  },
  courseoffering: {
    description: 'Course Offering',
    to: '/auth/courseoffering'
  }
}

const authenticatedRoutes = [

]

const initialState = {
  authenticated: false,
  routes: notAuthenticatedRoutes
}

export const useNavRoutes = (init = initialState) => {
  const [authenticated, setAuthenticated] = useState(init.authenticated)
  const [routes, setRoutes] = useState(init.routes)
  const { status } = useSelector(state => state.auth)

  useEffect(() => {
    setAuthenticated(status === authenticationStatuses.authenticated)
    authenticated ? setRoutes(authenticatedRoutes) : setRoutes(notAuthenticatedRoutes)
  }, [status])

  return {
    routes,
    setAuthenticated
  }
}
