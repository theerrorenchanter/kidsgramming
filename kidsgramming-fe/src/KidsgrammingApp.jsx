import { Navbar } from './navigation/views/Navbar'
import { AppTheme } from './theme/AppTheme'
import { SpecialButton } from './ui/components/SpecialButton'

export const KidsgrammingApp = () => {
  return (
    <AppTheme>
      <Navbar />
      <SpecialButton>Hola</SpecialButton>
    </AppTheme>
  )
}
