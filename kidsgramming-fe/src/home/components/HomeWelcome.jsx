import { Typography } from '@mui/material'

const subtitleStyles = {
  background: '-webkit-linear-gradient(45deg, #7722e7 30%, #FF8E53 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textTransform: 'uppercase',
  fontFamily: 'monospace',
  fontSize: 50,
  letterSpacing: 3,
  fontWeight: 700,
  color: 'primary.main'
}

const titleStyles = { textTransform: 'uppercase', fontFamily: 'monospace', fontWeight: 'bold', fontSize: 25, letterSpacing: 5 }

export const HomeWelcome = () => {
  return (
    <>
      <Typography component='h1' sx={titleStyles}>Kidsgramming</Typography>
      <Typography mt={1} component='h2' sx={ subtitleStyles }>Your kids are our future</Typography>
      <Typography mt={ 2 } variant='body1' sx={{ fontSize: 20, fontStyle: 'italic', color: 'grey.600' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
    </>
  )
}
