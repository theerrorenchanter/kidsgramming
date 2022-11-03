import { Link as RouterLink, useLocation } from 'react-router-dom'

import { SpecialButton } from '../../ui/components/SpecialButton'
import { LogoNavbar } from './LogoNavbar'

const buttonStyles = [{ key: 'fontSize', value: '10pt' }, { key: 'height', value: '40px' }]

export const NotAuthenticatedMenu = () => {
  const location = useLocation()
  const { pathname } = location
  const inAuthPage = pathname.includes('auth')
  const inCoursesPage = pathname.includes('courses')

  return (
    <>
      <LogoNavbar />
      <SpecialButton component={ RouterLink } to={inAuthPage || inCoursesPage ? '/' : 'auth/register'} extraStyles={buttonStyles}>
          {inAuthPage || inCoursesPage ? 'Back Home' : 'Join us!'}
      </SpecialButton>
    </>
  )
}
