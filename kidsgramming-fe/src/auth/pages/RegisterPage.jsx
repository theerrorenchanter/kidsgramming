import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Navbar } from '../../navigation/views/Navbar'
import { AuthLayout } from '../layout/AuthLayout'
import { RegisterForm } from '../views/RegisterForm'

const validations = Yup.object({
  name: Yup.string()
    .required('The name is required')
    .trim('The name must be trimmed'),
  country: Yup.string()
    .required('The country is required'),
  email: Yup.string()
    .required('The email is required')
    .email('Invalid email format')
    .trim('The email must be trimmed'),
  username: Yup.string()
    .required('The username is required')
    .trim('The username must be trimmed')
    .lowercase('The username must be lowercase')
    .matches(/^[a-zA-Z0-9]+$/, 'The username cannot contain white space and special character'),
  password: Yup.string()
    .required('Password is required')
})

export const RegisterPage = () => {
  const authForm = useFormik({
    initialValues: {
      name: '',
      country: '',
      email: '',
      username: '',
      password: ''
    },
    validationSchema: validations,
    onSubmit: values => {

    }
  })
  return (
    <>
      <Navbar />
      <AuthLayout>
        <RegisterForm authForm={authForm} />
      </AuthLayout>
    </>
  )
}
