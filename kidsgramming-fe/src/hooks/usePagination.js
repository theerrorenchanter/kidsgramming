import { useEffect, useState } from 'react'
import { getPaginatedData } from '../api/common/commonAPI'

const initialParameters = {
  page: 1,
  endpoint: ''
}

export const usePagination = (parameters = initialParameters) => {
  const { page, endpoint } = parameters

  const [currentPage, setCurrentPage] = useState(page)

  const [loading, setLoading] = useState(true)

  const [info, setInfo] = useState({
    data: [],
    maxPages: 0,
    errorMessage: null
  })

  useEffect(() => {
    setLoading(true)
    getPaginatedData(endpoint + 'page=' + currentPage).then(res => {
      setInfo(res)
      setLoading(false)
    })
  }, [currentPage])

  return {
    data: info.data,
    maxPages: info.maxPages,
    errorMessage: info.errorMessage,

    currentPage,
    setCurrentPage,

    loading
  }
}
