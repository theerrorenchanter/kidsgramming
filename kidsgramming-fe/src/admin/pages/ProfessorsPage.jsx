import { useFormik } from 'formik'
import * as Yup from 'yup'
import { registerProfessorWithUsernamePassword } from '../../api/admin/adminAPI'
import { AuthLayout } from '../../auth/layout/AuthLayout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { Navbar } from '../../navigation/views/Navbar'
import { registerProfessorSuccess } from '../helpers/registerprofessor'
import { RegisterProfessorForm } from '../views/RegisterProfessorForm'
import { a11yProps, TabPanel } from '../../ui/components/TabPanel'
import { useState } from 'react'
import { Container } from '@mui/material'

const validations = Yup.object({
  name: Yup.string()
    .required('The name is required')
    .trim('The name must be trimmed'),
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

export const ProfessorsPage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const authForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: ''
    },
    validationSchema: validations,
    onSubmit: values => {
      authForm.setFieldValue('loading', true)
      registerProfessorWithUsernamePassword(values).then(res => {
        const { professor, errorMessage } = res
        errorMessage ? authForm.setFieldValue('errorMessage', errorMessage) : registerProfessorSuccess(professor)
        authForm.setFieldValue('loading', false)
        authForm.setSubmitting(false)
      })
    }
  })
  return (
    <>
      <Navbar />
        <Container sx={{ mt: 4 }} maxWidth="false">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="professors managment tabs">
              <Tab label="Registering" {...a11yProps(0)} />
              <Tab label="Listing" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AuthLayout >
              <RegisterProfessorForm authForm={authForm} />
            </AuthLayout>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Container>
    </>
  )
}
