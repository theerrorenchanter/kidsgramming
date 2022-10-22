
import { Navbar } from '../../navigation/views/Navbar'
import { AuthLayout } from '../layout/AuthLayout'
import { AuthCourseLayout } from '../layout/AuthCourseLayout'
import { CourseOfferingForm } from '../views/CourseOfferingForm'


export const CourseOfferingPage = () => {

  return (
    <>
      <Navbar />
      <AuthLayout>
        <AuthCourseLayout title='Course Offering'>
            <CourseOfferingForm></CourseOfferingForm>
        </AuthCourseLayout>
      </AuthLayout>
    </>
  )
}
