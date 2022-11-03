import { instance } from '../instance'

export const changeSuscription = async suscriptionId => {
  try {
    const result = await instance.post('suscriptions/update', { id: suscriptionId })
    const { data, status } = result
    const { suscription, roles } = data

    return {
      ok: status === 200,
      suscription,
      roles,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const { status } = response
    const errorMessage = response.data ? response.data.message : error.message

    return {
      ok: status === 200,
      suscription: null,
      roles: null,
      errorMessage
    }
  }
}
