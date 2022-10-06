import Box from '@mui/material/Box'
import { Image } from 'mui-image'

export const HomeImageView = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'none', lg: 'block', width: '80%' } }}>
        <Image src='/home/img/home.png' shift='left' duration={500} />
    </Box>
  )
}
