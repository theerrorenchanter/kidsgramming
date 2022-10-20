import { createSlice } from '@reduxjs/toolkit'

export const authenticationStatuses = {
  authenticating: 'authenticating',
  authenticated: 'authenticated',
  notAuthenticated: 'notAuthenticated'
}

const startingState = {
  status: authenticationStatuses.authenticating,
  name: null,
  user_sponsor: null,
  username: null,
  roles: null,
  email: null,
  token: null,
  errorMessage: null
}

const loginReducer = (state, { payload }) => {
  const { name, user_sponsor, username, roles, email, token, errorMessage } = payload

  state.status = authenticationStatuses.authenticated
  state.name = name
  state.user_sponsor = user_sponsor
  state.username = username
  state.roles = roles
  state.email = email
  state.token = token
  state.errorMessage = errorMessage
}

const logoutReducer = (state, { payload }) => {
  state.status = authenticationStatuses.notAuthenticated
  state.name = null
  state.user_sponsor = null
  state.username = null
  state.roles = null
  state.email = null
  state.token = null
  state.errorMessage = payload?.errorMessage
}

const authenticatingReducer = state => {
  state.status = authenticationStatuses.authenticating
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: startingState,
  reducers: {
    login: loginReducer,
    logout: logoutReducer,
    authenticating: authenticatingReducer
  }
})

export const { login, logout, authenticating } = authSlice.actions
