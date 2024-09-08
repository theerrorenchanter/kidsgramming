import { AuthLayout } from '../../auth/layout/AuthLayout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { Navbar } from '../../navigation/views/Navbar'
import { a11yProps, TabPanel } from '../../ui/components/TabPanel'
import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { CreateSectionForm } from '../views/CreateSectionForm'
import { useParams } from 'react-router-dom'
import { NothingToShow } from '../../ui/components/NothingToShow'
import { Waiting } from '../../ui/components/Waiting'
import { getCourse } from '../../api/professor/professorAPI'
import { CreateVideoForm } from '../views/CreateVideoForm'

export const SectionsPage = () => {
  const { courseId } = useParams()
  const [value, setValue] = useState(0)
  const [course, setCourse] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCourse(courseId).then(res => {
      setCourse(res.course)
      setErrorMessage(res.errorMessage)
      setLoading(false)
    })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
     <>
      <Navbar />
        <Container sx={{ mt: 4 }} maxWidth="false">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="professors managment tabs">
              <Tab label="Create Section" {...a11yProps(0)} />
              <Tab label="Create Videos" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AuthLayout >
              {Boolean(course) && !loading && <CreateSectionForm courseId={courseId}/>}
              {!errorMessage && !course && !loading && <NothingToShow reason='This Course does not exist' />}
              {errorMessage && !loading && <NothingToShow reason={ errorMessage } />}
              {loading && <Waiting />}
            </AuthLayout>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AuthLayout >
              {Boolean(course) && !loading && <CreateVideoForm courseId={courseId}/>}
              {!errorMessage && !course && !loading && <NothingToShow reason='This Course does not exist' />}
              {errorMessage && !loading && <NothingToShow reason={ errorMessage } />}
              {loading && <Waiting />}
            </AuthLayout>
          </TabPanel>
        </Container>
    </>
  )
}
