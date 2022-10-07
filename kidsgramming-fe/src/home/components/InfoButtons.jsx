import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export const InfoButtons = () => {
  return (
    <Box pt={8} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' size='large' sx={{ mr: 1 }}>Contact</Button>
        <Button variant='contained' size='large'>Pricing</Button>
        <Button variant='contained' size='large' sx={{ ml: 1 }}>About</Button>
    </Box>
  )
}
