
import { Navbar } from '../../navigation/views/Navbar'
import { CourseLayout } from '../../course_offering/layout/CourseLayout'
import { CourseFormLayout } from '../layout/CourseFormLayout'
import { CourseOfferingForm } from '../views/CourseOfferingForm'


export const CourseOfferingPage = () => {

  return (
    <>
      <Navbar />
      <CourseLayout>
        <CourseFormLayout title='Course Offering'>
            <CourseOfferingForm></CourseOfferingForm>
        </CourseFormLayout>
      </CourseLayout>
    </>
  )
}
