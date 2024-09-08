import SchoolIcon from '@mui/icons-material/School'
import Typography from '@mui/material/Typography'

import {
  brandNameStylesSm,
  brandStylesSm
} from '../styles/navigation'

export const LogoNavbar = () => {
  return (
      <>

        <SchoolIcon sx={ brandStylesSm } />
        <Typography
            variant="span"
            noWrap
            component="a"
            href=""
            sx={ brandNameStylesSm } >
            Kidsgramming
        </Typography>
    </>
  )
}
