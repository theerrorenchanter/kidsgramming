
import { HomeLayout } from '../layout/HomeLayout'
import { Navbar } from '../../navigation/views/Navbar'
import { InitialDescriptionView } from '../views/InitialDescriptionView'
import { HomeImageView } from '../views/HomeImageView'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <InitialDescriptionView />
        <HomeImageView />
      </HomeLayout>
    </>
  )
}
