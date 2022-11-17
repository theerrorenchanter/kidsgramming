import Swal from 'sweetalert2'

export const registerCourse = course => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${course.title} has been registered`,
    showConfirmButton: false,
    timer: 1500
  })
}
