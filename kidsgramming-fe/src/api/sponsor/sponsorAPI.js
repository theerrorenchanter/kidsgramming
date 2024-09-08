import { instance } from '../instance'

export const registerStudentWithUsernamePassword = async formData => {
  try {
    const result = await instance.post('students/register', formData)
    const { data, status } = result
    const { student } = data

    return {
      ok: status === 200,
      student,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      student: null,
      errorMessage
    }
  }
}
