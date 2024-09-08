import { instance } from '../instance'

export const getPaginatedData = async (endpoint) => {
  try {
    const { data } = await instance.get(endpoint)
    const { data: retrievedData, last_page: maxPages } = data
    return {
      data: retrievedData,
      maxPages,
      errorMessage: null
    }
  } catch (error) {
    const { response } = error
    const errorMessage = response.data ? response.data.message : error.message

    return {
      data: [],
      maxPages: 0,
      errorMessage
    }
  }
}
