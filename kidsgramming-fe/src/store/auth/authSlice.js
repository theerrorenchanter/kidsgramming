import { createSlice } from '@reduxjs/toolkit'

export const authenticationStatuses = {
  authenticating: 'authenticating',
  authenticated: 'authenticated',
  notAuthenticated: 'notAuthenticated'
}

const startingState = {
  status: authenticationStatuses.authenticating,
  name: null,
  sponsor: null,
  username: null,
  roles: null,
  email: null,
  suscription: null,
  token: null,
  errorMessage: null
}

const loginReducer = (state, { payload }) => {
  const { user, roles, token, errorMessage } = payload
  const { name, sponsor, username, email, user_suscription: suscription } = user

  state.status = authenticationStatuses.authenticated
  state.name = name
  state.sponsor = sponsor
  state.username = username
  state.roles = roles.map(role => role.name)
  state.email = email
  state.suscription = suscription
  state.token = token
  state.errorMessage = errorMessage
}

const logoutReducer = (state, { payload }) => {
  state.status = authenticationStatuses.notAuthenticated
  state.name = null
  state.sponsor = null
  state.username = null
  state.roles = null
  state.email = null
  state.token = null
  state.errorMessage = payload?.errorMessage
}

const updateSuscriptionReducer = (state, { payload }) => {
  state.suscription = payload.suscription
  state.roles = payload.roles.map(role => role.name)
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
    authenticating: authenticatingReducer,
    updateSuscription: updateSuscriptionReducer
  }
})

export const { login, logout, authenticating, updateSuscription } = authSlice.actions
