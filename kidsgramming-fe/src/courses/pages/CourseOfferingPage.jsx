
import { Navbar } from '../../navigation/views/Navbar'
import { CourseLayout } from '../../courses/layout/CourseLayout'
import { CourseFormLayout } from '../layout/CourseFormLayout'
import { CourseOfferingForm } from '../views/CourseOfferingForm'
import { usePagination } from '../../hooks/usePagination'
import { PaginationButtons } from '../../ui/components/PaginationButtons'
import { Waiting } from '../../ui/components/Waiting'
import { NothingToShow } from '../../ui/components/NothingToShow'

export const CourseOfferingPage = () => {
  const {
    data, maxPages, errorMessage,
    currentPage, setCurrentPage, loading
  } = usePagination({ page: 1, endpoint: 'courses?' })

  return (
    <>
      <Navbar />
      <CourseLayout>
        <CourseFormLayout title='Course Offering'>
          <>
            {Boolean(data.length) && !loading && <CourseOfferingForm courses={data}></CourseOfferingForm>}
            {!errorMessage && !data.length && !loading && <NothingToShow reason='No data to show' />}
            {errorMessage && !loading && <NothingToShow reason={ errorMessage } />}
            {loading && <Waiting />}
            <PaginationButtons currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} />
          </>
        </CourseFormLayout>
      </CourseLayout>
    </>
  )
}
