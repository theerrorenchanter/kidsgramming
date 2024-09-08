import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AuthLayout } from '../../auth/layout/AuthLayout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { Navbar } from '../../navigation/views/Navbar'
import { registerStudentSuccess } from '../helpers/registerstudent'
import { a11yProps, TabPanel } from '../../ui/components/TabPanel'
import { useState } from 'react'
import { Container } from '@mui/material'
import { registerStudentWithUsernamePassword } from '../../api/sponsor/sponsorAPI'
import { RegisterStudentForm } from '../views/RegisterStudentForm'

const validations = Yup.object({
  name: Yup.string()
    .required('The name is required')
    .trim('The name must be trimmed'),
  username: Yup.string()
    .required('The username is required')
    .trim('The username must be trimmed')
    .lowercase('The username must be lowercase')
    .matches(/^[a-zA-Z0-9]+$/, 'The username cannot contain white spaces and special characters'),
  password: Yup.string()
    .required('Password is required')
})

export const StudentsPage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const authForm = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: ''
    },
    validationSchema: validations,
    onSubmit: values => {
      authForm.setFieldValue('loading', true)
      registerStudentWithUsernamePassword(values).then(res => {
        const { student, errorMessage } = res
        errorMessage ? authForm.setFieldValue('errorMessage', errorMessage) : registerStudentSuccess(student)
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
            <Tabs value={value} onChange={handleChange} aria-label="students management tabs">
              <Tab label="Registering" {...a11yProps(0)} />
              <Tab label="Listing" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AuthLayout >
              <RegisterStudentForm authForm={authForm} />
            </AuthLayout>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Container>
    </>
  )
}
