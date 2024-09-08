import { instance } from '../instance'

export const registerProfessorWithUsernamePassword = async formData => {
  try {
    const result = await instance.post('professors/register', formData)
    const { data, status } = result
    const { professor } = data

    return {
      ok: status === 200,
      professor,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      professor: null,
      errorMessage
    }
  }
}
