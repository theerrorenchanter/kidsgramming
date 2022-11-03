import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useDispatch } from 'react-redux'

import { Navbar } from '../../navigation/views/Navbar'
import { AuthLayout } from '../layout/AuthLayout'
import { LoginForm } from '../views/LoginForm'
import { startUsernamePasswordLogin } from '../../store/auth/authThunks'

const validations = Yup.object({
  sponsor: Yup.string()
    .lowercase('The sponsor must be lowercase')
    .trim('The sponsor must be trimmed')
    .matches(/^[a-zA-Z0-9]+$/, 'The sponsor cannot contain white space and special character'),
  username: Yup.string()
    .required('The username is required')
    .trim('The username must be trimmed')
    .lowercase('The username must be lowercase')
    .matches(/^[a-zA-Z0-9]+$/, 'The sponsor cannot contain white space and special character'),
  password: Yup.string()
    .required('The password is required')
})

export const LoginPage = () => {
  const dispatch = useDispatch()

  const authForm = useFormik({
    initialValues: {
      sponsor: '',
      username: '',
      password: ''
    },
    validationSchema: validations,
    onSubmit: values => {
      const { sponsor } = values
      sponsor === '' ? values.sponsor = null : values.sponsor = sponsor
      dispatch(startUsernamePasswordLogin(values))
    }
  })
  return (
    <>
      <Navbar />
      <AuthLayout>
        <LoginForm authForm={authForm} />
      </AuthLayout>
    </>
  )
}
