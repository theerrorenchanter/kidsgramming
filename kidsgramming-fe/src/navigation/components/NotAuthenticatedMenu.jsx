import { Link as RouterLink, useLocation } from 'react-router-dom'

import { SpecialButton } from '../../ui/components/SpecialButton'
import { LogoNavbar } from './LogoNavbar'

const buttonStyles = [{ key: 'fontSize', value: '10pt' }, { key: 'height', value: '40px' }]

export const NotAuthenticatedMenu = () => {
  const location = useLocation()
  const { pathname } = location

  return (
    <>
      <LogoNavbar />
      <SpecialButton component={ RouterLink } to={pathname === '/' ? '/auth/register' : '/'} extraStyles={buttonStyles}>
          {pathname === '/' ? 'Join us!' : 'Back Home'}
      </SpecialButton>
    </>
  )
}
