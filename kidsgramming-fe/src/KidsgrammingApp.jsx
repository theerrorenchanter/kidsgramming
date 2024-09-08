import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { startInitialAuthentication } from './store/auth/authThunks'
import { AppTheme } from './theme/AppTheme'

export const KidsgrammingApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startInitialAuthentication())
  }, [])

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
