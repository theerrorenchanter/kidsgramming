import { instance } from '../instance'

export const storeAuthData = (token, authData) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
  localStorage.authData = JSON.stringify(authData)
}

export const loginUserWithUsernamePassword = async formData => {
  try {
    const result = await instance.post('auth/login', formData)
    const { data, status } = result
    const { auth_token: token, user, roles } = data
    const { username, sponsor, password } = formData

    storeAuthData(token, { username, sponsor, password })

    return {
      ok: status === 200,
      token,
      user,
      roles,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      token: null,
      user: null,
      roles: null,
      errorMessage
    }
  }
}

export const registerUserWithUsernamePassword = async formData => {
  try {
    const result = await instance.post('auth/register', formData)
    const { data, status } = result
    const { auth_token: token, user, roles } = data
    const { username, sponsor, password } = formData

    storeAuthData(token, { username, sponsor, password })

    return {
      ok: status === 200,
      token,
      user,
      roles,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      token: null,
      user: null,
      roles: null,
      errorMessage
    }
  }
}

export const initialAthentication = async () => {
  try {
    await instance.get('sanctum/csrf-cookie')
    const authData = JSON.parse(localStorage.authData)

    return {
      authData,
      errorMessage: null
    }
  } catch (error) {
    return {
      errorMessage: error.message,
      authData: null
    }
  }
}

export const logoutUser = async () => {
  try {
    const result = await instance.get('auth/logout')
    const { status, data } = result

    if (localStorage.authData) localStorage.removeItem('authData')

    return {
      ok: status === 200,
      message: data.message,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      message: null,
      errorMessage
    }
  }
}
