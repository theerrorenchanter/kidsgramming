import { Image } from 'mui-image'

import { HomeLayout } from '../layout/HomeLayout'
import { Navbar } from '../../navigation/views/Navbar'
import { HomeItemLayout } from '../layout/HomeItemLayout'
import { Paper } from '@mui/material'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <HomeItemLayout component={ Paper } elevation={ 1 } sx={{ width: '75%', height: '75%' }}>
          asdas
        </HomeItemLayout>
        <Image src='/home/img/home.png' sx={{ width: '50%' }} />
      </HomeLayout>
    </>

  )
}
