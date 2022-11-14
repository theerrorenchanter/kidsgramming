import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link as RouterLink } from 'react-router-dom'

export const InfoButtons = () => {
  return (
    <Box pt={8} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' size='large' sx={{ mr: 1 }}>Contact</Button>
        <Button variant='contained' size='large'
           component={ RouterLink } to={'suscriptions'}>Pricing</Button>
        <Button variant='contained' size='large' sx={{ ml: 1 }}>About</Button>
        <Button variant='contained' size='large' sx={{ ml: 1 }}
           component={ RouterLink } to={'courses/offering'}>Course Offering
        </Button>
        <Button variant='contained' size='large' sx={{ ml: 1 }}
           component={ RouterLink } to={'admin/home'}>Admin
        </Button>
        <Button variant='contained' size='large' sx={{ ml: 1 }}
           component={ RouterLink } to={'student/home'}>Estudiante
        </Button>
    </Box>
  )
}
