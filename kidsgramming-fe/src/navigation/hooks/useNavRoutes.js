import { useEffect, useState } from 'react'

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

  useEffect(() => {
    authenticated ? setRoutes(authenticatedRoutes) : setRoutes(notAuthenticatedRoutes)
  }, [authenticated])

  return {
    routes,
    setAuthenticated
  }
}
