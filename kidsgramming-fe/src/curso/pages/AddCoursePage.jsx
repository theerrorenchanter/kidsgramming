import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { Navbar } from '../../navigation/views/Navbar'
import { startCreatingUserWithUsernamePassword, startLogout } from '../../store/auth/authThunks'
import { AuthLayout } from '../layout/AuthLayout'
import { AddCourse } from '../views/AddCourse'

const validations = Yup.object({
  name: Yup.string()
    .required('The name is required')
    .trim('The name must be trimmed'),
  description: Yup.string()
    .required('The description is required')
    .trim('The description must be trimmed'),
  video: Yup.string()
    .required('The video is required')
    .trim('The video must be trimmed')
})

export const RegisterPage = () => {
  const dispatch = useDispatch()

  const authForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      video: ''
    }/*,
    validationSchema: validations,
    onSubmit: values => {
      dispatch(startCreatingUserWithUsernamePassword(values))
    }*/
  })
  return (
    <>
      <Navbar />
      <AuthLayout>
        <AddCourse authForm={authForm} />
      </AuthLayout>
    </>
  )
}
