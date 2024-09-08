import Swal from 'sweetalert2'

export const registerStudentSuccess = student => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${student.name} has been registered`,
    showConfirmButton: false,
    timer: 1500
  })
}
