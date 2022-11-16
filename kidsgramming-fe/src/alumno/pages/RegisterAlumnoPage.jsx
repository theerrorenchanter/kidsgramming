import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { RegisterAlumnoForm } from '../views/RegisterAlumnoForm'
import { Navbar } from '../../navigation/views/Navbar'
import { AuthLayout } from '../layout/AuthLayout'


const validations = Yup.object({
  name: Yup.string()
    .required('The name is required')
    .trim('The name must be trimmed'),
  username: Yup.string()
    .required('The username is required')
    .trim('The username must be trimmed')
    .lowercase('The username must be lowercase')
    .matches(/^[a-zA-Z0-9]+$/, 'The username cannot contain white space and special character'),
  password: Yup.string()
    .required('Password is required')
})

export const RegisterAlumnoPage = () => {
  const dispatch = useDispatch()

  const authForm = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: ''
    }
  })
  return (
    <>
      <Navbar />
      <AuthLayout>
        <RegisterAlumnoForm authForm={authForm}/>
      </AuthLayout>
    </>
  )
}
