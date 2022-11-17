import { AuthLayout } from '../../auth/layout/AuthLayout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { Navbar } from '../../navigation/views/Navbar'
import { a11yProps, TabPanel } from '../../ui/components/TabPanel'
import { useState } from 'react'
import { Container } from '@mui/material'
import { NothingToShow } from '../../ui/components/NothingToShow'
import { Waiting } from '../../ui/components/Waiting'
import { usePagination } from '../../hooks/usePagination'
import { CourseLayout } from '../../courses/layout/CourseLayout'
import { CourseFormLayout } from '../../courses/layout/CourseFormLayout'
import { CourseOfferingForm } from '../../courses/views/CourseOfferingForm'
import { PaginationButtons } from '../../ui/components/PaginationButtons'

export const StudentHome = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const {
    data, maxPages, errorMessage,
    currentPage, setCurrentPage, loading
  } = usePagination({ page: 1, endpoint: 'courses?' })

  return (
     <>
      <Navbar />
        <Container sx={{ mt: 4 }} maxWidth="false">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="professors managment tabs">
              <Tab label="Courses" {...a11yProps(0)} />
              <Tab label="My Courses" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CourseLayout>
                <CourseFormLayout CourseFormLayout title='Course Offering'>
                    {Boolean(data.length) && !loading && <CourseOfferingForm courses={data} />}
                    {!errorMessage && !data.length && !loading && <NothingToShow reason='No data to show' />}
                    {errorMessage && !loading && <NothingToShow reason={ errorMessage } />}
                    {loading && <Waiting />}
                    {Boolean(data.length) && !loading && <PaginationButtons
                    currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} />}
                </CourseFormLayout>
            </CourseLayout>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AuthLayout >

            </AuthLayout>
          </TabPanel>
        </Container>
    </>
  )
}
