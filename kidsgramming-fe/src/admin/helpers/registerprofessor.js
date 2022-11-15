import Swal from 'sweetalert2'

export const registerProfessorSuccess = professor => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${professor.name} has been registered`,
    showConfirmButton: false,
    timer: 1500
  })
}
