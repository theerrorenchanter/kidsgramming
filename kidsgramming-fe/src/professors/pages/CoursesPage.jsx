import { AuthLayout } from '../../auth/layout/AuthLayout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { Navbar } from '../../navigation/views/Navbar'
import { a11yProps, TabPanel } from '../../ui/components/TabPanel'
import { useState } from 'react'
import { Container } from '@mui/material'
import { CreateCourseForm } from '../views/CreateCourseForm'

export const CoursesPage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
                <CreateCourseForm />
            </AuthLayout>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Container>
    </>
  )
}
