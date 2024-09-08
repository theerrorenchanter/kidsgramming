import { Paper, Typography } from '@mui/material'
import { InfoButtons } from './InfoButtons'

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

const titleStyles = {
  textTransform: 'uppercase',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: 30,
  letterSpacing: 5
}

const descriptionStyles = {
  fontSize: 20,
  fontStyle: 'italic',
  color: 'grey.600'
}

const paperContainerStyles = {
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

export const HomeWelcome = () => {
  return (
    <Paper elevation={4} sx={paperContainerStyles}>
      <Typography component='h1' sx={titleStyles}>Kidsgramming</Typography>
      <Typography mt={1} component='h2' sx={ subtitleStyles }>Your kids are our future</Typography>
      <Typography mt={2} variant='body1' sx={descriptionStyles}>Kidsgramming is an educational platform where children from 8 to 12 years old can embark on an incredible adventure towards topics that will contribute to their personal and professional development.</Typography>
      <InfoButtons />
    </Paper>
  )
}
