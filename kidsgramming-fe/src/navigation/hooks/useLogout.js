import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { startLogout } from '../../store/auth/authThunks'
import { useDispatch } from 'react-redux'

const initialState = {
  clicked: false
}

export const useLogout = (init = initialState) => {
  const [clicked, setClicked] = useState(init.clicked)
  const dispatch = useDispatch()

  useEffect(() => {
    if (clicked) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You are logging out of Kidsgramming',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#7722e7',
        cancelButtonColor: '#E71D36',
        confirmButtonText: 'Yes, log me out!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(startLogout())
        }
      })

      setClicked(false)
    }
  }, [clicked])

  const logout = () => setClicked(true)

  return {
    logout
  }
}
