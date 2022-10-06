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
  rol: null,
  email: null,
  token: null,
  errorMessage: null
}

const loginReducer = (state, { payload }) => {
  const { name, sponsor, username, rol, email, token, errorMessage } = payload

  state.status = authenticationStatuses.authenticated
  state.name = name
  state.sponsor = sponsor
  state.username = username
  state.rol = rol
  state.email = email
  state.token = token
  state.errorMessage = errorMessage
}

const logoutReducer = (state, { payload }) => {
  state.status = authenticationStatuses.notAuthenticated
  state.name = null
  state.sponsor = null
  state.username = null
  state.rol = null
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
